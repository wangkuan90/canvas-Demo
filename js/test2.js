$(function(){
	drawRadius(100, 100, 40, 50, 0, 180, "red");
	drawRadius(100, 100, 30, 40, 0, 60, "blue");
	drawRadius(100, 100, 50, 60, 0, 128, "green");
});

function drawRadius(startX, startY, leftRadius, rightRadius, startAngle, radiusAngle, color){
	
	startAngle = getRadius(startAngle);
	radiusAngle = getRadius(radiusAngle);
	
	var canvas = $("#myCanvas")[0];
	canvas.width = 400;
	canvas.height = 400;
	var canvasContext = canvas.getContext("2d");
	
	//原点,半径, 角度
	function Shape(x, y, angle){
		this.x = x ? x : 0;
		this.y = y ? y : 0;
		this.angle = angle ? angle : 0;
	}
	
	var shape = new Shape(startX, startY, startAngle);
	
	var time;
	
	function animate(){
		
		var angle = shape.angle + Math.PI / 200;
		if(angle > radiusAngle){
			clearTimeout(time);
			return;
		}
		shape.angle = angle;
		var x1 = leftRadius * Math.cos(angle);
		var y1 = leftRadius * Math.sin(angle);
		var x2 = rightRadius * Math.cos(angle);
		var y2 = rightRadius * Math.sin(angle);
		// 开始画轨迹
		canvasContext.strokeStyle = color;
		canvasContext.beginPath();
		canvasContext.moveTo(shape.x + x1, shape.y + y1);
		canvasContext.lineTo(shape.x + x2, shape.y + y2);
		canvasContext.stroke();
		
		time = setTimeout(animate, 15);
	}
	
	animate();
};

function getRadius(radius){
	
	return (radius - 90) / 180 * Math.PI;
}
