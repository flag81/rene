<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of rene_user
 *
 * @author fstatovci
 */

//include 'connect.php';


//error_reporting(E_ALL);



//$user = new rene_user();
//$user->get_all_users();


  //$classname =  new rene_category();
  //$classname -> get_all_categories();



class rene_product {
    //put your code here
    

     
    public  $result;
    public  $link;
        
        
    function __construct() {
        $this->result = false;
        
    }
    
    //class foo {
    //function bar($arg, $arg2) {
    //    echo __METHOD__, " got $arg and $arg2\n";
    //}
    //}
    
    
    //$foo = new foo;
    //call_user_func_array(array($foo, "bar"), array("three", "four"));
    
    function add_product($category_id, $prod_name, $prod_price)
    {
        
        include 'connect.php';
        
        $sql = "INSERT INTO products (`category_id`, `prod_name`, `prod_price` ) VALUES ($category_id, \"$prod_name\" , $prod_price) ";
            
	//submit query
        $result = mysqli_query($link, $sql);
        
        if (!$result) 
        {
				
            $err = mysqli_error($link);
            $msgid = 200;
            
            echo $err ;
								
        }
        else
        {
            echo 'Produkti u shtua me sukses' ;
        }
        
        
    }
    
    
    function delete_product($prod_id)
    {   
        $sql = "DELETE FROM products WHERE `prod_id` = \"$prod_id\" LIMIT 1";
        
        //echo $sql ;
	//submit query
       
       include 'connect.php';
       
         $result = mysqli_query($link, $sql); //returns object
        
        
            if (!$result) 
            {
                $err = mysqli_error($link);			
            }
            else
            {                
                echo 'Produkti u fshi nga sistemi!!!' ;
            }

            // close connection          
              
    }
    
    function get_user($emp_id, $emp_password)
    {   
       $sql = "SELECT count(emp_id), `emp_id`, `emp_fname`, `emp_lname`, `emp_level` FROM employees WHERE `emp_id` = \"$emp_id\" AND `emp_password`=\"$emp_password\" ";
        
       //echo $sql ;
       
	//submit query
       
       include 'connect.php';
       
         $result = mysqli_query($link, $sql); //returns object
        
         
        
            if (!$result) 
            {
				
                $err = mysqli_error($link);
                echo $err ;
                echo 'error get_user';
								
            }
            else
            {
 
                $row_cnt = mysqli_num_rows($result);
                $row = mysqli_fetch_assoc(mysqli_query($link, $sql)); 
                
                return $row ;

            }

            // close connection          
            
               
    }
    
    function get_all_products($cat_id)
    {
        
        $sql = "SELECT `category_id`, `prod_id`, `prod_name`, `prod_price` FROM products WHERE `active` = 1  ";
        
       //echo $sql ;
        
        if(!empty($cat_id))
        {
            $sql .= " AND `category_id` = $cat_id ";
            
        }
        
        $users = array();
       
	//submit query
       
        include 'connect.php';
       
        $result = mysqli_query($link, $sql); //returns object
        
         
        
            if (!$result) 
            {
				
                $err = mysqli_error($link);
                echo $err ;
                echo 'error get_all_categories';
								
            }
            else
            {
 
                while ($row = mysqli_fetch_assoc($result))
                {
                          
                    array_push($users, $row);
                    
                }
                

            }
        
            $json_users = json_encode($users);
            
            //echo $json_users ;
            
            return $json_users ;
        
    }
    
    
    function update_product($prod_id, $prod_name, $category_id, $prod_price)
    {   
        $sql = "UPDATE products SET `prod_name`=\"$prod_name\", `category_id`=\"$category_id\", `prod_price`=\"$prod_price\" WHERE `prod_id` = \"$prod_id\" LIMIT 1";
        
        //echo $sql ;
       
        include 'connect.php';
       
        $result = mysqli_query($link, $sql); //returns object
         
            if (!$result) 
            {
                $err = mysqli_error($link);
                $msg = $err ;						
            }
            else
            {                
                $msg =  'Produkti u editua me sukses.' ;
            }

            // close connection 
            return $msg ; 
    }
    
    
    
    
}
