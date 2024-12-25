<?php


namespace Andre\Server\Controllers;

use Andre\Server\Models\RecommendationDTO;
use Flight;

class RecommendationController {

    public static function recommend() {
        $currentUserId = UserController::authenticate();
        $data = Flight::request()->query->getData();
        $offset = isset($data['offset']) ? (int)$data['offset'] : 0;
        $limit = isset($data['limit']) ? (int)$data['limit'] : 10;

        $db = Flight::get('db');

        $likedUsers = $db->select('Likes', 'liked_user_id', [
            'user_id' => $currentUserId
        ]);

        $users = $db->select('User', [
            'id',
            'name',
            'surname',
            'email',
            'age',
            'gender',
            'avatar',
            'interests',
            'about'
        ], [
            'id[!]' => array_merge([$currentUserId], $likedUsers),
            'LIMIT' => [$offset, $limit]
        ]);

        if (empty($users)) {
            Flight::json(['data' => array()], 200);
            return;
        }

        $response = new RecommendationDTO($users);

        Flight::json($response->toArray(), 200);
    }
}