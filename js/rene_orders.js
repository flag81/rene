/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


       function update_order(order_id, order_notice)
        {
            var classname = "rene_orders";
            var method = "update_order";
            var args = new Array(order_id, order_notice);
         
  
         
            var class_data = {"classname": classname, "method": method, "args": args };
         
            var request =  $.ajax({
            type: 'POST',
            url: 'controller.php',
            data: class_data  ,
            dataType: "text" 
                
            });
        
            request.done(function(msg){
            
                alert(msg); 
                //return msg ;

            }); 
            
            request.fail(function(jqXHR, textStatus) {
                alert('Kishte nje problem me listen e perdoruesve. Lajemro Administratorin !!!');  
                //return "Kishe nje problem me shtimin e shenimeve";
            });
         
        }
        
        
        function delete_order(order_id)
        {
            
            
            var order_id = order_id; 
         
            console.log("oid:" + order_id);
         
            var classname = "rene_orders";
            var method = "delete_order";      
            var args = [];
         
            args.push(order_id);
         
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
                $( "#rene_orders tbody" ).empty();
                                                
            
                // reload order list
                $( "#order_list" ).trigger( "click" );
                 
                
            });
        
            request.fail(function(jqXHR, textStatus) {
                alert('#delete_order fail.');  
            });
            
            
        }
        
        
        function set_page(id)
        {
            //set the hidden field
            $("#current_page").val(id) ;
            $( "#order_list" ).trigger( "click" );
            
            
        }
        
        function get_num_rows()
        {
            var classname = "rene_orders";
            var method = "get_num_orders";
            var args = new Array('');
            
            var msg = ''; 
         
  
         
            var class_data = {"classname": classname, "method": method, "args": args };
         
            var request =  $.ajax({
            type: 'POST',
            url: 'controller.php',
            data: class_data  ,
            dataType: "text" 
                
            });
        
            request.done(function(msg){
            
                //alert(msg); 
                
                
               
                var obj = jQuery.parseJSON(msg);
                var cnt = obj["count(*)"];
                
                //console.log(obj["count(*)"]);
                // build pagination 
                
                
                var per_page = 10;
                var link_num = Math.ceil(cnt/per_page);
                var page_list = '<table border=1><tr>';
                
                console.log(link_num);
                
                for(var i=1 ; i<=link_num; i++)
                {
                    page_list += '<td><a href="#" id="' + i + '" onclick=set_page('+ i + ')>'+ i + '</a>' + ' ';
                    
                } 
                
                
                //$("#pagination").text('Faqet: ' + page_list);
                
                $("#pagination").empty().append(page_list);

                //

            }); 
            
            request.fail(function(jqXHR, textStatus) {
                alert('Kishte nje problem me get_num_rows. Lajemro Administratorin !!!');  
                //return "Kishe nje problem me shtimin e shenimeve";
            });
            
           
        }
        


