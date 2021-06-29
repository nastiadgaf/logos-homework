<?php

$numbers = '1 2 3 4 5';
$numbers2 = '1 -2 9 4 5 41';

$arr = str_split($numbers);

//print_r($arr);

foreach ($arr as $i) {
    $j = $i;
    foreach ($arr as $i) {
        if ($j < $i) {
            $j = $i;
        }
    }
}
print_r($j);
$array = [];
foreach ($arr as $a) {
    $b = $a;
    foreach ($arr as $a) {
        if ($b < $a) {
            $array . push($b);
        }
    }
}
print_r($b);
