$(function(){
	drawCanvas();
});

function drawCanvas(){
	
	var canvas = $("#myCanvas")[0];
	canvas.width = 900;
	canvas.height = 900;
	var canvasContext = canvas.getContext("2d");
	
	//起点,半径, 角度
	function Shape(x, y, radius, angle){
		this.x = x ? x : 0;
		this.y = y ? y : 0;
		this.radius = radius ? radius : 0;
		this.angle = angle ? angle : 0;
	}
	
	var shape = new Shape(100, 100, 50, -Math.PI / 2);
	
	var time;
	
	function animate(){
		
		var angle = shape.angle + Math.PI / 200;
		if(angle > 1 * Math.PI){
			clearTimeout(time);
			return;
		}
		shape.angle = angle;
		var x = shape.radius * Math.cos(angle);
		var y = shape.radius * Math.sin(angle);
		// 开始画轨迹
		canvasContext.beginPath();
		canvasContext.moveTo(shape.x, shape.y);
		canvasContext.lineTo(shape.x + x, shape.y + y);
		canvasContext.stroke();
		
		time = setTimeout(animate, 15);
	}
	
	animate();
};
