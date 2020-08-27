<?php
class Portfolio 
{
    public $id;
    public $name;

    function __construct($id)
    {
        global $connection;

        $id = str_secure($id);

        $reqCategories = $connection->prepare('SELECT * FROM categories WHERE id = ?');
        $reqCategories->execute([$id]);
        $data = $reqCategories->fetch();

        $this->id = $id;
        $this->name = $data['name'];
    }

    static function getAllCategories()
    {
        global $connection;
        $reqCategories = $connection->prepare('SELECT * FROM categories');
        $reqCategories->execute();
        return $reqCategories->fetchAll(PDO::FETCH_ASSOC);
    }
}