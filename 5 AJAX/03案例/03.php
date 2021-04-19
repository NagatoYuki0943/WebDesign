<?php
//获取客户端数据
$name = $_GET['name'];

//连接数据库
$link = mysqli_connect('localhost', 'root', 'root', 'mb', 3306);


//设置字符集
mysqli_query($link, 'set names utf8');

$sql = "select * from mb_students1 where name='$name'";
$res = mysqli_query($link,$sql);
//echo "<pre>";
//var_dump($res);
/**
 * 有同名的情况
 * object(mysqli_result)#2 (5) {
 *     ["current_field"]=>
 *     int(0)
 *     ["field_count"]=>
 *     int(6)
 *     ["lengths"]=>
 *     NULL
 *     ["num_rows"]=>   有同名 num_rows 为 0
 *     int(1)
 *     ["type"]=>
 *     int(0)
 * }
 */
/**
 *
 * object(mysqli_result)#2 (5) {
 *     ["current_field"]=>
 *     int(0)
 *     ["field_count"]=>
 *     int(6)
 *     ["lengths"]=>
 *     NULL
 *     ["num_rows"]=>  没有同名 num_rows 为 0
 *     int(0)
 *     ["type"]=>
 *     int(0)
 * }
 */
if($res->num_rows){
    //有人返回1
    echo 1;
}else{
    //没人返回0
    echo 0;
}