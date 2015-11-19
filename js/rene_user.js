/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

        var dialog_user_add , dialog_user_edit, form,emailRegex, name, allFields, tips ;
     


        function get_users()
        {
         
            var classname = "rene_user";
            var method = "get_all_users";
            var args = new Array('');
         

         
            var class_data = {"classname": classname, "method": method, "args": args };
         
         
            //console.log(class_data);
            //get all employees and load them in the select box
            var request =  $.ajax({
            type: 'POST',
            url: 'controller.php',
            data: class_data  ,
            dataType: "text" 
                
            });
        
            request.done(function(msg){
            
            //alert(msg); 
            
                var json = jQuery.parseJSON(msg);
            
                //console.log(json.length)
            
                //console.log(json);
            
                var inHTML = "";
            
                //if employees exist
                if(json.length > 0)
                {
                    inHTML += '<option value="0">==============</option>'; 
                }
            
                // clean the table first
                $( "#rene_users tbody" ).empty();
            
                //loop through array of json objects
                $.each(json, function(idx, obj) {
                    
                    var user_json = JSON.stringify(obj);
                
                    //build html option
                    inHTML += "<option value='" + obj.emp_id + "' >" + obj.emp_fname + "  " + obj.emp_lname + "</option>" ;
                
                    //build the list by first removing the old list
                    $("#user_list").empty().append(inHTML);
               
                    
                    //console.log(obj.emp_id);
                    //
                    //build a table to display all the users
                    //$( "#rene_users tbody" ).empty();
                
                    $( "#rene_users tbody" ).append( "<tr>" +
                        "<td>" + obj.id + "</td>" +
                        "<td>" + obj.emp_id + "</td>" +
                        "<td>" + obj.emp_fname + "</td>" +
                        "<td>" + obj.emp_lname + "</td>" +
                        "<td>" + obj.emp_phone + "</td>" +
                        "<td>" + obj.emp_email + "</td>" +
                        "<td>" + obj.emp_level + "</td>" +
                        "<td><input type=button id=\"edit_user\" value=\"Edit\" name='" + user_json  +"'></td>" +
                        "</tr>" );
                
                    
                    //check if exists
                    //$("#category_id").empty().append(inHTML);
                                                
                });

            
            });
        
                        
            request.fail(function(jqXHR, textStatus) {
                alert('Kishte nje problem me listen e perdoruesve. Lajemro Administratorin !!!');  
            });
         
            //load the orders on the page load

         
        }

   
    
    
    
        function add_user(id, fname , lname, phone, email,  level, password)
        {
            
         
            //console.log("oid" + order_id);
         
            var classname = "rene_user";
            var method = "add_user";      
            var args = [];
            
            
            args.push(id, fname , lname, phone, email,  level, password);

         
            // disable to prevent multible 
            //$(this).prop('disabled',true);
         
            var class_data = {"classname": classname, "method": method, "args": args }; // JSON object can be passed to php 
         
            var request =  $.ajax({
                type: 'POST',
                url: 'controller.php',
                data: class_data,
                dataType: "text" 
                
            });
        
           request.done(function(msg){
                alert(msg); 
                
                // refresh order list by simulating the click even on List orders button with spec id #order_list
                
                //remove previous list               
                //$( "#rene_orders tbody" ).empty();
                                                
            
                // reload order list
                //$( "#order_list" ).trigger( "click" );
                 
                 //return true;
                 get_users();
                
            });
        
            request.fail(function(jqXHR, textStatus) {
                alert('#delete_order fail.'); 
                
                return '#add_cat fail';
            });
            
            
            
            
            
        }
        
        
        function delete_user()
        {
            
         
            //console.log("oid" + order_id);
         
            var classname = "rene_user";
            var method = "delete_user";      
            var args = [];
            
            
            var user_nr = $("#user_nr_edit").val();
         
            args.push(user_nr);
         
            // disable to prevent multible 
            //$(this).prop('disabled',true);
         
            var class_data = {"classname": classname, "method": method, "args": args }; // JSON object can be passed to php 
         
            var request =  $.ajax({
                type: 'POST',
                url: 'controller.php',
                data: class_data,
                dataType: "text" 
                
            });
        
           request.done(function(msg){
                alert(msg); 
                
                //reload users
                get_users();
                // refresh order list by simulating the click even on List orders button with spec id #order_list
                
                //remove previous list               
                //$( "#rene_orders tbody" ).empty();
                                                
            
                // reload order list
                //$( "#order_list" ).trigger( "click" );
                 
                 return true;
                
            });
        
            request.fail(function(jqXHR, textStatus) {
                alert('#delete_user fail.'); 
                
                return '#fail';
            });
            
            
            
            
            
        }
        
        
        function update_user()
        {
            
         
            //console.log("oid" + order_id);
         
                
            var user_nr = $("#user_nr_edit").val();
            var emp_id = $("#user_id_edit").val();
            var emp_fname = $("#user_fname_edit").val();
            var emp_lname = $("#user_lname_edit").val();        
            var emp_phone = $('#user_phone_edit').val();
            var emp_email = $('#user_email_edit').val();            
            var password = $('#user_password_edit').val();        
            var password_re = $('#user_password_re_edit').val();            
            var emp_level = $("#user_level_edit option:selected").val();
            
            
            console.log(password);
            console.log(password_re);
            
            if( password.trim() !== password_re.trim()) 
            {
                alert("Ju lutem konfimo passwordin (*)!");
                return false;
 
            } 
            
            
            var classname = "rene_user";
            var method = "update_user";      
            var args = [];

         
            args.push(user_nr, emp_id, emp_fname, emp_lname, emp_phone, emp_email, emp_level);

            
            // disable to prevent multible 
            //$(this).prop('disabled',true);
         
         
            var class_data = {"classname": classname, "method": method, "args": args }; // JSON object can be passed to php 
         
            var request =  $.ajax({
                type: 'POST',
                url: 'controller.php',
                data: class_data,
                dataType: "text" 
                
            });
        
           request.done(function(msg){
                
                alert(msg); 
                
                get_users();
                
                // refresh order list by simulating the click even on List orders button with spec id #order_list
                
                //remove previous list               
                //$( "#rene_orders tbody" ).empty();
                                                
            
                // reload order list
                //$( "#order_list" ).trigger( "click" );
                 
                 return true;
                
            });
        
            request.fail(function(jqXHR, textStatus) {
                alert('#update_user fail.'); 
                
            });
            
            
            
            
            
        }
        
        
        
      
