<?php 

// $db = new PDO('mysql:host='.DB_HOST.';dbname='.DB_NAME.';charset=utf8',DB_USER,DB_PASS);

$db = new Database(DB_HOST,DB_NAME,DB_USER,DB_PASS);

//eviter les doublons de l'array qui contient les informations
$db->setFetchMode(PDO::FETCH_ASSOC);
// debug(Articles::getAllArticles());
// debug(About::getAll());
// debug(About::getLast());
// exit;


