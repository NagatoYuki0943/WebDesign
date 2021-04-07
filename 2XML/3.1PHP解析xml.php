<?php
/**
 * SimpleXML是PHP5后提供的一套简单易用的xml工具集，可以把xml转换成方便处理的对象，也可以组织生成xml数据。不过它不适用于包含namespace的xml，
 * 而且要保证xml格式完整(well-formed)。它提供了三个方法：simplexml_import_dom、simplexml_load_file、simplexml_load_string，
 * 函数名很直观地说明了函数的作用。三个函数都返回SimpleXMLElement对象，数据的读取/添加都是通过SimpleXMLElement操作。SimpleXML的优点
 * 是开发简单，缺点是它会将整个xml载入内存后再进行处理，所以在解析超多内容的xml文档时可能会力不从心。如果是读取小文件，而且xml中也不包含
 * namespace，那SimpleXML是很好的选择。
 *
 * 1 参数接收xml文件,参数是文件地址,保存到字符串中
 *   simplexml_load_file('');
 *
 * 2 参数接收xml内容,参数不是文件地址,是字符串,保存到字符串中
 *   simplexml_load_string('');
 */


//php获取普通文件的内容
//它可以获取文件内容或者是url地址,保存到字符串中
$file=file_get_contents('03.1.txt');
echo"<pre>";
var_dump($file);    //string(4) "aaaa"
echo "<hr>";

//专门用来xml文件的类库
//simplexml_load_file解析xml返回一个对象
$xml=simplexml_load_file('03.1.xml');
var_dump($xml);
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

//拿到具体的内容
echo $xml->man[0]->name."<br>";    //小明
echo $xml->man[0]->age."<br>";    //36
echo $xml->man[1]->name."<br>";    //小黑
echo $xml->man[1]->age."<br>";    //33
echo $xml->woman->name."<br>";     //小红
echo $xml->woman->age."<br>";     //15

/**
 * 解析过程
 * 1 读取xml文档到内存
 * 2 解析成dom树
 *      根节点不解析,
 *      多个相同的节点放到一个数组中(数组名是节点名)
 *      解析成dom树
 * 3 由dom树生成对象并返回
 */
