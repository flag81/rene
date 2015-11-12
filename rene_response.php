<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

include 'connect.php';

$emp = $_POST['emp'];

$total = $_POST['total'];

$prod_list = $_POST['prod_list']; // return array of arrays

$prod_list_json = json_encode($prod_list); //json encoded string



foreach ($prod_list as $value) {    
    //echo gettype($value);    
    foreach ($value as $newval)
    {
       //echo $newval;
    }  
}


$total = $_POST['total'];
$today = date("Y-m-d H:i:s");  

//checks

$sql = "INSERT INTO orders (`prod_list`, `employee`, `total_price`, `date`) VALUES ('$prod_list_json', '$emp', $total, '$today')";
            
	//submit query
    $result = mysqli_query($link, $sql);
        if (!$result) 
        {
				
            $err = mysqli_error($link);
            $msgid = 200;
            
            echo 'error';
								
        }
        else
        {
            echo 'Fatura u shtua ne sistem' ;
        }
							

        
        mysqli_close($link);