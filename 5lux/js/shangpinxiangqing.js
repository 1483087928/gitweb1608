$(function(){
	function over(){
				$(".imgshadow").show();
				$(".maxImg_right").stop().show(300);
				$(".left_maxImg .left_maxImg2").css("opacity","0.5");
			}
			
			function out(){
				$(".imgshadow").hide();
				$(".maxImg_right").stop().hide(300);
				$(".left_maxImg .left_maxImg2").css("opacity","1");
				
			}	
			
			function move(ev){
				var minLeft = ev.pageX - $(".fangdajing_top_left .left_maxImg").offset().left - $(".imgshadow").outerWidth()/2;
				var minTop = ev.pageY - $(".fangdajing_top_left ").offset().top - $(".imgshadow").outerHeight()/2;
				var maxLeft = $(".imgshadow").outerWidth();
				var maxTop = $(".imgshadow").outerHeight();
				var Left;
				var Top;
				
				if(minLeft<0){
					Left=0;
				}else if(minLeft>maxLeft){
					Left=maxLeft;
				}else{
					Left=minLeft;
				}
				
				if(minTop<0){
					Top=0;
				}else if(minTop>maxTop){
					Top=maxTop;
				}else{
					Top=minTop;
				}
				
				$(".imgshadow").css("left",Left);
				$(".imgshadow").css("top",Top);
				$(".imgshadow .imgshadow2").css("left",-Left);
				$(".imgshadow .imgshadow2").css("top",-Top);
				$(".maxImg_right img").css("left",-Left*2);
				$(".maxImg_right img").css("top",-Top*2);
			}
				
			function moveImg(){
				$(".left_minImg img").mousemove(function(){
					$(this).addClass("active_4").siblings().removeClass();
					//$(".left_maxImg")[0].src = this.src;
					//$(".maxImg_right")[0].src = this.src;
					$(".left_maxImg .left_maxImg2").attr("src",$(this).attr("src"));
					$(".maxImg_right img").attr("src",$(this).attr("src"));
					$(".imgshadow .imgshadow2").attr("src",$(this).attr("src"));
				
				});
			}
								
			$(window).load(function(){
				moveImg();
				$(".left_maxImg")[0].onmouseenter = over;
				$(".left_maxImg")[0].onmouseleave = out;
				$(".left_maxImg").mousemove(function(e){					
					move(e);
				});
			});
			
			
	$(".right_4_4").hover(function(){
		$(".hideweixin").stop().toggle();
	});	
	
	$(".right_4_5").hover(
		function(){
			$(".right_4_5_2").css("visibility","visible");
			$(".right_4_5_1").css({"border": "1px solid #ccc","border-bottom":"none"});
		},
		function(){
			$(".right_4_5_2").css("visibility","hidden");
			$(".right_4_5_1").css({"border":"none"});
		}
	);
	
	$(".lux_1").click(function(){
		$(".top_tc").stop().show();
	});
	
	$(window).scroll(function(){
		if($(this).scrollTop()>$(".middle_left").offset().top){
			$(".mian_top_list").css({"position":"fixed","top":"0"});
		}else{
			$(".mian_top_list").css({"position":"relative"});
		}
	});
	$(".mian_top_right0 .mian_top_right1").click(function(){
		$(this).addClass("active_3").siblings().removeClass("active_3");
		$("html,body").animate({scrollTop:$(".middle_right3").offset().top-30});
	});
	$(".mian_top_right0 .mian_top_right2").click(function(){
		$(this).addClass("active_3").siblings().removeClass("active_3");
		$("html,body").animate({scrollTop:$(".middle_right6").offset().top-30});
	});
	$(".mian_top_right0 .mian_top_right3").click(function(){
		$(this).addClass("active_3").siblings().removeClass("active_3");
		$("html,body").animate({scrollTop:$(".middle_right11").offset().top-30});
	});
	
	$(".mian_top_right4").hover(function(){
		$(".weixin1").stop().toggle();
	});
	
	$(".middle_right1").hover(function(){		
		$(".imghide1").toggle();
	});	
	
	$(".middle_right2_1").hover(
		function(){
			$(".imghide2").toggle();
		}				
	);
	
	$(".middle_right2_2").hover(
		function(){
			$(".imghide3").toggle();
		}		
	);
	
	var $jian=0;
	$(".jian").click(function(){
		$jian=$(".nums").attr("value");
		$jian--;
		if($jian<0){
			$jian=0;
		}		
		$(".nums").attr("value",$jian);
	});
	var $add=0;
	$(".add").click(function(){		
		$add=$(".nums").attr("value");
		$add++;
		if($add>10){
			$add=10;
		}		
		$(".nums").attr("value",$add);
	});
	
	
});
