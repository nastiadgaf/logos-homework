<?php 
$numbers = [10,15,20,25,30,35];
$sum; 
if($numbers == []){
    global $sum;
    $sum = 0;
} else{
    for($i=0; $i < count($numbers); $i++){
        if(($i % 2) == 0 || $i ==0){
                global $sum;
                $sum = $sum + $numbers[$i];
        }
    }
    $lastEl = array_values(array_slice($numbers, -1))[0];
     
    $sum = $sum*$lastEl;
}
    
print_r($sum);
