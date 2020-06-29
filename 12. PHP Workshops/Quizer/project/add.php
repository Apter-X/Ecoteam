<?php include "database.php"; ?>

<?php

    if(isset($_POST['submit'])){

        //getting value from the form with the method POST
        $question_num = $_POST["question_number"];
        $question_txt = $_POST["question_text"];

        //uncomment if you want to see the output
        /* echo $question_num;
        echo "<br>";
        echo $question_txt; */

        //getting choices //assoc array
        $choices = array();
        $choices[1] = $_POST["choice1"];
        $choices[2] = $_POST["choice2"];
        $choices[3] = $_POST["choice3"];
        $choices[4] = $_POST["choice4"];

        //print the assoc array
        print_r($choices);
        echo "<br>";

        //correct answer from the form
        $correct_answer = $_POST["correct_choice"];

        
        echo $correct_answer;
        echo "<br>";

        //query insertion
        $query = "INSERT INTO `questions` (question_id, Text) VALUES('$question_num','$question_txt')";
        $insert = $conn->query($query) or die($conn->error . __LINE__);


        if($insert){

            foreach($choices as $choice => $value){
    
                if($value != ''){

                    if ($correct_answer == $choice) {

                        $is_correct = 1;
                        
                    } else {

                        $is_correct = 0;

                    }

                    $query = "INSERT INTO `choice`(question_id, is_correct, text) VALUES ('$question_num','$is_correct','$value')";
                    $insert1 = $conn->query($query) or die($conn->error . __LINE__);

                    //we want to check if its correct = 1 or not correct = 0
                    if($insert1){

                        continue;

                    } else {

                        die('ERROR : (' . $conn->error . ') ' . $conn->error);

                    }
                }
            }
        }  
    }

    //update ui if data was added
    if($_POST){

        $message = "Question added!";  

    }
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <title>Quiz</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="css/style.css" rel="stylesheet">
</head>

<body>

    <header>

        <div class="container">
            <h1>ADD QUESTION</h1>

            <?php
            if (isset($message)) {

                echo '<p style="color:red">' . $message . '</p>';
                echo "<script>setTimeout(\"location.href = 'http://localhost/livenew/index.php';\",2000);</script>";
            }
            ?>
        </div>
    </header>

    <main>
        <form action="add.php" method="post">
            <p>
                <label>Question Number : </label>
                <input type="number" value="" name="question_number">
            </p>

            <p>
                <label>Question Text : </label>
                <input type="text" value="" name="question_text">
            </p>

            <p>
                <label>Choice 1 : </label>
                <input type="text" value="" name="choice1">
            </p>

            <p>
                <label>Choice 2 : </label>
                <input type="text" value="" name="choice2">
            </p>

            <p>
                <label>Choice 3 : </label>
                <input type="text" value="" name="choice3">
            </p>

            <p>
                <label>Choice 4 : </label>
                <input type="text" value="" name="choice4">
            </p>

            <p>
                <label>Correct answer : </label>
                <input type="number" value="" name="correct_choice">
            </p>
            <p>
                <input type="submit" value="submit" name="submit">
            </p>

        </form>

    </main>

    <footer>
        <div class="container">
            Copyright &copy; YOUCODE, PHP Quizzer
        </div>
    </footer>

    <script src="js/script.js"></script>

</body>

</html>