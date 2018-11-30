// General Parameters

var numPoints = 400;
var padding = 20;
var width = 350;

var current = 0;

// Scatterplot Parameters

var sHeight = width;
var sLength = [-4, 4];
var sOriginal = [];
var sFinal = [];
var radius = 1;

// Box-Muller Function

var boxMuller = function() {
	var x = Math.random();
	var y = Math.random();
	var zOne = Math.sqrt(-2*Math.log(x))*Math.cos(2*Math.PI*y);
	var zTwo = Math.sqrt(-2*Math.log(x))*Math.sin(2*Math.PI*y);
	return [[x, y], [zOne, zTwo]];
}

// Set Arrays of Values

for(var i = 0; i < numPoints; i++) {
	var bmValues = boxMuller();
	sOriginal.push( bmValues[0] );
	sFinal.push( bmValues[1] );
}

// Scales

var sXScale = d3.scale.linear()
                .domain(sLength)
                .range([padding, width - padding]);

var sYScale = d3.scale.linear()
                .domain(sLength)
                .range([sHeight - padding, padding]);

// Axes

var sXAxis = d3.svg.axis()
			  .scale(sXScale)
			  .orient("bottom");

var sYAxis = d3.svg.axis()
			  .scale(sYScale)
			  .orient("left");

// Create Scatterplots

var svg = d3.select("div#scatterplot")
		   	   .append("svg")
			   .attr("width", width)
			   .attr("height", sHeight);

svg.append("text")
       .attr("x", width/2)
       .attr("y", 2*padding)
       .attr("text-anchor", "middle")
       .style("font-size", "16px")
       .text("Click the Graph to Transform!");

svg.append("g")
      .attr("transform", "translate(0," + (sHeight - padding) + ")")
	  .attr("class", "axis")
      .call(sXAxis);

svg.append("g")
      .attr("transform", "translate(" + padding + ",0)")
	  .attr("class", "axis")
      .call(sYAxis);

svg.selectAll("circle")
      .data(sOriginal)
      .enter()
      .append("circle")
      .attr("cx", function(d) { return sXScale(d[0]); })
      .attr("cy", function(d) { return sYScale(d[1]); })
      .attr("r", radius)
      .attr("fill", "red");


// Transition on Click Event

d3.select("div#scatterplot").on("click", function() {

	// Re-draw Scatterplots
	if(current == 1) {
	svg.selectAll("circle")
	      .data(sOriginal)
	      .transition()
	      .duration(3000)
	      .attr("cx", function(d) { return sXScale(d[0]); })
	      .attr("cy", function(d) { return sYScale(d[1]); })
	      .attr("r", radius)
		  .attr("fill", "red");
		  current = 0;
	  } else {
	svg.selectAll("circle")
	   .data(sFinal)
	   .transition()
	   .duration(3000)
	   .attr("cx", function(d) { return sXScale(d[0]); })
	   .attr("cy", function(d) { return sYScale(d[1]); })
	   .attr("r", radius)
	   .attr("fill", "blue");
	   current = 1;
   }

});
