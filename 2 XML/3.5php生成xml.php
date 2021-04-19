<?php
$link = mysqli_connect('localhost', 'root', 'root', 'mb', 3306);
mysqli_query($link, 'set names utf8');

$sql = 'select * from mb_students1 limit 3';

$res = mysqli_query($link, $sql);

echo "<pre>";
//var_dump($res);
/**
 * object(mysqli_result)#2 (5) {
 *     ["current_field"]=>
 *     int(0)
 *     ["field_count"]=>
 *     int(6)
 *     ["lengths"]=>
 *     NULL
 *     ["num_rows"]=>
 *     int(3)
 *     ["type"]=>
 *     int(0)
 * }
 */
//xml根节点
$xml = '<root>';

//没有数据就不进循环了
while ($row = mysqli_fetch_assoc($res)) {
    //print_r($row);
    //拼接xml
    $xml .= '<student>';
    $xml .= '<id>' . $row['id'] . '</id>';
    $xml .= '<name>' . $row['name'] . '</name>';
    $xml .= '<sex>' . $row['sex'] . '</sex>';
    $xml .= '</student>';
}

$xml .= '</root>';

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
 *     [id] => 2
 *     [name] => 钱二
 *     [sex] => female
 *     [age] => 16
 *     [class] => 2
 *     [score] => 55
 * )
 * Array
 * (
 *     [id] => 3
 *     [name] => 孙三
 *     [sex] => male
 *     [age] => 16
 *     [class] => 2
 *     [score] => 88
 * )
 */
header('Content-type: text/xml');
echo $xml; 
//查看页面源代码 
/**
 * <root>
 *   <student>
 *     <id>1</id>
 *     <name>赵一</name>
 *     <sex>male</sex>
 *   </student>
 *   <student>
 *     <id>2</id>
 *     <name>钱二</name>
 *     <sex>female</sex>
 *   </student>
 *   <student>
 *     <id>3</id>
 *     <name>孙三</name>
 *     <sex>male</sex>
 *   </student>
 * </root>
 */