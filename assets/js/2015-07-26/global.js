var speedSlider = document.getElementById('speedSlider');
var massSlider = document.getElementById('massSlider');
var angleSlider = document.getElementById('angleSlider');

var speedReadout = document.getElementById("speedReadout");
var massReadout = document.getElementById("massReadout");
var angleReadout = document.getElementById("angleReadout");

var newtonG = 6.67e-11;
var earthRadius = 6371000;
var mountainHeight = earthRadius/8;

var metersPerPixel = earthRadius / 120;
var planetRadius = earthRadius / metersPerPixel;
var radToAng = 0.0174532925;