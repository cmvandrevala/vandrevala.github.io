var xiSlider = document.getElementById('xiSlider');
var xfSlider = document.getElementById('xfSlider');
var xSlider = document.getElementById('xSlider');

var xiReadoutX = document.getElementById('xiReadoutX');
var xiReadoutY = document.getElementById('xiReadoutY');

var xfReadoutX = document.getElementById('xfReadoutX');
var xfReadoutY = document.getElementById('xfReadoutY');

var xReadoutX = document.getElementById('xReadoutX');
var xReadoutY = document.getElementById('xReadoutY');

var percentError = document.getElementById('percentError');

// Graph Parameters

var padding = 30;
var width = 350;
var height = width;

// Data Parameters

var numPoints = 200;
var xDomain = [0,8];
var yRange = [0,8];
var radius = 4;

var compositeWave = function(x) {
	return 2*Math.cos(2*x) + Math.sin(6*x) + 4;
}

var interpolatedValue = function(a, b, x) {
	if(a == b) {
		return compositeWave(b);
	}
	var yDifference = compositeWave(b) - compositeWave(a);
	var xRatio = (x-a)/(b-a);
	return compositeWave(a) + xRatio*yDifference;
}

var drawnWave = [];
var endpoints = [[0,compositeWave(0)], [3,compositeWave(3)]];
var pts = [[1.5, interpolatedValue(0,3,1.5)], [1.5, compositeWave(1.5)]];

for(var i=0; i<numPoints; i++) {
	var xCoordinate = (8.05*i)/numPoints;
	var yCoordinate = compositeWave(xCoordinate);
	if(yCoordinate <= 10) {
		drawnWave.push([xCoordinate, yCoordinate]);
	}
}

var xScale = d3.scale.linear()
                .domain(xDomain)
                .range([padding, width - padding]);

var yScale = d3.scale.linear()
                .domain(yRange)
                .range([height - padding, padding]);

var xAxis = d3.svg.axis()
  			  .scale(xScale)
  			  .orient("bottom");

var yAxis = d3.svg.axis()
  			  .scale(yScale)
  			  .orient("left");

var svg = d3.select("div#linearInterpolation")
		   	.append("svg")
			.attr("width", width)
			.attr("height", height);

var valueLine = d3.svg.line()
		          .x(function(d) { return xScale(d[0]); })
		          .y(function(d) { return yScale(d[1]); })
			      .interpolate("linear");

svg.append("g")
   .attr("transform", "translate(0," + (height - padding) + ")")
   .attr("class", "axis")
   .call(xAxis);

svg.append("g")
   .attr("transform", "translate(" + padding + ",0)")
   .attr("class", "axis")
   .call(yAxis);

svg.append("path")
	.attr("d", valueLine(drawnWave))
	.attr("stroke", "blue")
	.attr("stroke-width", 2)
	.attr("fill", "none");

svg.append("path")
	.attr("d", valueLine(endpoints))
	.attr("id", "red-path")
	.attr("stroke", "red")
	.style("stroke-dasharray", ("3, 3"))
	.attr("stroke-width", 1)
	.attr("fill", "none");

svg.append("path")
	.attr("d", valueLine(pts))
	.attr("id", "green-path")
	.attr("stroke", "green")
	.style("stroke-dasharray", ("3, 3"))
	.attr("stroke-width", 1)
	.attr("fill", "none");

svg.selectAll("#red-circle")
      .data(endpoints)
      .enter()
      .append("circle")
      .attr("id", "red-circle")
      .attr("cx", function(d) { return xScale(d[0]); })
      .attr("cy", function(d) { return yScale(d[1]); })
      .attr("r", radius)
	  .attr("fill", "red");

svg.selectAll("#green-circle")
      .data(pts)
      .enter()
      .append("circle")
	  .attr("id", "green-circle")
      .attr("cx", function(d) { return xScale(d[0]); })
      .attr("cy", function(d) { return yScale(d[1]); })
      .attr("r", radius)
      .attr("fill", "green");

svg.append("text")
   .attr("x", xScale(endpoints[0][0]) - 8)
   .attr("y", yScale(endpoints[0][1]) - 8)
   .attr("text-anchor", "middle")
   .attr("id", "endpointOne")
   .style("font-size", "17px")
   .style("font-weight", "bold")
   .text("A")
   .attr("fill", "red");

svg.append("text")
   .attr("x", xScale(endpoints[1][0]) - 8)
   .attr("y", yScale(endpoints[1][1]) - 8)
   .attr("text-anchor", "middle")
   .attr("id", "endpointTwo")
   .style("font-size", "17px")
   .style("font-weight", "bold")
   .text("B")
   .attr("fill", "red");

