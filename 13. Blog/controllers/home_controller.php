<?php 

$allArticles = Articles::getAllArticles();
$allCategories = Categories::getAllCategories();
$lastArticle = Articles::getLastArticles();

$lastArticleleft = Articles::getLastArticles();
$lastArticleright = Articles::getLastArticles();


$about = About::getLast();
$abouts = About::getAll();

// debug(array_keys($abouts));
// debug($abouts[0]['title']);

// foreach($abouts as $index => $about){

//    echo $about['title'];
// }

// debug($about);
// exit;

//  debug(Articles::getLastArticles()); //Array into another array
//  exit;

// debug(Articles::getLastArticles(5));
// exit;
