/*
 * 
 * 商品列表
 * */

/*$(function(){
	var aGoodNum=$("#good-l-box  .good-num");
	console.log("A");
	aGoodNum.hover(function(){
		$(this).css({"border-color":"#e7e7e7"});
	},function(){
		$(this).css({"border-color":"#fff"});
	})
})*/
$(function(){
	var aGood=$("#good-l-box");
	aGood.on("mouseenter mouseleave","li",function(e){
		if(e.type=="mouseenter"){
			$(this).css({"border-color":"#e7e7e7"});
			$(this).find("div").stop(true).show(200).animate({"bottom":"72"});
		}else if(e.type=="mouseleave"){
			$(this).find("div").stop(true).hide().animate({"bottom":"72"});
			$(this).css({"border-color":"#fff"});
		}
		
	});
	
})
