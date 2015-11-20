/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


    function get_categories()
    {  
        var classname = "rene_category";
        var method = "get_all_categories";
        var args = new Array('') ;
        
        console.log('get_categories');
        
        var class_data = {"classname": classname, "method": method, "args": args };
    
    
        //get all categories and load them in the select box
        var request =  $.ajax({
            type: 'POST',
            url: 'controller.php',
            data: class_data ,
            dataType: "text" 
        });
        
        
        
        request.done(function(msg){
            
        
            // get array of json objects from the json string
            var json = jQuery.parseJSON(msg);
            var inHTML = "";
            
            $( "#rene_categories tbody" ).empty();
            
            //loop through json object in array
            $.each(json, function(idx, obj) {
                
                
                
                // make a string this json object, store it in the edit button for quick access
                var cat_json = JSON.stringify(obj);
                
                inHTML += '<option value="' + obj.cat_id+ '">' + obj.cat_name + '</option>';
                
                $("#select_cat").empty().append(inHTML);
                
                //check if exists
                $("#category_id").empty().append(inHTML);
                $("#category_id_edit").empty().append(inHTML);
                
               
                
                $( "#rene_categories tbody" ).append( "<tr>" +
                    "<td>" + obj.cat_id + "</td>" +
                    "<td>" + obj.cat_name + "</td>" +
                    "<td><input type=button id=\"edit_cat\" value=\"Edito\" name='" + cat_json  + "'></td>" +
                    "</tr>" );
            
            });
            
             //activate first element of the categories selectbox, after activation tringger change event (chained events)
                //$( "#select_cat" ).prop("selectedIndex",0).trigger("change");

        });
                                
        request.fail(function(jqXHR, textStatus) {
            alert('Kishte nje problem me listen e kategorive. Lajemro Administratorin !!!');  
         });
        
        
    }
    
    
    
    function get_category(cat_id)
    {  
        var classname = "rene_category";
        var method = "get_category";
        var args = [];
        var cat_name ;
        
        args.push(cat_id);
         
        var class_data = {"classname": classname, "method": method, "args": args };
    
    
        //get all categories and load them in the select box
        var request =  $.ajax({
            type: 'POST',
            url: 'controller.php',
            data: class_data ,
            dataType: "text" 
        });
        
 
        request.done(function(msg){
            

        
            var json = jQuery.parseJSON(msg);
            
            $.each(json, function(idx, obj) {
                
                cat_name = obj.cat_name 
            });
            

            //alert(cat_name);
            //console.log();
            
            $("#cat_name_edit").val(cat_name);
            
            return cat_name ;
           
            //loop through json object
       
 
        });
                                
        request.fail(function(jqXHR, textStatus) {
            alert('Kishte nje problem me nxjerrjen e shenimeve. Lajemro Administratorin !!!');  
         });
        
        
        //return 'cat_name' ;
        
    }
    
    
    function add_cat_func(cat_name)
        {
            
         
            //console.log("oid" + order_id);
         
            var classname = "rene_category";
            var method = "add_category";      
            var args = [];
            var cat_name = cat_name;
         
            args.push(cat_name);
         
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
                
                get_categories();
                 
                //return true;
                
            });
        
            request.fail(function(jqXHR, textStatus) {
                alert('#delete_order fail.'); 
                
                return '#add_cat fail';
            });
            
            
            
            
            
        }
        
        
        function delete_cat()
        {
            
         
            //console.log("oid" + order_id);
            
            //
         
            var classname = "rene_category";
            var method = "delete_category";      
            var args = [];
            
            
            var cat_id = $("#cat_id_edit").val();
         
            args.push(cat_id);
         
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
                alert('#delete_cat fail.'); 
                
                return '#fail';
            });
            
            
            
            
            
        }
        
        
        function update_cat()
        {
            
         
            //console.log("oid" + order_id);
         
         
         var cat_id = $("#cat_id_edit").val();
         var cat_name = $("#cat_name_edit").val();
         
         
            var classname = "rene_category";
            var method = "update_category";      
            var args = [];

         
            args.push(cat_id);
            args.push(cat_name);
          
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
                alert('#delete_cat fail.'); 
                
                return '#fail';
            });
            
            
            
            
            
        }
        
        
        
        
