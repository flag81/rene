<?php


include_once 'session.php' ;


//echo $json = json_decode($_POST['data']);

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

?>


<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Rene Caffe</title>
  
  <link rel="stylesheet" href="css/jquery-ui.css">
  
  <script src="js/jquery-1.11.3.js"></script>
  <script src="js/jquery-ui.js"></script>
  <script src="js/rene_cat.js"></script>
  <script src="js/rene_prod.js"></script>
  <script src="js/rene_user.js"></script>
  
  <style>
    body { font-size: 92.5%; }
    input.text { margin-bottom:12px; width:95%; padding: .4em; }
    fieldset { padding:0; border:0; margin-top:25px; }
    h1 { font-size: 1.2em; margin: .6em 0; }
    div#users-contain { width: 350px; margin: 20px 0; }
    div#users-contain table { margin: 1em 0; border-collapse: collapse; width: 100%; }
    div#users-contain table td, div#users-contain table th { border: 1px solid #eee; padding: .6em 10px; text-align: left; }
    .ui-dialog .ui-state-error { padding: .3em; }
    .validateTips { border: 1px solid transparent; padding: 0.3em; }
  </style>
  
  
  <script>
        
            

        
        
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
         
            console.log("oid" + order_id);
         
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
   

      // when page load load the categories, JS
    $(window).load(function() {


      get_categories();
      get_users();
      get_products();    
      get_num_rows();
        
        //pagination();
        
            
    });



    // jquery start sytax
    $(function () {
        
        /////////////////////////////////////////////
                       
        var dialog, form,
     
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
 
 
        function addUser() {
            var valid = true;
            allFields.removeClass( "ui-state-error" );
 
            valid = valid && checkLength( name, "username", 0, 160 );

            valid = valid && checkRegexp( name, /^[a-z]([0-9a-z_\s])+$/i, "Lejohen vetem shkronja dhe numra te shenohen ne kete fushe" );

            // get data from the dialog box widget id
            var o_id = dialog.data('order_id');
            
            //get the notice
            var notice = name.val();
             
            //alert(name.val());
                
            if (valid) {
                
                // call update method
                update_order(o_id, notice);
                dialog.dialog( "close" );
            }
            
            return valid;
        }
        
        
        
        function del_order_btn()
        {
     
            var o_id = dialog.data('order_id');
            
            delete_order(o_id);
            dialog.dialog( "close" );
            
        }
        
        

 
        dialog = $( "#dialog-form" ).dialog({
            autoOpen: false,
            open: function(){
                $("#order_info").empty().append("ID:"+ dialog.data('order_id'));
            },
            height: 300,
            width: 500,
            modal: true,
            buttons: {
            "Shto shenimet": addUser,
            Cancel: function() {
            dialog.dialog( "close" );
        }
      },
      close: function() {
        form[0].reset();
        allFields.removeClass( "ui-state-error" );
      }
      
    });
    
    
    

    
    
    dialog_prod = $( "#dialog-form-prod" ).dialog({
            autoOpen: false,
            height: 300,
            width: 400,
            modal: true,
            buttons: {
            "Shto produktin": addUser,
            Cancel: function() {
            dialog_prod.dialog( "close" );
        }
      },
      close: function() {
        form[ 0 ].reset();
        allFields.removeClass( "ui-state-error" );
      }
      
      
    });
    
    
 
    form = dialog.find( "form" ).on( "submit", function( event ) {
      //event.preventDefault();
      addUser();
    });
    
    
    $(document).on( "click", "#edit_order", function() {
        
        
        var order_id = $(this).attr("name");  
        //alert(order_id);
        
        
        dialog.data( 'order_id', order_id );
        dialog.dialog( "open" );
        
    });
        
    
    
        
////////////////////////////////////////////////////////////////////



    
    

    
   ///////////// START CATEGORY///////////////////////////////////// 
   

    
    
    
 
    ///// CATEGORY END //////////////////////
    
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
        
        
        var fname = "<?php echo $fname ?>" ;
        var lname = "<?php echo $lname ?>";
        var main_id = "<?php echo $mainid ?>";
    

        $('#SelectBox').change(function () {
            
            var str = "",  
            inHTML = "",
            items;
            
            var classname = "rene_product";
            var method = "get_all_products";
            var args = new Array();
         
            var category_id = $(this).val() ;

         
            args.push(category_id);
            var class_data = {"classname": classname, "method": method, "args": args };
         
         
            //console.log(class_data);

      
            var request =  $.ajax({
                type: 'POST',
                url: 'controller.php',
                data: class_data ,
                dataType: "text" 
                
            });
        
        
            request.done(function(msg){
            
                var json = jQuery.parseJSON(msg);
                var inHTML = '';
            
            
                $.each(json, function(idx, obj) {
                
                    inHTML += '<option value="' + obj.prod_price + '">' + obj.prod_name + '</option>';                
                    $("#SelectBox2").empty().append(inHTML);
                    
                });


            });
        
                        
            request.fail(function(jqXHR, textStatus) {
                alert('#SelectBox failure');  
      
            });


        });
        



    

    $('#add').click(function () {
        inHTML = "";
        $("#SelectBox2 option:selected").each(function () {
            inHTML += '<option value="' + $(this).val() + '">' + $(this).text() + '</option>';
        });
        $("#SelectedItems").append(inHTML);
    });
    
    
  
  
    $("#SelectBox2").dblclick(function () {
    

        inHTML = "";
        total= 0 ;
    
        $("#SelectBox2 option:selected").each(function () {
            inHTML += '<option value="' + $(this).val() + '">' + $(this).text() + ' - ' + $(this).val() + '</option>';
        
        });
    
        $("#SelectedItems").append(inHTML);
    
    
        $("#SelectedItems option").each(function () {

           curr = Number($(this).val()) ;
           total += curr ;        
           
        });

        $("#selectedValues").text('Totali: ' + total);


    });

    
    $("#SelectedItems").dblclick(function () {
        $("#SelectedItems option:selected").each(function () {
        }).remove();
        
        total= 0 ;
     
        
        $("#SelectedItems option").each(function () {

           curr = Number($(this).val()) ;
           total += curr ;   
                  
        });

    $("#selectedValues").text('Totali: ' + total);
    
    
    
    });
    
    
    //build prod list
    var data_arr = [];
    
    // user info
    var emp_name = fname + " " + lname;
    
    //alert(emp_name) ;
    
            
    var emp = JSON.stringify({"name" : emp_name});
    var tot_price = JSON.stringify({"total" : total});
    
    
       
    $(document).on("click", "#delete_user",function () {  
           
         var order_id = $(this).attr("name");  
         var classname = "rene_user";
         var method = "delete_user";      
         var args = [];
         args.push(order_id);
         
         // disable to prevent multible 
         $(this).prop('disabled',true);
         
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
                $( "#rene_users tbody" ).empty();
                                                
                get_users();
                // reload order list
                //$( "#emp_list" ).trigger( "click" );
                 
            });
        
            request.fail(function(jqXHR, textStatus) {
                alert('#delete_emp fail.');  
            });
           
    });
       
       
       
    $("#add_order").click(function () { 
        
        
        var classname = "rene_orders";
        var method = "add_order";
        var args = new Array();
         
        

        var data_obj = {} ;
        var prod_list = '' ;
        
        $(this).prop('disabled',true);
        
        
        
        $("#SelectedItems option").each(function () {       
           
           var name = $(this).text() ;
           var price = $(this).val() ; 
           
           //prod_list.push(name) ;
           prod_list = prod_list + " , " + name ;
           
        });
        
       
        
        args.push(prod_list);
        args.push(main_id);
        args.push(total);
        
        console.log(args);
        
        data_obj = {"emp": emp_name, "prod_list" : prod_list, "total" : total};
        
        var class_data = {"classname": classname, "method": method, "args": args };
        
        console.log(class_data);
        
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
                
                $("#SelectedItems option").remove().end();
                $("#add_order").prop('disabled',false);
                
                
                $( "#rene_orders tbody" ).empty();
                                                         
                // reload order list
                $( "#order_list" ).trigger( "click" );
                
                
                
            });
        
            request.fail(function(jqXHR, textStatus) {
                alert('#add_order fail.');  
                $("#add_order").prop('disabled',false);
            });
      
        
        //console.log();
 
    });
    
    
    
        // get all the orders listed from the db
    $("#emp_tbl").click(function () {  
      
      
      get_users();
      //console.log();
        
    });
    
    
    
    
    // get all the orders listed from the db
    $("#order_list").click(function () {  
        
        //alert('order');
        
        //get_num_rows();
        
        //get_pagination()
        
        
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
                    //"<td><input type=button id=\"delete_order\" value=\"Fshi\" name=\"" + obj.id  +"\"></td>" +
                    "<td><input type=button id=\"edit_order\" value=\"Edito\" name=\"" + obj.id  +"\"></td>" +
                    "</tr>" );
                                                
            });

                    
                    
                    
                    
        });
        
        request.fail(function(jqXHR, textStatus) {
            alert('failure');  
        });
      
        //console.log();
        
    });
    
  
  
  
