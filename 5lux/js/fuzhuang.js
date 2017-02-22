$(function(){
	$(".fuzhuang_pinpai_2_1 li").mousemove(function(){
		var n = $(this).index();
		$(this).addClass("active_5").siblings().removeClass("active_5");
		$(".fuzhuang_pinpai_2_2 li").eq(n).stop().show().siblings().stop().hide();
	});
	
	$.get("http://localhost/shop.php",function(data){
		var goods = eval("("+data+")");
		var str1 ="";
		for(var i=0;i<goods.length;i++){		
			str ='<li>'+ 
				'<div class="goodimg">'+
					'<a href="shangpinxiangqing.html?id='+goods[i].goodsId+'"><img src="'+goods[i].goodsImg+'"/></a>'+
				'</div>'+
				'<div class="goodxinxi">'+
					'<p class="goodpinpai">'+goods[i].goodsType+'</p>'+
					'<p class="gooddecoration">'+goods[i].goodsDesc+'</p>'+
					'<p class="goodprice">'+goods[i].goodsPrice+'</p>'+
				'</div>'+
				'</li>'
		$(".fuzhuang_img_1_list").append(str);
		}
	
		
	})
	
	
	
	
						
				
	
					
});
