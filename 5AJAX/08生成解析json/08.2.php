<?php
$d = $_GET['d'];
//echo $d;

/**
 *   json_decode($json,true/false);      解析json
 *   参数是json字符串,返回值是对象或数组
 *   第二个参数是生成对象或者数组,默认false生成对象,true生成数组
 */
$data_arr = json_decode($d, true);
//var_dump($data_arr) ;
/** 
 * false
 * object(stdClass)#1 (3) {
 *     ["name"]=>
 *     string(9) "喜洋洋"
 *     ["sex"]=>
 *     string(4) "male"
 *     ["age"]=>
 *     string(2) "18"
 *     ["class"]=>
 *     string(1) "3"
 *     ["score"]=>
 *     string(3) "100"
 *   }
 * 
 * true
 * array(5) {
 *   ["name"]=>
 *   string(9) "喜洋洋"
 *   ["sex"]=>
 *   string(4) "male"
 *   ["age"]=>
 *   string(2) "18"
 *   ["class"]=>
 *   string(1) "3"
 *   ["score"]=>
 *   string(3) "100"
 * }
 */

$name = $data_arr['name'];
$sex = $data_arr['sex'];
$age = $data_arr['age'];
$class = $data_arr['class'];
$score = $data_arr['score'];

//连接数据库
$link = mysqli_connect('localhost', 'root', 'root', 'mb', 3306);
//设置字符集
mysqli_query($link, 'set names utf8');

$sql = "insert into mb_students1 values(null,'$name','$sex',$age,$class,$score);";

//echo $sql;  //insert into mb_students1 values(null,'喜洋洋','male',18,3,100);

//操作成功:返回新增自增长id
$res = mysqli_query($link, $sql);

if ($res) {
    echo 1;
} else {
    echo 0;
}
