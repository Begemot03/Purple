<?php

namespace Andre\Server\Controllers;

use Flight;

class ChatController {
    public static function getChats() {
        $currentUserId = UserController::authenticate();
        $db = Flight::get('db');

        $chats = $db->select('Chats', [
            '[>]User(user1)' => ['user1_id' => 'id'],
            '[>]User(user2)' => ['user2_id' => 'id']
        ], [
            'Chats.id',
            'user1.id(user1_id)',
            'user1.name(user1_name)',
            'user2.id(user2_id)',
            'user2.name(user2_name)',
            'Chats.created_at'
        ], [
            'OR' => [
                'user1_id' => $currentUserId,
                'user2_id' => $currentUserId
            ]
        ]);

        Flight::json(['chats' => $chats], 200);
    }

    public static function sendMessage() {
        $currentUserId = UserController::authenticate();
        $data = Flight::request()->data->getData();

        if (empty($data['chat_id']) || empty($data['message'])) {
            Flight::json(['msg' => 'Chat ID and message are required'], 400);
            return;
        }

        $db = Flight::get('db');
        $chat = $db->get('Chats', '*', ['id' => $data['chat_id']]);

        if (!$chat) {
            Flight::json(['msg' => 'Chat not found'], 404);
            return;
        }

        $receiverId = $chat['user1_id'] === $currentUserId ? $chat['user2_id'] : $chat['user1_id'];

        $db->insert('Messages', [
            'chat_id' => $data['chat_id'],
            'sender_id' => $currentUserId,
            'receiver_id' => $receiverId,
            'message' => $data['message']
        ]);

        Flight::json(['msg' => 'Message sent'], 200);
    }

    public static function getMessages() {
        $currentUserId = UserController::authenticate();
        $data = Flight::request()->query->getData();

        if (empty($data['chat_id'])) {
            Flight::json(['msg' => 'Chat ID is required'], 400);
            return;
        }

        $db = Flight::get('db');

        $messages = $db->select('Messages', '*', [
            'chat_id' => $data['chat_id'],
            'OR' => [
                'sender_id' => $currentUserId,
                'receiver_id' => $currentUserId
            ],
            'ORDER' => ['sent_at' => 'ASC']
        ]);

        Flight::json(['messages' => $messages], 200);
    }

    public static function getUnreceivedMessages() {
        $currentUserId = UserController::authenticate();
        $data = Flight::request()->query->getData();

        if (empty($data['chat_id'])) {
            Flight::json(['msg' => 'Chat ID is required'], 400);
            return;
        }

        $db = Flight::get('db');

        $messages = $db->select('Messages', '*', [
            'chat_id' => $data['chat_id'],
            'receiver_id' => $currentUserId,
            'received' => false
        ]);

        $db->update('Messages', ['received' => true], [
            'chat_id' => $data['chat_id'],
            'receiver_id' => $currentUserId,
            'received' => false
        ]);

        Flight::json(['messages' => $messages], 200);
    }
}
