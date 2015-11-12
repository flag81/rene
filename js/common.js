

var request;


function runAjax(JSONstring)
{
    // function returns "AJAX" object, depending on web browser
    // this is not native JS function!
    //request = getHTTPObject();
    
	
    request = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
    
    //alert('test5');
     
    request.onreadystatechange = sendData;
    request.open("GET", "parser.php?json="+JSONstring, true);
    request.send(null);
}
 
// function is executed when var request state changes
function sendData()
{
	
	//alert('test6');
    // if request object received response
    if(request.readyState == 4)
    {
	// parser.php response
	var JSONtext = request.responseText;
	// convert received string to JavaScript object
	var JSONobject = JSON.parse(JSONtext);
 
	// notice how variables are used
	var msg = "Number of errors: "+JSONobject.errorsNum+
		"\n- "+JSONobject.error[0]+
		"\n- "+JSONobject.error[1];
 
	alert(msg);
    }
}




function validate_json()
{
	
	
	//alert('test');
	
    var p = document.forms['personal'];
 
    var JSONObject = new Object;
    JSONObject.firstname = p['firstname'].value;
    
    //alert(JSONObject.firstname);
    
    JSONObject.email = p['email'].value;
    JSONObject.hobby = new Array;
 
    for(var i=0; i<3; i++)
    {
        JSONObject.hobby[i] = new Object;
	JSONObject.hobby[i].hobbyName = p['hobby'][i].value;
	JSONObject.hobby[i].isHobby = p['hobby'][i].checked;
    }
    
    //alert('test2');
 
    JSONstring = JSON.stringify(JSONObject);
    
    //alert('test3');
    
    runAjax(JSONstring);
 
}






	function trim(s) {
 		while (s.substring(0,1) == ' ')
   		s = s.substring(1,s.length);
 		while (s.substring(s.length-1,s.length) == ' ')
   		s = s.substring(0,s.length-1);
 		return s;
	}

	function is_empty(val) {
 		return trim(val) == '';
	}
	
	function is_null(val) {
 		return val == null;
	}
	
	function not_null(some_variable)
	{
		if(typeof(some_variable) != 'undefined' && some_variable != null)
		{
			// do something with some_variable
			return true;
		}
		else
		{
			return false;
		
		}
	}
	function contains_space(val){
		var val = trim(val);
 		return (val == '' || val.indexOf(' ') != -1);
 	}
	
	function removeSpace(val){
		if(val == '&nbsp;' || val == '')
			return '';
		return val;
	}

	function to_upper(elem, evt){
		var chCode;
 		if(evt && evt.which){
 			evt = evt;
 			chCode = evt.which;
 		}
 		else {
 			evt = event;
 			chCode = evt.keyCode;
 		}
		if(chCode > 0x60 && chCode < 0x7B)
 			evt.keyCode = chCode - 0x20;
	}

	var req;
	var message;
	function requestMessage(action, code, display){
		try{
			req = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");		
 			req.open('get', '/tk/message?action='+action+'&code='+code,false);
    	req.onreadystatechange = function (){
    		if (req.readyState == 4 && req.status == 200){
					var msg = unescape(req.responseText);
    			if(display){
    				alert(msg);
    			}
    			else {    				
						message = msg;
    			}
				}
			}
    	req.send(null);	
		}
		catch(e){
			alert(e);
		}
	}
	


	
	
function mytest()
{
	
	alert('testing...');	
}	
		

function get_page(id, archive_table)
{
try{	
	var id = id;
	var archive_table = archive_table;
	
	if(id > 0)
	{
		document.getElementById("page").value = id;
		getreports(archive_table);
	}	
	else
	{
	   alert("Gabim numri i faqes!");	
		
	}
	
	}
  	catch(e)
  	{
   		alert(e);
  	} 
  
  
}



function get_mod_page(id)
{
try{	
	var id = id;
	
	if(id > 0)
	{
		document.getElementById("page").value = id;
		getmodregcust('modifikim');
	}	
	else
	{
	   alert("Gabim numri i faqes!");	
		
	}
	
	}
  	catch(e)
  	{
   		alert(e);
  	} 
  
  
}


	

function get_pre_reports(archive_table)
{
	try
	{	
		var archive_table = archive_table ;

		//alert(archive_table);
		
		document.getElementById("page").value = 1;
		
		getreports(archive_table);

	}
  	catch(e)
  	{
   		alert("get_pre_reports(): " + e);
  	} 
  
  
}



