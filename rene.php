<?php


include_once 'session.php' ;



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
  <script src="js/rene_orders.js"></script>
  
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
    
    table, th, td {border: 1px solid black; border-collapse: collapse; }
    td {padding: 10 px;}
     
  </style>
  
  
  <script>
        

   

      // when page load load the categories, JS
    $(window).load(function() {


      get_categories();
      get_users();
      get_products();    
      get_num_rows();
        

        
            
    });


var fanme, lname, main_id, total ; 

    // jquery start sytax
    $(function () {
        


        fname = "<?php echo $fname ?>" ;
        lname = "<?php echo $lname ?>";
        main_id = "<?php echo $mainid ?>";
    
    
 
    ///// CATEGORY END //////////////////////

      
        
    
    //build prod list
    var data_arr = [];
    
    // user info
    var emp_name = fname + " " + lname;
    
    //alert(emp_name) ;
    
            
    var emp = JSON.stringify({"name" : emp_name});
    
    var tot_price = JSON.stringify({"total" : total});
    
    
    

    
    
     }); 
    
    
  
  
  

    




    

      

</script>
  
  
</head>

<body>
    
<?php include "rene_body.php"; ?>    

</body>
</html>