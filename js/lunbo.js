function $(id) {
	return document.getElementById(id);
}

var p = document.getElementsByClassName("partner");
var t = 0;
p[t].style.left = "0px";
document.getElementsByClassName("point")[t].style.backgroundColor = "#ccc";
for(var i = 0; i < p.length; i++) {
	if(i != t) {
		p[i].style.left = "800px";
	}
}

function lunb() {
	t++;
	if(t == p.length) {
		t = 0;
	}
	p[t].style.left = "0px";
	p[t].className="animated fadeInRightBig partner";
	document.getElementsByClassName("point")[t].style.backgroundColor = "#ccc";
	for(var i = 0; i < p.length; i++) {
		if(i != t) {
			p[i].style.left = "800px";
			p[i].className="partner";
			document.getElementsByClassName("point")[i].style.backgroundColor = "white";
		}
	}
}
var id = window.setInterval("lunb()", 3000);

function showNumber(n) {
	document.getElementsByClassName("point")[n].style.backgroundColor = "#ccc";
	for(var t = 0; t <= 4; t++) {
		if(t != n) {
			document.getElementsByClassName("point")[t].style.backgroundColor = "white";
			p[t].style.left = "800px";
		}
	}
}
function show(n){
	p[n].style.left = "0px";
	p[n].className="animated fadeInRightBig partner";
	showNumber(n);
}
document.getElementById("close").onclick=function(){
	document.getElementsByClassName("video2")[0].style.display="none";
}
document.getElementsByClassName("bofang")[0].onclick=function(){
	document.getElementsByClassName("video2")[0].style.display="block";
}
