<?php
//获取传过来的值
$key = $_GET['key'];

//连接数据库
$link = mysqli_connect('localhost', 'root', 'root', 'mb', 3306);


//设置字符集
mysqli_query($link, 'set names utf8');

$sql = "select * from mb_students1 where name like '%$key%'";
//echo $sql.'<hr>';
//echo "<pre>";
$res = mysqli_query($link, $sql);
//print_r($res);
/**
 * mysqli_result Object
 * (
 *     [current_field] => 0
 *     [field_count] => 6
 *     [lengths] => 
 *     [num_rows] => 3
 *     [type] => 0
 * )
 */
$data = array();
while ($arr = mysqli_fetch_assoc($res)) {
    //print_r($arr);
    $data[] = $arr;
}
$json = json_encode($data);
echo $json;
/**
 * Array
 * (
 *     [id] => 1
 *     [name] => 赵一
 *     [sex] => male
 *     [age] => 15
 *     [class] => 1
 *     [score] => 58
 * )
 * Array
 * (
 *     [id] => 11
 *     [name] => 褚十一
 *     [sex] => female
 *     [age] => 16
 *     [class] => 3
 *     [score] => 85
 * )
 * Array
 * (
 *     [id] => 21
 *     [name] => 何二十一
 *     [sex] => male
 *     [age] => 16
 *     [class] => 3
 *     [score] => 58
 * )
 */
