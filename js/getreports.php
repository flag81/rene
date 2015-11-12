<?php


include_once "session.php";



header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT"); // Date in the past
header('Pragma: no-cache');
header('Content-Language: en-gb'); 


$reg_num  = 1;
$archive_num  = 2;


echo "<link rel='stylesheet' type='text/css' href='css/styles.css>";


			//$cdate = $_GET["cdate"];
			$pdate = $_GET["pdate"];
			$odate = $_GET["odate"];			
			$month = $_GET["month"];
			$sdate = $_GET["sdate"];
			$edate = $_GET["edate"];
			
			$date_type = $_GET["date_type"];

			
			//$cdate = check_valid_date($cdate);
			$pdate = check_valid_date($pdate);
			$odate = check_valid_date($odate);
			$sdate = check_valid_date($sdate);
			$edate = check_valid_date($edate);
			
				
			$gjendja = $_GET["gjendja"];
			$pako = $_GET["pako"];
			$city = $_GET["city"];
			$region = $_GET["region"];
			$case = $_GET["case"];
			$lloji = $_GET["lloji"];
			$ordered_package_new = $_GET["ordered_package_new"];
			$ordered_package = $_GET["ordered_package"];
			
			$fname = $_GET["fname"];
			$lname = $_GET["lname"];
			$cid = $_GET["cid"];
			$phone = $_GET["phone"];
			$agent = $_GET["agent"];	
			$wdate = $_GET["wdate"];
			
			
			$faza_rikyqjes = $_GET["faza_rikyqjes"];
			$customer_id = $_GET["customer_id"];
			

			
			$type = $_GET["type"];	
			$print_type = $_GET["print_type"];
			
			$export_report = $_GET["export_report"];
				
			
			$location = $_GET["location"];
			
			
			$employee = $_GET["employee"];
			
			
			
			
			$archive = "archive";
			
			$unrealized_reason = $_GET["unrealized_reason"];

			
			// how many rows to show per page
			
			if($print_type > 0)
			{
				$rowsPerPage = 1000000;
				$pageNum = 0;
		     }
			else
			{
				$rowsPerPage = 20;
				// by default we show first page
				$pageNum = 1;

				// if $_GET['page'] defined, use it as page number
				
				if(isset($_GET['page']))
				{
    				$pageNum = $_GET['page'];
				}

				// counting the offset
				$offset = ($pageNum - 1) * $rowsPerPage;
	
				$limits = "LIMIT $offset, $rowsPerPage";
	
			}			
			
			
				$sql0 = " SELECT SQL_CALC_FOUND_ROWS 1 as num,";
			
				$sql0_a = " SELECT 2 as num,";	
						
			
			
				$sql1 = " o.id, d.contracted_date, d.ordered_date, d.processed_date, d.transfered_date, d.finalised_date, d.finish_date, c.name, c.lastname, c.address, c.city, c.region, c.contact, c.mdf_fname, c.mdf_lname, o.selected_package, o.agent, o.channel, d.analised_date, d.realised_date, o.montatori, o.gjendja_kerkeses, o.lloji_kerkeses, o.loc_id, o.prev_loc_id, o.processtype, o.arsyja, c.current_phone, o.old_pako, datediff(d.finalised_date, d.ordered_date) as rdays , datediff(d.finish_date, d.finalised_date) as fdays";
            
				$sql2 = " FROM orders o, dates d , customer c ";
            
				$sql2_a = " FROM orders_archive o, dates_archive d , customer_archive c ";
        	
				$sql3 .= " WHERE o.id > 0";
           
             
            if($fname != "")
            {
	                $sql3 .= " AND (c.name LIKE '%$fname%' OR c.mdf_fname LIKE '%$fname%')";  
            }
            
            
            if($lname != "")
            {
	                $sql3 .= " AND (c.lastname LIKE '%$lname%' OR c.mdf_lname LIKE '%$lname%')";
            }
            
            
            if($cid != "")
            {
	                $sql3 .= " AND o.id='$cid'";
            }
            
            
             if($phone != "")
            {
	                $sql3 .= " AND (c.current_phone LIKE '%$phone%' OR c.new_phone LIKE '%$phone%')"; 
            }
            
            if($region != "")
            {
	                $sql3 .= " AND c.region='$region'";
            }
            
            
            
            
            
            /////////////////////
            
            
            if($sdate != "")
            {
	            if($date_type == "odate")
	            {
		            
		            $sql3 .= " AND d.ordered_date BETWEEN '$sdate' AND '$edate'";
		            
	            }
	            else if ($date_type == "cdate")
	            {
		            $sql3 .= " AND d.contracted_date BETWEEN '$sdate' AND '$edate'";
		            
	            }
	            else if ($date_type == "pdate")
	            {
		            
		            $sql3 .= " AND d.processed_date BETWEEN '$sdate' AND '$edate'";
	            }
	            else if ($date_type == "rdate")
	            {
		            $sql3 .= " AND d.finalised_date BETWEEN '$sdate' AND '$edate'";
		            
	            }
	            else if ($date_type == "fdate")
	            {
		            $sql3 .= " AND finish_date BETWEEN '$sdate' AND '$edate'";
		            
	            }
	            else
	            {
		            
		            $sql3 .= " AND d.ordered_date BETWEEN '$sdate' AND '$edate'";
	            }

            }
            else
            {
	            
	            
            }
            
            
            /////////////////////
            
            
            if($lloji != "")
            {
	                $sql3 .= " AND o.lloji_kerkeses = '$lloji' ";
            }
            
            
            if($employee != "")
            {
	                $sql3 .= " AND o.user_list  LIKE '%$employee%' ";
            }
            else if($location != "")
            {
	                $sql3 .= " AND o.loc_id = '$location' ";
            }
            
            
            
            //if($agent != "")
            //{
	        //        $sql3 .= " AND o.user_list  LIKE '%$agent%' ";
            //}
            
            
            if($agent != "" && $wdate != "")
            {
	            	$sql3 .= " AND o.user_list  LIKE '%$agent,$wdate%' ";
	                
            }
            else if($wdate != "")
            {
	                $sql3 .= " AND o.user_list  LIKE '%$wdate%' ";
            }
            else if($agent != "")
            {
	                $sql3 .= " AND o.user_list  LIKE '%$agent%' ";
            }
            
            
            if($ordered_package_new != "")
            {
	            $ordered_package_new = trim($ordered_package_new);
	            
	            //echo "--".$ordered_package."--";
	            
	            $list = explode(";", $ordered_package_new);
	            
	            $sql3 .= " AND (";	            
	            									   
				foreach($list as $val)
				{
					if($val != "")
					{
						$val = trim($val);
						$sql3 .= " o.selected_package LIKE '%$val%' OR"; 
					}
				}
				
						$sql3 .= " o.selected_package LIKE '%5555-5555%' )";
                 
            }
            
            
            if($ordered_package != "")
            {
	            $ordered_package = trim($ordered_package);
	            
	            $list = explode(";", $ordered_package);
	            
	            $sql3 .= " AND (";	
            										   
				foreach($list as $val)
				{
					if($val != "")
					{
						$val = trim($val);
						$sql3 .= " o.old_pako LIKE '%$val%' OR";
					}
				}
				
				$sql3 .= " o.old_pako LIKE '%5555-5555%' )";
	            
            }
            
            
            
            if($gjendja != "")
            {

	                 $sql3 .= " AND o.gjendja_kerkeses = '$gjendja' ";
                 
            } 

            
            if($unrealized_reason != "")
            {

	                 $sql3 .= " AND o.arsyja  = '$unrealized_reason' ";
                 
            } 
			
			
			if($faza_rikyqjes != "")
            {

	                 $sql3 .= " AND o.faza_rikyqjes  = '$faza_rikyqjes' ";
                 
            } 
			
			if($customer_id != "")
            {

	                 $sql3 .= " AND c.customer_id  = '$customer_id' ";
                 
            } 
            
            
            $level = $_SESSION['level'];
		    
            
		    $sql3 .= " AND o.id = c.id AND c.id = d.id ";
		    
		    
            $union = " UNION ALL";
            
            
            $sql_reg = $sql0.$sql1.$sql2.$sql3; 
            
            
            
           
            
            $sql_archive = $sql0_a.$sql1.$sql2_a.$sql3;
            
            
            $sql = $sql_reg.$union.$sql_archive; 
            
		    
		    $sql .= " ORDER BY 2 Desc ";
		    
		    
		    $sql_limits .= $limits ;
		    
		    
		    $sql .= $sql_limits ;
		    
		    
		    //echo $list .= $sql;
		    
		    //$sql  = mysql_real_escape_string($sql);
		    
		    //$list .="<div style=''>Numri total i kekesave: $cnt $sql</div>";
           
            


	  		$result = mysql_query($sql);
	  		
	  		$cnt = mysql_num_rows($result);
	  		

	  		
	  		$result1 = mysql_query("SELECT FOUND_ROWS()");
        	$total = mysql_fetch_row($result1);
        	
        	$total_rows = $total[0];
	  		
	  		
	  		
			if (!$result) {
    			die('Invalid query getreports: ' . mysql_error());
			}	
			
					
			
			
			$list .="<div style=''>Numri total: $total_rows</div>";
					
					
		////////////////////////////////////////////////////////////////////////////
					
		// PAGING		
		// how many pages we have when using paging?
		$maxPage = ceil($total_rows/$rowsPerPage);

		// print the link to access each page
		// $self = $_SERVER['PHP_SELF'];
		
		$nav  = '';

		for($page = 1; $page <= $maxPage; $page++)
		{
   			if ($page == $pageNum)
   			{
      			$nav .= " $page "; // no need to create a link to current page
   			}
   			else
   			{
	   			
	   			
	   			if($page < $pageNum)
	   			{
		   			$nav .="<a href='javascript:get_page($page);'>$page</a>\n";	
	   			}
	   			
	   			
      			//$nav .= " <a href=\"$self?orgID=$orgID&phone=$phone&year=$year&month=$month&page=$page\">$page</a> ";
   			} 
		}


		   	
		
	   			
	   			
					
		
		if ($pageNum > 1)
		{
   			$page  = $pageNum - 1;
   			$prev ="<a href='javascript:get_page($page);'>[Mbrapa]</a>\n";
   			//$prev  = " <a href=\"$self?orgID=$orgID&phone=$phone&year=$year&month=$month&page=$page\">[Mbrapa]</a> ";

   			$first ="<a href='javascript:get_page(1);'>[Fillimi]</a>\n";
   			//$first = " <a href=\"$self?orgID=$orgID&phone=$phone&year=$year&month=$month&page=1\">[Fillimi]</a> ";
   			
		} 
		else
		{
   			$prev  = '&nbsp;'; // we're on page one, don't print previous link
   			$first = '&nbsp;'; // nor the first page link
		}

		
		
		if ($pageNum < $maxPage)
		{
   			$page = $pageNum + 1;
   			
   			$nav .="...\n";
   			
   			$next ="<a href='javascript:get_page($page);'>[Para]</a>\n";
   			//$next = " <a href=\"$self?orgID=$orgID&phone=$phone&year=$year&month=$month&page=$page\">[Para]</a> ";

   			$last ="<a href='javascript:get_page($maxPage);'>[Fundi]</a>\n";
   			//$last = " <a href=\"$self?orgID=$orgID&phone=$phone&year=$year&month=$month&page=$maxPage\">[Fundi]</a> ";
		} 
		else
		{
   			$next = '&nbsp;'; // we're on the last page, don't print next link
   			$last = '&nbsp;'; // nor the last page link
   			$viewalllink  = '&nbsp;';
		}

		// print the navigation link


			
					if($print_type < 1)
					{
						$list .= "<div style=''> Faqet: ".$first . $prev . $nav . $next . $last. "  </div>";
						
						$list .="<div style='border : solid 1px #e2e2e2; background : #ffffff; width:770px;  '>\n";
						
												
				    	$list .="<table class='tbl' width='100%'>\n";
						$list .="<tr align='center'>\n";
						$list .="<td bgcolor =  '#FF9999'>Gabim</td>\n";
						$list .="<td bgcolor =  '#CCFFCC'>Te reja</td>\n";
						$list .="<td>Ska mundesi realizimi</td>\n";
						$list .="<td bgcolor =  '#FFCC99'>Ne Pritje</td>\n";
						$list .="<td bgcolor =  '#e2e2e2'>Ne Procesim</td>\n";
						$list .="<td bgcolor =  '#99CCCC'>Realizuar</td>\n";
						$list .="<td bgcolor =  '#669999'>Fakturuar</td>\n";
						$list .="<td bgcolor =  '#ccffff'>Arkivuar</td>\n";
						$list .="</tr>\n";
						$list .="</table>\n";
						
						
						
						
						$list .="<div/>\n";
					
						
		            	$list .="<div style='border : solid 1px #e2e2e2; background : #ffffff;width:770px; height:400px; overflow: auto; '>\n";
			    	}
		
		            
		            $list .="<table>\n";
					$list .="<tr>\n";
					$list .="<td >\n";
			
					$list .="<table  border='0'  class='tbl' >\n";
                    $list .="<tr class='table-title'>\n";
                    
                    
               if($print_type < 1)
				{
                    
                    $list .="<th width='101'></th>\n";
                    	   
                
                
                   	   
                    if(in_array($level,$admin) && $type != $archive && $print_type < 1) 
				 	{
                    	   $list .="<th width='101'>Fshij</th>\n";
                    	   $list .="<th width='101'>Arkivo</th>\n";
                	}
                	
                	if(in_array($level,$admin) && $type == $archive && $print_type < 1) 
				 	{
                    	   $list .="<th width='101'>Nxjer nga Arkiva</th>\n";
                    	   
                	}
                	
                	
			   }
                 
            
                    	   
                           $list .="<th width='101'>Nr i Kerkeses</th>\n";
                           $list .="<th width='102'>Data e Hapjes</th>\n";
                           
                           $list .="<th width='102'>Data e Procesimit</th>\n";
                           $list .="<th width='102'>Data e Realizimit</th>\n";
                           $list .="<th width='102'>Data e Fakturimit</th>\n";
                           $list .="<th width='102'>Kohezgjatja e mosrealizimit</th>\n";
                           $list .="<th width='102'>Kohezgjatja e Realizimit</th>\n";
                           $list .="<th width='102'>Kohezgjatja e Fakturimit</th>\n";
                           //$list .="<th width='102'>Data MDF</th>\n";
                           //$list .="<th width='102'>Data e Finalizimit</th>\n";
                           $list .="<th width='98'>Lloji</th>\n";
                           //$list .="<th width='98'>Gjendja</th>\n";
                           $list .="<th width='98'>Ku gjendet  </th>\n"; 
                           $list .="<th width='98'>Nga erdhi  </th>\n"; 
                           $list .="<th width='102'>Emri dhe Mbiemri</th>\n";
                           $list .="<th width='92'>Adresa</th>\n";
                           //$list .="<th width='92'>Qyteti</th>\n";
                           $list .="<th width='92'>Regjioni</th>\n";
                           $list .="<th width='92'>Telefoni</th>\n";
                           $list .="<th width='615'>Produktet</th>\n";
                           $list .="<th width='615'>Produktet(vjeter)</th>\n";
                           //$list .="<th width='92'>Agjenti</th>\n";
                           //$list .="<th width='98'>Kanali</th>\n";
                           //$list .="<th width='98'>Data e analizes se kerkeses</th>\n";
                           //$list .="<th width='98'>Data e realizimit </th>\n";
                           //$list .="<th width='98'>Gjendja e kerkeses  </th>\n";
                          
                           //$list .="<th width='98'>Arsyja </th>\n";
                     		$list .="</tr>\n";
                     
                     
                     		
                     		//exporting to excel
                           $data .="<Cell><Data ss:Type='String'>Nr i Kerkeses</Data></Cell>";
                           $data .="<Cell><Data ss:Type='String'>Data e hapjes se urdhreses</Data></Cell>";
                           
                           $data .="<Cell><Data ss:Type='String'>Data e Procesimit</Data></Cell>";
                           $data .="<Cell><Data ss:Type='String'>Data e Realizimit</Data></Cell>";
                           $data .="<Cell><Data ss:Type='String'>Data e Fakturimi</Data></Cell>";
                           $data .="<Cell><Data ss:Type='String'>Kohezgjatja e mosrealizimi</Data></Cell>";
                           $data .="<Cell><Data ss:Type='String'>Kohezgjatja e Realizimit</Data></Cell>";
                           $data .="<Cell><Data ss:Type='String'>Kohezgjatja e Fakturimit</Data></Cell>";
                           $data .="<Cell><Data ss:Type='String'>Lloji i kerkeses</Data></Cell>";
                           $data .="<Cell><Data ss:Type='String'>Gjendja e kerkeses</Data></Cell>";
                           $data .="<Cell><Data ss:Type='String'>Ku gjendet</Data></Cell>"; 
                           $data .="<Cell><Data ss:Type='String'>Nga erdh</Data></Cell>"; 
                           $data .="<Cell><Data ss:Type='String'>Emri dhe Mbiemri</Data></Cell>";
                           $data .="<Cell><Data ss:Type='String'>Adresa</Data></Cell>";
                           $data .="<Cell><Data ss:Type='String'>Regjioni</Data></Cell>";
                           $data .="<Cell><Data ss:Type='String'>Telefoni</Data></Cell>";
                           $data .="<Cell><Data ss:Type='String'>Produktet</Data></Cell>";
                           $data .="<Cell><Data ss:Type='String'>Produktet(vjeter)</Data></Cell>";
                           
                           $data .= "</Row>";
                           
                           $data .= "</Table></Worksheet></Workbook>";
                           

	
	


			
			while ($row = mysql_fetch_assoc($result)) 
			{	
				
				
				$cnt2 = $row["num_rows"];
				$num = $row["num"];	
				$id = $row["id"];
				$cdate = $row["contracted_date"];
				$odate = $row["ordered_date"];
				$pdate = $row["processed_date"];
				$adate = $row["analised_date"];
				$rdate = $row["realised_date"];
				$fdate = $row["finalised_date"];
				$finish_date = $row["finish_date"];
				$lloji = $row["lloji_kerkeses"];
				
				$lloji = getOrderType($lloji);
				
				$processtype = $row["processtype"];
				
				$processtype = getProcessType($processtype);
				
				$name = $row["name"];
				$lname = $row["lastname"];
				$address = $row["address"];	
				//$city = $row["city"];
				$region = $row["region"];
				$region = getregionname($region);
				$kontakt = $row["contact"];	
				$package = $row["selected_package"];
				$agent = $row["agent"];
				$wdate = $row["wdate"];
				$channel = $row["channel"];	
				
				//$adate = $row["analised_date"];	
				//$rdate = $row["realised_date"];	
				$montatori = $row["montatori"];	
				$gjendja = $row["gjendja_kerkeses"];	
				$arsyja = $row["arsyja"];
				
				$phone = $row["current_phone"];
				$package_old = $row["old_pako"];
				
				
				$rdays = $row["rdays"];
				$fdays = $row["fdays"];
				
				
				
				if($gjendja != "realizuar")
				{
					$odate1 = strtotime($odate);
 					$diff = time() - $odate1;
 					$open_days = floor($diff/(60*60*24));
				}
				else
				{
					
					$open_days = $rdays;
				}
				
				
				
				
				$loc_id = $row["loc_id"];	
				
				$loc_id = getLocationName($loc_id);
				
				$prev_loc_id = $row["prev_loc_id"];	
				
				$prev_loc_id = getLocationName($prev_loc_id);
				

                
                $prodlist = "";
                $prodlist = getprodlistname($package);
				
                $prodlist_old = "";
				$prodlist_old = getprodlistname($package_old);
				
				
				
				
                
                $count++ ;
			     

		     	
		     	
		     	
		     	if($gjendja == $gabim)
		     	{
			    	$bgcolor =  '#FF9999' ;	
		     	}
		     	
		     	if($gjendja == "eRe")
		     	{
			    	$bgcolor =  '#CCFFCC' ;	
		     	}
		     	
		        if($gjendja == "nePritje")
		     	{
			    	$bgcolor =  '#FFCC99' ;	
		     	}
		     	
		     	if($gjendja == "neProcesim")
		     	{
			    	$bgcolor =  '#e2e2e2' ;	
		     	}
		     	
		     	
		     	if($gjendja == "realizuar")
		     	{
			    	$bgcolor =  '#99CCCC' ;	
		     	}
		     	
		     	
		     	if($gjendja == "nukRealizohet")
		     	{
			    	$bgcolor =  '#FFFFFF' ;	
		     	}
		     	
		     	if($gjendja == "fakturuar")
		     	{
			    	$bgcolor =  '#669999' ;	
		     	}
		     	
		     	
		     	if($num == $archive_num)
				{
					$bgcolor =  '#CCFFFF' ;
				}
		     	
				    	
		     	$list .="<tr style='border: 1px solid #7F9DB9;' bgcolor='$bgcolor' onClick=\"editoKerkesen($id, '$processtype', 'view', '$num')\" onMouseOver=\"this.bgColor='#C0C0C0'\" onMouseOut=\"this.bgColor='$bgcolor'\">\n";
		     	
		     	
		     	
		     	 $cdate = check_date($cdate);
                 $odate = check_date($odate);
                 $pdate = check_date($pdate);
                 $fdate = check_date($fdate);
                 $finish_date = check_date($finish_date);
                 
                 
                 
		     	
		     	/*
		     	
		     	 $cdate = date('d-m-Y', strtotime($cdate));
                 $odate = date('d-m-Y', strtotime($odate));
                 $pdate = date('d-m-Y', strtotime($pdate));
                 $fdate = date('d-m-Y', strtotime($fdate));
                 $finish_date = date('d-m-Y', strtotime($finish_date));
                 

                 
                 if(check_date($pdate))
                 {
                 	$pdate = date('d-m-Y', strtotime($pdate));
             	 }
             	 else
             	 {
	             	$pdate = '';	 
             	 }
                 
                 if(check_date($adate))
                 {
                 	$adate = date('d-m-Y', strtotime($adate));
             	 }
             	 else
             	 {
	             	$adate = '';	 
             	 }
                 
                 
                 if(check_date($rdate))
                 {
                 	$rdate = date('d-m-Y', strtotime($rdate));
             	 }
             	 else
             	 {
	             	$rdate = '';	 
             	 }
             	 
                 if(check_date($fdate))
                 {
	                 $fdate = date('d-m-Y',strtotime($fdate));
	                 $open_days = "";
		    	 }
		    	 else
		    	 {
			    	 
			    	 $fdate = '';

	                 $odate1 = strtotime($odate);
 					 $diff = time() - $odate1;
 					 $open_days = floor($diff/(60*60*24));

			    	 
		    	 }
		    	 
		    	 
		    	 if(check_date($finish_date))
                 {
	                 $finish_date = date('d-m-Y',strtotime($finish_date));
		    	 }
		    	 else
		    	 {
			    	 
			    	 $finish_date = '';
			    	 
		    	 }
		    	 
		    	 
		    	 
			*/
		    	 
		    	 
		    if($print_type < 1) 
			{
		    	 
		    	 $list .="<td bgcolor='white' valign='center'><nobr>\n";
		    	 //$list .="<input type='radio' name='process' value='$id' onClick=\"editoKerkesen($id, '$processtype', 'view', '$num')\">\n";
                
                 
                 
                 if(in_array($level,$admin) && $num == $reg_num) 
				 {
										       		
		    	 	$list .="<a href='javascript:fshiKerkesen($id);'>Fshij</a>\n";
		    	 	$list .="<a href='javascript:arkivoKerkesen($id);'>Arkivo</a>\n";
                
                 
             	 }
                 
             	 
             	 if(in_array($level,$archive_group) && $num == $archive_num) 
				 {
		    	 	$list .="<a href='javascript:nxjerKerkesen($id);'><img src='images/arrow3.jpg' border='0'  alt='Nxjerr nga Arkiva'></a>\n";
                    	   
                 }
                 
                 if($num == $archive_num) 
				 {
					 
		    	 	//$list .="<img src='images/archive.png' width='30'>\n";
                    	   
                 }
                 
                 
                 if($rdays < 0)
				{
					$rdays = "";	
				}
				
				
				if($fdays < 0)
				{
					$fdays = "";	
				}
				
				
				
                	
                    $list .=" </nobr>&nbsp</td>\n";
			}
			
			
                    $list .="<td width='101'>&nbsp;$id</td>\n";
                    $list .="<td width='92'>&nbsp;$odate</td>\n";
                    $list .="<td width='102'>&nbsp;$pdate</td>\n";
                    $list .="<td width='102'>&nbsp;$fdate</td>\n";
                    $list .="<td width='102'>&nbsp;$finish_date</td>\n";
                    $list .="<td width='102'>$open_days</td>\n";
                    $list .="<td width='102'>$rdays</td>\n";
                    $list .="<td width='102'>$fdays</td>\n";
                    $list .="<td width='102'>&nbsp;$lloji</td>\n";
                    //$list .="<td width='102'>&nbsp;$gjendja</td>\n";
                    $list .="<td width='102'>&nbsp;$loc_id</td>\n";
                    $list .="<td width='102'>&nbsp;$prev_loc_id</td>\n";
                    $list .="<td width='102'>&nbsp;$name $lname</td>\n";
                    $list .="<td width='92'>&nbsp;$address</td>\n";
                    //$list .="<td width='92'>&nbsp;$city</td>\n";
                    $list .="<td width='92'>&nbsp;$region</td>\n";
                    $list .="<td width='92'>&nbsp;$phone</td>\n";
                    $list .="<td width='615'>&nbsp;$prodlist</td>\n";
                    $list .="<td width='615'>&nbsp;$prodlist_old</td>\n";
                    //$list .="<td width='92'>&nbsp;$agent</td>\n";
                    //$list .="<td width='98'>&nbsp;$channel</td>\n";
                    //$list .="<td width='98'>&nbsp;$adate</td>\n";
                    //$list .="<td width='98'>&nbsp;$rdate</td>\n";
                    //$list .="<td width='98'>&nbsp;$gjendja</td>\n";
                    //$list .="<td width='98'>&nbsp;$arsyja</td>\n";
                    $list .="</tr>\n";
			   		    

			}
	  
	                $list .="</table>\n";
	  				$list .="</td>\n";
					$list .="</tr>\n";
				    $list .="</table>\n";
		            $list .="</div>\n";
		            
		            
		            $list .="<div>".$cnt2."</div>";
	  
		            
	  
	  if($cnt == 0)
	  {
		  
	    $list = $sql."<table width='100%' border='0' cellpadding='0' cellspacing='0' class='table-text'><tr><td>NUK KA TE DHENA</table>";	  
		  
	  } 
	  
	  
	            echo $list;
	            
	            
	            
	            
	    function getreports($name)
		{
			
			//submit query
			$result = mysql_query("SELECT placeId FROM places WHERE placeName='$name'");
			if (!$result) {
    		die('Invalid query getEmployee: ' . mysql_error());
			}
			
			
			$place = mysql_fetch_assoc($result);
			$id = $place['placeId'] ;
			
			return $id;	
			
		}
		
