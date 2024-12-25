<?php
session_start();
use Andre\Server\Controllers\AuthController;
use Andre\Server\Controllers\LikesController;
use Andre\Server\Controllers\RecommendationController;
use Andre\Server\Controllers\ChatController;
use Andre\Server\Controllers\UserController;


require_once '../vendor/autoload.php';
require_once __DIR__ . '/database/database.php';
require_once __DIR__ . '/models/authDTO.php';
require_once __DIR__ . '/models/likeDTO.php';
require_once __DIR__ . '/models/recommendationDTO.php';
require_once __DIR__ . '/controllers/user.php';
require_once __DIR__ . '/controllers/auth.php';
require_once __DIR__ . '/controllers/recommender.php';
require_once __DIR__ . '/controllers/chat.php';
require_once __DIR__ . '/controllers/like.php';

Flight::route('OPTIONS *', function() {
    header('Access-Control-Allow-Origin: *'); 
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE'); 
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
    exit;
});


Flight::before('start', function () {
    header('Access-Control-Allow-Origin: *'); 
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE'); 
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
});


Flight::route('GET /api/v1/user', [UserController::class, 'getUser']);
Flight::route('PUT /api/v1/user', [UserController::class, 'updateUser']);
Flight::route('POST /api/v1/login', [AuthController::class, 'login']);
Flight::route('POST /api/v1/register', [AuthController::class, 'register']);
Flight::route('POST /api/v1/logout', [AuthController::class, 'logout']);
Flight::route('GET /api/v1/likes', [LikesController::class, 'getLikesReceived']);
Flight::route('POST /api/v1/likes', [LikesController::class, 'likeUser']);
Flight::route('GET /api/v1/recommend', [RecommendationController::class, 'recommend']);
Flight::route('GET /api/v1/chats', [ChatController::class, 'getChats']);
Flight::route('POST /api/v1/messages', [ChatController::class, 'sendMessage']);
Flight::route('GET /api/v1/messages', [ChatController::class, 'getMessages']);
Flight::route('GET /api/v1/messages/unreceived', [ChatController::class, 'getUnreceivedMessages']);


Flight::start();

