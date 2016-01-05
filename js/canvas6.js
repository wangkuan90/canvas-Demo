window.onload = function() {
	
	var canvas = document.getElementById("myCanvas");
	canvas.width = 900;
	canvas.height = 900;
	
	var context = document.getElementById("myCanvas").getContext("2d");
            //旋转45度，和context.rotate(Math.PI / 4)效果一样
            context.setTransform(1, 0, 0, 1, 0, 0);//重置矩阵
            var angle = Math.PI / 4;
            var xScale = Math.cos(angle);
            var ySkew = -Math.sin(angle);
            var xSkew = Math.sin(angle);
            var yScale = Math.cos(angle);
            var xTrans = 200;
            var yTrans = 200;
            //context.globalAlpha = 0.8;//全局透明度
            //不设置全局透明可以达到一样效果，如果设置全局0.8再设置fillStyle中透明度0.8，最后透明度回事0.8*0.8=0.64
            //context.fillStyle = "rgba(255,123,172,0.8)"; 
            //context.globalCompositeOperation = "copy";//合成模式

            context.fillStyle = "rgba(255,123,172,1)";
            context.transform(xScale, ySkew, xSkew, yScale, xTrans, yTrans);
            context.fillRect(0, 0, 100, 100);
}