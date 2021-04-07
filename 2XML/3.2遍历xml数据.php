<?php
//使用foreach或者for循环
$xml=simplexml_load_file('3-2.xml');
//返回的是对象,使用的是数组形式
/**
 *  object(SimpleXMLElement)#1 (2) {
 *      ["man"]=>
 *      array(2) {
 *          [0]=>
 *          object(SimpleXMLElement)#2 (2) {
 *              ["name"]=>
 *              string(6) "小明"
 *              ["age"]=>
 *              string(2) "36"
 *              }
 *          [1]=>
 *          object(SimpleXMLElement)#3 (2) {
 *              ["name"]=>
 *              string(6) "小黑"
 *              ["age"]=>
 *              string(2) "33"
 *          }
 *      }
 *      ["woman"]=>
 *      object(SimpleXMLElement)#4 (2) {
 *          ["name"]=>
 *          string(6) "小红"
 *          ["age"]=>
 *          string(2) "15"
 *      }
 *  }
 */

foreach($xml->man as $value){
    echo $value->name."<br>";
}
//小明
//小黑
echo "<hr>";
$count=count($xml->man);
for($i=0;$i<$count;$i++){
    echo $xml->man[$i]->name."<br>";
    echo $xml->man[$i]->age."<br>";
}
//小明
//36
//小黑
//33

echo $xml->woman->name."<br>";
echo $xml->woman->age."<br>";
//小红
//15