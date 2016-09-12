$(function(){
	var oZhe=$("#zhez");
	var oLogin=$("#login-box");
	$("#login").on("click",function(){
		oZhe.css({"display":"block"});
		oLogin.css({"display":"block"});
	})
	oZhe.on("click",function(){
		oZhe.css({"display":"none"});
		oLogin.css({"display":"none"});
	})
})

/*购物车*/
$(function(){
	if($.cookie("skirt")){
		$("#shop-main").css({"display":"none"});
		$("#shop-goods").css({"display":"block"});
	    var oTarget=JSON.parse($.cookie("skirt"));
		var num=oTarget.num;
	    $(".good-num").val(num);
		
		/*总计*/
	var i=oTarget.num;
	$(".cut").click(function(){
		i--;
		if(i<=0){
			i=0;
		}
		$(".good-num").val(i);
		$(function(){
	var total=parseInt($(".good-num").val())*598;
	$(".total").html("￥"+total);
})
	})
	$(".add").click(function(){
		i++;
		$(".good-num").val(i);
		$(function(){
	var total=parseInt($(".good-num").val())*598;
	$(".total").html("￥"+total);
})
	})
	
	
	}else{
		$("#shop-main").css({"display":"block"});
		$("#shop-goods").css({"display":"none"});
	}
	
})
/*总计*/
$(function(){
	var total=parseInt($(".good-num").val())*598;
	$(".total").html("￥"+total);
})





























