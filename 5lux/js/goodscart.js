$(function() {

	//获取购物车中的数据
	var userName = $.cookie("username");
	$.get("http://localhost/getcart.php", {
		"username": userName
	}, function(data) {
		//console.log(data)
		var ord1 = eval("(" + data + ")");
		var str2 = "";
		for(var i = 0; i < ord1.length; i++) {
			str = '<tr id="' + ord1[i].goodsId + '" class="tr1">' +
				'<td><input type="checkbox" class="allcheck1"/>选择</td>' +
				'<td class="goodImg"><a href="###"><img src="' + ord1[i].goodsImg + '"/></a></td>' +
				'<td class="goodName">' + ord1[i].goodsDesc + '</td>' +
				'<td class="goodColor">' + ord1[i].goodsType + '</td>' +
				'<td class="goodPrice">' + ord1[i].goodsPrice + '</td>' +
				'<td>' +
				'<p class="td_nums1">' +
				'<span class="jian1"></span>' +
				'<input type="text" class="nums1" value="' + ord1[i].goodsCount + '"/>' +
				'<span class="add1"></span>' +
				'</p>' +
				'</td>' +
				'<td class="goodActive"></td>' +
				'<td class="sumPrice">' + ord1[i].goodsPrice * ord1[i].goodsCount + '</td>' +
				'<td >' +
				'<a href="###" class="delete">删除</a>' +
				'</td>' +
				'</tr>'
			$(".goodscart").append(str);
		}
	})

	//修改购物车商品数量
	function updetaCount() {
		$.get("http://localhost/updateGoodsCount.php", {
			"username": userName,
			"goodsId": $(".tr1").eq(n1).attr("id"),
			"goodsCount": $(".nums1").eq(n1).val()
		}, function(data) {
			console.log(data);
		});
	}

	var n;
	var n1;
	$(".goodscart").on("click", ".add1", function() {
		n1 = $(".add1").index(this);
		n = $(".nums1").eq(n1).val();
		n++;
		if(n > 100) {
			n = 100;
		}
		$(".nums1").eq(n1).val(n);
		$(".sumPrice").eq(n1).html($(".goodPrice").eq(n1).html() * n);
		updetaCount();

		var s3 = 0;
		$(".allcheck1").each(function(i) {
			if($(".allcheck1").eq(i).attr("checked")) {
				s3 += parseFloat($(".sumPrice").eq(i).text());
			}
		});
		$(".goodSumPrice").html(s3.toFixed(2));

	});
	$(".goodscart").on("click", ".jian1", function() {
		n1 = $(".jian1").index(this);
		n = $(".nums1").eq(n1).val();
		n--;
		if(n < 1) {
			n = 1;
		}
		$(".nums1").eq(n1).val(n);
		$(".sumPrice").eq(n1).html($(".goodPrice").eq(n1).html() * n);
		updetaCount();
		var s4 = 0;
		$(".allcheck1").each(function(i) {
			if($(".allcheck1").eq(i).attr("checked")) {
				s4 += parseFloat($(".sumPrice").eq(i).text());
			}
		});
		$(".goodSumPrice").html(s4.toFixed(2));

	});

	//删除物品
	$(".goodscart").on("click", ".delete", function() {
		var i = $(".delete1").index(this);
		//console.log($("tr").eq(i).attr("id"));
		if(confirm("真的要删除吗？")) {
			$.get("http://localhost/deletecart.php", {
				"username": userName,
				"goodsId": $("tr").eq(i).attr("id")
			}, function(data) {
				if(data.indexOf("1") > -1) {
					alert("成功删除商品");
				} else {
					alert("删除商品失败");
				}
			});
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
	//全选
	$(".allcheck").on("click", function() {
		var s1 = 0;
		if($(this).attr("checked")) {
			$(".allcheck").prop("checked", true);
			$(".allcheck1").attr("checked", "checked");
			$(".sumPrice").each(function() {
				s1 += parseFloat($(this).text());
			});
			$(".goodSumPrice").html(s1.toFixed(2));

		} else {
			$(".allcheck").removeAttr("checked");
			$(".allcheck1").removeAttr("checked");
			$(".goodSumPrice").html(s1.toFixed(2));
		}
	});
	//取消全选按钮的选中状态
	$(".goodscart").on("click", ".allcheck1", function() {
		var s2 = 0;
		$(".allcheck1").each(function(i) {
			if($(".allcheck1").eq(i).attr("checked")) {
				s2 += parseFloat($(".sumPrice").eq(i).text());
			}
		});
		$(".goodSumPrice").html(s2.toFixed(2));
		$(".allcheck").removeAttr("checked");
	});

});