function graph_reports()
{
 
try{
 	


	
	var sdate = document.getElementById("sdate").value;
	var edate = document.getElementById("edate").value;
	var date_type = document.getElementById("date_type").value;

	
	if (is_empty(sdate) || is_empty(edate))
	{
		alert("Ju lutem plotesoni Prej dhe Deri Me daten!");
		return false;
	}		
	
	
 	var lloji = document.getElementById("lloji").value;
 	var ordered_package = document.getElementById("ordered_package").value;
 	var ordered_package_new = document.getElementById("ordered_package_new").value;
 	var region = document.getElementById("region").value;
 	var fname = document.getElementById("search_byCustomerName").value;
 	var lname = document.getElementById("search_byCustomerSurname").value;
 	var cid = document.getElementById("search_byCustomerId").value;
 	var phone = document.getElementById("current_phone").value;
 	var agent = document.getElementById("agent").value;
 	var gjendja = document.getElementById("gjendja").value;
 	var unrealized_reason = document.getElementById("unrealized_reason").value;

	
 	window.open("Graphs.php?sdate="+sdate+"&edate="+edate+"&region="+region+"&lloji="+lloji+ '&fname='+ fname + '&lname='+ lname + '&cid=' + cid + '&phone='+ phone + '&date_type='+ date_type + '&agent='+ agent + '&gjendja='+ gjendja + '&ordered_package='+ ordered_package + '&ordered_package_new='+ ordered_package_new + '&unrealized_reason='+ unrealized_reason  + "" , width=10);
 	
       }
  catch(e){
   alert(e);
  } 
  
 
}


	
function getreports(archive_table)
{
 
try{
 	
	var archive_table = archive_table;
	
	var archive_type = document.getElementById("type").value;
	var sdate = document.getElementById("sdate").value;
	var edate = document.getElementById("edate").value;
	var date_type = document.getElementById("date_type").value;
	var page = document.getElementById("page").value;
	
	var adsl_user_name = document.getElementById("adsl_user_name").value;
	
	
	if (!is_empty(sdate) && is_empty(edate))
	{
		alert("Ju lutem plotesoni Deri Me daten!");
		return false;
	}	


     	
	
	
 	var lloji = document.getElementById("lloji").value;
 	var ordered_package = document.getElementById("ordered_package").value;
 	var ordered_package_new = document.getElementById("ordered_package_new").value;
 	var region = document.getElementById("region").value;
 	var fname = document.getElementById("search_byCustomerName").value;
 	var lname = document.getElementById("search_byCustomerSurname").value;
 	var cid = document.getElementById("search_byCustomerId").value;
 	var phone = document.getElementById("current_phone").value;
 	var agent = document.getElementById("agent").value;
 	var wdate = document.getElementById("wdate").value;
 	var gjendja = document.getElementById("gjendja").value;
 	var unrealized_reason = document.getElementById("unrealized_reason").value;
 	var location1 = document.getElementById("location").value;
 	var employee = document.getElementById("employee").value;
	var faza_rikyqjes = document.getElementById("faza_rikyqjes").value;
	var customer_id = document.getElementById("customer_id").value;
	var sherbimi_pengesa = document.getElementById("sherbimi_pengesa").value;
	
	
	var file_name = "getreports.php";
	
	if(is_empty(fname) && is_empty(lname))
	{		
	
	}
	


 	var url = file_name + '?sdate='+ sdate + '&edate='+ edate + '&date_type='+ date_type + '&lloji='+ lloji + 
	'&gjendja='+ gjendja + '&ordered_package='+ ordered_package + '&ordered_package_new='+ ordered_package_new + 
	'&region=' + region + '&fname='+ fname + '&lname='+ lname + '&cid=' + cid + '&phone='+ phone + '&agent='+ agent + 
	'&type='+ archive_type + '&unrealized_reason='+ unrealized_reason + '&location='+ location1 + '&employee='+ employee + 
	'&page='+ page + '&agent='+ agent + '&wdate='+ wdate + '&faza_rikyqjes=' + faza_rikyqjes + '&customer_id=' + customer_id + 
	'&archive_table=' + archive_table + '&adsl_user_name=' + adsl_user_name + '&sherbimi_pengesa=' + sherbimi_pengesa ;
 
 	document.getElementById("table").innerHTML = "<div align='center'><img src='./images/loader2.gif'><div>";
  
 
 	var req1 = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
 	req1.open ('get', url ,false);
 
      req1.onreadystatechange = function (){
      if (req1.readyState == 4 && req1.status == 200){
      var msg = unescape(req1.responseText );
    
      
     //alert(msg);
 
	  document.getElementById("table").innerHTML = msg;  
	  document.getElementById("details").innerHTML = "";
	  
	  window.location.hash="#table_section";
	        
    }
   }
     req1.send(null);
       }
  catch(e){
   alert(e);
  } 
  
 
}


function export_adsl()
 {  
  
  try{
 	
		var table_name = document.getElementById("table_name").value;
		
		
		alert(table_name);

 		var url = 'adsl_excel.php?table_name='+ table_name ;
 
 		window.open(url);
 
 	
       }
  catch(e){
   
		alert(e);
  
  }
  
}




function export_report(archive_table)
 {  
  
  try{
 	

	var archive_table =  archive_table; 
	var archive_type = document.getElementById("type").value;
	var sdate = document.getElementById("sdate").value;
	var edate = document.getElementById("edate").value;
	var date_type = document.getElementById("date_type").value;
	var page = document.getElementById("page").value;
	
	
	if (!is_empty(sdate) && is_empty(edate))
	{
		alert("Ju lutem plotesoni Deri Me daten!");
		return false;
	}		
	
	
 	var lloji = document.getElementById("lloji").value;
 	var ordered_package = document.getElementById("ordered_package").value;
 	var ordered_package_new = document.getElementById("ordered_package_new").value;
 	var region = document.getElementById("region").value;
 	var fname = document.getElementById("search_byCustomerName").value;
 	var lname = document.getElementById("search_byCustomerSurname").value;
 	var cid = document.getElementById("search_byCustomerId").value;
 	var phone = document.getElementById("current_phone").value;
 	var agent = document.getElementById("agent").value;
 	var gjendja = document.getElementById("gjendja").value;
 	var unrealized_reason = document.getElementById("unrealized_reason").value;
 	var print_type = 1;
 	var export_report = 1;
 	
 	var location1 = document.getElementById("location").value;
 	var employee = document.getElementById("employee").value;
	var faza_rikyqjes = document.getElementById("faza_rikyqjes").value;
	var customer_id = document.getElementById("customer_id").value;
	var sherbimi_pengesa = document.getElementById("sherbimi_pengesa").value;
	


 	var url = 'excel.php?sdate='+ sdate + '&edate='+ edate + '&date_type='+ date_type + '&lloji='+ lloji + '&gjendja='+ gjendja + 
	'&ordered_package='+ ordered_package + '&ordered_package_new='+ ordered_package_new + '&region=' + region + '&fname='+ fname + 
	'&lname='+ lname + '&cid=' + cid + '&phone='+ phone + '&agent='+ agent + '&type='+ archive_type + '&unrealized_reason='+ unrealized_reason +
	'&page='+ page + '&print_type=' + print_type + '&export_report=' + export_report + '&location='+ location1 + '&employee='+ employee +
	'&faza_rikyqjes=' + faza_rikyqjes +'&customer_customer_id=' + customer_id + '&archive_table='+ archive_table + '&sherbimi_pengesa='+sherbimi_pengesa ;
	
	
	if(typeof document.reports_frm.extra != 'undefined')
	{
		var extra = document.getElementById("extra").value;
		url += '&extra=' + extra;
	
	}
	
 
	window.open(url);
 
       }
  catch(e){
   
   alert(e);
  
  }
  
 
}



