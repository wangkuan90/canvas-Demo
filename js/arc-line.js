$(function(){
    var can = document.getElementById("myCanvas");
    var ctx = can.getContext("2d");
    
    ctx.beginPath();
    
    ctx.arc(75,75,50,0,Math.PI*2,true); // 外圈
    ctx.moveTo(110,75);
    ctx.arc(75,75,35,0,Math.PI,false);   // 嘴，半圈
    ctx.moveTo(65,65);
    ctx.arc(60,65,5,0,Math.PI*2,true);  // 左眼
    ctx.moveTo(95,65);
    ctx.arc(90,65,5,0,Math.PI*2,true);  // 右眼
    ctx.stroke();　　　　　　//使用ctx.fill();就是填充色；
                       
})