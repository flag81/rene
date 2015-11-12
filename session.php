<?php 

//error_reporting(E_ALL);
include('user_session.php');
	
//start the session 
session_start(); 
	
//***** disable the system ******


//check to make sure the session variable is registered

	if(isset($_SESSION['logged']))
	{
		//the session variable is registered, the user is allowed to see anything that follows
    
		$level = $_SESSION['level'];
		$mainid = $_SESSION['mainid'];		
		$fname = $_SESSION['fname'];
		$lname = $_SESSION['lname'];		

	} 
	else
	{ 
		header( "Location: index.php?msgid=209&mess=session_not_set" );
	} 
		
?>