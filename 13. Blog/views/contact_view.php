<!DOCTYPE html>
<html>

<head>

    <?php include_once 'views/includes/head.php' ?>
    <title><?= ucfirst($page); ?> - My Blog</title>

</head>

<body>
    <div class="container">
        <?php //include_once 'views/includes/header.php'; 
        ?>
    </div>

   
    <main role="main" class="container">

        <form name="myForm" action="" method="post" onsubmit="return validateForm()">
            <table class="form-style">
                <tr>
                    <td>
                        <label>
                            <?= $lang->contact->name?> <span class="required">*</span>
                        </label>
                    </td>
                    <td>
                        <input type="text" name="name" class="long" />
                        <span class="error" id="errorname"></span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            Your Email <span class="required">*</span>
                        </label>
                    </td>
                    <td>
                        <input type="email" name="email" class="long" />
                        <span class="error" id="erroremail"></span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            Message <span class="required">*</span>
                        </label>
                    </td>
                    <td>
                        <textarea name="message" class="long field-textarea"></textarea>
                        <span class="error" id="errormsg"></span>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>

                        <button type="submit" name="send">Send</button>
                        <button type="reset">Reset</button>
                    </td>
                </tr>
            </table>
        </form>

    </main><!-- /.container -->

    <?php //include_once 'views/includes/footer.php'; 
    ?>

</body>

</html>