function printreport(archive_table)
 {  
  
  try{
 	
	var archive_type = document.getElementById("type").value;
	var sdate = document.getElementById("sdate").value;
	var edate = document.getElementById("edate").value;
	var date_type = document.getElementById("date_type").value;
	var page = document.getElementById("page").value;
	
	
	if (!is_empty(sdate) && is_empty(edate))
	{
		alert("Ju lutem plotesoni Deri Me daten!");
		return false;
	}		
	
	
 	var lloji = document.getElementById("lloji").value;
 	var ordered_package = document.getElementById("ordered_package").value;
 	var ordered_package_new = document.getElementById("ordered_package_new").value;
 	var region = document.getElementById("region").value;
 	var fname = document.getElementById("search_byCustomerName").value;
 	var lname = document.getElementById("search_byCustomerSurname").value;
 	var cid = document.getElementById("search_byCustomerId").value;
 	var phone = document.getElementById("current_phone").value;
 	var agent = document.getElementById("agent").value;
 	var gjendja = document.getElementById("gjendja").value;
 	var unrealized_reason = document.getElementById("unrealized_reason").value;
	var faza_rikyqjes = document.getElementById("faza_rikyqjes").value;
	var customer_id = document.getElementById("customer_id").value;
 	var print_type = 1;
 	
 	
	
	var file_name = "getreports.php";
	
	
 	// 	var url = 'getreports.php?cdate='+ cdate + '&odate='+ odate + '&sdate='+ sdate + '&edate='+ edate + '&lloji='+ lloji + '&gjendja='+ gjendja + '&ordered_package='+ ordered_package + '&ordered_package_new='+ ordered_package_new + '&region=' + region + '&fname='+ fname + '&lname='+ lname + '&cid=' + cid + '&phone='+ phone + '&agent='+ agent + '&type='+ archive_type + '&unrealized_reason='+ unrealized_reason;

 	var url = file_name + '?sdate='+ sdate + '&edate='+ edate + '&date_type='+ date_type + '&lloji='+ lloji + '&gjendja='+ gjendja + '&ordered_package='+ ordered_package + '&ordered_package_new='+ ordered_package_new + '&region=' + region + '&fname='+ fname + '&lname='+ lname + '&cid=' + cid + '&phone='+ phone + '&agent='+ agent + '&type='+ archive_type + '&unrealized_reason='+ unrealized_reason  + '&page='+ page + '&print_type=' + print_type +  '&faza_rikyqjes=' + faza_rikyqjes +'&customer_customer_id=' + customer_id + '&archive_table=' + archive_table ;
 
 	window.open(url);
 
 
	var req1 = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
	req1.open ('get', url ,false);
 
      req1.onreadystatechange = function (){
      if (req1.readyState == 4 && req1.status == 200){
      var msg = unescape(req1.responseText );
    
		//alert(msg);
 
	  //document.getElementById("table").innerHTML = msg;  
	  //document.getElementById("details").innerHTML = "";
	  
	  	var winref = window.open('printReport.php');
		winref.document.write(msg);
		
	        
    }
   }
     req1.send(null);
       }
  catch(e){
   alert(e);
  }
  
 
}



function adsl_test()
 {
 try{

	
 //alert(var1); 	 
 var adsl_telefoni = document.getElementById("adsl_telefoni").value;  
 
 alert(adsl_telefoni);
 
 
 var req1 = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
 req1.open ('get', 'adsl_test.php?adsl_telefoni='+ adsl_telefoni,false);
 
      req1.onreadystatechange = function (){
      if (req1.readyState == 4 && req1.status == 200){
      var msg = unescape(req1.responseText );
    
     //alert(msg);
       
	  document.getElementById("main").innerHTML = msg;  
	    

      
     
    }
   }
     req1.send(null);
       }
  catch(e){
   alert(e);
  } 
  
 
} 



	
	
function getId(var1)
 {
 try{

 var var1 = var1;	
 //alert(var1); 	 
 var city = document.getElementById("city");  
 var req1 = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
 req1.open ('get', 'getplaceid.php?action=getPlaceId&name='+ city.value,false);
 
      req1.onreadystatechange = function (){
      if (req1.readyState == 4 && req1.status == 200){
      var msg = unescape(req1.responseText );
    
     //alert(msg);
     
     

	    
	  document.getElementById("bycity").innerHTML = msg;  
	    

      
     
    }
   }
     req1.send(null);
       }
  catch(e){
   alert(e);
  } 
  
 
} 


function getalldates(var1)
 {
 try{

 var var1 = var1;	
 //alert(var1); 	   
 var req1 = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
 req1.open ('get', 'getdates.php?week='+ var1,false);
 
      req1.onreadystatechange = function (){
      if (req1.readyState == 4 && req1.status == 200){
      var msg = unescape(req1.responseText );
    
     //alert(msg);
  

	  document.getElementById("showDatatDetalisht").innerHTML = msg;  
	    

      
     
    }
   }
     req1.send(null);
       }
  catch(e){
   alert(e);
  } 
  
 
}



function getIdCity(var1)
 {
 try{

 var var1 = var1;	
 //alert(var1); 	 
 var city = document.getElementById("c_city");  
 var req1 = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
 req1.open ('get', 'getplaceidedit.php?action=getPlaceId&name='+ city.value,false);
 
      req1.onreadystatechange = function (){
      if (req1.readyState == 4 && req1.status == 200){
      var msg = unescape(req1.responseText );
    
     //alert(msg);
     
     

	    
	  document.getElementById("cp_city").innerHTML = msg;  
	    

      
     
    }
   }
     req1.send(null);
       }
  catch(e){
   alert(e);
  } 
  
 
}


function getplaces(add)
 {
 try{

 var add = add;
 
  if(add == "old")
  {
  	var reg = document.getElementById("region");
  	var city = "city";
  }
  else
  {
	var reg = document.getElementById("new_region"); 
	var city = "new_city"; 
	  
  }
 
 //alert(add); 
 
 var req1 = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
 req1.open ('get', 'getplaces.php?region='+ reg.value  + "&city=" + city ,false);
 
      req1.onreadystatechange = function (){
      if (req1.readyState == 4 && req1.status == 200){
      var msg = unescape(req1.responseText );
    
      
     //alert(msg);
     
     if(add == "old")
     {
     	document.getElementById("places").innerHTML = msg;
     }
     else
     {
      	document.getElementById("newplaces").innerHTML = msg;
     }
     
    }
   }
     req1.send(null);
       }
  catch(e){
   alert(e);
  } 
  
 
} 



function get_bill_info()
 {
  try{
   
      //var tel = document.getElementById("current_phone").value;
      //var user = document.getElementById("user_adsl").value;
      
	  var tel = document.getElementById("current_phone").value ;
	  
	  alert(tel);
	  
	  var user = '';
 
      var req1 = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
      req1.open ('get', 'get_bill2.php?tel=' + tel ,false);
 
		req1.onreadystatechange = function (){
		
			if (req1.readyState == 4 && req1.status == 200){
      
				var msg = unescape(req1.responseText );
	  
				var obj1 = eval ("(" + msg + ")");
				
				//alert(msg);
				
				//alert("myObject is " + obj.toSource());
     
				//for(var key in obj1) 
				//{
				//	alert("Key: " + key + " value: " + obj1[key]);
				//}
				
				//alert(obj1['fname']);
				
				alert(obj1['lname']);
				alert(obj1['street']);
				
				document.getElementById("name").value = obj1['fname'] ;
				document.getElementById("lastname").value = obj1['lname'] ;
				document.getElementById("address").value = obj1['street'] ;
     
			}
		}
		req1.send(null);
     

   
  }
  catch(e){
   alert(e);
  } 
  
  
}


