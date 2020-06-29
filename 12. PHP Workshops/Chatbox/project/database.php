<?php

$localhost = "localhost";
$username = "root";
$password = "root";
$db = "chatbox";

$con = mysqli_connect($localhost, $username, $password, $db);

if(mysqli_connect_errno()) {
    echo "Failed connection: " . mysqli_connect_error();
    exit();
}


/* if($result){
    echo "working";
} else {
    echo "bug";
} */