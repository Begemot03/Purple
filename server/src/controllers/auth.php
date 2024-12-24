<?php
namespace Andre\Server\Controllers;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Andre\Server\Models\AuthDTO;
use Flight;

class AuthController {
    private static $secretKey = 'your_secret_key'; // Замените на ваш секретный ключ

    public static function login() {
        $data = Flight::request()->data->getData();

        if (empty($data['email']) || empty($data['password'])) {
            Flight::json(['msg' => 'Invalid fields'], 400);
            return;
        }

        $db = Flight::get('db');
        $user = $db->get('User', '*', ['email' => $data['email']]);

        if (!$user || !password_verify($data['password'], $user['password'])) {
            Flight::json(['msg' => 'Invalid email or password'], 401);
            return;
        }

        $payload = [
            'id' => $user['id'],
            'email' => $user['email'],
            'iat' => time(),
            'exp' => time() + (60 * 60)
        ];

        $token = JWT::encode($payload, self::$secretKey, 'HS256');

        $response = new AuthDTO($user);
        Flight::json(['token' => $token, 'user' => $response->toArray()], 200);
    }

    public static function register() {
        $data = Flight::request()->data->getData();

        $requiredFields = ['name', 'surname', 'email', 'age', 'gender', 'interests', 'about', 'password'];
        foreach ($requiredFields as $field) {
            if (empty($data[$field])) {
                Flight::json(['msg' => 'Invalid fields'], 400);
                return;
            }
        }

        $db = Flight::get('db');

        $existingUser = $db->get('User', '*', ['email' => $data['email']]);
        if ($existingUser) {
            Flight::json(['msg' => 'User already exists'], 400);
            return;
        }

        $hashedPassword = password_hash($data['password'], PASSWORD_BCRYPT);

        $id = uniqid();
        $db->insert('User', [
            'id' => $id,
            'name' => $data['name'],
            'surname' => $data['surname'],
            'email' => $data['email'],
            'age' => $data['age'],
            'gender' => $data['gender'],
            'avatar' => $data['avatar'],
            'interests' => $data['interests'],
            'about' => $data['about'],
            'password' => $hashedPassword
        ]);

        $user = $db->get('User', '*', ['id' => $id]);
        $response = new AuthDTO($user);

        Flight::json($response->toArray(), 201);
    }

    public static function logout() {
        Flight::json(['msg' => 'Logged out successfully'], 200);
    }

    public static function authenticate() {
        $headers = getallheaders();
        if (!isset($headers['Authorization'])) {
            Flight::json(['msg' => 'Unauthorized'], 401);
            exit;
        }

        $token = str_replace('Bearer ', '', $headers['Authorization']);

        try {
            $decoded = JWT::decode($token, new Key(self::$secretKey, 'HS256'));
            return (array) $decoded;
        } catch (\Exception $e) {
            Flight::json(['msg' => 'Invalid token'], 401);
            exit;
        }
    }
}
