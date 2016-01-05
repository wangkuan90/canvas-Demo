$(function(){
	var myCanvas = document.getElementById('myCanvas');
	
	myCanvas.width = 500;
	myCanvas.height = 500;
	var r0 = 240;
	var r1 = 190;
	var r2 = 150;
	var r3 = 120;
	
	
	var ctx = myCanvas.getContext('2d');
	
	//generate color
	var color = [];
	for(var i=1;i<=24;i++){
	    var p = 30+(70/24)*i;
	    color.push('hsl(170,' + p + '%,' + p + '%)');
	}
	
	
	ctx.translate(250,250);
	
	drawSector(4,r0,[2011,2012,2009,2010]);
	drawSector(12,r1,[1,2,3,4,5,6,7,8,9,10,11,12]);
	drawSector(7,r2,['Mon','Tue','Wed','Thu','Fri','Sat','Sun']);
	drawSector(24,r3,[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]);
	
	//draw white space center
	ctx.save();
	ctx.fillStyle = "#fff";
	ctx.beginPath();
	ctx.arc(0,0,80,0,2*Math.PI);
	ctx.fill()
	
	ctx.restore();
	
	
	function drawSector (split,r,text) {
	    // body...
	    ctx.save();
	
	
	    ctx.strokeStyle = '#fff';
	    for(i=1;i<=split;i++){
	        ctx.fillStyle = color[i];
	
	        ctx.beginPath();
	        ctx.moveTo(0,0);
	        ctx.lineTo(r,0);
	        ctx.arc(0,0,r,0,2*Math.PI/split);
	        ctx.fill();
	        ctx.stroke();
	
	        if(text){
	            ctx.rotate(Math.PI/split);
	            ctx.save();
	            ctx.fillStyle = "#000";
	            ctx.fillText(text[i-1],r-25,0);
	            ctx.restore();
	            ctx.rotate(Math.PI/split);
	        }
	        else{
	            ctx.rotate(2*Math.PI/split);
	        }
	
	    }
	
	    ctx.restore();
	}
});
