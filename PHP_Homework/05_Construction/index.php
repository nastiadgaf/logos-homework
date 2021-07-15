<?php

$numbers = '1 2 3 4 5';
$numbers2 = '1 -2 9 4 5 41';

$arr = str_split($numbers);
//$max = null;
//$min = null;
//$max = max($arr);
$min = min($arr);

// foreach($arr as $v)
// {
//     if($v > $max or $max === null)
//     {
//         $max = $v;
     
//     }

//     if($v < $min or $min === null)
//     {
//         $min = $v;
       
//     }
//}

//print_r($max );
print_r($min );