$(function () {
              
        
        emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ ;
        
        name = $( "#name" ) ;

        //allFields = $( [] ).add( name ); 
        tips = $( ".validateTips" );
        
    
        function add_user_btn()
        {
            
            //var prod_name = $('#prod_name').val();
            //var prod_price = $('#prod_price').val();            
            //var prod_cat = $("#category_id option:selected").val();
            
            
            var id = $('#user_id').val();
            var fname = $('#user_fname').val();
            var lname = $('#user_lname').val();
        
            var phone = $('#user_phone').val();
        
            var email = $('#user_email').val();
        
            var level = $('#user_level').val();
        
            var password = $('#user_password').val();
        
            var password_re = $('#user_password_re').val();
        
            if( !fname.trim() || !lname.trim() || !password.trim()) 
            {
                alert("Ju lutem plotesoni fushat e domosdoshme (*)!");
                return false;
            } 
        
            //password checking 
        
            if( password.trim() != password_re.trim()) 
            {
                alert("Ju lutem konfimo passwordin (*)!");
                return false;
 
            }  
            
            console.log(password);
            console.log(password_re);
        
            
            
            //console.log(cat_name);
            
            dialog_user_add.dialog( "close" );
            
            var t = add_user(id, fname , lname, phone, email,  level, password);
            
            
            
        }
 
 
        function test()
        {
            
        }
 
 
        function del_user_btn()
        {
            
            
            var res = delete_user();
            
            dialog_user_edit.dialog( "close" );
            
        }
 
 
        function edit_user_btn()
        {
            
            //console.log(cat_name);
            //var t = add_cat_func(cat_name);
            
            
            //password credentials
            
            
            
            var res = update_user();
            
            dialog_user_edit.dialog( "close" );
            
        }
        
  
        
    dialog_user_add = $( "#dialog-form-user-add" ).dialog({
            autoOpen: false,
            height: 400,
            width: 500,
            modal: true,
            buttons: {
            "Shto produktin": add_user_btn,
            Cancel: function() {
            dialog_user_add.dialog( "close" );
        }
      },
      close: function() {
        //form[ 0 ].reset();
        //allFields.removeClass( "ui-state-error" );
      }
        
    });
    
    
    dialog_user_edit = $( "#dialog-form-user-edit" ).dialog({
            autoOpen: false,
            height: 400,
            width: 500,
            modal: true,
            buttons: {
            "Edito userin": edit_user_btn,
            "Fshi userin": del_user_btn,
            Cancel: function() {
            dialog_user_edit.dialog( "close" );
            }
        },
            close: function() {
            //form[ 0 ].reset();
            //allFields.removeClass( "ui-state-error" );
      }
        
    });
    
    
    
    $(document).on( "click", "#edit_user", function() {
            
        var obj = $(this).attr("name");  
        
        // convert a json formated string into a json object
        var json = jQuery.parseJSON(obj);
        
        //console.log(json.emp_email);
        
        $("#user_nr_edit").val(json.id);
        $("#user_id_edit").val(json.emp_id);
        $("#user_fname_edit").val(json.emp_fname);
        $("#user_lname_edit").val(json.emp_lname);
        
        $('#user_phone_edit').val(json.emp_phone);
        $('#user_email_edit').val(json.emp_email);
        
        
        //change password
        
        $('#user_password').val();        
        $('#user_password_re').val();
        
        
        
        
        
        
        // goal: highlight the category that matched the one with database
        // compare json.catgory_id with ... "#category_id_edit value property - 
        // loop through #user_lvel_edit for the match
        
        
        $("#user_level_edit option").each(function(){
            
            //console.log($(this).val());
            //console.log($(this).text());
            
            //diselect other options
            $(this).prop('selected', false);
             
             
             if($(this).val() == json.emp_level)
             {
                 // set selected to true for the mathed 
                 $(this).prop('selected', true);                
             }
             
            
        }); 
        
            dialog_user_edit.dialog( "open" );
        
    });
    
    

    $('#add_user').click(function () {
         //dialog.data( 'order_id', order_id );
         //alert('ccc');
        dialog_user_add.dialog( "open" );
    });
    
        // get all the orders listed from the db
    $("#emp_tbl").click(function () {  
      
      
      get_users();
      //console.log();
        
    });
              
});