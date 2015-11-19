/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


    function get_products()
    {
         
            var classname = "rene_product";
            var method = "get_all_products";
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
            
                json_prod_array = json; 
                
                $( "#select_cat" ).prop("selectedIndex",0).trigger("change");
            
                //console.log(json.length)
            
                //console.log(json);
            
                var inHTML = "";
            
                //if employees exist
                if(json.length > 0)
                {
                    inHTML += '<option value="0">==============</option>'; 
                }
            
                //loop through array of json objects
                $.each(json, function(idx, obj) {
                               
                               
                var prod_json = JSON.stringify(obj);
                               
                    //console.log(prod_json);
                    //
                    //build a table to display all the users
                
                $( "#rene_products tbody" ).append( "<tr>" +
                    "<td>" + obj.prod_id + "</td>" +
                    "<td>" + obj.prod_name + "</td>" +
                    "<td>" + obj.prod_price + "</td>" +
                    "<td>" + obj.category_id + "</td>" +
                    "<td><input type=button id=\"edit_prod\" value=\"Edito\" name= '" + prod_json + "'></td>" +
                    "</tr>" );
                
               
                //check if exists
                //$("#category_id").empty().append(inHTML);
                                                
                });

            
            });
        
                        
            request.fail(function(jqXHR, textStatus) {
                alert('Kishte nje problem me listen e perdoruesve. Lajemro Administratorin !!!');  
            });
         
            //load the orders on the page load
                $( "#order_list" ).trigger( "click" );
         
    }


    
    
    
    
        function add_prod(prod_cat, prod_name, prod_price)
        {
            
         
            //console.log("oid" + order_id);
         
            var classname = "rene_product";
            var method = "add_product";      
            var args = [];
            
         
            args.push(prod_cat);
            args.push(prod_name);
            args.push(prod_price);
         
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
                
                 get_products();
                // refresh order list by simulating the click even on List orders button with spec id #order_list
                
                //remove previous list               
                //$( "#rene_orders tbody" ).empty();
                                                
            
                // reload order list
                //$( "#order_list" ).trigger( "click" );
                 
                 return true;
                
            });
        
            request.fail(function(jqXHR, textStatus) {
                alert('#delete_order fail.'); 
                
                return '#add_cat fail';
            });
            
            
            
            
            
        }
        
        
        function delete_prod()
        {
            
         
            //console.log("oid" + order_id);
         
            var classname = "rene_product";
            var method = "delete_product";      
            var args = [];
            
            
            var prod_id = $("#prod_id_edit").val();
         
            args.push(prod_id);
         
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
                get_products();
                
                // refresh order list by simulating the click even on List orders button with spec id #order_list
                
                //remove previous list               
                //$( "#rene_orders tbody" ).empty();
                                                
            
                // reload order list
                //$( "#order_list" ).trigger( "click" );
                 
                 return true;
                
            });
        
            request.fail(function(jqXHR, textStatus) {
                alert('#delete_prod fail.'); 
                
                return '#fail';
            });
            
            
            
            
            
        }
        
        
        function update_prod(prod_id)
        {
            
         
            //console.log("oid" + order_id);
         
         
            var prod_id = $("#prod_id_edit").val();
            var prod_name = $("#prod_name_edit").val();
            var prod_price = $("#prod_price_edit").val();
            var category_id_edit = $("#category_id_edit option:selected").val();
            
            
            
            
            var classname = "rene_product";
            var method = "update_product";      
            var args = [];

         
            args.push(prod_id);
            args.push(prod_name);
            args.push(category_id_edit);
            args.push(prod_price);
            
          
          
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
                 
                 return true;
                
            });
        
            request.fail(function(jqXHR, textStatus) {
                alert('#update_prod fail.'); 
                
                return '#fail';
            });
            
            
            
            
            
        }
        
        
        
        
