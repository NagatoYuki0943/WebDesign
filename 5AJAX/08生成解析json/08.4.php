<?php
//(1) 数组形式JSON转PHP索引数组
$str = '["1","2","3","4","5"]';
$arr = json_decode($str);
print_r($arr);  //Array ( [0] => 1 [1] => 2 [2] => 3 [3] => 4 [4] => 5 ) 
$arr = json_decode($str, true); //没有键值对,第二个参数写了true也没用
print_r($arr);  //Array ( [0] => 1 [1] => 2 [2] => 3 [3] => 4 [4] => 5 )

//(2) 对象形式JSON转PHP关联数组(第二个参数true)
$str = '{"name":"tom","age":"male"}';
$arr = json_decode($str, true);
print_r($arr);  // Array ( [name] => tom [age] => male ) 


//(3) 对象形式JSON转PHP关联数组
$str = '{"name":"jerry","sex":"male","age":"15"}';
$arr = json_decode($str);
print_r($arr);  //stdClass Object ( [name] => jerry [sex] => male [age] => 15 ) 
