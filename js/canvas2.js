window.onload = function() {
	//得到2D渲染上下文
	var context = document.getElementById("myCanvas").getContext("2d");

	var x = 50,
		y = 50, //原点坐标
		radius = 30, //半径
		startAngle = 0, //起始弧度
		endAngle = Math.PI,//终止弧度
	anticlockwise = true; //是否按逆时针
	//0度为沿x水平方向

	//画一个圆
	context.beginPath();
	context.arc(x, y, radius, startAngle, endAngle);
	context.fillStyle = "red";
	context.fill();

	//画1/4个圆
	context.beginPath();
	x = 150, y = 150, startAngle = 0, endAngle = Math.PI / 2;
	context.arc(x, y, radius, startAngle, endAngle, anticlockwise);
	context.lineTo(x, y); //需要连接原点形成半圆封闭区
	context.closePath(); //闭合路径，这里填充会自动闭合，也可以不写
	context.fillStyle = "blue";
	context.fill();

	//弧形填充
	context.beginPath();
	x = 160, y = 50;
	context.arc(x, y, radius, startAngle, endAngle, true);
	context.fillStyle = "green";
	context.fill();
}