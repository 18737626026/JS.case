window.onlaod=function(){
	var btn=document.getElementsByTagName("button")[0];
	var div=document.getElementsByTagName("div")[0];
			 btn.onclick=function(){
			  var val=document.getElementsByTagName("textarea")[0].value;
			  div.innerHTML +="xm:"+val+"<br/>";
			  document.getElementsByTagName("textarea")[0].value="";
			    }
}
