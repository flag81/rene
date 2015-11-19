<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

?>

<br>

<div>

        <div id="products" style="width: 700px; height: 200px ; overflow:auto; border-style: solid; border-width: 1px"> 
            <input type="button" id="prod_tbl" value="Lista e produkteve">
            <input type="button" id="add_product" value="Shto produktin">
            
            <table id="rene_products" class="tbl">
                
                                <thead>
                    <tr>
                        <th>ID
                        <th>Name
                        <th>Cmimi
                        <th>Kategoria
                        <th>Edito
                            
                    </tr>
                    
                <thead>

                <tbody>

                </tbody>
                
            </table>
            
        </div>
</div>



<div id="dialog-form-prod-add" title="Shto produktin" style="clear: both; border-style: solid; border-width: 1px; width: 500px ; ">
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



<div id="dialog-form-prod-edit" title="Edito produktin" style="clear: both; border-style: solid; border-width: 1px; width: 500px ; ">
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
