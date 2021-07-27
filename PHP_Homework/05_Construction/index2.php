<?php
function checkPrimary($number) {
 //$isPrime = true;

  for ($i = 2; $i < $number; $i++) {
    if ($number % $i === 0) {
      //$isPrime = false;
      break;
    } else{
      print_r($i);
    }
  }

  //return $isPrime;
}
print_r(checkPrimary(7));
