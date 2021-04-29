<?php
$x=simplexml_load_file('4-1.xml');
//php中直接可以使用xpath方法,直接写路径即可,


//1 绝对路径
echo "绝对路径"."<br>";
$d=$x->xpath('/root/man/name');
echo "<pre>";
var_dump($d);
/**
 * 返回的是数组,数组里面是对象
 * array(2) {
 *     [0]=>
 *     object(SimpleXMLElement)#2 (1) {
 *         [0]=>
 *         string(6) "小明"
 *     }
 *     [1]=>
 *     object(SimpleXMLElement)#3 (1) {
 *         [0]=>
 *         string(6) "小黑"
 *     }
 * }
 */
//这样就可以输出了
foreach ($d as $v){
    //echo $v[0]."<br>";
    echo $v."<br>";     //[0]可以不用写
}
//小明
//小黑


//2 相对路径
echo "<hr>"."相对路径"."<br>";
$d=$x->xpath('//name'); //只要是name标签就提取
//var_dump($d);
$len=count($d);
for($i=0;$i<$len;$i++){
    echo $d[$i][0]."<br>";
}
//相对路径
//小明
//小黑
//小红
//2B
//9S


//3 * 匹配路径下所有标签
echo "<hr>"."使用 * 匹配所有节点"."<br>";
$d=$x->xpath("//man/*"); //获取名字叫man的标签下的所有内容
foreach ($d as $v){
    echo $v."<br>";
}
//小明
//36
//小黑
//133
$d=$x->xpath("//woman/*");
foreach ($d as $v){
    echo $v."<br>";
}
//小红
//15
//2B
//5999


//4 判断数据
echo "<hr>"."判断数据"."<br>";
$d=$x->xpath("//man[age<100]"); //获取年龄小于100的人

//var_dump($d);
/**
 * array(1) {
 *     [0]=>
 *     object(SimpleXMLElement)#11 (2) {    //查不到小黑,小黑的年龄大于100
 *         ["name"]=>
 *         string(6) "小明"
 *         ["age"]=>
 *         string(2) "36"
 *     }
 * }
 */
foreach ($d as $v){
    echo $v->name."<br>";
    echo $v->age."<br>";
}
//小明
//36

$d=$x->xpath("//man[last()]");  //获取最后一个man标签
echo $d[0]->name."<br>";
echo $d[0]->age."<br>";
//小黑
//133


//按照属性查找(查找的标签自己有属性才可以,子标签的属性不算)
echo "<hr>"."属性查找"."<br>";
$d=$x->xpath("//futa[@msg]");
var_dump($d);
/**
 * array(1) {
 *     [0]=>
 *     object(SimpleXMLElement)#8 (3) {
 *         ["@attributes"]=>
 *         array(1) {
 *             ["msg"]=>
 *             string(4) "fake"
 *         }
 *         ["name"]=>
 *         string(2) "9S"
 *         ["age"]=>
 *         string(4) "4999"
 *     }
 *  }
 */