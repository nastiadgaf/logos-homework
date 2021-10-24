<?php
$string  = 'bb';
$letters = str_split($string);
$previous = [];
$a;
    foreach($letters as $letter){
        $a = $letter;
        for ($i=0; $i <= count($letters) ; $i++) { 
            unset($letters[$i]);
            print_r($letters);
        }
        foreach($letters as $a){
           if($a === $letter){
            ++$letter;
            array_push($previous, $letter);
           }            
    }

    }
print_r($previous);




// $i;
// foreach($letters as $letter){
//     $i = $letter;
//     print_r($i);
//     foreach($letters as $i){
//         if($i === $letter){
//             ++$letter;
//             array_push($previous, $letter);
            
//             // print_r($letter);
//             break;
//         }
//     }
//     $i = '';
//     print_r($i);
// }















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