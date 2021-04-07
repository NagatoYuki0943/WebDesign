<?php
$menu = '水煮肉';
$url = 'http://apis.juhe.cn/cook/query.php&key=6b04ec72c88cb709f5b0757c32a66f9b&menu=水煮肉';
        
$s = file_get_contents($url);

//将json字符串传递给前面
echo "var s = '". $s ."'";