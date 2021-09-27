<?php

$numbers = '3 12 3 8 5 6 7';
$numbers2 = '1 -2 9 4 5 41';

$array = explode(" ", $numbers2);
$max = $array[0];
$min = $array[0];
    
    foreach($array as $i){
        if($i > $max){
            $max = $i;
        }
    }

    foreach($array as $i){
        if($i < $min){
            $min = $i;
        }
    }

print_r($min);
print_r($max);