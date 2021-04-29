<?php
//获取传过来的值
$page = $_GET['page'];

//连接数据库
$link = mysqli_connect('localhost', 'root', 'root', 'mb', 3306);


//设置字符集
mysqli_query($link, 'set names utf8');

$sql = "select count(id) from mb_students1";
$res = mysqli_query($link, $sql);

//获取行数
$count = mysqli_fetch_row($res);    //mysqli_fetch_row 返回索引数组
//print_r($count[0]);    //31
$count = $count[0];

//每页条数
$psize = 5;
//计算总页数(要向上取整)
$pcount = ceil($count / $psize);
//echo "<hr>".$pcount;    //7

//页数  跳过  显示
//1     0     1-5
//2     5     6-10
//3     10    11-15
//4     15    16-20

//跳过的条数
$offset = ($page - 1) * $psize;

$sql = "select * from mb_students1 limit $offset,$psize";     //limit $offset,$psize  偏移值,数量
$res = mysqli_query($link, $sql);

$data = array();
while ($row = mysqli_fetch_assoc($res)) {
    $data[] = $row;
}

//生成json格式
$json = json_encode($data);
echo $json;


