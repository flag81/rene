function open_window(url){
	window.open(url,"locate","location,toolbar, scrollbars=yes,width=1000,height=800,resizable");
}
function displayPopup(strHeight,strWidth,strURL) {
	var windowprops = "toolbar=0,location=0,directories=0,status=0," + "menubar=0,scrollbars=1,resizable=1,left=100,top=100,height=" + strHeight + ",width=" + strWidth;
	OpenWindow = window.open(strURL, "remote", windowprops); 
}

function openWin(message){ 
	newWin=window.open('', 'new_window', 'toolbar=0,location=no,directories=0,status=0, menubar=0,scrollbars=0,resizable=0,left=400,top=100,height=100,width=150') 
	newWin.document.write('<div align="center"><p style="font-family:verdana;font-size:10px; font-weight:bold;" >'+message+'</p><p><img src="../images/progress.gif" width="144" height="18" border="0" alt="Please Wait"></p></div>');
}