function  generateproductid()
 {
  try{
   
      var custid = document.getElementById("product_id").value;
      var pako = document.getElementById("pako").value;
      
      //alert(custid);
  
    if(custid == "")
    {  
      var req1 = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
      req1.open ('get', 'getproductid.php?pako=' + pako,false);
 
      req1.onreadystatechange = function (){
      if (req1.readyState == 4 && req1.status == 200){
      var msg = unescape(req1.responseText );
    
      
     //alert(msg);
     
     document.getElementById("newid").innerHTML = msg;
     
    }
   }
     req1.send(null);
     
   }
   else
   {
	  
	   var new_id = eval(custid) + 1;
	   document.getElementById("product_id").value =  new_id;
	   
	   
   }
   
  }
  catch(e){
   alert(e);
  } 
  
  
}
   
   



function generateid()
 {
  try{

   
   
      var custid = document.getElementById("custid").value;
      
      //alert(custid);
  
    if(custid == "")
    {  
      var req1 = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
      req1.open ('get', 'getcustid.php?',false);
 
      req1.onreadystatechange = function (){
      if (req1.readyState == 4 && req1.status == 200){
      var msg = unescape(req1.responseText );
    
      
     //alert(msg);
     
     document.getElementById("cid").innerHTML = msg;
     
    }
   }
     req1.send(null);
     
   }
   else
   {
	  
	   var newid = eval(custid) + 1;
	   document.getElementById("custid").value =  newid;
	   
	   
   }
 
     
     
     
   
  }
  catch(e){
   alert(e);
  } 
     
     
 
} 



	

function testmuli()
 {


 var city = document.getElementById("muli"); 
 alert(city.value);
 
}


function getregcust()
 {
 try{
	 
 	var fname = document.getElementById("search_byCustomerName");
 	//var city = document.getElementById("search_byCity");
 	var lname = document.getElementById("search_byCustomerSurname");
 	var id =document.getElementById("search_byCustomerId");
 	var region =document.getElementById("region");
 	var lloji = document.getElementById("lloji");
 
 

/*
							 
 if(document.getElementById("modifikim").checked == true)
 {
	 
	 lloji = document.getElementById("modifikim").value;
     //alert(lloji);	 
	 
 }
 else if(document.getElementById("demontim").checked == true)
 {
	 
	 lloji = document.getElementById("demontim").value;
     //alert(lloji);	 
	 
 }
 else if(document.getElementById("transferim").checked == true)
 {
	 
	 lloji = document.getElementById("transferim").value;
     //alert(lloji);	 
	 
 }
 else if(document.getElementById("konsumatoriri").checked == true)
 {
	 
	 lloji = document.getElementById("konsumatoriri").value;
     //alert(lloji);	 
	 
 }
 
 else
 {
    lloji = "";	 
	 
 }

*/
 
//alert(region.value);  
  
 var req1 = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
 
 
 
 var url = 'getorders.php?name='+ fname.value + '&lastname='+ lname.value + '&id='+ id.value + '&region='+ region.value + '&lloji='+ lloji.value;

 //alert(url);
 
  req1.open ('get', url ,true);
 
      req1.onreadystatechange = function (){
      if (req1.readyState == 4 && req1.status == 200){
      var msg = unescape(req1.responseText );
     

      //alert(msg);

      
      document.getElementById("table").innerHTML = msg;
      document.getElementById("details").innerHTML = "";
      
      
      //addEvent(msg);
      req1=null;
      msg = "";
      
      clear();
      
    }
   }
     req1.send(null);
       }
  catch(e){
   alert(e);
  } 
  
   //alert('test.......');
 
} 


function getreason(reason)
{	
     	var reason = reason;
     	//alert(reason);
     	document.getElementById("unrealized_reason").value = reason;		
}



function get_adsl_list(lloji)
 {
 try{


	
	 	  
 	var fname = document.getElementById("search_byCustomerName");
 	var lname = document.getElementById("search_byCustomerSurname");
 	var id = document.getElementById("search_byCustomerId");
 	var region = document.getElementById("region");
 	var phone = document.getElementById("phone");
 	var gjendja = "";
 	var lloji = document.getElementById("lloji").value;
 	var processtype = document.getElementById("processtype").value;
 	var gjendja = document.getElementById("gjendja_top").value;
 	var page = document.getElementById("page").value;
  
 	

 
  //var url = 'getorders.php?name='+ fname.value + '&lastname='+ lname.value + '&id='+ id.value + '&region='+ region.value + '&lloji='+ lloji.value;
  var url = 'get_adsl_list.php?name='+ fname.value + '&lastname='+ lname.value + '&id='+ id.value+ '&gjendja='+ gjendja + '&region='+ region.value + '&phone='+ phone.value + '&lloji='+ lloji + '&processtype='+ processtype + '&page='+ page;
  
  document.getElementById("table").innerHTML = "<div align='center'><img src='./images/loader2.gif'><div>";
  
  //alert(url);
  
 var req1 = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
 req1.open ('get', url ,true);
 
      req1.onreadystatechange = function (){
      if (req1.readyState == 4 && req1.status == 200){
      var msg = unescape(req1.responseText );
     

      //alert(msg);

      
      document.getElementById("table").innerHTML = msg;
      document.getElementById("details").innerHTML = "";
      
      
      //addEvent(msg);
      req1=null;
      msg = "";
      
      clear();
      
    }
   }
     req1.send(null);
       }
  catch(e){
   alert(e);
  } 
  
 
} 



function getmodregcust(lloji)
 {
 try{



	
	 	  
 	var fname = document.getElementById("search_byCustomerName").value;
 	var lname = document.getElementById("search_byCustomerSurname").value;
 	var id = document.getElementById("search_byCustomerId").value;
 	var region = document.getElementById("region").value;
 	var phone = document.getElementById("phone").value;
 	var lloji = document.getElementById("lloji").value;
 	//var processtype = document.getElementById("processtype").value;
 	var gjendja = document.getElementById("gjendja_top").value;
 	var page = document.getElementById("page").value;
  

	var url = 'getmodorders.php?name='+ fname + '&lastname='+ lname + '&id='+ id + '&gjendja='+ gjendja + '&region=' + region + '&phone=' + phone + '&lloji=' + lloji + '&page=' + page;
  
	document.getElementById("table").innerHTML = "<div align='center'><img src='./images/loader2.gif'><div>";
  
	//alert(url);
	
	var req1 = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
	
	req1.open ('get', url ,true);
 
      req1.onreadystatechange = function (){
      if (req1.readyState == 4 && req1.status == 200){
      var msg = unescape(req1.responseText );
     

      //alert(msg);

      
      document.getElementById("table").innerHTML = msg;
      document.getElementById("details").innerHTML = "";
      
      
      //addEvent(msg);
      req1=null;
      msg = "";
      
      clear();
      
    }
   }
     req1.send(null);
       }
  catch(e){
  		  	txt="Kishe nje gabim!!!!!!!!!.\n\n";
  			txt+="Shpjegimi: " + e.description + "\n\n";
  			txt+="Lajmeroni Administratorin: " + e.message + " " +e.lineNumber + " .\n\n";
  			alert(txt);
			return false;
  } 

  
 
} 

