<?php

session_start(); 

//check to make sure the session variable is registered 
if(isset($_SESSION['logged'])){ 

//session variable is registered, the user is ready to logout 
session_unset(); 
session_destroy(); 
}
else
{
	

	
}


?>