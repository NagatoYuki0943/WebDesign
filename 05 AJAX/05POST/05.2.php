<?php
//移动上传过的文件  move_uploaded_file('源文件','文件位置');
//echo "<pre>";
//var_dump($_FILES);
/**
 * array(1) {
 *   ["img"]=>
 *   array(5) {
 *     ["name"]=>
 *     string(8) "0004.jpg"
 *     ["type"]=>
 *     string(10) "image/jpeg"
 *     ["tmp_name"]=>
 *     string(22) "C:\Windows\php81C2.tmp"
 *     ["error"]=>
 *     int(0)
 *     ["size"]=>
 *     int(141983)
 *   }
 * }
 */
//源文件使用tmp_name
echo move_uploaded_file($_FILES['img']['tmp_name'],'file/'.$_FILES['img']['name']) ? 1 : 0; //? : 三元运算符,上传成功打印 1,失败打印 0