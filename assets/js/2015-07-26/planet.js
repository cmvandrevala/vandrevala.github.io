var massSlider = document.getElementById('massSlider');
var massReadout = document.getElementById("massReadout");

var planetCanvas = document.getElementById('thePlanet');
var planetContext = planetCanvas.getContext('2d');

var newtonG = 6.67e-11;
var earthRadius = 6371000;
var mountainHeight = earthRadius/8;

var centerX = planetCanvas.width / 2;
var centerY = planetCanvas.height / 2;

function colorPlanet() {
	planetContext.beginPath();
	planetContext.arc(centerX, centerY, planetRadius, 0, 2*Math.PI);
	planetContext.closePath();
	var mass = (16*Number(massSlider.value)/1.2e25).toFixed(0);
	console.log(mass);
	if(mass < 10) {
		var hexNum = ("0" + mass.toString(16)).substr(-16);
	} else {
		var hexNum = ("" + mass.toString(16)).substr(-16);
	}
	var colorOne = "#00CC" + hexNum;
	var colorTwo = "#00" + hexNum + "BB";
	var radialGradient = planetContext.createRadialGradient(250, 270, 10, 240, 50, 280);
	radialGradient.addColorStop(0, colorOne);
	radialGradient.addColorStop(1, colorTwo);
	planetContext.fillStyle = radialGradient;
	planetContext.fill();

	planetContext.beginPath();
	planetContext.moveTo(planetCanvas.width/2, planetCanvas.height/2 - 1.125*planetRadius);
	planetContext.lineTo(planetCanvas.width/3, planetCanvas.height/2);
	planetContext.lineTo(2*planetCanvas.width/3,planetCanvas.height/2);
	planetContext.fill();
}

colorPlanet();