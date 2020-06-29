<?php

include 'database.php';

if(isset($_POST["submit"])){
    //inputs wrapped
    $user = mysqli_real_escape_string($con, $_POST["user"]);
    $message = mysqli_real_escape_string($con, $_POST["message"]);

    date_default_timezone_get('Africa/Casablanca');
    $time = date("H:i:s",time());

    // validate inputs

    // handle error
    if(empty($user) || empty($message)){
        //use get to handle error?
        $error = "please fill the empty fields";
        header("Location: index.php?error=".urlencode($error)); /* Redirect browser */
        exit();

    } else {

        $sql1 = "INSERT INTO `shouts` (username, messages, text_time) VALUES ('$user', '$message', '$time')";
        $result = mysqli_query($con, $sql1);

        if(!$result){
            die('error '. mysqli_error($con));
        }

        header("Location: index.php");
        exit();
    }
}