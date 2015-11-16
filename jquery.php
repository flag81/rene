<?php

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
  <title>Rene</title>
  
  <link rel="stylesheet" href="css/jquery-ui.css">
  
  <script src="js/jquery-1.11.3.js"></script>
  <script src="js/jquery-ui.js"></script>
  
  
    <script>
        
        
        function functionOne(callback) {
 
            //var r = $.Deferred();
 
            // Do your whiz bang jQuery stuff here
            $.get( "test-1.php" ).done(function() {
                //alert( "$.get succeeded" );
                console.log('Function One');
                
                 callback();
                 
            });
            
            //console.log('Function One');
 
           
 
        };
 
 

        function one()
        {
           console.log('Function Two'); 
            
        }




 
// Now call the functions one after the other using the done method
functionOne(function() {   one() });


        
        
        
        
      
      
        function getfile()
        {
             
             $.get( "test-1.php" ).done(function() {
                alert( "$.get succeeded" );
            });
             
        }
         
         
        function test()
        {
           
           getfile();
           alert('end');
            
        }
      
      
      
     
      
     
      //dfd.done(fucntion())
      
      
    $(window).load(function() {

        // alert(fname);
         var dfd = $.Deferred();
         dfd.done(getfile);
         dfd.done(function () { alert('x'); } );
         
        //test();
        
        //pagination();
        
            
            

    });
    

    
    
    
    
    </script>