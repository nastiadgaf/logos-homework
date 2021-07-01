<?php
function reverseNumber($num)
{
    $arr = str_split($num);
    rsort($arr);
    $arrlength = count($arr);
    for ($i = 0; $i < $arrlength; $i++) {
        print_r($arr[$i]);
    }
}

reverseNumber(10010);
