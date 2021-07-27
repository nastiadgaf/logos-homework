<?php 
$numbers = [10,15,20,25,30,35];
function getSum(){
    global $numbers;
    $sum = 0;
    if($numbers == []){
        global $sum;
        return $sum;
    } 
        for($i=0; $i < count($numbers); $i++){
            if($i % 2) continue;
                    global $sum;
                    $sum = $sum + $numbers[$i];
        }

        $lastEl = $numbers[count($numbers) - 1];
        $sum = $sum*$lastEl;

        return $sum;
        
}

print_r(getSum());
