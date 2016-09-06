/*
 * 购物袋、我的走秀
 */
$(function(){
	
	 var aGoodBag=$(".goods-bag");
	 var aNewBag =$(".new-bag");
	 var aRedx   =$(".redx");
	 var aMyBag  =$(".my-bag");
	   aGoodBag.hover(function(){
	   	 $(this).attr("class","goods-bag2");
	   	 aRedx.attr("class","redx2");
	   	 aNewBag.attr("class","new-bag2");
	   	 aMyBag.eq(0).css({"display":"block"});
	   },
	   function(){
	   	  var aNewBag2 =$(".new-bag2");
	      var aRedx2   =$(".redx2");
	   	 $(this).attr("class","goods-bag");
	   	 aRedx2.attr("class","redx");
	   	 aNewBag2.attr("class","new-bag");
	   	aMyBag.eq(0).css({"display":"none"});
	   });
	   var aMyXiu=$(".myxiu");
	   var aMyXiu2=$(".my-xiu");
	   var aMyXiuList=$(".my-list-xiu");
	   aMyXiu.hover(function(){
	   	$(this).attr("class","myxiu2");
	    aMyXiu2.eq(0).attr("class","my-xiu2");	
	   	aMyXiuList.eq(0).css({"display":"block"});
	   },function(){
	   	var aMyXiu3=$(".my-xiu2");
	   	$(this).attr("class","myxiu");
	   	aMyXiu3.eq(0).attr("class","my-xiu");
	   	aMyXiuList.eq(0).css({"display":"none"});
	   });
});

/*
 *导航
 */
$(function(){
	var oNav=$("#nav");
	var aA =$("#nav li a");
	//console.log(aLi);
	aA.hover(function(){
		$(this).css({"border-bottom":"2px solid #727071"});
		 
	},
	function(){
		$(this).css({"border-bottom":"0"});
	})
			
})


























