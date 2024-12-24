<?php

namespace Andre\Server\Controllers;

use Andre\Server\Models\LikesDTO;
use Flight;

class LikesController {
    public static function getLikes() {
        if (empty($_SESSION['user']['id'])) {
            Flight::json(['msg' => 'Unauthorized'], 401);
            return;
        }

        $currentUserId = $_SESSION['user']['id'];
        $db = Flight::get('db');

        $likedByMe = $db->select('Likes', [
            '[>]User' => ['liked_user_id' => 'id']
        ], [
            'User.id',
            'User.name',
            'User.surname',
            'User.avatar',
            'User.about'
        ], [
            'Likes.user_id' => $currentUserId
        ]);

        $likedMe = $db->select('Likes', [
            '[>]User' => ['user_id' => 'id']
        ], [
            'User.id',
            'User.name',
            'User.surname',
            'User.avatar',
            'User.about'
        ], [
            'Likes.liked_user_id' => $currentUserId
        ]);

        $response = new LikesDTO($likedByMe, $likedMe);
        Flight::json($response->toArray(), 200);
    }
}
