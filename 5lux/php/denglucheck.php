
		<?php
		header ("Access-Control-Allow-Origin:*");
		header("content-type","text/html;charset=utf-8");
			//1、接受客户端的数据（用户输入的数据）
			$userName = $_REQUEST['username'];
			$userPass = $_REQUEST['pass'];
			//echo "用户名:".$userName;
			
			//2、数据保存在数据库中
			//1）、建立连接（搭桥）
			$conn = mysql_connect("localhost","root","qianfeng");
			
			//2）、选择数据库（找目的地）
			mysql_select_db("shoppingcenter",$conn);
			
			//3）、传输数据（过桥）
			//insert语句
			//查找行
			
			
			$sqlstr = "select * from vipinfo where (vipName='".$userName."') and  (vipPass='".$userPass."')";
			
			$result = mysql_query($sqlstr,$conn);
			
			$query_num =mysql_num_rows($result);
			//查找列
			
			//4）、关闭连接（拆桥）
			mysql_close($conn);
			
			//3、给客户端返回（响应）一个注册成功！
			if($query_num==0){
				echo "0";      //说明用户名或密码错误，要重新输入
			}else{
				echo "1";      //说明用户名和密码输入正确，可以登录到首页
			}
		
		?>

