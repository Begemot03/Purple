<?php
namespace Andre\Server\Models;

use Medoo\Medoo;
use Flight;

$db = new Medoo([
    'type' => 'mysql',
    'host' => 'localhost',
    'database' => 'pure',
    'username' => 'root',
    'password' => 'Begemot03',
    'charset' => 'utf8mb4',
]);

Flight::set('db', $db);