/*		
		function check_date($date)
		{
			if(date('d-m-Y',strtotime($date)) > '30-11-1999')
			{
				return true;
			}
			else
			{
				return false;
			}
			
		}
	
*/	

function check_valid_date($date)	
{
	if($date > '01-01-1970')
	{
		$date = date('Y-m-d', strtotime($date));		
	}
	else
	{
		$date = "";		
	}
				
		return $date;		
}
			
			
					


function check_date($date)
{

	if($date > '1999-11-30')
	{
		$date = date('d-m-Y', strtotime($date));
	}
	else
	{
		$date = '';
	}	
	
	return $date;	
}


				
function getprodlistname($package)
{
		//break down products	
                $pieces = explode(";",$package);
                $prodlist = "";
                
                if($pieces[0] != "")
                {
                                
                foreach($pieces as $val)
                {
	               if($val != " ")
	               { 
	                $pt = explode("-",$val); 
	                $prod = $pt[1];
	                if( $pt[1] != "")
	                {
	                	$prname = getProductName($pt[1]);
                	}

	                	
	                	$prodlist .= $prname."";
	                	
                  } 
                } 
                
            	}
	
	
	return $prodlist;	
	
}



function export_excel()
{
	
	
$data .= "header('Content-type: application/octet-stream')";
$data .= "header('Content-Disposition: attachment; filename=Sample.xls;')";
$data .= "header('Content-Type: application/ms-excel')";
$data .= "header('Pragma: no-cache')";
$data .= "header('Expires: 0')";



//include("dbconnect.php");
$title = "Sample";
//$query = $_POST['query'];
//$result = odbc_exec($conn,$query);
$count = 10;

//XML Blurb
$data .= "<?xml version='1.0'?><?mso-application progid='Excel.Sheet'?><Workbook xmlns='urn:schemas-microsoft-com:office:spreadsheet' xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:excel' xmlns:ss='urn:schemas-microsoft-com:office:spreadsheet' xmlns:html='http://www.w3.org/TR/REC-html40'><Worksheet ss:Name='Sample'><Table><Row>";

//Field Name Data
for ($i = 1; $i <= $count; $i++)
	{
    	$data .= "<Cell><Data ss:Type='String'>".$i."</Data></Cell>";
	}
$data .= "</Row>";

//Row Data
$j=0;

while($j<$count) 
    { 
		$data .= "<Row>";
		for ($j = 1; $j <= $count; $j++)
			{
				$data .= "<Cell><Data ss:Type='String'>".$j."</Data></Cell>";
			}
		$data .= "</Row>";
		
		$j++;
	}

//Final XML Blurb
$data .= "</Table></Worksheet></Workbook>";
	


echo $data; 	
	
	
}


	            
	            
?>    
            
	            