$(function () {
              
        
        var dialog,  dialog_prod_add, dialog_prod_edit, form,
     
        emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        name = $( "#name" ),

        allFields = $( [] ).add( name ),
        tips = $( ".validateTips" );
        
    
        function add_prod_btn()
        {
            
            var prod_name = $('#prod_name').val();
            var prod_price = $('#prod_price').val();            
            var prod_cat = $("#category_id option:selected").val();
            
            
            //console.log(prod_name + prod_price + prod_cat);
            
            if(!prod_name.trim() || !prod_price.trim() || !prod_cat.trim())
            {
                alert("Ju lutem plotesoni fushat e domosdoshme(*)!");
                return false;
            }
            
            //console.log(cat_name);
            
            var t = add_prod(prod_cat, prod_name , prod_price);
            
            dialog_prod_add.dialog( "close" );
            
           
            
        }
 
 
        function test()
        {
            
        }
 
 
        function del_prod_btn()
        {
            
            
            
            var res = delete_prod();
            
            dialog_prod_edit.dialog( "close" );
            
        }
 
 
        function edit_prod_btn()
        {
            
            //console.log(cat_name);
            //var t = add_cat_func(cat_name);
            
            
            var res = update_prod();
            
            dialog_prod_edit.dialog( "close" );
            
        }
        
        
        
    dialog_prod_add = $( "#dialog-form-prod-add" ).dialog({
            autoOpen: false,
            height: 400,
            width: 500,
            modal: true,
            buttons: {
            "Shto produktin": add_prod_btn,
            Cancel: function() {
            dialog_prod_add.dialog( "close" );
        }
      },
      close: function() {
        //form[ 0 ].reset();
        allFields.removeClass( "ui-state-error" );
      }
        
    });
    
    
    dialog_prod_edit = $( "#dialog-form-prod-edit" ).dialog({
            autoOpen: false,
            height: 400,
            width: 500,
            modal: true,
            buttons: {
            "Edito produktin": edit_prod_btn,
            "Fshi produktin": del_prod_btn,
            Cancel: function() {
            dialog_prod_edit.dialog( "close" );
            }
        },
            close: function() {
            //form[ 0 ].reset();
            allFields.removeClass( "ui-state-error" );
      }
        
    });
    
    
    
    $(document).on( "click", "#edit_prod", function() {
            
        var obj = $(this).attr("name");  
        
        var json = jQuery.parseJSON(obj);
        
        console.log(json.category_id);
        
        
        $("#prod_id_edit").val(json.prod_id);
        $("#prod_name_edit").val(json.prod_name);
        $("#prod_price_edit").val(json.prod_price);
        
        
        
        
        // goal: highlight the category that matched the one with database
        // compare json.catgory_id with ... "#category_id_edit value property - 
        // loop through #category_id_edit for the match
        
        
        $("#category_id_edit option").each(function(){
            
            console.log($(this).val());
            console.log($(this).text());
            
            //diselect other options
            $(this).prop('selected', false);
             
             
             if($(this).val() == json.category_id)
             {
                 // set selected to true for the mathed 
                 $(this).prop('selected', true);                
             }
             
            
        }); 
        
            dialog_prod_edit.dialog( "open" );
        
    });
    
    
    // when the "shto produktin" is clicked
    $('#add_product').click(function () {
        
        //dialog_prod_add.data( 'order_id', order_id );
         $( "#category_id" ).prop("selectedIndex",0).trigger("change");
         
        dialog_prod_add.dialog( "open" );
    });
    
    
    
    
    
    $("#select_prod").dblclick(function () {
    

        inHTML = "";
        total= 0 ;
        
      
    
        $("#select_prod option:selected").each(function () {
            inHTML += '<option value="' + $(this).val() + '">' + $(this).text() + ' - ' + $(this).val() + '</option>';
             console.log(inHTML);
        });
    
        $("#order_items").append(inHTML);
    
    
        $("#order_items option").each(function () {

           curr = Number($(this).val()) ;
           total += curr ;        
           
        });

        $("#order_total").val(total);



    });


              
});