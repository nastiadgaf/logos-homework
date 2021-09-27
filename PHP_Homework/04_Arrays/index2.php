<?php
$string  = 'zzzab';
$letters = str_split($string);
$previous = [];

foreach($letters as $letter){
    $i = $letter;
    foreach($letters as $i){
        if($i === $letter){
            $letter++;
            print_r($letter);
        }
    }
}





















// foreach($letters as $letter) {
//     array_push($previous, $letter);
//   //print_r($previous);
//     }
//     foreach($letters as $i){
//         if($letter == $i) {
//             ++$letter;
//             print_r($letter);
//         } else {
//             print_r($letter);
//         }
    
// }


// foreach($letters as $letter){
    
//     if($letter === $letter){
//         $letter = $letter++;
//         array_push($previous, $letter);
//     }
// }

// print_r($previous);