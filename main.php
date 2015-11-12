<?php



include 'rene_user.php';
include 'user_session.php';


//(1)Super Admin
//(2)Admin 
//(3)User


//
$emp_id = $_POST['user_name'];
$emp_password = $_POST['password'];



//check that the user is calling the page from the login form and not accessing it directly 
//and redirect back to the login form if necessary 
if (!isset($_POST['user_name']) || !isset($_POST['password'])) {
    header("Location: index.php?msgid=209");
} else 
    {

    //$emppass = md5($emppass);
    
    $user_data = new rene_user(); 
    
    $emp = $user_data->get_user($emp_id, $emp_password);
                    
    //$emp = getEmployee($empid, $emppass);
    //echo $emp["emp_level"];

    //count > 0
    
    //var_dump($emp);
    
    
    //echo $emp['count(emp_id)'];
    
    
    if ($emp['count(emp_id)'] != 0) {
        
        session_start();

        $session_data = array(
            
            'logged' => true,
            'mainid' => $emp["emp_id"],
            'mainpass' => $emp["emp_password"],
            'level' => $emp["emp_level"],
            'fname' => $emp["emp_fname"],
            'lname' => $emp["emp_lname"],

                );

        
        //start session and set session data
        
        $current_session = new user_session();
        $current_session->set_user_session($session_data);

        session_write_close();
        
        //ridirect inside app
        header('Location: rene.php?');

        
        

    } else {
        header("Location: index.php?msgid=209");
    }
}

////////////////////////////////////////
?>