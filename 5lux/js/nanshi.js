$(function(){
	
	$(".pin_tuijian_1 li a").hover(
		function(){
			$(this).find(".img_shadow").toggle();
		}
	);
	
	
	$(".watches_bottom li").hover(
		function(){
			$(this).find(".watches_bottom_2").css("background","#ccc");
		},
		function(){
			$(this).find(".watches_bottom_2").css("background","#fff");
		}
	);
});
