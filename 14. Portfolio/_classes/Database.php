<?php
Class Database {
    private $db;
    private $rows;

    public function __construct()
    {
        try
        {
        $this->db = new PDO('mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8', DB_USER, DB_PASS);
        }
        catch(Exception $event)
        {
        die('Error : ' . $event->getMessage());
        }
    }

    /**
    * Execute an SQL query and return the result (prepared request or not)
    * @param string $request SQL query
    * @param array|null $values Optional values
    * @return PDOStatement
    */
    private function exec($request, $values = null)
    {
        global $connection;

        $req = $this->db->prepare($request);
        $req->execute($values);
        return $req;
    }
    
    /**
    * Execute an SQL query and return the status
    * @param string $request SQL query
    * @param array|null $values Optional values
    * @return bool Result of the request
    */
    public function execute($request, $values = array())
    {
        $results = self::exec($request, $values);
        return ($results) ? true : false;
    }

    /**
    * Execute an SQL query and return row(s) of the result
    * @param string $request SQL query
    * @param array|null $values Optional values
    * @param bool $all Query with several rows or not
    * @return array|mixed Return data
    */
    public function fetch($request, $values = null, $all = true)
    {
        $results = self::exec($request, $values);
        return ($all) ? $results->fetchAll() : $results->fetch();
    }

    /**
    * Fetch a unique value
    * @param string $target key
    * @param string $selected table
    * @param string $reference key
    * @param string|int $reference value
    * @return PDOStatement
    */
    public function fetchValue($refKey, $refValue)
    {
        $sql = <<<EOT
            SELECT content FROM files WHERE $refKey='$refValue'
        EOT;

        $this->db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        $response = $this->fetch($sql);

        $return = implode(array_values($response[0])); //Remove the array and the key
        return $return;
    }

    // public function getAll()
    // {
    //     $reqCategories = $this->db->prepare('SELECT * FROM categories');
    //     $reqCategories->execute();
    //     return $reqCategories->fetchAll(PDO::FETCH_ASSOC);
    // }
}
