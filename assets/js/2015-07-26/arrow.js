var arrowCanvas = document.getElementById('theArrow');
var arrowContext = arrowCanvas.getContext('2d');

var arrowStartX = arrowCanvas.width/2;
var arrowStartY = arrowCanvas.height/2 - 1.125*planetRadius;

function drawArrow() {
	arrowContext.clearRect(0, 0, arrowCanvas.width, arrowCanvas.height);
	var arrowLength = Number(speedSlider.value)/200;
	var ang = Number(angleSlider.value)*radToAng;
	var aX = arrowLength*Math.cos(ang);
	var aY = arrowLength*Math.sin(ang);
	arrowContext.beginPath();
	arrowContext.moveTo(arrowStartX, arrowStartY);
	arrowContext.lineTo(arrowStartX + aX, arrowStartY - aY);
	arrowContext.stroke();
}

drawArrow();