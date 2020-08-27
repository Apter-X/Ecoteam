<?php
class Categories
{

    public $id;
    public $name;


    /**
     * Categories constructor.
     * @param $id
     */
    function __construct($id)
    {

        global $db;

        $id = str_secur($id);

        $reqCategory = $db->fetch('SELECT * FROM categories WHERE id = ?', [$id],false);
        $data = $reqCategory;

        $this->id = $id;
        $this->name = $data['name'];
    }


    /**
     * Envoie de toutes les catégories
     * @return array
     */
    static function getAllCategories()
    {

        global $db;

        $reqCategories = $db->fetch('SELECT * FROM categories', [],true);
        return $reqCategories;
    }
}
