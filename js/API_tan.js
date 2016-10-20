 
phoneRight=document.getElementsByClassName("phone_center_right");
var l=0;
phoneRight[l].style.display="block";
phoneRight[l].className="animated bounceInUp phone_center_right";
document.getElementsByClassName("phone_dian")[l].style.backgroundColor="#666";
document.getElementsByClassName("phone_1")[0].style.top="-30px";
document.getElementsByClassName("phone_1")[3].style.top="-30px";
document.getElementsByClassName("phone_1")[6].style.top="-30px";
/*document.getElementsByClassName("phone_js")[0].style.left="0px";*/
document.getElementsByClassName("phone_js")[0].className="animated bounceInLeft phone_js";
function changePhone(){
	/*phoneRight[l].className="animated bounceOutDown phone_center_right";
    phoneRight[l].style.display="none";*/
	l++;	
	if(l==3){
		l=0;
	}
	phoneRight[l].style.display="block";
    phoneRight[l].className="animated bounceInUp phone_center_right";
    document.getElementsByClassName("phone_dian")[l].style.backgroundColor="#666";
    for(var z=0;z<=2;z++){
    	if(z!=l){
    		phoneRight[z].className="animated bounceOutDown phone_center_right";
            phoneRight[z].style.display="none";
    		document.getElementsByClassName("phone_dian")[z].style.backgroundColor="white";
    	}
    }
    document.getElementsByClassName("phone_js")[l].style.left="300px";
    document.getElementsByClassName("phone_js")[l].className="animated bounceInLeft phone_js";
    for(var b=0;b<=2;b++){
    	if(b!=l){
    		document.getElementsByClassName("phone_js")[b].style.left="-10000px";
    		document.getElementsByClassName("phone_js")[b].className="phone_js phone_jsT";
    	}	
    }  
}
var myphone=setInterval("changePhone()",3000);
function phoneNumber(y){
	document.getElementsByClassName("phone_dian")[y].style.backgroundColor="#666";
	phoneRight[y].style.display="block";
    phoneRight[y].className="animated bounceInUp phone_center_right";
    document.getElementsByClassName("phone_js")[y].style.left="300px";
    document.getElementsByClassName("phone_js")[y].className="animated bounceInLeft phone_js";
	for(var g = 0; g <= 2; g++) {
		if(g != y) {
			//alert(g);
			document.getElementsByClassName("phone_dian")[g].style.backgroundColor = "white";
            phoneRight[g].style.display="none";
			phoneRight[g].className="animated bounceOutDown phone_center_right";
            document.getElementsByClassName("phone_js")[g].style.left="-10000px";
    		document.getElementsByClassName("phone_js")[g].className="phone_js phone_jsT";
		}
	}
}
function phone_dian(y){
	/*phoneRight[y].className="animated bounceOutDown phone_center_right";*/
	l=y;
	phoneNumber(y);
	clearInterval(myphone);
	setTimeout(function(){
		myphone=setInterval("changePhone()",3000);
	},4000);
}
var phone=document.getElementsByClassName("phone_1");
/*for(var t=0;t<phone.length;t++){
	phone[t].onmouseover=function(){
		this.className="phone_1 animated bounce";
		this.style.top="-30px";
		clearInterval(myphone);
	}
	phone[t].onmouseout=function(){
		this.className="phone_1";
		this.style.top="0px";
		myphone=setInterval("changePhone()",3000);
	}
}*/
function showTime1(r){
	phone[r].className="phone_1 animated bounce";
	phone[r].style.top="-30px";
	document.getElementsByClassName("phone_js")[r].style.left="300px";
    document.getElementsByClassName("phone_js")[r].className="animated bounceInLeft phone_js";
	clearInterval(myphone);
	for(var h=0;h<3;h++){
		if(h!=r){
			phone[h].className="phone_1";
	        phone[h].style.top="0px";
	        document.getElementsByClassName("phone_js")[h].style.left="-10000px";
    		document.getElementsByClassName("phone_js")[h].className="phone_js phone_jsT";
		}
	}
}
function showTime2(r){
	phone[r].className="phone_1 animated bounce";
	phone[r].style.top="-30px";
	document.getElementsByClassName("phone_js")[r-3].style.left="300px";
    document.getElementsByClassName("phone_js")[r-3].className="animated bounceInLeft phone_js";
	clearInterval(myphone);
	for(var h=3;h<6;h++){
		if(h!=r){
			phone[h].className="phone_1";
	        phone[h].style.top="0px";
	        document.getElementsByClassName("phone_js")[h-3].style.left="-10000px";
    		document.getElementsByClassName("phone_js")[h-3].className="phone_js phone_jsT";
		}
	}
}
function showTime3(r){
	phone[r].className="phone_1 animated bounce";
	phone[r].style.top="-30px";
	document.getElementsByClassName("phone_js")[r-6].style.left="300px";
    document.getElementsByClassName("phone_js")[r-6].className="animated bounceInLeft phone_js";
	clearInterval(myphone);
	for(var h=6;h<9;h++){
		if(h!=r){
			phone[h].className="phone_1";
	        phone[h].style.top="0px";
	        document.getElementsByClassName("phone_js")[h-6].style.left="-10000px";
    		document.getElementsByClassName("phone_js")[h-6].className="phone_js phone_jsT";
		}
	}
}
function lev(){
	myphone=window.setInterval("changePhone()",3000);
}
 