//delete system for administration

function removeitem(id, actionid)
{
	
 try{
	
 	var id = id;
 	var actionid = actionid;
 	
 	alert(remaction);
 	
 	if(actionid == 1)
 	{
	 	var remaction = "removepackage"; 	
 	}
 	else if(actionid == 2)
 	{
	 	var remaction = "removeuser"; 	
 	}
 	else if(actionid == 3)
 	{
	 	var remaction = "removeproduct"; 	
 	}
 	else if(actionid == 4)
 	{
	 	var remaction = "removeregion"; 	
 	}
 	else if(actionid == 5)
 	{
	 	var remaction = "resetpassword"; 	
 	}
 	
 	
 	var url = 'kerkesat.php?action=' + remaction + '&id=' + id;


 	
    var req1 = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
 	req1.open ('get', url ,true);
 
 	
      req1.onreadystatechange = function (){
      if (req1.readyState == 4 && req1.status == 200){
      var msg = unescape(req1.responseText );

      //alert(msg);
      req1=null;     
      clear();
          
    }
   }
     req1.send(null);
     
     location.reload(true);
     
     //alert('test');
     
     //getpackages();
     
      
       }
  catch(e){
   alert(e);
  } 
  
 
} 



function change_password_check()
{
	
 try{
	
	 
	 var password = document.getElementById("password").value;
	 var new_password = document.getElementById("new_password").value;
	 var confirm_password = document.getElementById("confirm_password").value;
	

	 
	 if(new_password.length < 7)
	 {
		 alert("Fjalekalimi i ri duhet te jete me gjatesi minimum 7.");
		 return false;
	 }
	 
	 if(new_password.length > 15)
	 {
		 alert("Fjalekalimi i ri duhet te jete me gjatesi maximum 15.");
		 return false;
	 }
	 
	 
	 if (new_password != confirm_password)
	 {
		 alert("Fjalekalimi i ri dhe i konfirmuar nuk jane te njejt.");
		 return false;
		 
	 }
	 
	 
      
       }
  		catch(e){
   		alert(e);
  } 
  
 
}




function resetpassword(id)
{
	
 try{
	
 	var id = id;
 	
 	//alert(id);
 	
	var remaction = "resetpassword"; 	
 	var url = 'kerkesat.php?action=' + remaction + '&id=' + id;

 	//alert(url);
 	
    var req1 = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
 	req1.open ('get', url ,true);
 
 	
      req1.onreadystatechange = function (){
      if (req1.readyState == 4 && req1.status == 200){
      var msg = unescape(req1.responseText );
      
      alert(msg);
      
      document.getElementById("response").innerHTML = msg;

      
      
      req1=null;     
      clear();
          
    }
   }
     req1.send(null);
     
     
     
     location.reload(true);
     
      
       }
  catch(e){
   alert(e);
  } 
  
 
}


function getpackages()
{
	
 try{
	
 	var id = id;
 	var url = 'kerkesat.php?action=getpakos';


 	alert(url);
 	
    var req1 = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
 	req1.open ('get', url ,true);
 
 	
      req1.onreadystatechange = function (){
      if (req1.readyState == 4 && req1.status == 200){
      var msg = unescape(req1.responseText );
      
      document.getElementById("packagediv").innerHTML = "vvvvv";

      req1=null;     
      clear();
          
    }
   }
     req1.send(null);
     
     alert('test');
     //getpackages();
     
      
       }
  catch(e){
   alert(e);
  } 
  
 
} 



function get_employees(loc_id)
{
	
 try{
	 
	
 	//var level = document.log_user_frm.level_code.value; 	
 	//var region = document.log_user_frm.region.value;
 	
 	
 	var loc_id = loc_id; 	
 	//var region = region;
 	
 	//alert(loc_id);

 	if(loc_id == "")
 	{
	 	alert("Ju lutem zgjidhni lokacionin dhe rifreskoni faqen!");
	 	return false;	
	 	
 	}
 	
 	var url = 'kerkesat.php?action=getemployees&loc_id=' + loc_id ;

    var req1 = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
 	req1.open ('get', url ,true);
 
      req1.onreadystatechange = function (){
      if (req1.readyState == 4 && req1.status == 200){
      var msg = unescape(req1.responseText );
      
      //alert(msg);
      
      document.getElementById("employees").innerHTML = msg;

      req1=null;     
      clear();
          
    }
   }
     req1.send(null);
     
     
      
   }
   catch(e){
   alert(e);
  } 
  
 
} 




function get_locations(level,region)
{
	
 try{
	 
	
 	//var level = document.log_user_frm.level_code.value; 	
 	//var region = document.log_user_frm.region.value;
 	
 	

 	
 	
 	var level = level; 	
 	var region = region;
 	

 	if(region == "")
 	{
	 	alert("Ju lutem zgjidhni regjionin dhe rifreskoni faqen!");
	 	//this.form.level_code.selectedIndex = 0;
	 	//document.formName.selectName.options[0].selected = true; 
	 	//alert(this.form.level_code.value);
	 	
	 	return false;	
	 	
 	}
 	
 	
 	var url = 'kerkesat.php?action=getlocations&level=' + level + "&region=" + region;


 	//alert(url);
 	
    var req1 = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
 	req1.open ('get', url ,true);
 
 	
      req1.onreadystatechange = function (){
      if (req1.readyState == 4 && req1.status == 200){
      var msg = unescape(req1.responseText );
      
      //alert(msg);
      
      document.getElementById("location1").innerHTML = msg;

      req1=null;     
      clear();
          
    }
   }
     req1.send(null);
     
     
      
       }
  catch(e){
   alert(e);
  } 
  
 
} 



function removefromlist(id)
{
	
 try{
	
 	var id = id;
 	var url = 'kerkesat.php?action=removefromlist&id=' + id;


 	//alert(url);
 	
    var req1 = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
 	req1.open ('get', url ,true);
 
 	
      req1.onreadystatechange = function (){
      if (req1.readyState == 4 && req1.status == 200){
      var msg = unescape(req1.responseText );
      
      
      
      //document.getElementById("table").innerHTML = msg;
      //document.getElementById("details").innerHTML = "";

      req1=null;     
      clear();
          
    }
   }
     req1.send(null);
     
     //alert('test');
     getrealizedorders();
     
      
       }
  catch(e){
   alert(e);
  } 
  
 
} 



