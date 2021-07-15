<?php 
$line= "The greatest victory is whick requires no battle";

$words = explode(' ', $line);
while ($words !== []) {
    print_r(array_pop($words)) ;
    print_r(' ') ;
}