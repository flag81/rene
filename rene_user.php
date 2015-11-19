<?php

/**
 * Description of rene_user
 *
 * @author fstatovci
 */



//error_reporting(E_ALL);



//$user = new rene_user();
//$user->get_all_users();


class rene_user {
    //put your code here
    

     
    public  $result;
    public  $link;
        
        
    function __construct() {
        $this->result = false;
        
    }
    
    
    function add_user($emp_id, $emp_fname ,  $emp_lname ,  $emp_phone , $emp_email, $emp_level , $emp_password)
    {
        
        include 'connect.php';
        
        $sql = "INSERT INTO employees (`emp_id`,`emp_fname`, `emp_lname`, `emp_phone`, `emp_email`, `emp_level`,`emp_password`) "
        . "VALUES ($emp_id,'$emp_fname', '$emp_lname', '$emp_phone', '$emp_email', '$emp_level','$emp_password')";
 
        
        //echo $sql ;
        
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
            echo 'Perdoruesi u shtua me sukses' ;
        }
        
        
    }
    

    
    function delete_user($id)
    {   
        $sql = "DELETE FROM employees WHERE `id` = \"$id\" LIMIT 1";
        
        //echo $sql ;
       
       include 'connect.php';
       
         $result = mysqli_query($link, $sql); //returns object
                        
            if (!$result) 
            {
				
                $err = mysqli_error($link);
                //echo $err ;
                //echo 'error get_user';
								
            }
            else
            {                
                echo 'Perdoruesi u fshi nga sistemi!!!' ;
            }

            // close connection          
    }
    
    function change_password($emp_id, $emp_password)
    {
        
        
        
    }
    
    function get_user($emp_id, $emp_password)
    {   
       $sql = "SELECT `id`, `emp_id`, `emp_fname`, `emp_lname`, `emp_phone`, `emp_email` ,`emp_level` FROM employees WHERE `emp_id` = \"$emp_id\" AND `emp_password`=\"$emp_password\" ";
        
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
                
                $row['num_rows'] = $row_cnt ;
                
                return $row ;

            }
            
            
    }
    
    
    
    function update_user($id, $emp_id, $emp_fname, $emp_lname, $emp_phone,$emp_email, $emp_level, $emp_password)
    {   
        
        
        //check for password cheking on the server side as well-in the future
        
        $sql = "UPDATE employees SET `emp_id`=\"$emp_id\", `emp_fname`=\"$emp_fname\", `emp_lname`=\"$emp_lname\" , `emp_phone`=\"$emp_phone\" , `emp_email`=\"$emp_email\" , `emp_level`=\"$emp_level\" WHERE `id` = \"$id\" LIMIT 1";
        
        echo $sql ;
       
        include 'connect.php';
       
        $result = mysqli_query($link, $sql); //returns object
         
            if (!$result) 
            {
                $err = mysqli_error($link);
                $msg = $err ;						
            }
            else
            {                
                $msg =  'Perdoruesi u editua me sukses.' ;
            }

            // close connection 
            return $msg ; 
    }
    
    
    
    function get_all_users()
    {
        
        $sql = "SELECT `id`, `emp_id`, `emp_fname`, `emp_lname`, `emp_phone`, `emp_email`, `emp_level` FROM employees WHERE `active` = 1 ";
        
       //echo $sql ;
        
        $users = array();
       
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
                while ($row = mysqli_fetch_assoc($result))
                {                      
                    array_push($users, $row);                   
                }
                
            }
        
            $json_users = json_encode($users);
            
            //echo $json_users ;
            
            return $json_users ;
        
    }
    
    
    
    
}
