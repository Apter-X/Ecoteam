<?php

$host = "localhost";//URL hosting Cpanel
$username = "anassifi";
$password = "mizmaz01@";
$db = "quizzer";

$conn = new mysqli($host, $username, $password, $db);

//Check
if($conn->connect_error){
    die("Not working : " . $conn->connect_error);
}
// echo "Connected";

?>