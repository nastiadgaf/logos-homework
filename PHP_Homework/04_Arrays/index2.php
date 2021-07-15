<?php
$array = array(
	'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
	's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
);


 $str = 'aa';

$arr = str_split($str);
$last;
foreach($arr as $i){
    global $last;
    $last = $i;
        if ($i === $last){
            print_r($last);
        }
}

function nextLetter(&$str) {
    $str = ('z' === $str ? 'a' : ++$str);
    print_r($str);
   }

   nextLetter($str);