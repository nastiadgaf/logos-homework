<?php
function gooseFilter()
{
    $geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
   $array = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"];
//     $tf = 'false';

//     for ($i = 0; $i < count($geese); $i++) {
//         for($j = 0; $j < count($array); $j++){
//             if ($geese[$i] !== $array[$j]) {
//                # print_r($array[]);
//                $tf = 'true';
//                print_r($tf);
//              } 
//         }
        
//     }
//     print_r($tf);
//print_r($array);
$newarray = [];
for($j = 0; $j < count($array); $j++){
    $tf = 'false';
    for ($i = 0; $i < count($geese); $i++){
        if($array[$j] == $geese[$i]){
            $tf = 'true';
        } 
    }
    if ($tf === 'false'){
        array_push($newarray,$array[$j]);
    }    
}
print_r($newarray);
}



gooseFilter();