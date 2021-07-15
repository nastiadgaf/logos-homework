<?php
$array = [
    ['H', 'H', 'W', 'O'],
    ['W', 'W', 'O', 'W'],
    ['H', 'H', 'O', 'O']
];


$newArray = [];
$newArray2 = [];
function transform()
{
    $densities = array(
        'H' => '1.36',
        'W' => '1.00',
        'O' => '0.80',
    );
    $densities2 = array(
        '1.36' => 'H',
        '1.00' => 'W',
        '0.80' => 'O',
    );
    global $newArray;
    global $array;
    global $newArray2;
    foreach ($array as $i) {
        foreach ($i as $j) {
            $j = $densities[$j];
            array_push($newArray, $j);
            
        }
    }
    arsort($newArray);
    
    foreach ($newArray as $b) {
        $b = $densities2[$b];
        array_push($newArray2, $b);
        
    }
    $array = $newArray2;
    
}


transform();


print_r($array);
