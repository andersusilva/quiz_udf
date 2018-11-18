<?php
require_once 'mensagens.php';

//site specific configuration declartion
define( 'BASE_PATH', 'http://localhost/quiz_udf/');
define( 'DB_HOST', 'localhost' );
define( 'DB_USERNAME', 'root');
define( 'DB_PASSWORD', 'krow24');
define( 'DB_NAME', 'user_login');

function __autoload($class)
{
	$parts = explode('_', $class);
	$path = implode(DIRECTORY_SEPARATOR,$parts);
	require_once $path . '.php';
}