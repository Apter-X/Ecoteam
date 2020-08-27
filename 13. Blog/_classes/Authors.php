<?php

class Authors
{
    public $id;
    public $firstname;
    public $lastname;
    /**
     * Authors constructor.
     * @param $id
     */
    function __construct($id)
    {

        global $db;

        $id = str_secur($id);

        $reqAuthor = $db->fetch('SELECT * FROM authors WHERE id = ?', [$id],false);
        $data = $reqAuthor;

        $this->id = $id;
        $this->firstname = $data['firstname'];
        $this->lastname = $data['lastname'];
    }


    /**
     * Envoie de tous les auteurs
     * @return array
     */
    static function getAllAuthors()
    {

        global $db;

        $reqAuthors = $db->fetch('SELECT * FROM authors', [],true);
    
        return $reqAuthors;
    }
}
