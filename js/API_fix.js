function $(id){
	return document.getElementById(id);
}
window.onscroll=function(){
	//$("fix").className="fix_scroll";
	//alert(document.body.scrollTop);
	
	//API start
	var AP=document.getElementById("API");
	m=document.body.scrollTop;
	if(m>=1962&&m<=2150){
		var x=1762-m;
		AP.style.backgroundPositionY=x+"px";
	}
	//video start
	if(document.body.scrollTop>=3000){
		document.getElementsByClassName("video_nav_1")[0].style.animation="move3 1s linear forwards";
		document.getElementsByClassName("video_nav_2")[0].style.animation="move4 1s linear forwards";
		document.getElementsByClassName("bofang")[0].style.animation="move6 1s linear forwards";
	}
	if(document.body.scrollTop<3000){
		document.getElementsByClassName("video_nav_1")[0].style.animation="move2 1s linear forwards";
		document.getElementsByClassName("video_nav_2")[0].style.animation="move5 1s linear forwards";
		document.getElementsByClassName("bofang")[0].style.animation="move7 1s linear forwards";
	}
	//fix start
	if(document.body.scrollTop==0){
		$("fix").className="fix";	
		$("fix_left").src="img/logo-light.png";
		$("fix_top1_down").style.top="40px";
		$("fix_top4_down").style.top="40px";
		$("fix_top5_down").style.top="40px";
		var yanse=document.getElementsByClassName("yanse");
		for(var t=0;t<yanse.length;t++){
			yanse[t].style.color="white";		
		}
		var fixTop=document.getElementsByClassName("fix_top");
		for(var i=0;i<fixTop.length;i++){
			fixTop[i].onmouseover=function(){
				this.style.backgroundColor=" rgba(0,0,0,0.9)";
			};
			fixTop[i].onmouseout=function(){
				this.style.backgroundColor=" rgba(0,0,0,0)";
			}
		}
		$("denglu").style.borderColor="white";
		$("denglu").style.color="white";
		for(var p=0;p<document.getElementsByClassName("fix_top1_down_1").length;p++){
			document.getElementsByClassName("fix_top1_down_1")[p].style.backgroundColor="rgba(0,0,0,0.9)";
			document.getElementsByClassName("fix_top1_down_1")[p].style.color="white";
		}
		for(var n=0;n<document.getElementsByClassName("fix_top1_bg").length;n++){
			document.getElementsByClassName("fix_top1_bg")[n].style.backgroundPositionY="-30px";
		}
		
	}else if(document.body.scrollTop>0&&document.body.scrollTop<=700){
		$("fix").className="fix_scroll";
		$("fix_left").src="img/logo-light.png";
		$("fix_top1_down").style.top="60px";
		$("fix_top4_down").style.top="60px";
		$("fix_top5_down").style.top="60px";
		var yanse=document.getElementsByClassName("yanse");
		for(var t=0;t<yanse.length;t++){
			yanse[t].style.color="white";		
		}
		var fixTop=document.getElementsByClassName("fix_top");
		for(var i=0;i<fixTop.length;i++){
			fixTop[i].onmouseover=function(){
				this.style.backgroundColor=" rgba(0,0,0,0)";
			};
			fixTop[i].onmouseout=function(){
				this.style.backgroundColor=" rgba(0,0,0,0)";
			}
		}
		$("denglu").style.borderColor="white";
		$("denglu").style.color="white";
		for(var p=0;p<document.getElementsByClassName("fix_top1_down_1").length;p++){
			document.getElementsByClassName("fix_top1_down_1")[p].style.backgroundColor="rgba(0,0,0,0.9)";
			document.getElementsByClassName("fix_top1_down_1")[p].style.color="white";
		}
		for(var n=0;n<document.getElementsByClassName("fix_top1_bg").length;n++){
			document.getElementsByClassName("fix_top1_bg")[n].style.backgroundPositionY="-30px";
		}
		
	}else{
		$("fix").className="fix_scroll2";
		$("fix_left").src="img/logo-dark.png";
		$("fix_top1_down").style.top="60px";
		$("fix_top4_down").style.top="60px";
		$("fix_top5_down").style.top="60px";
		var yanse=document.getElementsByClassName("yanse");
		for(var t=0;t<yanse.length;t++){
			yanse[t].style.color="black";		
		}
		var fixTop=document.getElementsByClassName("fix_top");
		for(var i=0;i<fixTop.length;i++){
			fixTop[i].onmouseover=function(){
				this.style.backgroundColor="rgba(240,240,240,0.6)";
			};
			fixTop[i].onmouseout=function(){
				this.style.backgroundColor="rgba(0,0,0,0)";
			}
		}
		$("denglu").style.borderColor="black";
		$("denglu").style.color="black";
		for(var p=0;p<document.getElementsByClassName("fix_top1_down_1").length;p++){
			document.getElementsByClassName("fix_top1_down_1")[p].style.backgroundColor="white";
			document.getElementsByClassName("fix_top1_down_1")[p].style.color="black";
		}
		for(var n=0;n<document.getElementsByClassName("fix_top1_bg").length;n++){
			document.getElementsByClassName("fix_top1_bg")[n].style.backgroundPositionY="0px";
		}
	}
}
