/*放大镜*/
$(function(){
	var ione = $(".wai"),
		ithe = $(".the"),
		tthe = $(".the img");
	//console.log(ione);
	//console.log(ithe);
	//var arr = ["img/1.jpg","img/2.jpg","img/3.jpg"];
		ione.mousemove(function(a){
			var evt = a || window.event
			ithe.css({"display":"block"});
			var ot = evt.clientY-($(".wai").offset().top- $(document).scrollTop())-87;
			var ol = evt.clientX-($(".wai").offset().left- $(document).scrollLeft())-87;
			if(ol<=0){
				ol = 0;
			}
			if(ot<=0){
				ot = 0;
			}
			if(ol>=230){
				ol=230
			}
			if(ot>=360){
				ot=360
			}
			$("span").css({'left':ol,'top':ot})
			var ott = ot/350*800
			var oll = ol/350*800
			tthe.css({'left':-oll,'top':-ott})
		})
		ione.mouseout(function(){
			ithe.css('display','none')
		})
		
	})
	
	
	
	$(function(){
		var aLi=$("#g-tab-box li");
		aLi.on("click",function(){
			aLi.attr("class","");
			$(this).addClass("xuanz");
			
		})
		aLi.eq(0).on("click",function(){
			$(".g-mes").css({"display":"block"});
			$(".g-mes1").css({"display":"none"});
		})
		aLi.eq(1).on("click",function(){
			$(".g-mes").css({"display":"none"});
			$(".g-mes1").css({"display":"block"});
		})
	})

$(function(){
	var aJia=$(".jia");
	var aJian=$(".jian");
	var i=1;
	var aGoodNum=$(".goods-num");
	aJia.eq(0).on("click",function(){
		i++;
		$(".goods-num").eq(0).val(i);
	})
	aJian.eq(0).on("click",function(){
		i--;
		if(i<=0){
			i=0;
		}
		$(".goods-num").eq(0).val(i);
		
	})
})

$(function(){
	$(".add-c").click(function(){
		var num=$(".goods-num").val();
		//console.log($(".goods-num"));
		console.log(num);
		var oTarget={"name":"女士黑色真丝中长款大摆无袖A字连衣裙","price":"598","color":"黑色","size":"S","num":num}
		var sTarget=JSON.stringify(oTarget);
		//console.log(typeof sTarget);
		$.cookie("skirt",sTarget,{path:"/",expires:7});
		if(num==0){
			$.removeCookie("skirt",{path:"/"});
		}
		$(".gd-num").html(num);
	})
})
$(function(){
	var oTarget=JSON.parse($.cookie("skirt"));
		var cnum=oTarget.num;
		console.log(cnum);
		$(".gd-num").html(cnum);
})
