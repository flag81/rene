  function gjendjaKerkeses(gjendjaKer)
		  {
			  if(gjendjaKer =="nukRealizohet")
					{
					  document.getElementById("nukRealizohet").checked = true;
					  document.getElementById("nePritje").disabled = true;
					  document.getElementById("neProcesim").disabled = true;
					  document.getElementById("realizuar").disabled = true;
					  document.getElementById("analised_date").readonly = true;
					  document.getElementById("montatori").readonly = true;
					  document.getElementById("realised_date").readonly  = true;
					  document.getElementById("processo_kerkesat").style.visibility = "hidden";
					}
					else if(gjendjaKer =="nePritje")
					{
					  document.getElementById("nePritje").checked = true;
					  document.getElementById("nukRealizohet").disabled = true;
					  document.getElementById("neProcesim").disabled = true;
					  document.getElementById("realizuar").disabled = true;
					  
					  document.getElementById("analised_date").readonly = true;
					  document.getElementById("montatori").readonly = true;
					  document.getElementById("realised_date").readonly  = true;
					  document.getElementById("processo_kerkesat").style.visibility= "hidden";
					}
					else if(gjendjaKer =="neProcesim")
					{
					  document.getElementById("neProcesim").checked = true;
					  document.getElementById("realizuar").disabled = true;
					  document.getElementById("nukRealizohet").disabled = true;
					  document.getElementById("nePritje").disabled = true;
					  
					  document.getElementById("analised_date").readonly = true;
					  document.getElementById("montatori").readonly = true;
					  document.getElementById("realised_date").readonly  = true;
					  document.getElementById("processo_kerkesat").style.visibility = "hidden";
					}
					else if(gjendjaKer =="realizuar")
					{
					  document.getElementById("realizuar").checked = true;
					  document.getElementById("nukRealizohet").disabled = true;
					  document.getElementById("neProcesim").disabled = true;
					  document.getElementById("nePritje").disabled = true;
					  document.getElementById("analised_date").readonly = true;
					  document.getElementById("montatori").readonly = true;
					  document.getElementById("realised_date").readonly  = true;
					  document.getElementById("processo_kerkesat").style.visibility = "hidden";
					}
					else 
					{
					  document.getElementById("nukRealizohet").checked = false;
					  document.getElementById("nePritje").checked = false;
					  document.getElementById("neProcesim").checked = false;
					  document.getElementById("realizuar").checked = false;
					  document.getElementById("nukRealizohet").disabled = false;
					  document.getElementById("nePritje").disabled = false;
					  document.getElementById("neProcesim").disabled = true;
					  document.getElementById("realizuar").disabled = false;
					  document.getElementById("analised_date").readonly = false;
					  document.getElementById("montatori").readonly = false;
					  document.getElementById("realised_date").readonly  = false;
					  document.getElementById("processo_kerkesat").style.visibility = "visible";
					}
		  }
 
  function arsyetValue(arsyet)
		  {
		        if(arsyet =="AnulohetPala")
				{
				  document.getElementById("AnulohetPala").checked = true;
				}
				else if(arsyet =="GabimKerkese")
				{
				  document.getElementById("GabimKerkese").checked = true;
				}
				else if(arsyet =="Demontuar")
				{
				  document.getElementById("Demontuar").checked = true;
				}
				else if(arsyet =="Borxh")
				{
				  document.getElementById("Borxh").checked = true;
				}
				else if(arsyet =="PengeseLinj")
				{
				  document.getElementById("PengeseLinj").checked = true;
				}
				else if(arsyet =="rcm")
				{
				  document.getElementById("rcm").checked = true;
				}
				else if(arsyet =="NukKaRrjet")
				{
				  document.getElementById("NukKaRrjet").checked = true;
				}
				else if(arsyet =="Point")
				{
				  document.getElementById("Point").checked = true;
				}
				else if(arsyet =="NukKaLs")
				{
				  document.getElementById("NukKaLs").checked = true;
				}
				else if(arsyet =="NukKaPorte")
				{
				  document.getElementById("NukKaPorte").checked = true;
				}
				else if(arsyet =="NukKaPc")
				{
				  document.getElementById("NukKaPc").checked = true;
				}
				else if(arsyet =="NukShtepi")
				{
				  document.getElementById("NukShtepi").checked = true;
				}	
				else 
				{
					document.getElementById("other").value = arsyet;
					document.getElementById("AnulohetPala").checked = false;
					document.getElementById("GabimKerkese").checked = false;
					document.getElementById("Demontuar").checked = false;
					document.getElementById("Borxh").checked = false;
					document.getElementById("PengeseLinj").checked = false;
					document.getElementById("rcm").checked = false;
					document.getElementById("NukKaRrjet").checked = false;
					document.getElementById("Point").checked = false;
					document.getElementById("NukKaLs").checked = false;
					document.getElementById("NukKaPorte").checked = false;
					document.getElementById("NukKaPc").checked = false;
					document.getElementById("NukShtepi").checked = false;
				}
		  } 
		  
		  