svg.append("text")
   .attr("x", xScale(pts[0][0]) - 8)
   .attr("y", yScale(pts[0][1]) - 8)
   .attr("text-anchor", "middle")
   .attr("id", "pointThree")
   .style("font-size", "17px")
   .style("font-weight", "bold")
   .text("C")
   .attr("fill", "green");

function updateGraph() {
	updateData();
	updateEndpoints();
	updateInterpolatedPoints();
	updateRedLine();
	updateGreenLine();
	updateValues();
	updateLabels();
}

function updateData() {
	var a = Number(xiSlider.value);
	var b = Number(xfSlider.value);
	var x = Number(xSlider.value);
	var xVal = (1-x)*a + x*b;
	endpoints[0] = [a, compositeWave(a)];
	endpoints[1] = [b, compositeWave(b)];
	pts[0] = [xVal, interpolatedValue(a,b,xVal)];
	pts[1] = [xVal, compositeWave(xVal)];
}

function updateEndpoints() {
    var svg = d3.select("div#linearInterpolation");
	svg.selectAll("#red-circle")
	  .data(endpoints)
	  .transition()
	  .duration(25)
	  .attr("cx", function(d) { return xScale(d[0]); })
	  .attr("cy", function(d) { return yScale(d[1]); })
	  .attr("r", radius)
	  .attr("fill", "red");
}

function updateInterpolatedPoints() {
    var svg = d3.select("div#linearInterpolation");
	svg.selectAll("#green-circle")
	  .data(pts)
	  .transition()
	  .duration(25)
	  .attr("cx", function(d) { return xScale(d[0]); })
	  .attr("cy", function(d) { return yScale(d[1]); })
	  .attr("r", radius)
	  .attr("fill", "green");
}

function updateRedLine() {
    var svg = d3.select("div#linearInterpolation");
	svg.selectAll("#red-path")
	  .attr("d", valueLine(endpoints))
	  .transition()
	  .duration(25)
	  .attr("id", "red-path")
	  .attr("stroke", "red")
	  .style("stroke-dasharray", ("3, 3"))
	  .attr("stroke-width", 1)
	  .attr("fill", "none");
}

function updateGreenLine() {
    var svg = d3.select("div#linearInterpolation");
	svg.selectAll("#green-path")
	  .attr("d", valueLine(pts))
	  .transition()
	  .duration(25)
	  .attr("id", "green-path")
	  .attr("stroke", "green")
	  .style("stroke-dasharray", ("3, 3"))
	  .attr("stroke-width", 1)
	  .attr("fill", "none");
}

function updateValues() {
	xiReadoutX.innerHTML = endpoints[0][0].toFixed(2);
	xiReadoutY.innerHTML = endpoints[0][1].toFixed(2);
	xfReadoutX.innerHTML = endpoints[1][0].toFixed(2);
	xfReadoutY.innerHTML = endpoints[1][1].toFixed(2);
	xReadoutX.innerHTML = pts[0][0].toFixed(2);
	xReadoutY.innerHTML = pts[0][1].toFixed(2);
	var err = 100*(pts[0][1] - pts[1][1])/pts[1][1];
	percentError.innerHTML = Math.abs(err).toFixed(2);
}

function updateLabels() {
	var svg = d3.select("div#linearInterpolation");
    svg.selectAll("#endpointOne")
	   .data(endpoints)
	   .transition()
	   .duration(25)
       .attr("x", xScale(endpoints[0][0]) - 8)
       .attr("y", yScale(endpoints[0][1]) - 8)
       .attr("text-anchor", "middle")
       .style("font-size", "17px")
	   .style("font-weight", "bold")
       .text("A")
       .attr("fill", "red");

    svg.selectAll("#endpointTwo")
	   .data(endpoints)
	   .transition()
	   .duration(25)
       .attr("x", xScale(endpoints[1][0]) - 8)
       .attr("y", yScale(endpoints[1][1]) - 8)
       .attr("text-anchor", "middle")
       .style("font-size", "17px")
	   .style("font-weight", "bold")
       .text("B")
       .attr("fill", "red");

    svg.selectAll("#pointThree")
	   .data(endpoints)
	   .transition()
	   .duration(25)
       .attr("x", xScale(pts[0][0]) - 8)
       .attr("y", yScale(pts[0][1]) - 8)
       .attr("text-anchor", "middle")
       .style("font-size", "17px")
	   .style("font-weight", "bold")
       .text("C")
       .attr("fill", "green");
}
