<?php

//error_reporting(E_ALL);


//$user = new rene_user();
//$user->get_all_users();


//$classname =  new rene_category();
//$classname -> get_all_categories();



class rene_category {
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
    
    
    function update_category($cat_id, $cat_name)
    {   
        $sql = "UPDATE prod_categories SET `cat_name`=\"$cat_name\" WHERE `cat_id` = \"$cat_id\" LIMIT 1";
        
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
                $msg =  'Kategoria u editua me sukses.' ;
            }

            // close connection 
            return $msg ; 
    }
    
    
    //$foo = new foo;
    //call_user_func_array(array($foo, "bar"), array("three", "four"));
    function delete_category($cat_id)
    {   
        $sql = "DELETE FROM prod_categories WHERE `cat_id` = \"$cat_id\" LIMIT 1";
        
        //echo $sql ;
       
	//submit query
       
       include 'connect.php';
       
         $result = mysqli_query($link, $sql); //returns object
        
         
        
            if (!$result) 
            {
				
                $err = mysqli_error($link);
                //echo $err ;
                //echo 'error g et_user';
								
            }
            else
            {                
                echo 'Kategoria u fshi nga sistemi!!!' ;
            }

            // close connection          
              
    }
    

    
    function get_all_categories()
    {
        
        $sql = "SELECT `cat_id`, `cat_name` FROM prod_categories WHERE `active` = 1 ";
        
       //echo $sql ;
        
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
    
    
    function get_category($cat_id)
    {
        
        $sql = "SELECT `cat_id`, `cat_name` FROM prod_categories WHERE `cat_id` = $cat_id LIMIT 1 ";
        
       //echo $sql ;
        
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
    
    
    
    function add_category($cat_name)
    {
        
        include 'connect.php';
        
        $sql = "INSERT INTO prod_categories (`cat_name`) VALUES ('$cat_name')";
            
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
            echo 'Kategoria u shtua me sukses' ;
        }
        
        
    }
    
    
    
    
    
}
