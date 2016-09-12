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
	
	$("#nav li a").on("click",function(){
	    $("#nav li a").each(function(i){
	    	$("#nav li a").eq(i).css({"border-bottom":"0"});
	    	$("#nav li a").eq(i).css({"color":"#eeeeee"});
	    })
		$(this).css({"border-bottom":"2px solid #727071"});
		$(this).css({"color":"#bfbfbf"});
		$("#nav li a").eq(5).css({"color":"red"});
	})
})

/*选项卡*/
$(function(){
	var aLi=$("#tab-list li");
	var aTabListBox=$(".tab-list-box");
	$("#tab-list li").each(function(i){
		$("#tab-list li").eq(i).hover(function(){
			if(i<3){
				aTabListBox.eq((i+1)).css({"display":"block","left":362+(i*72),"top":134});
			}else{
				aTabListBox.eq((i+1)).css({"display":"block","left":362+(2*72),"top":134});
			}
			
		},function(){
			aTabListBox.eq((i+1)).css({"display":"none"});
		})
	})
	aLi.hover(function(){
		$(this).css({"border-color":"#d7d7d7"});
		$(this).css({"border-bottom":"0"});
	},function(){
		$(this).css({"border-color":"#fff"});
		$(this).css({"border-bottom":"1px solid #fff"});
	})
	aTabListBox.hover(function(){
		$(this).css({"display":"block"});
	},function(){
		$(this).css({"display":"none"});
	})
})