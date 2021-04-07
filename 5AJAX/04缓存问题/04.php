<?php
//(3) 设置响应头禁用客户端缓存
header("Cache-Control:no-cache");

//获取客户端数据
$name = $_GET['name'];
if ($name == 'admin') {
    echo 1;
} else {
    echo 0;
}
