<!--

function addOption(theSel, theText, theValue)
{
  var newOpt = new Option(theText, theValue);
  var selLength = theSel.length;
  theSel.options[selLength] = newOpt;
}

function deleteOption(theSel, theIndex)
{ 
  var selLength = theSel.length;
  if(selLength>0)
  {
    theSel.options[theIndex] = null;
  }
}
function moveOptions(theSelFrom, theSelTo)
{
  
  var selLength = theSelFrom.length;
  var selectedText = new Array();
  var selectedValues = new Array();
  var selectedCount = 0;
  
  var i;
  
  for(i=selLength-1; i>=0; i--)
  {
    if(theSelFrom.options[i].selected)
    {
      selectedText[selectedCount] = theSelFrom.options[i].text;
      selectedValues[selectedCount] = theSelFrom.options[i].value;
      deleteOption(theSelFrom, i);
      selectedCount++;
    }
  }
  
  for(i=selectedCount-1; i>=0; i--)
  {
    addOption(theSelTo, selectedText[i], selectedValues[i]);
  }
  
}
function saveServices(active_services,services){

 var length = active_services.length;
 
   var string = '';
   if(length==1){
     services.value = active_services.options[0].value;
   }
  else{
	   for(var i=0; i < length; i++){
	   string = string + active_services.options[i].value;
	   if(i== length-1)continue; 
	   string = string + '::';
	    }
	   services.value = string
   }
   return false;
}

function productServices(select_left, select_right, select_product){
	var size = select_right.length;
	for(var i=0; i<size; i++){
		select_right.options[0].selected = true; //first option because the list is recreated
		moveOptions(select_right, select_left);
	}
     // add package services

    var idx = select_product.selectedIndex
    var prod_id = select_product.options[idx].value;
	var arr = new Array('1','3','5');  //AJAX FUN HERE
	for(var i=0;  i< arr.length; i++)
	{
      select_idx = findSelectIdx(select_left, arr[i])
	  select_left.options[select_idx].selected = true;
	  moveOptions(select_left, select_right);
	}
}
function moveSvc(select_left, select_right, arr_services)
{
	for(var i=0;  i< arr_services.length; i++)
	{ 
	  select_idx = findSelectIdx(select_left, arr_services[i])
	  select_left.options[select_idx].selected = true;
	  moveOptions(select_left, select_right);
	}
}
function findSelectIdx(select_o, value){

   var length = select_o.length;
 
   for(var i=0; i<length; i++){

	   if(value==select_o.options[i].value){
		   return i;
		   break;
	   }
   }
   return -1; 
}

//-->