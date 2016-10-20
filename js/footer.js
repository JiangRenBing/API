var shang=document.getElementsByClassName("shang")[0];
var xia=document.getElementsByClassName("xia")[0];
var content=document.getElementsByClassName("defali_content")[0];
content.style.display="none";
xia.style.display="none";
shang.onclick=function(){
	xia.style.display="inline-block";
	shang.style.display="none";
	content.style.display="block";
}
xia.onclick=function(){
	xia.style.display="none";
	shang.style.display="inline-block";
	content.style.display="none";
}