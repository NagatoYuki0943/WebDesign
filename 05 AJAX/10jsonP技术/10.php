<?php
$c = $_GET['callback'];
$arr = array('a' => 1, 'b' => 2, 'c' => 3, 'd' => 4);
$json_str = json_encode($arr);

echo "$c($json_str)";