function getrealizedorders()
{
	
 try{
	
 	var fname = document.getElementById("search_byCustomerName");
 	//var city = document.getElementById("search_byCity");
 	var lname = document.getElementById("search_byCustomerSurname");
 	var id =document.getElementById("search_byCustomerId");
 	var region =document.getElementById("region");
 	var gjendja = '';
 	var lloji = document.getElementById("lloji").value;
 	
 	
 	if(document.getElementById("pjeserishtrealizuar1").checked == true)
 	{
	 
	 	gjendja = document.getElementById("pjeserishtrealizuar1").value;
     	//alert(gjendja);	 
	 
 	}
  	else if(document.getElementById("realizuar1").checked == true)
 	{
	 
	 	gjendja = document.getElementById("realizuar1").value;
     	//alert(gjendja);	 
	 
 	}

 
 	var url = 'getmodorders.php?name='+ fname.value + '&lastname='+ lname.value + '&id='+ id.value+ '&gjendja='+ gjendja + '&region='+ region.value + '&case=realized&lloji=' + lloji;


 	//alert(url);
 	
    var req1 = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
 	req1.open ('get', url ,true);
 
      req1.onreadystatechange = function (){
      if (req1.readyState == 4 && req1.status == 200){
      var msg = unescape(req1.responseText );
      
      
      
      document.getElementById("table").innerHTML = msg;
      document.getElementById("details").innerHTML = "";


      req1=null;     
      clear();
          
    }
   }
     req1.send(null);
     
      
       }
  catch(e){
   alert(e);
  } 
  
 
} 


function getresponse(url)
 {
 try{
	

 	var url = url;
 	
 	alert(url);
  
 	var req1 = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
 	req1.open ('get', url ,true);
 
      req1.onreadystatechange = function (){
      if (req1.readyState == 4 && req1.status == 200){
      var msg = unescape(req1.responseText );
     
      var t1 = msg;
      alert(t1);
      
      return t1;

      req1=null;     
      clear();
          
    }
   }
     req1.send(null);
       }
  catch(e){
   alert(e);
  } 
  
 
} 







function gettransregcust()
 {
 try{
	
	 
	 
 var fname = document.getElementById("search_byCustomerName");
 var city = document.getElementById("search_byCity");
 var lname = document.getElementById("search_byCustomerSurname");
 var id =document.getElementById("search_byCustomerId");
 
 var gjendja = "";

							 
 if(document.getElementById("nukRealizohet1").checked == true)
 {
	 
	 gjendja = document.getElementById("nukRealizohet1").value;
     //alert(gjendja);	 
	 
 }
 else if(document.getElementById("nePritje1").checked == true)
 {
	 
	 gjendja = document.getElementById("nePritje1").value;
     //alert(gjendja);	 
	 
 }
 else if(document.getElementById("neProcesim1").checked == true)
 {
	 
	 gjendja = document.getElementById("neProcesim1").value;
     //alert(gjendja);	 
	 
 }
  else if(document.getElementById("realizuar1").checked == true)
 {
	 
	 gjendja = document.getElementById("realizuar1").value;
     //alert(gjendja);	 
	 
 }
 
 var region =document.getElementById("mainregion");
 //var gjendja3 =document.getElementById("neProcesim1");
 //var gjendja4 =document.getElementById("realizuar1");

  
  
 var req1 = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
 req1.open ('get', 'gettransorders.php?city=' + city.value + '&name='+ fname.value + '&lastname='+ lname.value + '&id='+ id.value+ '&gjendja='+ gjendja + '&region='+ region.value,true);
 
      req1.onreadystatechange = function (){
      if (req1.readyState == 4 && req1.status == 200){
      var msg = unescape(req1.responseText );
     

      //alert(msg);

      
      document.getElementById("table").innerHTML = msg;
      document.getElementById("details").innerHTML = "";
      
      
      //addEvent(msg);
      req1=null;
      msg = "";
      
      clear();
      
    }
   }
     req1.send(null);
       }
  catch(e){
   alert(e);
  } 
 
}


//lista e te gjitha sherbimeve ne pako

function getpackprod(divname, pakotype, pako, field, filter)
 {
 try{

	  	var divname = divname;
	   	var pakotype = pakotype;
	   	var pakoname = pakoname;
	   	var field = field;
		var filter = filter;
	   	
	   	//alert(divname);
 		//var pako = document.getElementById(pakotype);
 		
 		var pako = pako;
 		
 		//alert(pako);

 		
 if(pako != "")
 {
	 
 		var req1 = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
 	    var url = 'getpackageproducts.php?pako='+ pako + "&pname=" + pakotype + "&field=" + field + "&filter=" + filter;
 
 	  //alert(url);
 
 	  req1.open ('get', url ,true);
 
      req1.onreadystatechange = function (){
      if (req1.readyState == 4 && req1.status == 200){
      var msg = unescape(req1.responseText);
     
      //alert(msg);
 
      document.getElementById(divname).innerHTML = msg;
           
      
      clear();
      
    }
   }
     req1.send(null);
 }
 else
 {
	 document.getElementById(divname).innerHTML = "";
  	 
 }
     
       }
  catch(e){
   alert(e);
  } 
  
 
}




function getpackid()
 {
 try{


 var req1 = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
 var url = 'getpackageid.php';
 
 //alert(url);
 
 req1.open ('get', url ,true);
 
      req1.onreadystatechange = function (){
      if (req1.readyState == 4 && req1.status == 200){
      var msg = unescape(req1.responseText );
     
      //alert(msg);
 
      document.getElementById("newid").innerHTML = msg;
           
      clear();
      
    }
   }
     req1.send(null);

     
       }
  catch(e){
   alert(e);
  } 
  
 
}


//get the content for the order type

function getordercontent()
 {
 try{
	 
	var lloji = document.getElementById("lloji").value;
	//alert(lloji);
	
 	var req1 = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
 	var url = 'getordertype.php?lloji=' + lloji;
 
 	//alert(url);
 
 	req1.open ('get', url ,true);
 
      req1.onreadystatechange = function ()
      {
      	if (req1.readyState == 4 && req1.status == 200)
      	{
      		var msg = unescape(req1.responseText );
      		//alert(msg);
      		document.getElementById("cont").innerHTML = msg;
      		clear();
      
    	}
   	  }
     req1.send(null);
     
       }
  catch(e)
  {
   alert(e);
  } 
  
 
}


function switchMenu(obj)
{
	
	var el = document.getElementById(obj);
	
	if ( el.style.display != 'none' ) {
		el.style.display = 'none';
		}
	else {
		el.style.display = '';
	}


}


