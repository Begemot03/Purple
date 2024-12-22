<?php
class UserController {
    private $userModel;

    public function __construct($userModel) {
        $this->userModel = $userModel;
    }

    public function register($data) {
        $this->userModel->register(
            $data['name'], 
            $data['surname'], 
            $data['age'], 
            $data['gender'], 
            $data['avatar'], 
            $data['interests'], 
            $data['about'], 
            $data['password']
        );
        echo json_encode(['message' => 'User registered successfully']);
    }

    public function login($data) {
        $user = $this->userModel->login($data['email'], $data['password']);
        if ($user) {
            echo json_encode(['message' => 'Login successful', 'user' => $user]);
        } else {
            echo json_encode(['message' => 'Invalid credentials']);
        }
    }

    public function updateProfile($userId, $data) {
        $this->userModel->updateProfile(
            $userId, 
            $data['name'], 
            $data['surname'], 
            $data['age'], 
            $data['gender'], 
            $data['avatar'], 
            $data['interests'], 
            $data['about']
        );
        echo json_encode(['message' => 'Profile updated successfully']);
    }
}