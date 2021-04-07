<?php
$link = mysqli_connect('localhost', 'root', 'root', 'mb', 3306);
mysqli_query($link, 'set names utf8');

$sql = 'select * from mb_students1 limit 3';

$res = mysqli_query($link, $sql);

//echo "<pre>";
//var_dump($res);
/**
 * object(mysqli_result)#2 (5) {
 *     ["current_field"]=>
 *     int(0)
 *     ["field_count"]=>
 *     int(6)
 *     ["lengths"]=>
 *     NULL
 *     ["num_rows"]=>
 *     int(3)
 *     ["type"]=>
 *     int(0)
 * }
 */

$data=[];
//没有数据就不进循环了
while ($row = mysqli_fetch_assoc($res)) {
    //print_r($row);
    $data[]=$row;

}
//echo "<pre>";
//var_dump($data);
/**
 * array(3) {
 *    [0]=>
 *    array(6) {
 *      ["id"]=>
 *      string(1) "1"
 *      ["name"]=>
 *      string(6) "赵一"
 *      ["sex"]=>
 *      string(4) "male"
 *      ["age"]=>
 *      string(2) "15"
 *      ["class"]=>
 *      string(1) "1"
 *      ["score"]=>
 *      string(2) "58"
 *    }
 *    [1]=>
 *    .
 *    .
 *    .
 * }
   */

//php生成json字符串
echo json_encode($data);
//[{"id":"1","name":"\u8d75\u4e00","sex":"male","age":"15","class":"1","score":"58"},
// {"id":"2","name":"\u94b1\u4e8c","sex":"female","age":"16","class":"2","score":"55"},
// {"id":"3","name":"\u5b59\u4e09","sex":"male","age":"16","class":"2","score":"88"}]