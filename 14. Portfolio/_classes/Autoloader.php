<?php
class Autoloader
{
static function load()
    {
        spl_autoload_register(function ($class){
            include_once '_classes/'.$class.'.php';
        });
    }
}
