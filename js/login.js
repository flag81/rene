				function validate_login_data(){
					var un = document.login.user_name;
					if(!contains_space(un.value)){
						var pw = document.login.password;
						if(contains_space(pw.value)){
							alert('Passwordi nuk eshte valid');
							pw.focus();
							return false;
						}
					}
					else {
						alert('Nr. Personelit nuk eshte valid');
						un.focus();
						return false;
					}
					return true;
				}
				
				function submit_login_data(){
			 		if(validate_login_data()){
			 			var app = document.applets[0];
 						var pass = document.login.password;
 						pass.value = app.digest(pass.value);			 			
			 			return true;
			 		}
			 		return false;
			 	}
			 	
			 	function checkEnter(elem, evt){
			 		var chCode;
			 		if(evt && evt.which){
			 			evt = evt;
			 			chCode = evt.which;
			 		}
			 		else {
			 			evt = event;
			 			chCode = evt.keyCode;
			 		}
			 		
			 		if(chCode == 13){ //enter
			 			submit_login_data();
			 			return false;
			 		}
			 		else{
			 			if(elem.id == 'user_name'){
			 				if(chCode > 0x60 && chCode < 0x7B)
			 					evt.keyCode = chCode - 0x20;
			 			}
			 		}
			 	}
