<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


?>


<div id="test"></div>
    
<div id="dialog-form-order-edit" title="Shto shenime">
  <form>
      <table>
          <tr>
                <td>ID: <td><input type="text" id="order_id" disabled="true">*
          <tr>
              <td>Shenime:<td><textarea cols="20" rows="5" name="name" id="name" value="" ></textarea>
      
      <!-- Allow form submission with keyboard without duplicating the dialog button -->
      <input type="submit" tabindex="-1" style="position:absolute; top:-1000px">
  
      </table>
  </form>
</div>
    
    
<div id="dialog-form-user-add" style="clear: both; border-style: solid; border-width: 1px; width: 500px ; ">
     <table>
         
         <form id="add_emp_frm" action="">
             
            <tr><td>ID<td><input type="text" id="user_id">*
    
            <tr><td>Emri<td><input type="text" id="user_fname">*
                
            <tr><td>Mbiemri:<td><input type="text" id="user_lname">*
                
            <tr><td>Telefoni:<td><input type="text" id="user_phone">
                    
            <tr><td>Niveli:<td>
            
            <select type="text" id="user_level">        
                <option valu="0">--------------</option>
                <option value="1">Admin</option>
                <option value="2">Punetor</option>
            </select>

            <tr><td>Email:<td><input type="text" id="user_email">
                
            <tr><td>Passwordi:<td><input type="text" id="user_password">*
        
            <tr><td>Re-Passord<td><input type="text" id="user_password_re">*
       
         </form>
         
    </table>
</div>


<div id="dialog-form-user-edit" style="clear: both; border-style: solid; border-width: 1px; width: 500px ; ">
     <table>
         
         <form id="add_emp_frm" action="">
            
            <tr><td>ID<td><input type="text" id="user_nr_edit" disabled>*
            
            <tr><td>User ID<td><input type="text" id="user_id_edit">*
    
            <tr><td>Emri<td><input type="text" id="user_fname_edit">*
                
            <tr><td>Mbiemri:<td><input type="text" id="user_lname_edit">*
                
            <tr><td>Telefoni:<td><input type="text" id="user_phone_edit">
                    
            <tr><td>Niveli:<td>
            
            <select type="text" id="user_level_edit">        
                <option valu="0">--------------</option>
                <option value="1">Admin</option>
                <option value="2">Punetor</option>
            </select>

            <tr><td>Email:<td><input type="text" id="user_email_edit">
                
            <tr><td>Passwordi:<td><input type="text" id="user_password_edit">*
        
            <tr><td>Re-Passord<td><input type="text" id="user_password_re_edit">*
       
         </form>
         
    </table>
</div>



    
    

<div id="dialog-form-prod-add" style="clear: both; border-style: solid; border-width: 1px; width: 500px ; ">
     <table>
        <tr> 
            <td>Kategoria
                 
            <td>
                <select id="category_id" multiple="multiple" style="width:200px;height : 100px">
                    
                </select>*
            </td>
        <tr>
            <td>Emri i produktit:
            <td><input type="text" id="prod_name">*
        <tr>
            <td>Cmimi:<td><input type="text" id="prod_price" maxlength="5">*

    </table>

</div>  



<div id="dialog-form-prod-edit" style="clear: both; border-style: solid; border-width: 1px; width: 500px ; ">
     <table>
         
        <tr>
            <td>ID:
            <td><input type="text" id="prod_id_edit" disabled="true">*
        <tr>
        <tr> 
            <td>Kategoria
                 
            <td>
                <select id="category_id_edit" multiple="multiple" style="width:200px;height : 100px">
                    
                </select>*
            </td>
        <tr>
            <td>Emri i produktit:
            <td><input type="text" id="prod_name_edit">*
        <tr>
            <td>Cmimi:<td><input type="text" id="prod_price_edit" maxlength="5">*

    </table>

</div>  

  
    
