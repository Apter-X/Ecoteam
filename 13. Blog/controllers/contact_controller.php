<?php 


// debug($_POST);
 if(!empty($_POST) && isset($_POST['send'])){


    if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message']))
    
    {
           if(!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['message'])){
             
            $name = str_secur($_POST['name']);
            $email = str_secur($_POST['email']);
            $message = str_secur($_POST['message']);

            $message .= ' - email envoyé par : '.  $name . ' : '. $email;
          
            
            //Envoyer un email 
            mail('tijani.idrissi.abdellatif@gmail.com','Mail Contact',$message);
            debug($message);
              
           }
           else{

            $error = "You must fill all the required areas !!";
             
           }
    }

    else{

        $error = "Something were wrong !!";
    }
   
}