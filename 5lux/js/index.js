$(function(){
	//打开页面时显示的图片
	$(".tan_tc").fadeIn();
	$(".tan_tc .tan_close").click(function(){
		$(".tan_tc").fadeOut();
	});
		
	//顶部赔偿弹窗显示
	$(".top").click(function(){
		$(".top_tc").stop().fadeIn();
	});
	//顶部赔偿弹窗消失
	$(".top_tc .top_close").click(function(){
		$(".top_tc").stop().fadeOut();
	});
})
