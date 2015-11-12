	function validate_password_data(){
		var pass = document.getElementById("password");
		if(contains_space(pass.value)){
			alert('Old Password not entered correctly');
			return false;
		}

		var new_pass = document.getElementById("new_password");
		if(contains_space(new_pass.value)){
			alert('New Password not entered correctly');
			return false;
		}
		
		var conf_pass = document.getElementById("confirm_password").value;
		if(new_pass.value != conf_pass){
			alert('Passwords do not match!');
			return false;
		}
		return true;
	}
	
 	function submit_password_data(){
 		if(validate_password_data()){
 			var app = document.applets[0];
 			var pass = document.forms[0].password;
			pass.value = app.digest(pass.value);
 			var new_pass = document.forms[0].new_password;
 			new_pass.value = app.digest(new_pass.value);
 			document.forms[0].submit();
 			return true;
 		}
 		return false;
 	}

	function check_password_message(){
		var message = document.forms[0].message;	
		if(message.value != '')
			alert(message.value);
		message.value = '';
	}

	//----------------------------------

	function submit_user_password_data(pass){
 		
		if(validate_user_password_data(pass)){
 			var app = document.applets[0];
			pass.value = app.digest(pass.value);
 			return true;
 		}
 		return false;
 	}
	function validate_user_password_data(pass){

		if(contains_space(pass.value)){
			alert('Passwords entered incorrectly!');
			return false;
		}
		return true;
	}

