$(function(){
	
   $("#tab-1").on("click",function(){
   		$(this).css({"font-weight":"600","color":"#464646","border-bottom":"2px solid #464646"});
   		$("#tab-2").css({"font-weight":"0","color":"#afafaf","border-bottom":"0"});
   		$(".mess-1").css({"display":"block"});
   		$(".mess-2").css({"display":"none"});
   })
   
    $("#tab-2").on("click",function(){
   		$(this).css({"font-weight":"600","color":"#464646","border-bottom":"2px solid #464646"});
   		$("#tab-1").css({"font-weight":"0","color":"#afafaf","border-bottom":"0"});
   		$(".mess-1").css({"display":"none"});
   		$(".mess-2").css({"display":"block"});
   })
})
$(function(){
	$(".slo").on("click",function(){
		$("#login-box").css({"display":"none"});
		$("#mess-3").css({"display":"block"});
	})
	$(".t-img").on("click",function(){
		$("#login-box").css({"display":"none"});
		$("#mess-3").css({"display":"block"});
	})
	$(".pc").on("click",function(){
		$("#login-box").css({"display":"block"});
		$("#mess-3").css({"display":"none"});
	})
	$(".img-pc").on("click",function(){
		$("#login-box").css({"display":"block"});
		$("#mess-3").css({"display":"none"});
		
	})
	
})

$(function(){
	$(".sign").on("click",function(){
		$("#tab-1").css({"font-weight":"600","color":"#464646","border-bottom":"2px solid #464646"});
   		$("#tab-2").css({"font-weight":"0","color":"#afafaf","border-bottom":"0"});
   		$(".mess-1").css({"display":"block"});
   		$(".mess-2").css({"display":"none"});
	})
})
$(function(){
	$(".login2").on("click",function(){
	//console.log("a");
	var aUser=$(".user");
	var aPassW=$(".passw2");
	var num2=aPassW.eq(0).val();
	var num3=$(".user").eq(0).val();
	var num1=aUser.eq(0).val();
	if(num3=="15737328660"&&num2=="123890"){
		console.log("a");
		$(".login2").attr("href","../index.html");
	}
	
	})
	
	
})
$(function(){
	$(".login1").on("click",function(){
	var aUser=$(".user1");
	var aPassW=$(".passw");
	var num2=aPassW.eq(0).val();
	var num3=$(".user1").eq(0).val();
	var num1=aUser.eq(0).val();
	if(num3.length==11){
		$(".login1").attr("href","../index.html");
	}else{
		alert("必须输入手机号");
	}
	
	})
	
	
})

$(function(){
	$(".login2").click(function(){
    	$.cookie("username","15737328660",{
    		path:"/",expires:7
    	});
    })
})
$(function(){
    $(".login1").click(function(){
    	$.cookie("username2",$(".user1").val(),{
    		path:"/",expires:7
    	});
    })
    $.removeCookie("username",{path:"/"});
})


















