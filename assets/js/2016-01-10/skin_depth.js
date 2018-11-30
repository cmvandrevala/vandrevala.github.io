var kOneSlider = document.getElementById('kOneSlider');
var kTwoSlider = document.getElementById('kTwoSlider');

var kOneReadout = document.getElementById('kOneReadout');
var kTwoReadout = document.getElementById('kTwoReadout');

var kOne = Number(kOneSlider.value).toFixed(1);
var kTwo = Number(kTwoSlider.value).toFixed(1);

var padding = 50;
var width = 370;
var height = width;

var numPoints = 500;
var xDomain = [0,1];
var yRange = [-1.2,1.2];

var realData = [];
var imagData = [];

var svg = d3.select("div#skin_depth")
	   		.append("svg")
			.attr("width", width)
			.attr("height", height);

var xScale = d3.scale.linear()
                .domain(xDomain)
                .range([padding, width - padding])
				.nice();

var yScale = d3.scale.linear()
                .domain(yRange)
                .range([height - padding, padding])
				.nice();

var xAxis = d3.svg.axis()
  			  .scale(xScale)
  			  .orient("bottom");

var yAxis = d3.svg.axis()
  			  .scale(yScale)
  			  .orient("left");

var valueLine = d3.svg.line()
		          .x(function(d) { return xScale(d[0]); })
		          .y(function(d) { return yScale(d[1]); })
			      .interpolate("linear");

function realWave(z, kOne, kTwo) {
	return Math.exp(-kTwo*z)*Math.cos(kOne*z);
}

function imagWave(z, kOne, kTwo) {
	return Math.exp(-kTwo*z)*Math.sin(kOne*z);
}

function initializeGraph() {

	svg.append("g")
	   .attr("transform", "translate(0," + (height/2) + ")")
	   .attr("class", "axis")
	   .call(xAxis);

	svg.append("g")
	    .attr("transform", "translate(" + padding + ",0)")
	    .attr("class", "axis")
	    .call(yAxis);

	svg.append("path")
		.attr("d", valueLine(realData))
		.attr("stroke", "blue")
		.attr("stroke-width", 2)
		.attr("fill", "none")
		.attr("class", "real");

	svg.append("path")
		.attr("d", valueLine(imagData))
		.attr("stroke", "red")
		.attr("stroke-width", 2)
		.attr("fill", "none")
		.attr("class", "imag");

	svg.selectAll(".tick")
	    .each(function (d) {
	        if ( d === 0 ) { this.remove(); }
	    });

	svg.append("text")
	    .attr("class", "x label")
	    .attr("text-anchor", "end")
	    .attr("x", width)
	    .attr("y", height/2)
	    .attr("dy", "0.5em")
	    .text("z [m]");

	svg.append("text")
	    .attr("class", "title")
	    .attr("text-anchor", "middle")
	    .attr("x", width/2)
	    .attr("y", padding/2)
	    .attr("dy", "0.75em")
	    .text("Electric Field vs. Position");

	svg.append("text")
	    .attr("class", "y label")
	    .attr("text-anchor", "middle")
		.attr("x", -height/2)
	    .attr("y", 0)
	    .attr("dy", "0.75em")
	    .attr("transform", "rotate(-90)")
	    .text("Electric Field [N/C]");

}

function updateData() {
	kOne = Number(kOneSlider.value).toFixed(1);
	kTwo = Number(kTwoSlider.value).toFixed(1);
	realData = [];
	imagData = [];
}

function updateLabels() {
	kOneReadout.innerHTML = kOne;
	kTwoReadout.innerHTML = kTwo;
}

function populateDataArrays() {
	for(var i=0; i<numPoints; i++) {
		var xCoordinate = xDomain[1]*i/numPoints;
		realData.push([xCoordinate, realWave(xCoordinate, kOne, kTwo)]);
		imagData.push([xCoordinate, imagWave(xCoordinate, kOne, kTwo)]);
	}
}

function redrawGraph() {

	d3.selectAll(".real").transition()
		.duration(0)
		.attr("d", valueLine(realData))
		.attr("stroke", "blue")
		.attr("stroke-width", 2)
		.attr("fill", "none");

	d3.selectAll(".imag").transition()
		.duration(0)
		.attr("d", valueLine(imagData))
		.attr("stroke", "red")
		.attr("stroke-width", 2)
		.attr("fill", "none");

}

function updateGraph() {
	updateData();
	updateLabels();
	populateDataArrays();
	redrawGraph();
}

populateDataArrays();
initializeGraph();