$(function () {
    
    
     
        var dialog, dialog_order_edit, form,
     
        emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        name = $( "#name" ),

        allFields = $( [] ).add( name ),
        tips = $( ".validateTips" );
        
        
 
        function updateTips( t ) {
            tips
            .text( t )
            .addClass( "ui-state-highlight" );
            setTimeout(function() {
                tips.removeClass( "ui-state-highlight", 1500 );
            }, 500 );
        }
           
        

        function checkLength( o, n, min, max ) {
            if ( o.val().length > max || o.val().length < min ) {
                o.addClass( "ui-state-error" );
                updateTips( "Length of " + n + " must be between " +
                min + " and " + max + "." );
                return false;
            } else {
                return true;
            }
        }
 
 
        function checkRegexp( o, regexp, n ) {
            if ( !( regexp.test( o.val() ) ) ) {
                o.addClass( "ui-state-error" );
                updateTips( n );
                    return false;
            } else {
                return true;
            }
        }
 
 
        function add_note() {
            
            
            var valid = true;
            allFields.removeClass( "ui-state-error" );
 
            valid = valid && checkLength( name, "username", 0, 160 );

            valid = valid && checkRegexp( name, /^[a-z]([0-9a-z_\s])+$/i, "Lejohen vetem shkronja dhe numra te shenohen ne kete fushe" );

            // get data from the dialog box widget id
            
            var o_id = $("#order_id").val();
            
            //get the notice
            var notice = name.val();
             
            //alert(name.val());
                
            if (valid) {
                
                // call update method
                update_order(o_id, notice);
                //dialog.dialog( "close" );
            }
            
            return valid;
        }
        
        
        
        function del_order_btn()
        {
     
     
     
            //alert(user_level);
             
             if (user_level == 1)
             {
                 
                var order_id = $("#order_id").val();
                delete_order(order_id);
                 
             }
             else
             {  
                alert("Nuk keni qasje administrative per te fshire porosite");
                return false;
             }
             

            //dialog.dialog( "close" );
            
        }
    
                  
    
        function add_user_btn()
        {
            
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
        
            if( password.trim() != password_re.trim()) 
            {
                alert("Ju lutem konfimo passwordin (*)!");
                return false;
 
            }  
        
            
            //console.log(cat_name);
            
            var t = add_user(id, fname , lname, phone, email,  level, password);
            
            dialog_order_add.dialog( "close" );
            
        }
 
 

 
        function edit_user_btn()
        {
            
            //console.log(cat_name);
            //var t = add_cat_func(cat_name);
            
            
            var res = update_user();
            
            dialog_order_edit.dialog( "close" );
            
        }
        
  

    
    

    
    
    dialog_order_edit = $( "#dialog-form-order-edit" ).dialog({
            autoOpen: false,
            open: function(){
                $("#order_info").empty().append("ID:"+ dialog_order_edit.data('order_id'));
            },
            height: 400,
            width: 500,
            modal: true,
            buttons: {
            "Shto shenimet": add_note,
            "Fshi fakturen(Admin)": del_order_btn,
            Cancel: function() {
            dialog_order_edit.dialog( "close" );
        }
      },
      close: function() {
        //form[0].reset();
        allFields.removeClass( "ui-state-error" );
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
        dialog_user_add.dialog( "open" );
    });
    
    
    $(document).on( "click", "#edit_order", function() {
        
        
        var order_id = $(this).attr("name");
        $("#order_id").val(order_id)  ;
        
        
        //dialog_order_edit.data( 'order_id', order_id );        
        dialog_order_edit.dialog( "open" );
        
    });
   
    
    
    
    $("#add_order").click(function () { 
        
        
        var classname = "rene_orders";
        var method = "add_order";
        var args = new Array();

        var prod_list = '' ;
        
        $(this).prop('disabled',true);
        
        
        
        $("#order_items option").each(function () {       
           
           var name = $(this).text() ;
           var price = $(this).val() ; 
           
           //prod_list.push(name) ;
           prod_list = prod_list + " , " + name ;
           
        });
        
        
       var order_total = $("#order_total").val();
       
        
        args.push(prod_list, main_id, order_total);
        
        //console.log(args);

        var class_data = {"classname": classname, "method": method, "args": args };
        
        //console.log(class_data);
        
        //var send_data = JSON.stringify(data_obj);
      
        if(prod_list.length < 1)
        {
            
            alert('Faktura nuk duhet jete e zbrazet');
            
            $("#add_order").prop('disabled',false);
            return false;
            
            
        }    
        var request =  $.ajax({
            type: 'POST',
            url: 'controller.php',
            data: class_data,
            dataType: "text" 
                
        });
        
            request.done(function(msg){
            
                alert(msg); 
                
                // clear the order list on success
                $("#order_items option").remove().end();
                
                
                //enable to #add_order button on success
                $("#add_order").prop('disabled',false);
                
                // empty the orders table
                $( "#rene_orders tbody" ).empty();
                
                //reset to total price to 0 
                $("#order_total").val(0);
                                                         
                // reload order list by cimulating click on the button #order_list
                $( "#order_list" ).trigger( "click" );
                
                
                
            });
        
            request.fail(function(jqXHR, textStatus) {
                alert('Deshtoi shtimi i faktures ne sistem.');  
                
                $("#add_order").prop('disabled',false);
            });
 
    });
    
    
    
    
    // get all the orders listed from the db, button 
    $("#order_list").click(function () {  

        
        //clean the order list table with tbody
        $( "#rene_orders tbody" ).empty();
        
        
        var classname = "rene_orders";
        var method = "get_all_orders";
        
        var user_id = $("#emp_list").val() ;
        var from_date = $("#from_date").val() ;
        
        
        var to_date = $("#to_date").val() ;
        
        //console.log(typeof(to_date));
        
        
        if(to_date === '')
        {
            to_date = from_date ;   
        }
        
        var args = new Array(user_id );
       
        args.push(from_date);
        args.push(to_date);
        
        
        // get the current page id that was clicked
        
        // hidden element 

        var current_page = $("#current_page").val() ;
        
        args.push(current_page);
        
        
        //showfrom= per_page * (page_num -1);
        //show_to = show_from + per_page
         
        
        var class_data = {"classname": classname, "method": method, "args": args };
    
    
    
        console.log(from_date);
        console.log(to_date);


       
        //; 

        var request =  $.ajax({
            type: 'POST',
            url: 'controller.php',
            data: class_data,
            dataType: "text" 
                
        });
        
        request.done(function(msg){
            //alert(msg);  
            
            //$("#test").empty().append(msg);
                    //$("#orders").html(msg);
                    
            var json = jQuery.parseJSON(msg);
            var inHTML = "";
            
            
            
            $( "#rene_orders tbody" ).empty();
             
            //loop through json object
            $.each(json, function(idx, obj) {
                
   
                           
                 $( "#rene_orders tbody" ).append( "<tr>" +
                    "<td>" + obj.id + "</td>" +
                    "<td>" + obj.prod_list + "</td>" +
                    "<td>" + obj.total_price + "</td>" +
                    "<td>" + obj.emp_id + "</td>" +
                    "<td>" + obj.notes + "</td>" +
                    "<td>" + obj.date + "</td>" +
                    "<td><input type=button id=\"edit_order\" value=\"Edito\" name=\"" + obj.id  +"\"></td>" +
                    "</tr>" );
                                                
            });

                    
                    
                    
                    
        });
        
        request.fail(function(jqXHR, textStatus) {
            alert('failure');  
        });
      
        //console.log();
        
    });
   
    
    
    
    
    $("#order_items").dblclick(function () {
        
        
        $("#order_items option:selected").each(function () {
        }).remove();
                
        total= 0 ;
        
        $("#order_items option").each(function () {

           curr = Number($(this).val()) ;
           total += curr ;   
                  
        });

        $("#order_total").val(total);
    
    
    
    });
    
    
        
        var total ;
        var product_list = '';
        var per_page = 10 ;
        
        $( "#from_date" ).datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1,
            onClose: function( selectedDate ) {
                $( "#to_date" ).datepicker( "option", "minDate", selectedDate );
            }
        });
    
        $( "#to_date" ).datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1,
            onClose: function( selectedDate ) {
                $( "#from_date" ).datepicker( "option", "maxDate", selectedDate );
            }
        
        });
    
     
    
    
    
    
});