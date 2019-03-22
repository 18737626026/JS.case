window.onlaod=function(){
	var btu=document.getElementsByTagName("button")[0];
	var checkboxs=document.getElementsByTagName("checkboxs")[0];
	btu[0].onclick=function(){
		for (var i=0;i<checkboxs.length;i++) {
			checkboxs[i].checked=true;
		}
		
	}
	btu[1].onclick=function(){
		for (var i=0;i<checkboxs.length;i++) {
			checkboxs[i].checked=false;
		}
		
	}
	btu[2].onclick=function(){
		for (var i=0;i<checkboxs.length;i++) {
			if (checkboxs[i].checked=true) {
				
				checkboxs[i].checked=false;
			} else{
				checkboxs[i].checked=true;
			}
		}
		
	}
}
