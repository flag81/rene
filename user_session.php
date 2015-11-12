<?php 

//error_reporting(E_ALL);


class user_session
{
	// pass associative array or object
	
	public function set_user_session($session_data)
	{
	
		session_start();

		$_SESSION['logged'] = $session_data['logged'];			
		$_SESSION['mainid'] = $session_data['mainid'];
		$_SESSION['level'] = $session_data['level'];
                $_SESSION['fname'] = $session_data['fname'];
		$_SESSION['lname'] = $session_data['lname'];	

		
		//var_dump($_SESSION);

	}
	
	public function stop_user_session()
	{
	
		session_start(); 

		//check to make sure the session variable is registered 
		if(isset($_SESSION['logged']))
		{ 

			//session variable is registered, the user is ready to logout 
			session_unset(); 
			session_destroy(); 
		}

	}

} 