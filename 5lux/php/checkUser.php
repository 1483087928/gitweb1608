
		<?php
		header ("Access-Control-Allow-Origin:*");
		header("content-type","text/html;charset=utf-8");
			//一、接收客户端的数据
			$userName = $_GET["username"];
			//echo "用户名:".$userName;
			//二、连接数据库，进行判断
				//1、建立连接
				$conn = mysql_connect("localhost","root","qianfeng");
				
				//2、选择数据库
				mysql_select_db("shoppingcenter",$conn);
				
				
				//3、执行SQL语句
				$sqlstr = "select * from vipinfo where vipName=".$userName;
				$result = mysql_query($sqlstr,$conn);//执行查询的sql语句后，有返回值，返回的是查询结果
				
				//查询行数（查找用户名是否重复）
				$query_num =mysql_num_rows($result);
				
				
				//4、关闭数据库
				mysql_close($conn);
				
			//三、返回
			if($query_num==0){
				echo "0";//用户名没有被使用，可以使用
			}else{
				echo "1";//用户名被使用，不可以使用
			}
			
		?>
		


	

