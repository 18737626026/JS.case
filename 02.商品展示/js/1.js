window.onload=function(){
	var img=document.getElementsByTagName("img");
	var show_top=document.getElementsByClassName("show_top")[0];
	
	for (var i=0;i<img.length;i++) {
		(function(i){
			img[i].onmouseover=function(){
			show_top.style.backgroundImage="url(./img/0"+(i+1)+"big.jpg)"	
			}
		})(i)
	}
}
