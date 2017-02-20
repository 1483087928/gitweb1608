$(function() {
	//验证用户名是否存在
	$("#usernameId").blur(function() {
		if(/^1\d{10}$/.test($(this).val())) {
			$.get("http://localhost/checkUser.php", {
				"username": $("#usernameId").val()
			}, function(data) {
				if(data.indexOf("0") > -1) {
					$(".zhanghao_2").html('<lable style="color:green;">用户名可以使用</lable>');
				} else {
					$(".zhanghao_2").html("用户名已被使用");
				}
			});
		} else if($(this).val()==""){
			$(".zhanghao_2").html("用户名不能为空");
		}else{
			$(".zhanghao_2").html("请输入正确的手机号码");
		}
	});
	//密码1次验证
	$("#passId").blur(function() {
		if(/^[a-zA-Z_]\w{5,14}$/.test($(this).val())) {
			$(".pass_2").html('<lable style="color:green;">密码可以使用</lable>');
		} else if($(this).val()==""){
			$(".pass_2").html("密码不能为空");
		}else{
			$(".pass_2").html("密码长度在6-15之间，字母，下划线开头");
		}
	});
	//密码2次验证
	$("#checkPassId").blur(function() {
			if($(this).val() == $("#passId").val() && $(this).val() !="") {
				$(".checkPass_2").html('<lable style="color:green;">密码一致</lable>');
			} else if($(this).val()==""){
				$(".checkPass_2").html("密码不能为空");
			}else {
				$(".checkPass_2").html('两次密码不一致');
			}
		})
		//注册提交
	$(".subbtn").click(function() {
		if(/^1\d{10}$/.test($("#usernameId").val()) && /^[a-zA-Z_]\w{5,14}$/.test($("#passId").val()) && $("#usernameId").val() != "" && $("#passId").val() != "") {
			$.post("http://localhost/regSave.php", {
				"username": $("#usernameId").val(),
				"pass": $("#passId").val()
			}, function(data) {
				if(data.indexOf("1") > -1) {
					location.href = "index.html";
				} else {
					location.reload(true);
				}
			});
		}

	});
});