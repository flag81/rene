<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


?>


<div style="float: left">
    <select name="drop1" id="select_cat" size="4" style="width:200px;height : 200px">

    </select>
</div>
    
<div style="float: left;">    
    <select name="drop1" id="select_prod" size="4" multiple="multiple" style="width:200px;height : 200px">



    </select>


</div>

<div style="float: left">    
    <select id="order_items" size="4" multiple="multiple" style="width:200px;height : 200px">
        
    </select>

   
</div>


<div style="clear: both;">
    
     Totali:
    <input type="text" id="order_total" disabled>
    <input type="button" id="add_order" value="Regjistro Fakturen">
    
</div>
    

<br>
<div style="clear: both;">
    <input type="hidden" id="current_page" value="1"/>
    <p id="pagination"></p>
</div>


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


<div id="dialog-form-order-edit" title="Shto shenime">
  <form>
      <table>
          <tr>
                <td>ID: <td><input type="text" id="order_id" disabled="true">*
          <tr>
              <td>Shenime:<td><textarea cols="20" rows="5" name="name" id="name" value="" ></textarea>
      
      <!-- Allow form submission with keyboard without duplicating the dialog button -->
   
  
      </table>
  </form>
</div>