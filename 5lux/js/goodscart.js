$(function() {
var n;
	$(".add1").click(function() {
		n = $(this).siblings(".nums1").val();
		n++;
		if(n > 100) {
			n = 100;
		}
		$(this).siblings(".nums1").val(n);
		$(this).parents().siblings(".sumPrice").html($(".goodPrice").html()*n);
		
	});
	$(".jian1").click(function() {
		n= $(this).siblings(".nums1").val();
		n--;
		if(n < 1) {
			n = 1;
		}
		$(this).siblings(".nums1").val(n);
		$(this).parents().siblings(".sumPrice").html($(".goodPrice").html()*n);
		
	});
	









	$(".goodscart").on("click", ".delete", function() {
		if(confirm("真的要删除吗？")) {
			$(this).parent().parent().remove();
			if($("tr").length == 1) {
				$(".backhome").show();
				$(".cart_bottom").hide();
			} else {
				$(".backhome").hide();
				$(".cart_bottom").show();
			}
		}
	});

	$(".allcheck").click(function() {
		if($(this).attr("checked")){
			$(".allcheck").attr("checked", "checked");
			$(".allcheck1").attr("checked", "checked");
			
		}else{
			$(".allcheck").removeAttr("checked");
			$(".allcheck1").removeAttr("checked");
		}
		
	});

	$(".allcheck1").click(function() {
		$(".allcheck").removeAttr("checked");
		
			
		
	});

	


});