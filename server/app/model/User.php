<?php
class User {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function register($name, $surname, $age, $gender, $avatar, $interests, $about, $password) {
        $passwordHash = password_hash($password, PASSWORD_DEFAULT);
        $sql = "INSERT INTO users (name, surname, age, gender, avatar, interests, about, password) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$name, $surname, $age, $gender, $avatar, $interests, $about, $passwordHash]);
    }

    public function login($email, $password) {
        $sql = "SELECT * FROM users WHERE email = ?";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$email]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($password, $user['password'])) {
            return $user;
        }

        return false;
    }

    public function updateProfile($userId, $name, $surname, $age, $gender, $avatar, $interests, $about) {
        $sql = "UPDATE users SET name = ?, surname = ?, age = ?, gender = ?, avatar = ?, interests = ?, about = ? 
                WHERE id = ?";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$name, $surname, $age, $gender, $avatar, $interests, $about, $userId]);
    }

    public function getUserById($userId) {
        $sql = "SELECT * FROM users WHERE id = ?";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$userId]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
}
