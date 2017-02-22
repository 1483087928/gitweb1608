<?php
	header ("Access-Control-Allow-Origin: *");
	header("content-type","text/html;charset=utf-8");
	//1、接受客户端的数据（用户输入的数据）
	$goodsId   = $_REQUEST['goodsId'];
	$goodsName = $_REQUEST['goodsName'];
	$goodsType = $_REQUEST['goodsType'];
	$goodsPrice = $_REQUEST['goodsPrice'];
	$goodsCount = $_REQUEST['goodsCount'];
	$goodsDesc = $_REQUEST['goodsDesc'];
	$goodsImg  = $_REQUEST['goodsImg'];
	$beiyong1  = $_REQUEST['beiyong1'];
	$beiyong2  = $_REQUEST['beiyong2'];
	$beiyong3  = $_REQUEST['beiyong3'];
	
	
	//2、数据保存在数据库中
	//1）、建立连接（搭桥）
	$conn = mysql_connect("localhost","root","qianfeng");
	
	//2）、选择数据库（找目的地）
	mysql_select_db("shoppingcenter",$conn);
	
	//3）、传输数据（过桥）
	//insert语句
	$sqlstr = "insert into goodsInfo(goodsId,goodsName,goodsType,goodsPrice,goodsCount,goodsDesc,goodsImg,beiyong1,beiyong2,beiyong3) values('".$goodsId."','".$goodsName."','".$goodsType."'
	,'".$goodsPrice."','".$goodsCount."','".$goodsDesc."','".$goodsImg."'
	,'".$beiyong1."','".$beiyong2."','".$beiyong3."')";
	//echo($sqlstr);
	
	mysql_query($sqlstr,$conn);
	
	//4）、关闭连接（拆桥）
	mysql_close($conn);
	
	//3、给客户端返回（响应）一个注册成功！
	echo "1";
?>