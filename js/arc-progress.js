$(function(){
	
	var mycanvas = new Canvas($("#myCanvas"));
	mycanvas.drawRadius([{
		x : 100,
		y : 100,
		leftRadius : 41,
		rightRadius : 49,
		startAngle : 0,
		radiusAngle :  75,
		border : 1,
		borderColor : "red",
		contentColor : "blue",
		round : true
	}, {
		x : 100,
		y : 100,
		leftRadius : 31,
		rightRadius : 39,
		startAngle : 0,
		radiusAngle :  50,
		border : 1,
		borderColor : "wheat",
		contentColor : "green",
		round : true
	}, {
		x : 100,
		y : 100,
		leftRadius : 51,
		rightRadius : 59,
		startAngle : 0,
		radiusAngle :  135,
		border : 1,
		borderColor : "greenyellow",
		contentColor : "orange",
		round : false
	}]);
});

function Canvas(view){
	
	this.canvas = view[0];
	this.canvas.width = 400;
	this.canvas.height = 400;
	this.canvasContext = this.canvas.getContext("2d");
	
	this.init();
};
Canvas.prototype.init = function(){
	
};
Canvas.prototype.getRadius = function(radius){
	return (radius - 90) / 180 * Math.PI;
};
Canvas.prototype.drawRadius = function(data){
	
	var shapes = [];
	for(var key in data){
		var shape = $.extend({}, {
			x : 0,
			y : 0,
			leftRadius : 0,
			rightRadius : 0,
			startAngle : 0,
			radiusAngle :  0,
			border : 0,
			borderColor : "white",
			contentColor : "white",
			round : false
		}, data[key]);
		shape.startAngle = this.getRadius(shape.startAngle);
		shape.radiusAngle = this.getRadius(shape.radiusAngle);
		shapes.push(shape);
	}
	
	var self = this;
	
	function init(shape){
		
		self.canvasContext.beginPath();
		self.canvasContext.strokeStyle = shape.borderColor;
		self.canvasContext.arc(shape.x, shape.y, shape.leftRadius, shape.startAngle, shape.radiusAngle, false);
		var x1 = shape.x + shape.leftRadius * Math.cos(shape.startAngle + shape.radiusAngle);
		var y1 = shape.y + shape.leftRadius * Math.sin(shape.startAngle + shape.radiusAngle);
		var x2 = shape.x + shape.rightRadius * Math.cos(shape.startAngle + shape.radiusAngle);
		var y2 = shape.y + shape.rightRadius * Math.sin(shape.startAngle + shape.radiusAngle);
		//fix HERE
//		self.canvasContext.moveTo((x1 + x2)/2, (y1 + y2)/2);
		var radius = (shape.rightRadius - shape.leftRadius)/2;
		self.canvasContext.arc((x1 + x2)/2, (y1 + y2)/2, radius, shape.startAngle, Math.PI, true);
		self.canvasContext.stroke();
	};
	
	function animate(shape){
		
		var angle = shape.startAngle + Math.PI / 200;
		if(angle > shape.radiusAngle){
			clearTimeout(time);
			return;
		}
		shape.startAngle = angle;
		
		var x1 = shape.leftRadius * Math.cos(angle);
		var y1 = shape.leftRadius * Math.sin(angle);
		var x2 = shape.rightRadius * Math.cos(angle);
		var y2 = shape.rightRadius * Math.sin(angle);
		// 开始画轨迹
		self.canvasContext.strokeStyle = shape.contentColor;
		self.canvasContext.beginPath();
		self.canvasContext.moveTo(shape.x + x1, shape.y + y1);
		self.canvasContext.lineTo(shape.x + x2, shape.y + y2);
		self.canvasContext.stroke();
		
		setTimeout(function(){
			animate(shape);
		}, 15);
	};
	
	for(var key in shapes){
//		init(shapes[key]);
	}

	init(shapes[0]);
	
	for(var key in shapes){
//		animate(shapes[key]);
	}
	
};