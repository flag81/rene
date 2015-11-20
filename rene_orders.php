<?php

/**
 * Description of rene_user
 *
 * @author fstatovci
 */

include 'session.php';
//error_reporting(E_ALL);



//$rene = new rene_orders();

//$rene->get_num_orders();




class rene_orders {
    //put your code here
    

     
    public  $result;
    public  $link;
        
        
    function __construct() {
        $this->result = false;
        include 'connect.php';
        
    }
    
    //class foo {
    //function bar($arg, $arg2) {
    //    echo __METHOD__, " got $arg and $arg2\n";
    //}
    //}
    
    
    //$foo = new foo;
    //call_user_func_array(array($foo, "bar"), array("three", "four"));
    
    
    
    
    function add_order($prod_list_json, $emp, $total)
    {
        
        include 'connect.php';
        
        $today = date("Y-m-d H:i:s"); 
        
        
        $sql = "INSERT INTO orders (`prod_list`, `emp_id`, `total_price`, `date`) VALUES ('$prod_list_json', '$emp', $total, '$today')";
            
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
            echo 'Fatura u shtua ne sistem' ;
        }
        
        
        
    }
    
    
    
    function delete_order($id)
    {   
        $sql = "DELETE FROM orders WHERE `id` = \"$id\" LIMIT 1";
        
        //echo $sql ;
       
	//submit query
       
        include 'connect.php';
       
        $result = mysqli_query($link, $sql); //returns object
        
         
        
            if (!$result) 
            {
				
                $err = mysqli_error($link);
                $msg = $err ;
                //echo 'error get_user';
								
            }
            else
            {                
                $msg =  'Porosia u fshi nga sistemi!!!' ;
            }

            // close connection 
            return $msg ; 
              
    }
    
    
    function update_order($id, $notes)
    {   
        
        $user = $_SESSION['fname']." ".$_SESSION['lname'];
        $today = date("Y-m-d H:i:s"); 
        
        $sql = "UPDATE orders SET `notes`=concat(`notes`, \"$user\", '(' , \"$today\" , '):' ,\"$notes\", \"<br>\") WHERE `id` = \"$id\" LIMIT 1";
        
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
                $msg =  'Shenimet u shtuan per kete porosi' ;
            }

            // close connection 
            return $msg ; 
    }
    
    
    function get_order($id)
    {   
       $sql = "SELECT `id`, `prod_list`, `emp_id`, `total_price`, `date` FROM orders WHERE `active` = 1 AND  `id` = \"$id\" ";
        
       echo $sql ;
       
       
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
    
    
    
    function get_num_orders()
    {
        
        $sql = "SELECT count(*) FROM orders WHERE `active` = 1 ";   
       
        include 'connect.php';
       
        $result = mysqli_query($link, $sql); //returns objec
        
        $row = mysqli_fetch_assoc($result);
        
         $json_count = json_encode($row);
            
        
        echo $json_count ; 
        
       
    }
    
    
    function get_all_orders($user_id, $from_date, $to_date, $page_num)
    {
        
        //pagination data
        
        $per_page = 10;
        $show_from = $per_page * ($page_num - 1);
        $show_to = $show_from + $per_page ;
        
        
        
        $sql = "SELECT SQL_CALC_FOUND_ROWS orders.`id`, orders.`prod_list`, orders.`emp_id`, orders.`total_price`, orders.`date`, orders.`notes`, employees.emp_fname, employees.emp_lname "
                              
                . " FROM orders "
                . " LEFT JOIN `employees`"
                . " ON orders.emp_id = employees.emp_id"
                . " WHERE orders.`active` = 1 ";
        
        
        if(!empty($user_id))
        {
            
            $sql .= "AND `emp_id`=\"$user_id\" ";
        }
        
        
        if(!empty($from_date) && !empty($to_date))
        {
            
            $from_date = strtotime($from_date);
            $to_date = strtotime($to_date . ' +1 day');
            
            
            $from_date = date('Y-m-d',$from_date);
            $to_date = date('Y-m-d',$to_date);
            
            $sql .= "AND (`date` between \"$from_date\" AND \"$to_date\" ) ";
        }
        
        

        $sql .= "  ORDER BY `id` DESC ";
        
        if(!empty($page_num))
        {
            
            $sql .= "LIMIT $show_from,$per_page ";
        }
        
        
         
        //echo $sql ;
        
        
        $users = array();
       
	//submit query
       
        include 'connect.php';
       
        $result = mysqli_query($link, $sql); //returns object
        
         
        
            if (!$result) 
            {
				
                $err = mysqli_error($link);
                echo $err ;
                //echo 'error get_all_categories';
								
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
