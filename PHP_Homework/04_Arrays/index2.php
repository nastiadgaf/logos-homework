<?php
$string  = 'zzzab';
$letters = str_split($string);
$previous = [];

foreach($letters as $letter) {
    array_push($previous, $letter);
  //print_r($previous);
    }
    foreach($previous as $i){
        if($letter == $i) {
            ++$letter;
            print_r($letter);
        } else {
            print_r($letter);
        }
    
}
