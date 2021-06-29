<?php
$number = 12;

print_r(gettype($number) . "\n");
print_r($number / ($number + 1) . "\n");
print_r(is_int($number) . "\n");

$fraction = &$number;

print_r($fraction . "\n");

$fraction = 13;

print_r($number . "\n");

$number = "value";
$value = 14;

print_r($value) . "\n";

unset($number);
print_r($number);
