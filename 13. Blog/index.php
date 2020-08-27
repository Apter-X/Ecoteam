<?php
include_once '_config/config.php';
include_once '_functions/functions.php';
include_once '_classes/AutoLoader.php';
Autoloader::register();
include_once '_config/db.php';

//definition de la page courante
if(isset($_GET['page']) AND !empty($_GET['page'])){
   $page = trim(strtolower($_GET['page'])); //HOME

}
else {
$page = 'home';
}


$_SESSION['lang'] = getUserlanguage();
//  debug(getUserlanguage());

if($page === 'home'){
    $message = "welcome";
}
else{

    $message= "Get in touch";
}

//array contenant toutes les pages
$allpages = scandir('controllers/');
// var_dump($allpages);

if(in_array($page.'_controller.php',$allpages)){
   
    $lang = getPageLanguage($_SESSION['lang'],['header',$page,'footer']);
    //  debug($lang);
    //  exit;
    //inclusion de la page
    include_once 'models/'.$page.'_model.php';
    include_once 'controllers/' . $page . '_controller.php';
    include_once 'views/' . $page . '_view.php';
}else {
    //return error
    echo 'Erreur 404';
}


