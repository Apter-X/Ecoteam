<?php session_start(); ?>

<?php include "database.php"; ?>


<?php

    $num = (int) $_GET["n"];
    $sql = "SELECT * FROM `questions` WHERE question_id = $num";
    $result = $conn->query($sql) OR die($conn->error .__LINE__);
    $question = $result->fetch_assoc();
    // print_r($question);
    $sql1 = "SELECT * FROM `choice` WHERE question_id = $num";
    $choice = $conn->query($sql1) OR die($conn->error .__LINE__);

    //get total questions
    $sql = "SELECT * FROM `questions`";
    $result = $conn->query($sql) OR die($conn->error .__LINE__);
    $numRow = $result->num_rows;

?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title>PHP Quizzer</title>
    <link rel="stylesheet" href="css/style.css" type="text/css" />
</head>

<body>
    <header>
        <div class="container">
            <h1>PHP Quizzer</h1>
        </div>
    </header>
    <main>
        <div class="container">
            <div class="current">Question <?php echo $question["question_id"]; ?> of <?php echo $numRow; ?></div>
            <p class="question">
                <?php echo $question["Text"]; ?>
            </p>
            <form method="post" action="process.php">
                <ul class="choices">
                    <?php
                        //Loop to print question choice
                        while($row = $choice->fetch_assoc()) :
                    
                    ?>
                    <li><input name="choice" type="radio" value="<?php echo $row["id"]; ?>" /><?php echo $row["text"]; ?></li>

                        <?php endwhile; ?>
                </ul>
                <input type="submit" value="Submit" name="submit" />
                <input type="hidden" name="num" value="<?= $num ?>">
            </form>
        </div>
    </main>
    <footer>
        <div class="container">
            Copyright &copy; YOUCODE, PHP Quizzer
        </div>
    </footer>
</body>

</html>