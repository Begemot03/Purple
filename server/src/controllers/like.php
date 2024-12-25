<?php

namespace Andre\Server\Controllers;

use Flight;

class LikesController {
    public static function likeUser() {
        $currentUserId = UserController::authenticate();
        $data = Flight::request()->data->getData();

        if (empty($data['liked_user_id'])) {
            Flight::json(['msg' => 'Liked user ID is required'], 400);
            return;
        }

        $db = Flight::get('db');

        $likedUserId = $data['liked_user_id'];

        $isMutual = $db->has('Likes', [
            'AND' => [
                'user_id' => $likedUserId,
                'liked_user_id' => $currentUserId
            ]
        ]);

        $db->insert('Likes', [
            'user_id' => $currentUserId,
            'liked_user_id' => $likedUserId
        ]);

        Flight::json([
            'msg' => 'Like saved',
            'mutual' => $isMutual
        ], 200);
    }

    public static function getLikesReceived() {
        $currentUserId = UserController::authenticate();
        $db = Flight::get('db');

        $likedMeUsers = $db->select('Likes', [
            '[>]User' => ['user_id' => 'id']
        ], [
            'User.id',
            'User.name',
            'User.surname',
            'User.avatar',
            'User.about',
            'User.age',
            'User.gender',
            'User.interests'
        ], [
            'Likes.liked_user_id' => $currentUserId
        ]);

        Flight::json(['likedMeUsers' => $likedMeUsers], 200);
    }
}
