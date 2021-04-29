<?php

// (1) PHP索引数组转为JSON数组形式JSON
$arr = array('1', '2', '3', '4', '5');
$j = json_encode($arr);
echo $j . "<br>";   //["1","2","3","4","5"]


// (2) PHP关联数组转为JSON对象形式JSON
$arr = array('name' => 'tom', 'age' => 'male');
$j = json_encode($arr);
echo $j . "<br>";   //{"name":"tom","age":"male"}


// (3) PHP对象转为JSON对象形式JSON
class CA
{
    public $name;
    public $sex;
    public $age;
    public function __construct($name, $sex, $age)
    {
        $this->name = $name;
        $this->sex = $sex;
        $this->age = $age;
    }
}
$ca = new CA('jerry', 'male', '15');
$j = json_encode($ca);
echo $j . "<br>";     //{"name":"jerry","sex":"male","age":"15"}