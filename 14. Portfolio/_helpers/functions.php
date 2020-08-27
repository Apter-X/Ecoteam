<?php 

/**
 * 
 *  Formatting the error
 * 
 * @param [type] 
 * @return void
 */

function debug($var)
{
   echo '<pre>';
    var_dump($var);
   echo  '</pre>';
}

function str_secure($string)
{
    return trim(htmlspecialchars($string));
}