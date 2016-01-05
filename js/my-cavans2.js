window.onload = function() {

	var context = document.getElementById("myCanvas").getContext("2d");

	var x = 40,
		y = 40,
		radio = 40,
		start = Math.PI / 2,
		end = Math.PI * 2;

	context.beginPath();
	context.arc(x, y, radio, start, end, true);
	context.fillStyle = "red";
	context.fill();


}