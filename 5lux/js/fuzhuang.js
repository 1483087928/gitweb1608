$(function(){
	$(".fuzhuang_pinpai_2_1 li").mousemove(function(){
		var n = $(this).index();
		$(this).addClass("active_5").siblings().removeClass("active_5");
		$(".fuzhuang_pinpai_2_2 li").eq(n).stop().show().siblings().stop().hide();
	});
});
