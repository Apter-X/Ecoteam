<?php

class About {

    public $id;
    public $title;
    public $word;

    function __construct($id)
    {

        global $db;

        $id = str_secur($id);

        $reqAbout = $db->fetch('
            SELECT * FROM about
        ', [$id], true);
        
        $data = $reqAbout;

        $this->id = $id;
        $this->title = $data['title'];
        $this->word = $data['word'];
       
    }


    static function getAll()
    {
        global $db;
        $req = $db->fetch('
             SELECT * FROM about
        ', [], true);
        return $req;
    }



    static function getLast()
    {

        global $db;
        $req = $db->fetch('
        SELECT title , word FROM about ORDER BY created LIMIT 1
        
        ',[],true);

        return $req;
    }



}