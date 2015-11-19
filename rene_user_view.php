<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
?>

<br>

<div>

    
        <div id="employees" style="width: 700px; height: 200px ; overflow:auto; border-style: solid; border-width: 1px ">  
            
            <input type="button" id="emp_tbl" value="Lista e usereve"> 
            <input type="button" id="add_user" value="Shto user">
            
            <table id="rene_users">
                <thead>
                    <tr>
                        <th>NR
                        <th>User ID
                        <th>Emri
                        <th>Mbiemri
                        <th>Telefoni
                        <th>Email
                        <th>Niveli
                        <th>Edito
                            
                    </tr>
                    
                <thead>    
                    
                <tbody>

                </tbody>
                
            </table>
            
        </div>
</div>


<div id="dialog-form-user-add" title="Shto perdoruesin" style="clear: both; border-style: solid; border-width: 1px; width: 500px ; ">
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


<div id="dialog-form-user-edit" title="Edito Perdoruesin" style="clear: both; border-style: solid; border-width: 1px; width: 500px ; ">
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