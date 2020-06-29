<?php session_start(); ?>

<?php include "database.php"; ?>


<?php

    if(!isset($_SESSION["score"])){
        $score = $_SESSION["score"];

    }
        //// $select radio   /////   $score incrementation ////  $choice comparéson 
    //form post
    if($_POST){

        //select choices and url number
        $inc = $_POST["num"];
        $check = $inc + 1;

        //radio button
        $select = $_POST["choice"];

        //query questions
        $sql = "SELECT * from `questions`";
        $result = $conn->query($sql) OR die($conn->error .__LINE__);
        $total = $result->num_rows;

        // Selection of correct choices
        $sql1 = "SELECT * from `choice` WHERE question_id = $inc AND is_correct = 1";
        $result = $conn->query($sql1) OR die($conn->error .__LINE__);
        $choice = $result->fetch_assoc();

        // from db
        $correct = $choice["id"];

        if($correct == $select){
            
            //check if correct + incrementing score
            $_SESSION["score"]++;

        }

     if($inc == $total){

            header("Location: final.php");
            exit();

        }else{

            header("Location: question.php?n=$check");

        } 

    }





?>