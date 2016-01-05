window.onload = function() {
	
	var cancans = document.getElementById("myCanvas");
	cancans.width = 1000;
	cancans.height = 1000;
            //得到2D渲染上下文
            var context = document.getElementById("myCanvas").getContext("2d");

            context.save()//保存状态，以便恢复
            //平移
            context.fillRect(0, 0, 50, 50);

            context.translate(100, 100);
            context.fillRect(0, 0, 50, 50);

            context.translate(100, 100);
            context.fillRect(0, 0, 50, 50);

            context.fillStyle = "red";

            //平移缩放结合
            context.translate(100, 100); //当前绘图原点(300,300)
            context.scale(1, 2); //x坐标不缩放，y坐标变成2倍
            context.fillRect(0, 0, 50, 50);

            context.restore()//恢复状态，将绘图原点重置
            context.fillStyle = "blue";
            context.fillRect(0, 0, 25, 25);

            //旋转45度，默认是顺时针
            context.translate(100, 100);
            context.rotate(Math.PI / 4);
            context.fillRect(50, 50, 50, 50);
}