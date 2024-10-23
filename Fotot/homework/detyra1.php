<?php

$temperatures = array(14.5, 13, 22, 30, 23.9, 24.4, 20.0);

$total = array_sum($temperatures);


$count = count($temperatures);

$average = $total / $count;

echo "The average temperature is: " . $average . "°C";
?>