function edit_adsl(id)
 {
 try{

	
	 	
	 var div_array = new Array();
	 
	 div_array["1"] = "test_div";
	 div_array["2"] = "test_div";
	 div_array["3"] = "test_div";
	 div_array["4"] = "test_div"; 
	 div_array["5"] = "linja2_div"; 
	 div_array["6"] = "prf_div";
	 div_array["7"] = "mont_div";
	 div_array["8"] = "test_div";
	 div_array["9"] = "mdf_div";
	 div_array["10"] = "test_div";
	 div_array["11"] = "it_div";
	 div_array["12"] = "it_div";
	 div_array["13"] = "ngn_div";
	 div_array["14"] = "ngn_div";
	 div_array["15"] = "test_div";
	 
	
	 
	 var costid = id;
	 var processtype = processtype;
	 var mode = mode;
	 
	 var archive_type = document.getElementById("type").value;
	 var user_level = document.getElementById("user_level").value;
	 
	 
	 //get the div element of the current user
	 var level_div = div_array[user_level];
	 
	 //alert(level_div);
	 
	 var archive = archive;

 
 //alert(mregion.value);  
  
 var req1 = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
 var url = 'adsl_edit.php?id='+ costid + "&processtype=" + processtype + "&mode=" + mode + "&type=" + archive;
 
 //alert(url);
 
 req1.open ('get', url ,true);
 
      req1.onreadystatechange = function (){
      if (req1.readyState == 4 && req1.status == 200){
      var msg = unescape(req1.responseText );
     
      //alert(msg);
 
      	document.getElementById("details").innerHTML = msg;
      	window.location.hash="#details_section";
      

      //open the menu of the current user
      //switchMenu(level_div);
      
           
      clear();
      
    }
   }
     req1.send(null);
       }
  catch(e){
   alert(e);
  } 
  
 
}




function editoKerkesen(id, processtype, mode, archive, archive_table)
 {
 try{

	 	
//(1)Administrator
//(2)Menaxhementi Qendror
//(3)QKK
//(4)Shtitja
//(5)Linja 2
//(6)Perfshirja
//(7)Kryemontator
//(8)Menaxhmenti Rajonal
//(9)MDF
//(10)Teknik
//(11)ITS
//(12)Njesia e Sherbimeve
//(13)NGN
//(14)EWSD
//(15)Qendra e Thirrjeve

 
	 var div_array = new Array();
	 
	 div_array["1"] = "test_div";
	 div_array["2"] = "test_div";
	 div_array["3"] = "test_div";
	 div_array["4"] = "test_div"; 
	 div_array["5"] = "linja2_div"; 
	 div_array["6"] = "prf_div";
	 div_array["7"] = "mont_div";
	 div_array["8"] = "test_div";
	 div_array["9"] = "mdf_div";
	 div_array["10"] = "test_div";
	 div_array["11"] = "it_div";
	 div_array["12"] = "it_div";
	 div_array["13"] = "ngn_div";
	 div_array["14"] = "ngn_div";
	 div_array["15"] = "test_div";
	 
	
	 
	 var costid = id;
	 var processtype = processtype;
	 var mode = mode;
	 
	 var archive_type = document.getElementById("type").value;
	 var user_level = document.getElementById("user_level").value;
	 
	 
	 //get the div element of the current user
	 var level_div = div_array[user_level];
	 
	 //alert(level_div);
	 
	 var archive = archive;
	 
	 var archive_table = archive_table;

 
 //alert(archive_table);  
  
 var req1 = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
 var url = 'editorder.php?id='+ costid + "&processtype=" + processtype + "&mode=" + mode + "&type=" + archive + "&archive_table=" + archive_table;
 
 //alert(url);
 
 req1.open ('get', url ,true);
 
      req1.onreadystatechange = function (){
      if (req1.readyState == 4 && req1.status == 200){
      var msg = unescape(req1.responseText );
      
        //alert(msg);
        
      	document.getElementById("details").innerHTML = msg;
      	window.location.hash="#details_section";
         
      clear();
      
    }
   }
     req1.send(null);
       }
  catch(e){
   alert(e);
  } 
  
 
}



function fshiKerkesen(id)
 {
 try{
		
	var answer = confirm("A deshironi ta fshieni kerkesen?");
	
	if (answer)
	{
		
	 	var costid = id;
 		//alert(mregion.value);  

 	  
 		var req1 = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
 		var url = 'delete_order.php?id='+ costid ;
 
 		//alert(url);
 
 		req1.open ('get', url ,true);
 
      	req1.onreadystatechange = function ()
      	{
      		if (req1.readyState == 4 && req1.status == 200)
      		{
      			var msg = unescape(req1.responseText );
     
      			
				msg = msg.replace(/^\s*|\s*$/g,'');
      			
      			alert(msg);
      			
      			getmodregcust('modifikim');
 
      			//document.getElementById("details").innerHTML = msg;

           
      			clear();
      
    		}
   		}
     req1.send(null);
     
     
     
    }
	else
	{
		
		// not delete
	}
     
     
       }
  catch(e){
   alert(e);
  } 
  
 
}





function test_this(id)
 {
 try{
		
	alert(id);
	
	if (id > 0)
	{
		

	  
	 	var costid = id;
 		//alert(mregion.value);
 		
 		var params  = "?id=" + costid ;  

 	  
 		var req1 = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
 		var url = 'test_this.php' ;
 		
 		req1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		req1.setRequestHeader("Content-length", params.length);
		req1.setRequestHeader("Connection", "close");
 
 		alert(url);
 
 		req1.open ('post', url ,true);
 
      	req1.onreadystatechange = function ()
      	{
      		if (req1.readyState == 4 && req1.status == 200)
      		{
      			var msg = unescape(req1.responseText );
     
				alert(msg);
           
      			clear();
      
    		}
   		}
     req1.send(params);
     
     
     
    }
	else
	{
		
		// not delete
	}
     
     
       }
  catch(e){
   alert(e);
  } 
  
 
}





function arkivoKerkesen(id)
 {
 try{
		
    var answer = confirm("A deshironi ta arhivoni kerkesen?");
	
        if (answer)
	{
	  
	 	var costid = id;
 		//alert(mregion.value);  

 	  
 		var req1 = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
 		var url = 'archive_order.php?id='+ costid ;
 
 		//alert(url);
 
 		req1.open ('get', url ,true);
 
            req1.onreadystatechange = function ()
            {
      		if (req1.readyState == 4 && req1.status == 200)
      		{
      			var msg = unescape(req1.responseText );
     
      			msg = msg.replace(/^\s*|\s*$/g,'');
      			
			alert(msg);

			getmodregcust('modifikim');
           
      			clear();
      
    		}
            }
        
            req1.send(null);
     
        }
	else
	{
		
		// not delete
	}
     
     
       }
  catch(e){
   alert(e);
  } 
  
 
}





