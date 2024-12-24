<?php

namespace Andre\Server\Controllers;

use Andre\Server\Models\RecommendationDTO;
use Flight;

class RecommendationController {
    public static function recommend() {
        $data = Flight::request()->query->getData();

        if (empty($_SESSION['user']['id'])) {
            Flight::json(['msg' => 'Unauthorized'], 401);
            return;
        }

        $currentUserId = $_SESSION['user']['id'];
        $offset = isset($data['offset']) ? (int)$data['offset'] : 0;
        $limit = isset($data['limit']) ? (int)$data['limit'] : 10;

        $db = Flight::get('db');

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
            'id[!]' => $currentUserId,
            'LIMIT' => [$offset, $limit]
        ]);

        if (empty($users)) {
            Flight::json(['msg' => 'No recommendations available'], 404);
            return;
        }

        $response = new RecommendationDTO($users);
        Flight::json($response->toArray(), 200);
    }
}
