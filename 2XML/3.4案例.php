<?php
//filename 获取

//它可以获取文件内容或者是url地址,保存到字符串中
file_get_contents();
//参数接收xml内容(字符串),而不是文件地址
$x=simplexml_load_string('');
var_dump($x);

/**
 * 1 参数接收xml文件,写文件地址
 *   simplexml_load_file('');
 *
 * 2 参数接收xml内容,而不是文件地址
 *   simplexml_load_string('');
 */