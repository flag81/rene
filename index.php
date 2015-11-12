<?php  

include('user_session.php');	

//kill session if active
$current_session = new user_session();
$current_session->stop_user_session();
				

if(isset($_GET['msgid']))
{
    $msgid = $_GET['msgid'];
    $msg = $notify[$msgid];
}


	

?>


<!doctype html>
<html>
<head>

<link rel="stylesheet" type="text/css" href="css/styles.css">


<script type='text/javascript' src='js/common.js'></script>

<title>Hyrja ne Sistem</title>




<script type='text/javascript'>

function infocus()
{
	document.login.user_name.focus();	
}


function submit_login_data(){
    
    
    var user_name = document.login.user_name.value;
    var pass = document.login.password.value;
    
    //alert(pass);
    
    
        if((!user_name.trim().length == 0) && (!pass.trim().length == 0) )
        {		

            return true;
        }
        else
        {
            alert('Fushat duhet te plotesohen');
            return false;
        }
    }
                                
                                
                                
</script>





</head>
<body onLoad="infocus();">
<div>&nbsp;</div>
<div align="center">
	<table border="0" width="600" cellspacing="1" cellpadding="0" bgcolor="#C0C0C0" id="table14">
		<tr>
			<td valign="top" style="font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 8pt; text-decoration: none; color: #333333">
			<div align="center">
			<table border="0" width="100%" id="table15" cellspacing="0" style="margin-top:0px" height="95" cellpadding="0" bgcolor="#FFFFFF">
				<tr>
					<td width="100%" height="95">
					<table border="0" width="100%" id="table16" cellspacing="0" cellpadding="0">
					  <!--DWLayoutTable-->
						<tr>
							<td width="159" height="73" align="center">
                                                            <p></p></td>
						    <td width="60">&nbsp;</td>
						    <td width="276" align="center" valign="top">							  
						       <div align="left">
						         <p>&nbsp;</p>
						         <p><span class="top-title"> Hyrja ne sistem - Rene</span></p>
					          </div></td>
							<td width="103">&nbsp;</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>	 
		</div>
		</td>
	</tr>
	</table>
</div>
<form method='post' action='main.php' name='login' onSubmit='return submit_login_data()' style="margin-top:0px">
	<div align="center">				
		<table width="600" cellspacing="1" cellpadding="0" bgcolor="" id="table10">
			
			<tr>
				
                           <td valign="top" style="font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 8pt; text-decoration: none; color: #333333">

				<div align="center">
					<table width="100%" id="table11" cellpadding='5' cellspacing="0" class="tbl" height="138" cellpadding="0">
					
						<tr>
							<td align='right'>ID:</td>
							<td>
								<input type="text" class="txt_input" name="user_name" maxlength=4>
							</td>
						</tr>
						<tr>
							<td align='right' class="loginPagetext">Fjalekalimi:</td>
							<td>
								<input type="password" class="txt_input" name="password">
							</td>
						</tr>

						
					
						<tr>
							<td>&nbsp;</td>
							<td>
								<input type="submit" style="width:150px; height:40px; " value="Hyrja" name="login" class="button">
							</td>
						</tr>
						<?php 
							if(isset($_GET["error"]) && $_GET["error"] != "")
							{
						?>
						
								<tr class="row1">
									<td colspan='2' style='color:red'>
										<?php echo $error?>
									</td>
								</tr>
						
                                                <?php 	}	?>
						
					
						
						
						

						<tr>
							<td colspan=2 align="center" > </td>
						</tr>
						
						
						</table>	 
					</div>
				</td>
			</tr>
		</table>
	</div>
</form>

</body>
</html>
