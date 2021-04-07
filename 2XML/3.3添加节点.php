<?php
/**
 * 使用php写xml
 *
 */
$xml=simplexml_load_file('3-2.xml');

//插入的时候也必须按照xml节点来添加,可以添加新的标签
$woman=$xml->addChild('woman'); //添加已有节点
$woman->addChild('name','2B');  //往已有的节点中添加内容
$woman->addChild('age','5999'); //往已有的节点中添加内容\

$futa=$xml->addChild('futa');   //添加新的节点
$futa->addChild('name','9S');
$futa->addChild('age','4999');
$hentai=$xml->addChild('name','hentai');    //添加新的节点
//上面添加的数据已经自动添加到$xml中了

//将xml添加到文件中
$xml->asXML('3-3-1.xml');


echo "<pre>";
var_dump($xml);
/**
 * object(SimpleXMLElement)#1 (2) {
 *     ["man"]=>
 *     array(2) {
 *         [0]=>
 *         object(SimpleXMLElement)#3 (2) {
 *             ["name"]=>
 *             string(6) "小明"
 *             ["age"]=>
 *             string(2) "36"
 *         }
 *         [1]=>
 *         object(SimpleXMLElement)#4 (2) {
 *             ["name"]=>
 *             string(6) "小黑"
 *             ["age"]=>
 *             string(2) "33"
 *         }
 *     }
 *     ["woman"]=>
 *     array(2) {
 *         [0]=>
 *         object(SimpleXMLElement)#5 (2) {
 *             ["name"]=>
 *             string(6) "小红"
 *             ["age"]=>
 *             string(2) "15"
 *         }
 *         [1]=>
 *         object(SimpleXMLElement)#6 (2) {     //添加已有节点的子节点
 *             ["name"]=>
 *             string(2) "2B"
 *             ["age"]=>
 *             string(4) "5999"
 *         }
 *         }
 *     }
 *   ["futa"]=>                                 //添加新的节点
 *   object(SimpleXMLElement)#8 (2) {
 *       ["name"]=>
 *       string(2) "9S"
 *       ["age"]=>
 *       string(4) "4999"
 *   }
 *   ["name"]=>
 *   string(6) "hentai"
 * }
 */