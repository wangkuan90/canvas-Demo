window.onload = function() {
	
	var canvas = document.getElementById("myCanvas");
	canvas.width = 900;
	canvas.height = 900;
	
	var context = document.getElementById("myCanvas").getContext("2d");

            context.save();
            context.shadowBlur = 20; //模糊值
            context.shadowOffsetX = 10; //阴影向X偏移量
            context.shadowOffsetY = 10; //阴影向Y偏移量
            context.shadowColor = "blue"; //阴影颜色
            //context.shadowColor = "rgba(255,0,0,0.8)"; //也可以设置透明色
            context.fillRect(10, 10, 100, 100);

            //画一个带红色阴影的圆
            context.shadowColor = "red";
            context.shadowBlur = 50;
            context.shadowOffsetX = 0;
            context.shadowOffsetY = 0;
            context.beginPath();
            context.arc(200, 60, 50, 0, Math.PI * 2, false);
            context.fill();

            context.restore();
            //线性渐变
            var x = 10, y = 150, height = 100, width = 100;
            //createLinearGradient创建渐变色，起始点和结束点，画布不在这个范围内的不会有渐变效果
            var gradient1 = context.createLinearGradient(x, y, x, y + height);
            //增加渐变控制点
            gradient1.addColorStop(0, "red");
            gradient1.addColorStop(1, "green");
            context.fillStyle = gradient1;
            context.fillRect(x, y, width, height);

            //放射渐变原理是对连接2个圆圆周的椎体
            var x0 = 300, y0 = 300, r0 = 10, x1 = 100, y1 = 100, r1 = 50;
            var gradient2 = context.createRadialGradient(x0, y0, r0, x1, y1, r1);
            gradient2.addColorStop(0, "red");
            gradient2.addColorStop(1, "blue");
            context.fillStyle = gradient2;
            //context.globalCompositeOperation = "copy";
            context.fillRect(0, 0, 500, 500);

            //一般放射效果
            x0 = x1 = 300, y0 = y1 = 300;
            var gradient3 = context.createRadialGradient(x0, y0, r0, x1, y1, r1);
            gradient3.addColorStop(0, "white");
            gradient3.addColorStop(1, "black");
            context.fillStyle = gradient3;
            context.fillRect(x0 - 25, y0 - 25, 50, 50);
}