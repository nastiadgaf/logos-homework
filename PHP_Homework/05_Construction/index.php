<?php

$numbers = '1 2 3 4 5';
$numbers2 = '1 -2 9 4 5 41';

$arr = str_split($numbers2);

//print_r($arr);

$max_val = $arr[0];


foreach ($arr as $i) {
    if ($i > $max_val) {
        $max_val = $i;
    }
}
print_r($max_val);


$min_val = $arr[0];


foreach ($arr as $a) {
    if ($a < $min_val) {
        $min_val = $a;
    }
}
print_r($min_val);
// Циклом сравнивать каждый элемент списка с max_val. Если кто-то больше, записывать в max_val его значение.

// foreach ($arr as $i) {
//     $j = $i;
//     foreach ($arr as $i) {
//         if ($j < $i) {
//             $j = $i;
//         }
//     }
// }
// print_r($j);
// $array = [];
// foreach ($arr as $a) {
//     $b = $a;
//     foreach ($arr as $a) {
//         if ($b < $a) {
//             $array_push($b);
//         }
//     }
// }
// print_r($b);
