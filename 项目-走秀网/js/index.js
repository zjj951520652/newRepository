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
		$(this).css({"border-bottom":"2px solid #fff"});
	})
	
})

/*分享、返现、邀请*/
$(function(){
	var aFenx=$(".fenxiang");
	var aXinp=$(".xinpin");
	var aLip=$(".lipin");
	var aYaoq=$(".yaoqing");
	aFenx.hover(function(){
		$(this).animate({"left":"30"});
	},function(){
		$(this).stop(true).animate({"left":"60"});
	})
	aXinp.hover(function(){
		$(this).stop(true).animate({"left":"360"});
	},function(){
		$(this).stop(true).animate({"left":"390"});
	})
	aLip.hover(function(){
		$(this).stop(true).animate({"left":"680"});
	},function(){
		$(this).stop(true).animate({"left":"710"});
	})
	aYaoq.hover(function(){
		$(this).stop(true).animate({"left":"980"});
	},function(){
		$(this).stop(true).animate({"left":"1000"});
	})
})

/*尖货推荐 商品展示*/
$(function(){
   var aImg=$("#tj-goods img");
   aImg.hover(function(){
   	$(this).fadeTo("50",0.66);
   },function(){
   	$(this).fadeTo("50",1);
   })
})

/*热荐专题 商品展示*/
$(function(){
  var oBox=$("#rt-g-box");
 //var aImg=$("#rt-g-box a img");
//aLi.hover(function(){
//	aImg.stop(true).animate({"width":630,"height":310,"left":-15,"top":-5});
//},function(){
//	aImg.stop(true).animate({"width":600,"height":300,"left":0,"top":0});
//})
//	
	oBox.on("mouseenter mouseleave","li",function(e){
		if(e.type=="mouseenter"){
			$(this).find("a img").stop(true).animate({"width":630,"height":310,"left":-15,"top":-5},"10");
		}else if(e.type=="mouseleave"){
			$(this).find("a img").stop(true).animate({"width":600,"height":300,"left":0,"top":0},"10");
		}
	})	
	
})


/*精选卖场*/
$(function(){
	var oBox=$("#hot-g-box");
	oBox.on("mouseenter mouseleave","li",function(e){
		if(e.type=="mouseenter"){
			$(this).find("a img").stop(true).animate({"width":420,"height":310,"left":-10,"top":-5},"10");
		}else if(e.type=="mouseleave"){
			$(this).find("a img").stop(true).animate({"width":400,"height":300,"left":0,"top":0},"10");
		}
	})
})

/*跟多卖场*/
$(function(){
	var aImg=$("#msld-box img");
	aImg.hover(function(){
		$(this).stop(true).fadeTo("50",0.66);
	},function(){
		$(this).stop(true).fadeTo("50",1);
	})
})

/*发现好货 商品展示*/
$(function(){
	var aImg=$("#found-g-box img");
	aImg.hover(function(){
		$(this).css({"border-color":"#d3d1d2"});
	},function(){
		$(this).css({"border-color":"#fff"});
	})
})














