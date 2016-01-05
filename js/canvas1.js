window.onload = function() {
	//得到2D渲染上下文
	var context = document.getElementById("myCanvas").getContext("2d");
	//填充一个矩形
	var x = 40,
		y = 40;
	context.fillStyle = "blue"; //设置填充色
	context.fillRect(x + 5, y + 5, 40, 90);

	//绘制一个矩形边框
	context.strokeStyle = "red"; //设置画笔色
	context.strokeRect(x, y, 50, 100);


	context.beginPath(); //beginPath1
	context.moveTo(10, 10);
	context.lineTo(150, 50);
	context.lineTo(140, 33);
	context.strokeStyle = "green";
	context.stroke();

	context.beginPath(); //beginPath2
	context.moveTo(22, 22);
	context.lineTo(10, 50);
	context.lineTo(30, 100);
	context.closePath(); //closePath可以让线条闭合
	context.strokeStyle = "#0000FF";

	context.fill(); //填充线条轮廓区域

};