<div id = "dialog-form-cat" style="clear: both; border-style: solid; border-width: 1px; width: 500px ; ">
     <table>
        <tr> 
            <td align="center" colspan="2">Shto Kategorine 
                 
            <td>
            </td>
        <tr>
            <td>Emri i kategorise:
            <td><input type="text" id="cat_name">*

        <tr>
           

    </table>
</div> 
    
    
<div id = "dialog-form-cat-edit" style="clear: both; border-style: solid; border-width: 1px; width: 500px ; ">
     <table>
        <tr> 
            <td align="center" colspan="2">Edit Kategorine 
                 
            <td>
            </td>
        <tr>
            <td>ID e kategorise:
            <td><input type="text" id="cat_id_edit" disabled>*

        </tr>
        
        <tr>
            <td>Emri i kategorise:
            <td><input type="text" id="cat_name_edit" value="">*

        </tr>
           

    </table>
</div>  
    
    
    
    <div>
        
        <?php   echo $fname." ".$lname ?>
        
    </div>
 

    
<div style="float: left">
    <select name="drop1" id="select_cat" size="4" style="width:200px;height : 200px">

    </select>
</div>
    
<div style="float: left;">    
    <select name="drop1" id="select_prod" size="4" multiple="multiple" style="width:200px;height : 200px">



    </select>


</div>

<div style="float: left">    
    <select id="order_items" size="4" multiple="multiple" style="width:200px;height : 200px"></select>
    <p id="selectedValues"></p>
    <input type="button" id="add_order" value="Regjistro Fakturen">
   
</div>
    

<br>
<div style="clear: both;">
    <input type="hidden" id="hidden1" />
    <input type="hidden" id="current_page" value="1"/>
    <p id="pagination"></p>
</div>
<br><br>

<div style="clear: both; border-style: solid; border-width: 1px; width: 700px ; "> 
    

        <input type="button" id="order_list" value="Listo Fakturat"/> 
        <select id="user_list">
            
        </select>
        
        <label for="from">Nga data</label>
            <input type="text" id="from_date" name="from_date">
        <label for="to">deri</label>
            <input type="text" id="to_date" name="to_date">

        <div id="orders" style="width: 700px; height: 300px ; overflow:auto; border-style: solid; border-width: 1px"> 
            
            
            <table id="rene_orders" >
                
                 <thead>
                    <tr>
                        <th>ID
                        <th>Faktura
                        <th>Cmimi
                        <th>Punetori
                        <th>Shenime
                        <th>Data edhe koha
                        <th>Aksion
                    </tr>
                    
                <thead>

                <tbody>

                </tbody>
                
            </table>
            
            
        </div>
 
</div>


<br>




<div>
    <input type="button" id="cat_list" value="Lista e kategorive">
    <input type="button" id="add_cat" value="Shto category">
    
        <div id="categories" style="width: 700px; height: 200px ; overflow:auto; border-style: solid; border-width: 1px">  
            
            <table id="rene_categories" >

                <tbody>

                </tbody>
                
            </table>
            
        </div>
</div>

<br>




<br>

<div>
    <input type="button" id="prod_tbl" value="Lista e produkteve">
    <input type="button" id="add_product" value="Shto produktin">
        <div id="products" style="width: 700px; height: 200px ; overflow:auto; border-style: solid; border-width: 1px">  
            
            <table id="rene_products" >

                <tbody>

                </tbody>
                
            </table>
            
        </div>
</div>


<br>


<div>
    <input type="button" id="emp_tbl" value="Lista e usereve"> 
    <input type="button" id="add_user" value="Shto user">
    
        <div id="employees" style="width: 700px; height: 200px ; overflow:auto; border-style: solid; border-width: 1px ">  
            
            <table id="rene_users" style=" border-style: solid; border-width: 5px">
                <thead>
                    <tr>
                        <th>NR
                        <th>User ID
                        <th>Emri
                        <th>Mbiemri
                        <th>Telefoni
                        <th>Email
                        <th>Niveli
                    </tr>
                    
                <thead>    
                    
                <tbody>

                </tbody>
                
            </table>
            
        </div>
</div>

