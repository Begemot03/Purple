<?php
require_once 'config/Database.php';
require_once 'model/User.php';
require_once 'model/Message.php';
require_once 'controller/UserController.php';
require_once 'controller/ChatController.php';

$database = new Database();
$db = $database->getConnection();

$userModel = new User($db);
$messageModel = new Message($db);

$userController = new UserController(userModel: $userModel);
$chatController = new ChatController($messageModel);

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action'])) {
    $action = $_POST['action'];

    if ($action === 'register') {
        $userController->register($_POST);
    }
    if ($action === 'login') {
        $userController->login($_POST);
    }
    if ($action === 'updateProfile') {
        $userController->updateProfile($_POST['userId'], $_POST);
    }
    if ($action === 'sendMessage') {
        $chatController->sendMessage($_POST);
    }
    if ($action === 'getMessages') {
        $chatController->getMessages($_POST['userId1'], $_POST['userId2']);
    }
}
/*
curl -X POST http://localhost:8000/app/index.php  -d "action=register"  -d "name=Алексей"  -d "surname=Петров"  -d "age=30"  -d "gender=Мужской"  -d "avatar=https://example.com/avatar.jpg"  -d "interests=Фотография, путешествия"  -d "about=Люблю путешествовать и фотографировать."  -d "password=securepassword123"
*/