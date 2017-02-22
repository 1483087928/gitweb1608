
	$(function() {
		var userName = $.cookie("username");
		if(userName==null){
			$(".userName").html("登录");
		}else{
			$(".userName").html(userName);
		}
		
		
		
		//打开页面时显示的图片
		$(".tan_tc").fadeIn();
		$(".tan_tc .tan_close").click(function() {
			$(".tan_tc").fadeOut();
		});

		//<!------------右侧悬浮框--------------------->
		$(".right_menu1 .right_menu1_1").hover(
			function() {
				$(this).find(".active2").show();
			},
			function() {
				$(this).find(".active2").hide();
			}
		)
		$(".right_menu2 .right_menu2_1").hover(
			function() {
				$(this).find(".active2").show();
			},
			function() {
				$(this).find(".active2").hide();
			}
		)
		$(".right_menu2 .right_menu2_1").hover(
				function() {
					$(this).find(".menu1_weixin2").show();
				},
				function() {
					$(this).find(".menu1_weixin2").hide();
				}
			)
			//返回顶部
		$(".right_menu2 .right_menu2_1 .menu1_top").click(function() {
			$("body,html").animate({
				scrollTop: 0
			});
		})

		//顶部赔偿弹窗显示
		$(".top_img").click(function() {
			$(".top_tc").stop().show();
		});
		//顶部赔偿弹窗消失
		$(".top_tc .top_close").click(function() {
			$(".top_tc").stop().hide();
		});

		//登录栏
		$(".deng_right .my5lux").mouseover(
			function() {
				$(this).css("backgroundColor", "#fff");
				$(".mylist").show();
			}
		);
		$(".deng_right .my5lux").mouseout(
			function() {
				$(this).css("backgroundColor", "#f1f1f1");
				$(".mylist").hide();
			}
		);
		$(".deng_right .phone").mouseover(
			function() {
				$(this).css("backgroundColor", "#fff");
				$(".qr").show();
			}
		);
		$(".deng_right .phone").mouseout(
			function() {
				$(this).css("backgroundColor", "#f1f1f1");
				$(".qr").hide();
			}
		);

		//购物车信息显示
		$(".logocart").mouseover(
			function() {
				$(".cartbox").stop().show();
			});
		$(".logocart").mouseout(
			function() {
				$(".cartbox").stop().hide();
			});
		

		//<!-----------------------导航栏------------------------->
		$(".menu .menu_right").find("li").hover(
			function() {
				$(this).stop().animate({
					width: 150
				}, 500);
			},
			function() {
				$(this).stop().animate({
					width: 30
				}, 500);
			}
		);
		//分类列表显示
		$(".menu .menu_first").mouseover(function() {
			$(".menu_list").stop().show();
		});
		$(".menu .menu_first").mouseout(function() {
			$(".menu_list").stop().hide();
		})
		$(".menu .menu_first .menu_list").stop().find("li").mouseover(function() {
			$(this).find(".line").stop().show();
			$(this).find("div").stop().show();
		});
		$(".menu .menu_first").stop().find("li").mouseout(function() {
			$(this).find(".line").stop().hide();
			$(this).find("div").stop().hide();
		});

		//<!---------------------------轮播图------------------------------------------>
		var ord = 1; //当前图片的下标
		var myTimer = null;

		//开始轮播
		myTimer = setInterval(nextImg, 2000);

		//鼠标进入图片停止播放
		$(".lunbo_1").mouseover(function() {
			$(".next").show();
			$(".prev").show();
			window.clearInterval(myTimer);
		});
		//鼠标离开图片继续播放
		$(".lunbo_1").mouseout(function() {
			$(".next").hide();
			$(".prev").hide();
			myTimer = setInterval(nextImg, 2000);
		});

		//鼠标进入按钮
		$(".btn span").mouseover(function() {
			clearInterval(myTimer);
			ord = $(this).index();
			nextImg();
		});

		//下一张图片
		$(".next").click(function() {
			nextImg();
		});
		//上一张图片
		$(".prev").click(function() {
			prevImg();
		});

		function nextImg() {
			ord++;
			if(ord > 4) {
				$(".btn span").eq(0).addClass("active").siblings().removeClass();
			}
			$(".lunbo_1 .list").stop(true, true).animate({
				left: -(ord) * 1440
			}, function() {
				if(ord > 4) {
					$(this).css("left", "-1440px");
					ord = 1;
				}
			});
			$(".btn span").eq(ord - 1).addClass("active").siblings().removeClass();
		}

		function prevImg() {
			ord--;
			$(".lunbo_1 .list").stop(true, true).animate({
				left: -(ord) * 1440
			}, function() {
				if(ord < 1) {
					$(this).css("left", "-5760px");
					ord = 4;
				}
			});
			$(".btn span").eq(ord - 1).addClass("active").siblings().removeClass();
		}

		//<!--------------品牌旗舰--------------------------->
		$(".pinpai .pinpai_list li").mouseenter(function() {
			$(this).find(".box").stop().animate({
				height: 154
			}, 200);
		});
		$(".pinpai .pinpai_list li").mouseleave(function() {
			$(this).find(".box").stop().animate({
				height: 54
			}, 200);
		});

		//<!--------------------热门旗舰------------------------------------->
		var i = 0;
		$(".hot_title .hotbtn .hot_pre").click(function() {
			i--;
			i = i % 3;
			$(".hot_list .hotbox").stop().animate({
				left: 1210 * i
			})
		});
		$(".hot_title .hotbtn .hot_next").click(function() {
			i++;
			i = i % 3;
			$(".hot_list .hotbox").stop().animate({
				left: -1210 * i
			})
		});
		$(".hot_list .hotbox .minbox").mouseover(
			function() {
				$(this).find("img").stop(true, true).fadeOut();
				$(this).find(".hidebox").stop(true, true).fadeIn();
				$(this).find('.topline').stop().animate({
					'width': '166px'
				},200);
				$(this).find('.rightline').stop().animate({
					'height': '85px'
				},200);
				$(this).find('.bottomline').stop().animate({
					'width': '166px'
				},200);
				$(this).find('.leftline').stop().animate({
					'height': '85px'
				},200);
			}
			
		).mouseout(function() {
				$(this).find("img").stop(true, true).fadeIn();
				$(this).find(".hidebox").stop(true, true).fadeOut();
				$(this).find('.topline').stop().animate({
					'width': '0'
				},200);
				$(this).find('.rightline').stop().animate({
					'height': '0'
				},200);
				$(this).find('.bottomline').stop().animate({
					'width': '0'
				},200);
				$(this).find('.leftline').stop().animate({
					'height': '0'
				},200);
			});

		//<!------------商场同款--------------------------->
		$(".shangchang_lists").find("li").mouseover(function() {
			$(this).addClass("active").siblings().removeClass("active");
			var n = $(this).index();
			$(".shangchang .boxlist").stop().animate({
				left: -1210 * n
			});
		});
		$(".shangchang .boxs_right_top .boxs_right_top1").mouseenter(function() {
			$(this).find(".toptxt").stop().animate({
				left: -20
			});
			$(this).find(".topimg").stop().animate({
				right: -20
			});
		});
		$(".shangchang .boxs_right_top .boxs_right_top1").mouseleave(function() {
			$(this).find(".toptxt").stop().animate({
				left: 0
			});
			$(this).find(".topimg").stop().animate({
				right: 0
			});
		});
		$(".shangchang .boxs_right_top .boxs_right_top2").mouseenter(function() {
			$(this).find(".toptxt").stop().animate({
				left: -20
			});
			$(this).find(".topimg").stop().animate({
				right: -20
			});
		});
		$(".shangchang .boxs_right_top .boxs_right_top2").mouseleave(function() {
			$(this).find(".toptxt").stop().animate({
				left: 0
			});
			$(this).find(".topimg").stop().animate({
				right: 0
			});
		});
		$(".shangchang .boxs_right_bottom .boxs_right_bottom1").mouseenter(function() {
			$(this).find(".toptxt").stop().animate({
				left: -20
			});
			$(this).find(".topimg").stop().animate({
				right: -20
			});
		});
		$(".shangchang .boxs_right_bottom .boxs_right_bottom1").mouseleave(function() {
			$(this).find(".toptxt").stop().animate({
				left: 0
			});
			$(this).find(".topimg").stop().animate({
				right: 0
			});
		});

		$(".goulist").find(".list01_2").click(function() {
			var H1 = $(".wan_title").offset().top;
			$("html,body").animate({
				scrollTop: H1
			});
		})
		$(".goulist").find(".list01_3").click(function() {
			var H1 = $(".peishi_title").offset().top;
			$("html,body").animate({
				scrollTop: H1
			});
		})
		$(".goulist").find(".list01_4").click(function() {
			var H1 = $(".huazhuang_title").offset().top;
			$("html,body").animate({
				scrollTop: H1
			});
		})
		$(".goulist").find(".list01_5").click(function() {
				var H1 = $(".shishang_title").offset().top;
				$("html,body").animate({
					scrollTop: H1
				});
			})
			//<!------------购物中心--------------------------------->
		$(".goulist .list01").hover(
			function() {
				$(this).find(".top1").stop().animate({
					top: -50
				});
				$(this).find(".bottom1").stop().animate({
					top: 0
				});
			},
			function() {
				$(this).find(".top1").stop().animate({
					top: 0
				});
				$(this).find(".bottom1").stop().animate({
					top: 50
				});
			}
		);

		//<!---------------------经典箱包---------------------> 
		//左下角
		var n = 1;
		$(".bottom_btn .btns li").mouseover(function() {
			n = $(this).index();
			nex();
		});

		//下一张图片
		$(".nex").click(function() {
			nex();
		});
		//上一张图片
		$(".pre").click(function() {
			pre();
		});

		function nex() {
			n++;
			if(n > 3) {
				$(".bottom_btn .btns li").eq(0).addClass("active1").siblings().removeClass();
			}
			$(".good1_bottom_list").stop().animate({
				left: -(n) * 224
			}, function() {
				if(n > 3) {
					$(this).css("left", "-224px");
					n = 1;
				}
			});
			$(".bottom_btn .btns li").eq(n - 1).addClass("active1").siblings().removeClass();
		}

		function pre() {
			n--;
			if(n < 1) {
				$(".bottom_btn .btns li").eq(3).addClass("active1").siblings().removeClass();
			}
			$(".good1_bottom_list").stop().animate({
				left: -(n) * 224
			}, function() {
				if(n < 1) {
					$(this).css("left", "-672px");
					n = 3;
				}
			});
			$(".bottom_btn .btns li").eq(n - 1).addClass("active1").siblings().removeClass();
		}

		$(".goods .good2").mouseover(
			function() {
				$(this).find(".good2_shadow").stop().show().animate({
					top: 270
				});
			}
			
		).mouseout(function() {
				$(this).find(".good2_shadow").stop().animate({
					top: 100
				}).hide();
			});
		$(".hudong_top").find("li").hover(
			function() {
				$(this).stop().animate({
					top: 0
				},500);
			},
			function() {
				$(this).stop().animate({
					top: 5
				},500);
			}
		);

		$(".good3 .good3_1").find("img").hover(
			function() {
				$(this).stop().animate({
					width: 300,
					height: 200
				});
			},
			function() {
				$(this).stop().animate({
					width: 270,
					height: 180
				});
			}
		);
		$(".hudong_bottom .hudong_bottom_left li").hover(
			function() {
				$(this).find('.topline').stop().animate({
					'width': '188px'
				}, 300);
				$(this).find('.rightline').stop().animate({
					'height': '61px'
				}, 300);
				$(this).find('.bottomline').stop().animate({
					'width': '188px'
				}, 300);
				$(this).find('.leftline').stop().animate({
					'height': '61px'
				}, 300);
			},
			function() {
				$(this).find('.topline').stop().animate({
					'width': '0'
				}, 300);
				$(this).find('.rightline').stop().animate({
					'height': '0'
				}, 300);
				$(this).find('.bottomline').stop().animate({
					'width': '0'
				}, 300);
				$(this).find('.leftline').stop().animate({
					'height': '0'
				}, 300);
			}
		);
		$(".hudong_bottom_left li").mouseover(function() {
			var s1 = $(this).find("a img").attr("src");
			$(".hudong_bottom_right li").find("a img").attr("src", s1);
		});
	});
