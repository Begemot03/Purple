<?php
namespace Andre\Server\Controllers;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Flight;

class UserController {
    private static $secretKey = 'your_secret_key';

    private static function authenticate() {
        $headers = getallheaders();
        if (!isset($headers['Authorization'])) {
            Flight::json(['msg' => 'Unauthorized'], 401);
            exit;
        }

        $token = str_replace('Bearer ', '', $headers['Authorization']);
        try {
            $decoded = JWT::decode($token, new Key(self::$secretKey, 'HS256'));
            return $decoded->id; // ID пользователя из токена
        } catch (\Exception $e) {
            Flight::json(['msg' => 'Invalid or expired token'], 401);
            exit;
        }
    }

    public static function getUser() {
        $currentUserId = self::authenticate(); // Проверяем токен
        $db = Flight::get('db');

        $user = $db->get('User', '*', ['id' => $currentUserId]);

        if (!$user) {
            Flight::json(['msg' => 'User not found'], 404);
            return;
        }

        Flight::json(['user' => $user], 200);
    }

    public static function updateUser() {
        $currentUserId = self::authenticate(); // Проверяем токен
        $data = Flight::request()->data->getData();
        $db = Flight::get('db');

        // Проверка на наличие файла (например, для обновления аватара)
        if (!empty($_FILES['avatar'])) {
            $file = $_FILES['avatar'];
            $uploadDir = __DIR__ . "/../../uploads/";
            $fileName = uniqid() . "-" . basename($file['name']);
            $targetFile = $uploadDir . $fileName;

            if (!move_uploaded_file($file['tmp_name'], $targetFile)) {
                Flight::json(['msg' => 'Failed to upload avatar'], 500);
                return;
            }

            $data['avatar'] = "/uploads/$fileName";
        }

        // Обновляем данные пользователя
        $db->update('User', [
            'name' => $data['name'] ?? null,
            'surname' => $data['surname'] ?? null,
            'age' => $data['age'] ?? null,
            'gender' => $data['gender'] ?? null,
            'interests' => $data['interests'] ?? null,
            'about' => $data['about'] ?? null,
            'avatar' => $data['avatar'] ?? null,
        ], [
            'id' => $currentUserId
        ]);

        // Возвращаем обновлённые данные
        $user = $db->get('User', '*', ['id' => $currentUserId]);
        Flight::json(['msg' => 'Profile updated successfully', 'user' => $user], 200);
    }
}
