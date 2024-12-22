<?php
class ChatController {
    private $messageModel;

    public function __construct($messageModel) {
        $this->messageModel = $messageModel;
    }

    public function sendMessage($data) {
        $this->messageModel->sendMessage(
            $data['senderId'],
            $data['receiverId'],
            $data['content']
        );
        echo json_encode(['message' => 'Message sent']);
    }

    public function getMessages($userId1, $userId2) {
        $messages = $this->messageModel->getMessages($userId1, $userId2);
        echo json_encode($messages);
    }
}

