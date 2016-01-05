window.onload = function(){
	//得到2D 渲染上下文
	var context = document.getElementById("myCanvas").getContext("2d");
	//填充矩形
	var x = 40, y = 40;
	context.fillStyle = "aqua";
	context.fillRect(x + 5, y + 5, 20, 20);
	
	//画线
	context.strokeStyle = "#ff0000";
	context.strokeRect(x, y, 30, 30);
	
	context.beginPath();
	context.moveTo(10, 10);
	context.lineTo(110, 110);
	context.lineTo(90,0);
	context.strokeStyle = "green";
	context.stroke();
	
	context.beginPath();
	context.moveTo(10, 90);
	context.lineTo(120,120);
	context.lineTo(120,30);
	context.closePath();
	context.fillStyle = "yellow";
	context.fill();
	
}
