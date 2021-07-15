<?php
function checkPrimary($number) {
 $isPrime = true;

  for ($i = 2; $i < $number; $i++) {
    if ($number % $i === 0) {
      print_r($i);
      $isPrime = false;
      break;
    }
  }

  return $isPrime;
}
