$(function() {
	//验证用户名是否存在
	$("#userId").blur(function() {
		if(/^1\d{10}$/.test($(this).val())) {
			$.get("http://localhost/checkUser.php", {
				"username": $("#userId").val()
			}, function(data) {
				console.log(data);
				if(data.indexOf("0") > -1) {
					$(".zhanghao_2").html("用户名不存在");
					$(".zhanghao_2").css("color","red");
					
				} else {
					$(".zhanghao_2").html("用户名存在");
					$(".zhanghao_2").css("color","green");
					
				}
			});
		} else {
			$(".zhanghao_2").html("请输入正确的手机号码");
		}
	});
	
															
	$(".subbtn").click(function() {
		$.post("http://localhost/denglucheck.php", {
			"username": $("#userId").val(),
			"pass": $("#passId").val()
		}, function(data) {
			if(data.indexOf("1") > -1) {
				//2、跳转页面；
				if($(".checkbtn").attr("checked")){
					//alert(1);
					//1、记录cookie;
					$.cookie("username", $("#userId").val(), {path: '/',expires: 7});
					$.cookie("pass", $("#passId").val(), {path: '/',expires: 7});
					
				}																		
				location.href = "index.html";		
			}else{
				$(".pass_2").html("密码不正确");
			}
		});
	});
});