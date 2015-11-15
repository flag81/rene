<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


// in JS build json object to sent to this file with class name and function and args to send to function of needed. 
// 
//get the class name and function name from JSON
//{classname: cn}

//error_reporting(E_ALL);

include "rene_orders.php" ;
include "rene_user.php" ;
include "rene_category.php" ;
include "rene_product.php" ;



$classname = $_POST['classname'] ;
$method = $_POST['method'] ;
$args = $_POST['args'] ; // array type from json to php

//echo $classname;
//echo $method;
//var_dump($args);

//$classname = 'rene_user' ;
//$method  = 'get_all_users';
//$args = array ();

$class_method_array = array($classname, $method);

// call class with data provided :: json return to jquery
echo call_user_func_array($class_method_array, $args);
