var speedSlider = document.getElementById('speedSlider');
var massSlider = document.getElementById('massSlider');
var angleSlider = document.getElementById('angleSlider');

var speedReadout = document.getElementById("speedReadout");
var massReadout = document.getElementById("massReadout");
var angleReadout = document.getElementById("angleReadout");

var cupcakeCanvas = document.getElementById('newtonsCupcake');
var trailCanvas = document.getElementById('theTrail');

var dt = 5;

var x, y, vx, vy;
var timer;

var cupcakeContext = cupcakeCanvas.getContext('2d');
var trailContext = trailCanvas.getContext('2d');

var img = new Image();
img.src = window.location.origin + "/assets/images/2015-07-26/flying_cupcake.png";

function fireProjectile() {
	window.clearTimeout(timer);
	x = 0;
	y = earthRadius + mountainHeight;
	v = Number(speedSlider.value);
	theta = Number(angleSlider.value);
	vx = v * Math.cos(radToAng * theta);
	vy = v * Math.sin(radToAng * theta);
	cupcakeContext.clearRect(0, 0, cupcakeCanvas.width, cupcakeCanvas.height);
	trailContext.clearRect(0, 0, trailCanvas.width, trailCanvas.height);
	moveProjectile();
}

function pauseProjectile() {
	window.clearTimeout(timer);
}

function drawProjectile() {
	var pixelX = trailCanvas.width/2 + x/metersPerPixel;
	var pixelY = trailCanvas.height/2 - y/metersPerPixel;
	cupcakeContext.clearRect(0, 0, trailCanvas.width, trailCanvas.height);
	trailContext.fillRect(pixelX-0.5, pixelY-0.5, 1, 1);
	cupcakeContext.drawImage(img, pixelX-20, pixelY-20, 40, 40);
}

function moveProjectile() {
	var earthMass = Number(massSlider.value);
	var r = Math.sqrt(x*x + y*y);
		if (r > earthRadius) {
			var accel = newtonG*earthMass/(r*r);
			updateVelocities(accel, r);
			updatePositions();
			drawProjectile();
			timer = window.setTimeout(moveProjectile, 1000/30);
		}
}

function updateVelocities(acceleration, radius) {
	vx -= acceleration*x*dt/radius;
	vy -= acceleration*y*dt/radius;
}

function updatePositions() {
	x += vx*dt;
	y += vy*dt;
}

function showAngle() {
	angleReadout.innerHTML = angleSlider.value;
}

function showSpeed() {
	speedReadout.innerHTML = speedSlider.value;
}

function showMass() {
	massReadout.innerHTML = massSlider.value;
}