$(function () {
              
        
        var dialog,  dialog_cat, dialog_cat_edit, form,
     
        emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        name = $( "#name" ),

        allFields = $( [] ).add( name ),
        tips = $( ".validateTips" );
        
    
        function add_cat_btn()
        {
            
            var cat_name = $('#cat_name').val();
            
            if(!cat_name.trim())
            {
                alert("Ju lutem plotesoni emrin e kategorise!");
                return false;
 
            }
            
            //console.log(cat_name);
            
            var t = add_cat_func(cat_name);
            dialog_cat.dialog( "close" );
            
        }
 
 
 
        function edit_cat_btn()
        {
            
            $('#cat_name_edit').val("ttttt");
            
            if(!cat_name_edit.trim())
            {
                alert("Ju lutem plotesoni emrin e kategorise!");
                return false;

            }
            
            //console.log(cat_name);
            
            //var t = add_cat_func(cat_name);
            
            dialog_cat.dialog( "close" );
            
        }
        
        
        function del_cat_btn(cat_id)
        {
            //get cat_name from db
            
            if (confirm("A deshironi ta fshini kategorine") != true) {
                 return false;
            } 
            
            dialog_cat_edit.dialog( "close" );
            delete_cat();
            get_categories();
            
            
            //var o_id = dialog_cat_edit.data( 'order_id');
            
            //alert(o_id);
            
        }
    
    dialog_cat = $( "#dialog-form-cat" ).dialog({
            autoOpen: false,
            height: 300,
            width: 400,
            modal: true,
            buttons: {
            "Shto kategorine": add_cat_btn,
            Cancel: function() {
            dialog_cat.dialog( "close" );
        }
      },
      close: function() {
        //form[ 0 ].reset();
        allFields.removeClass( "ui-state-error" );
      }
      
      
    });
    
    
    dialog_cat_edit = $( "#dialog-form-cat-edit" ).dialog({
            autoOpen: false,
            height: 400,
            width: 500,
            modal: true,
            buttons: {
            "Edito kategorine": update_cat, 
            "Fshi kategorine": del_cat_btn,
            Cancel: function() {
            dialog_cat_edit.dialog( "close" );
        }
      },
      close: function() {
        //form[ 0 ].reset();
        allFields.removeClass( "ui-state-error" );
      }
      
      
    });    
              
              
              
    $('#add_cat').click(function () {
        
        //open the diaolg box (div element (wizard))
        dialog_cat.dialog( "open" );
    });
    
    
    $('#cat_list').click(function () {
        
        //open the diaolg box (div element (wizard))
        get_categories();
    });
    
    
    
    //open cat dialog

    $(document).on( "click", "#edit_cat", function() {
               
      
        // get the att name of the element (input button)        
        var obj = $(this).attr("name");  
        
          console.log(obj);
        // convert a json formated string into a json object
        var json = jQuery.parseJSON(obj);
        
        
        //$("#cat_id_edit").val(cat_id);
        
        
        // add data to the dialog box
        //dialog_cat_edit.data( "cat_id", cat_id );
       //dialog_cat_edit.data( "cat_name", cat_name );
        
        $("#cat_id_edit").val(json.cat_id);
        $("#cat_name_edit").val(json.cat_name);
        
        
        //open dialog
        dialog_cat_edit.dialog( "open" );
        
        //var cat_name = get_category(cat_id);

        
       // $("#cat_id_edit").val(cat_name);        
        
    });
    
    
    
     $('#select_cat').change(function () {
            
            var str = "",  
            inHTML = "",
            items;
            
            var category_id = $(this).val() ;
            
            //console.log(json_prod_array);
                
                $.each(json_prod_array, function(idx, obj1) {

                    if(obj1.category_id == category_id)
                    {
                        //console.log(obj1.prod_name);
                        
                        inHTML += "<option value='" + obj1.prod_price + "'>" + obj1.prod_name + "</option>";                
                        
                    }
                    
                
                });
            
                //add the options generated by the loop to the #select_prod select element
                $("#select_prod").empty().append(inHTML);
            
            
            
            //console.log('x');
            
            var classname = "rene_product";
            var method = "get_all_products";
            var args = new Array();
         
            
 
            args.push(category_id);

            var class_data = {"classname": classname, "method": method, "args": args };
         
         
            //console.log(class_data);

      
//            var request =  $.ajax({
//                type: 'POST',
//                url: 'controller.php',
//                data: class_data ,
//                dataType: "text" 
//                
//            });
        
        
//            request.done(function(msg){
//            
//                var json = jQuery.parseJSON(msg);
//                var inHTML = '';
                
                

            //console.log(json);
            
            //loop through a json array instead of db 
            // gloabal array
            //
            //
//            
//                $.each(json, function(idx, obj) {
//                
//                    inHTML += '<option value="' + obj.prod_price + '">' + obj.prod_name + '</option>';                
//                    $("#select_prod").empty().append(inHTML);
//                    
//                });
                
                
                
                
//                
//                
//
//
//            });
        
                        
//            request.fail(function(jqXHR, textStatus) {
//                alert('#select_prod failure');  
//      
//            });


        });
    
    
              
              
});