<?php

$doubleList = [[0, 1, 2], [3, 4, 5]];

$increment = function ($i) {
  return ++$i;
};

function deepMap($array, $function)
{
  $newArray = [];

  foreach ($array as $j) {
    $smallArray = [];
    foreach ($j as $e) {
      array_push($smallArray, $function($e));
    }
    array_push($newArray, $smallArray);
  }

  return $newArray;
}
print_r(deepMap($doubleList, $increment));
