<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

?>

<br>


        <div id="categories" style="width: 700px; height: 200px ; overflow:auto; border-style: solid; border-width: 1px">  
            <input type="button" id="cat_list" value="Lista e kategorive">
            <input type="button" id="add_cat" value="Shto category">
            
            <table id="rene_categories" >
                
                <thead>
                    <tr>
                        <th>ID
                        <th>Name
                        <th>Edito
                    </tr>
                    
                <thead>

                <tbody>

                </tbody>
                
            </table>
            
        </div>



<div id = "dialog-form-cat" title="Shto kategorine" style="clear: both; border-style: solid; border-width: 1px; width: 500px ; ">
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
    
    
<div id = "dialog-form-cat-edit" title="Edito kategorine" style="clear: both; border-style: solid; border-width: 1px; width: 500px ; ">
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
            <td><input type="text" id="cat_name_edit" >*

        </tr>
           

    </table>
</div>  