function nxjerKerkesen(id, archive_table)
 {
 try{
		
	var answer = confirm("A deshironi ta nxirni kerkesen?");
	
	if (answer)
	{
            
		var costid = id;
		var archive_table = archive_table;
		  
		  
 		var req1 = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
 		var url = 'unarchive_order.php?id='+ costid + '&archive_table='+ archive_table ;
 
 		//alert(url);
 
 		req1.open ('get', url ,true);
 
      	req1.onreadystatechange = function ()
      	{
      		if (req1.readyState == 4 && req1.status == 200)
      		{
      			var msg = unescape(req1.responseText );
      			
      			msg = msg.replace(/^\s*|\s*$/g,'');
     
      			alert(msg);

      			getreports(archive_table);
           
      			clear();
      
    		}
   		}
     req1.send(null);
     
     
     
    }
	else
	{
		
		// not delete
	}
     
     
       }
  catch(e){
   alert(e);
  } 
  
 
}



function getmoddetails(id)
 {
 try{
	
 //alert(id);
 var costid = id;
 
 //alert(mregion.value);  
  
 var req1 = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
 var url = 'getmodorderdetails.php?id='+ costid;
 
 //alert(url);
 
 req1.open ('get', url ,true);
 
      req1.onreadystatechange = function (){
      if (req1.readyState == 4 && req1.status == 200){
      var msg = unescape(req1.responseText );
     

      //alert(msg);

      
      document.getElementById("details").innerHTML = msg;
      
      clear();
      
    }
   }
     req1.send(null);
       }
  catch(e){
   alert(e);
  } 
 
}



function gettransdetails(id)
 {
 try{
	
	  
	 //alert(id);
	 
	 
	 var costid = id;


 
 //alert(mregion.value);  
  
 var req1 = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
 var url = 'gettransorderdetails.php?id='+ costid;
 
 //alert(url);
 
 req1.open ('get', url ,true);
 
      req1.onreadystatechange = function (){
      if (req1.readyState == 4 && req1.status == 200){
      var msg = unescape(req1.responseText );
     

      //alert(msg);

      
      document.getElementById("details").innerHTML = msg;
      
      
      
      //addEvent(msg);
      //req1=null;
      //msg = "";
      
      clear();
      
    }
   }
     req1.send(null);
       }
  catch(e){
   alert(e);
  } 
 
}



function getdetails(id)
 {
 try{
	
	  
	 //alert(id);
	 
	 
	 var costid = id;
	 var lloji = document.getElementById("lloji").value;

  
 	var req1 = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
 	var url = 'getorderdetails.php?id='+ costid + "&lloji=" + lloji;
 
 //alert(url);
 
 req1.open ('get', url ,true);
 
      req1.onreadystatechange = function (){
      if (req1.readyState == 4 && req1.status == 200){
      var msg = unescape(req1.responseText );
     

      //alert(msg);

      
      document.getElementById("details").innerHTML = msg;
      
      
      
      //addEvent(msg);
      //req1=null;
      //msg = "";
      
      clear();
      
    }
   }
     req1.send(null);
       }
  catch(e){
   alert(e);
  } 
  
   //alert('test.......');
 
} 





function clear()
{
	
	if(document.getElementById("search_byCustomerName"))
	{
		document.getElementById("search_byCustomerName").value= "";
	}
	
	if(document.getElementById("search_byCustomerSurname"))
	{
	document.getElementById("search_byCustomerSurname").value= "";
	}
	
	if(document.getElementById("search_byCustomerId"))
	{
	document.getElementById("search_byCustomerId").value= "";
	}
	//document.getElementById("search_byCity").value= "";
}




function set_value(element, val)
{
	
	var element = element;
	var val = val;

	document.getElementById(element).value = val;

	
}


function gettype(val)
{
	//
	var val = val ;
	
	
 	if(document.getElementById("aktivizim").checked == true)
 	{
  	 	//alert(document.getElementById("aktivizim").value);
  	 	document.product_frm.lloji_modifikimit.value = document.getElementById("aktivizim").value;
	 
 	}
 	else if(document.getElementById("deaktivizim").checked == true)
 	{
  	 	//alert(document.getElementById("deaktivizim").value);
  	 	document.product_frm.lloji_modifikimit.value = document.getElementById("deaktivizim").value;
	 
 	}
 	
 	if(document.getElementById("aktivizim").checked == true && document.getElementById("deaktivizim").checked == true)
 	{
	 	document.product_frm.lloji_modifikimit.value = document.getElementById("aktivizim").value + "-" + document.getElementById("deaktivizim").value
  	 	//alert("both");
	 
 	}
 	
	if(document.getElementById("aktivizim").checked == false && document.getElementById("deaktivizim").checked == false)
 	{
	 	document.product_frm.lloji_modifikimit.value = "";
  	 	//alert("both");
	 
 	}
 	
	//document.product_frm.lloji_modifikimit.value = val;
	//alert(document.product_frm.lloji_modifikimit.value);
}



function addEvent(msg) {
  var ni = document.getElementById('table');
  var numi = document.getElementById('theValue');
  var num = (document.getElementById("theValue").value -1)+ 2;
  numi.value = num;
  var divIdName = "Div1";
  var newdiv = document.createElement('div');
  newdiv.setAttribute("id",divIdName);
  var htm = msg;
  //var htm = "Element Number " + num + " has been added! <a href=\"javascript:;\" onclick=\"removeElement(\'"+divIdName+"\')\">Remove the element &quot;"+divIdName+"&quot;</a>";
  
  //alert(htm);
  newdiv.innerHTML = htm;
  ni.appendChild(newdiv);
}



function removeElement(divNum) {
  var d = document.getElementById('table');
  var olddiv = document.getElementById(divNum);
  d.removeChild(olddiv);
}


	
	
	
	function requestObject(action, code, func){
		try{
			req = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");		
 			req.open('get', '/tk/message?action='+action+'&code='+code);
    		req.onreadystatechange = eval(func);
    		req.send(null);	
		}
		catch(e){
			alert(e);
		}
	}		
	
	function checkInteger(event){
	return (event.keyCode >= 48 && event.keyCode <= 57);
	}


	function is_leap_year(year){
	return (((year % 4) == 0) && ((year % 100) != 0)) || ((year % 400) == 0);
	}

	function validate_date(is_required, date)
	{
		if(!is_required && date == '')
		return true;
			var re = /^(3[01]|0[1-9]|[12]\d)\/(0[1-9]|1[012])\/\d{4}/;
			if (re.test(date)) {
			var dateArr = date.split('/');
			var day = parseInt(dateArr[0]);
			var month = parseInt(dateArr[1]);
			var year = parseInt(dateArr[2]);
			
		switch (month){
			case 2:
			var is_leap = is_leap_year(year);
				if(is_leap && day > 29)
					return false;
				else if (!is_leap && day > 28)
					return false;
			break;
			case 4:
			case 6:
			case 9:
			case 11:
		if(day > 30)
		return false;
		break;
		}
	return true;
	}
return false;
}

	
	