$("#add_emp").click(function () {  
        


        var id = $('#emp_id').val();
        var fname = $('#emp_fname').val();
        var lname = $('#emp_lname').val();
        
        var phone = $('#emp_phone').val();
        
        var email = $('#emp_email').val();
        
        var level = $('#emp_level').val();
        
        var password = $('#emp_password').val();
        
        var password_re = $('#emp_password_re').val();
        
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
        
       var elem =  document.getElementById('add_emp_frm').elements ;
       
       var str = '';
       
       var elem_array = {"emp_id": id,"emp_fname": fname, "emp_lname": lname , "emp_phone": phone, "emp_email": email, "emp_level": level, "emp_password": password };
           

        //console.log(elem_array);

        var request =  $.ajax({
            type: 'POST',
            url: 'add_employee.php',
            data: elem_array,
            dataType: "text" 
                
        });
        
        request.done(function(msg){
            alert(msg);  
            
            //load data
            //get_users();
            
        });
        
        
        request.fail(function(jqXHR, textStatus) {
            alert('failure');  
         });
      
      
        //console.log();
        
    });
    



    $("#add_prod").click(function () {  
        


        var category_id = $('#category_id option:selected').val();
        var prod_name = $('#prod_name').val();
        
        
        var prod_price = $('#prod_price').val();

        // convert to float
        prod_price = parseFloat(prod_price);
        
            
        //check in price a valid float
        if(isNaN(prod_price))
        {
            alert('Cmimi duhet te jete ne formatin e skakt p.sh 1.5');
            return false;
        }
        
        
        if( typeof category_id == 'undefined') 
        {
            alert("Ju lutem plotesoni kategorine!");
            return false;
        }
        
        if( ! prod_name.trim()) 
        {
            alert("Ju lutem plotesoni emrin e produktit!");
            return false;

        }
        
        
        //alert(category_id)
           
        
       var elem =  document.getElementById('add_emp_frm').elements ;
       
       var elem_array = {"category_id": category_id, "prod_name": prod_name , "prod_price": prod_price };
           

        var request =  $.ajax({
            type: 'POST',
            url: 'add_product.php',
            data: elem_array,
            dataType: "text" 
                
        });
        
        request.done(function(msg){
            alert(msg);         
        });
        
        
        request.fail(function(jqXHR, textStatus) {
            alert('failure');  
         });
      
      
        //console.log();
      
            
        
    });
    
    
    $("#add_category").click(function () {  
        

        dialog.data( 'order_id', order_id );


        var cat_name = $('#cat_name').val();
        
        if(!cat_name.trim())
        {
            alert("Ju lutem plotesoni emrin e kategorise!");
            return false;
 
        }
        
        //alert(category_id + prod_name + prod_price)
           
        
       var elem =  document.getElementById('add_emp_frm').elements ;
       
       var elem_array = {"cat_name": cat_name };
           

        var request =  $.ajax({
            type: 'POST',
            url: 'add_prod_category.php',
            data: elem_array,
            dataType: "text" 
                
        });
        
        request.done(function(msg){
            alert(msg);         
        });
        
        
        request.fail(function(jqXHR, textStatus) {
            alert('Error !!!');  
         });
      
      
      
        //console.log();          
        
    });

        
});
      

</script>
  
  
</head>

<body>
    
<?php include "rene_body.php"; ?>    

</body>
</html>