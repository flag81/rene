<?php  
//Author: Flamur Statovci
//Date: 04-11-2007
//Descritption: This connects to the db

    
	//connect to db
        	$link = mysqli_connect('localhost', 'root', '', 'rene');
	
		if (!$link) {
                    echo "Error: Unable to connect to MySQL." . PHP_EOL;
                    echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
                    echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
                    exit;
                }
		
?>		
		