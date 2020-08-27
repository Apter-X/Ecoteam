<?php  
include_once '_classes/Autoloader.php';
Autoloader::load();

include_once '_config/config.php';
include_once '_helpers/functions.php';

$database = new Database;
$site = new Template;
$site->addHeader('views/includes/header.php');
$site->addFooter('views/includes/footer.php');

//definition page courante
if(isset($_GET['page']) AND !empty($_GET['page']))
{
  $page = trim(strtolower($_GET['page']));
} 
  else
{
  $page = 'home';
}

//definition d'un array qui comporte les dossier de la logique
$all_pages = scandir('controllers/');

if(in_array($page . '_controller.php', $all_pages))  
{
  include_once 'models/' . $page . '_model.php';
  include_once 'controllers/' . $page . '_controller.php';
  include_once 'views/' . $page . '_view.php';
} 
  else
{
  header("location:404.php");
}

