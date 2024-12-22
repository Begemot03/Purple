<?php
class Message {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function sendMessage($senderId, $receiverId, $content) {
        $sql = "INSERT INTO messages (sender_id, receiver_id, content, timestamp) 
                VALUES (?, ?, ?, NOW())";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$senderId, $receiverId, $content]);
    }

    public function getMessages($userId1, $userId2) {
        $sql = "SELECT * FROM messages WHERE (sender_id = ? AND receiver_id = ?) OR (sender_id = ? AND receiver_id = ?) 
                ORDER BY timestamp ASC";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$userId1, $userId2, $userId2, $userId1]);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}

