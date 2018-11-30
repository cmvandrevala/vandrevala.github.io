// General Parameters

var numPoints = 500;
var padding = 30;
var width = 350;

// Scatterplot Parameters

var sHeight = width;
var sLength = [-5, 5];
var sOriginal = [];
var sFinal = [];
var radius = 1;

// Histogram Parameters

var hHeight = width;
var numBins = 20;
var hXO = [];
var hXF = [];

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

for(var i = 0; i < numPoints; i++) {
	hXO.push( sOriginal[i][0] );
	hXF.push( sFinal[i][0] );
}

var histogramO = d3.layout.histogram()
                   .bins(5)(hXO);

var histogramF = d3.layout.histogram()
                   .bins(numBins)(hXF);

// Scales

var sXScale = d3.scale.linear()
                .domain(sLength)
                .range([padding, width - padding]);

var sYScale = d3.scale.linear()
                .domain(sLength)
                .range([sHeight - padding, padding]);

var hXScale = d3.scale.linear()
                .domain(sLength)
                .range([padding, width - padding]);

var hYScale = d3.scale.linear()
	            .domain([0,150])
	            .range([hHeight - padding, padding]);

// Axes

var sXAxis = d3.svg.axis()
			  .scale(sXScale)
			  .orient("bottom");

var sYAxis = d3.svg.axis()
			  .scale(sYScale)
			  .orient("left");

var hXAxis = d3.svg.axis()
			  .scale(hXScale)
			  .orient("bottom");

var hYAxis = d3.svg.axis()
			  .scale(hYScale)
			  .orient("left")
			  .ticks(4);

// Create Scatterplots

var svgOne = d3.select("div#histogram")
		   	   .append("svg")
			   .attr("width", width)
			   .attr("height", sHeight);

svgOne.append("text")
       .attr("x", width/2)
       .attr("y", 2*padding)
       .attr("text-anchor", "middle")
       .style("font-size", "12px")
       .text("Original Uniform Distributions (U1 and U2)");

svgOne.append("g")
      .attr("transform", "translate(0," + (sHeight - padding) + ")")
	  .attr("class", "axis")
      .call(sXAxis);

svgOne.append("g")
      .attr("transform", "translate(" + padding + ",0)")
	  .attr("class", "axis")
      .call(sYAxis);

svgOne.selectAll("circle")
      .data(sOriginal)
      .enter()
      .append("circle")
      .attr("cx", function(d) { return sXScale(d[0]); })
      .attr("cy", function(d) { return sYScale(d[1]); })
      .attr("r", radius)
      .attr("fill", "red");

var svgTwo = d3.select("div#histogram")
			.append("svg")
			.attr("width", width)
			.attr("height", sHeight);

	 svgTwo.append("text")
	        .attr("x", width/2)
	        .attr("y", 2*padding)
	        .attr("text-anchor", "middle")
	        .style("font-size", "12px")
	        .text("Transformed Distributions (X and Y)");

svgTwo.append("g")
      .attr("transform", "translate(0," + (sHeight - padding) + ")")
	  .attr("class", "axis")
      .call(sXAxis);

svgTwo.append("g")
      .attr("transform", "translate(" + padding + ",0)")
	  .attr("class", "axis")
      .call(sYAxis);

svgTwo.selectAll("circle")
      .data(sFinal)
      .enter()
      .append("circle")
      .attr("cx", function(d) { return sXScale(d[0]); })
      .attr("cy", function(d) { return sYScale(d[1]); })
      .attr("r", radius)
      .attr("fill", "red");

// Create Histograms

var svgThree = d3.select("div#histogram")
                 .append("svg")
                 .attr("width", width)
                 .attr("height", hHeight);

svgThree.append("text")
     .attr("x", width/2)
     .attr("y", 2*padding)
     .attr("text-anchor", "middle")
     .style("font-size", "12px")
     .text("Probability Density of Original Distribution (U1)");

var barsThree = svgThree.selectAll(".bar")
                        .data(histogramO)
                        .enter()
                        .append("g");

svgThree.append("g")
        .attr("transform", "translate(0," + (hHeight - padding) + ")")
		.attr("class", "axis")
        .call(hXAxis);

svgThree.append("g")
        .attr("transform", "translate(" + padding + ",0)")
		.attr("class", "axis")
        .call(hYAxis);

barsThree.append("rect")
       .attr("x", function(d) { return hXScale(d.x) })
       .attr("y", function(d) { return hYScale(d.y) - padding })
       .attr("width", function(d) { return 27*d.dx })
       .attr("height", function(d) { return hHeight - hYScale(d.y) })
       .attr("fill", "steelblue")



var svgFour = d3.select("div#histogram")
                .append("svg")
                .attr("width", width)
                .attr("height", hHeight);

svgFour.append("text")
    .attr("x", width/2)
    .attr("y", 2*padding)
    .attr("text-anchor", "middle")
    .style("font-size", "12px")
    .text("Probability Density of Transformed Distribution (X)");

var barsFour = svgFour.selectAll(".bar")
                       .data(histogramF)
                       .enter()
                       .append("g");

svgFour.append("g")
       .attr("transform", "translate(0," + (hHeight - padding) + ")")
	   .attr("class", "axis")
       .call(hXAxis);

svgFour.append("g")
       .attr("transform", "translate(" + padding + ",0)")
	   .attr("class", "axis")
       .call(hYAxis);

barsFour.append("rect")
        .attr("x", function(d) { return hXScale(d.x) })
        .attr("y", function(d) { return hYScale(d.y) - padding })
        .attr("width", function(d) { return 27*d.dx })
        .attr("height", function(d) { return hHeight - hYScale(d.y) })
        .attr("fill", "steelblue")

// Transition on Click Event

d3.select("div#histogram").on("click", function() {

	// Re-Calculate Values

	var sOriginal = [];
	var sFinal = [];
	var hXValues = [];
	var hYValues = [];
	var histogramO = [];
	var histogramF = [];
	var hXO = [];
	var hXF = [];

	for(var i = 0; i < numPoints; i++) {
		var bmValues = boxMuller();
		sOriginal.push( bmValues[0] );
		sFinal.push( bmValues[1] );
	}

	for(var i = 0; i < numPoints; i++) {
		hXO.push( sOriginal[i][0] );
		hXF.push( sFinal[i][0] );
	}

	var histogramO = d3.layout.histogram()
	                   .bins(5)(hXO);

	var histogramF = d3.layout.histogram()
	                   .bins(numBins)(hXF);

	// Re-draw Scatterplots

	svgOne.selectAll("circle")
	      .data(sOriginal)
	      .transition()
	      .duration(1000)
	      .attr("cx", function(d) { return sXScale(d[0]); })
	      .attr("cy", function(d) { return sYScale(d[1]); })
	      .attr("r", radius)
		  .attr("fill", "red");

	svgTwo.selectAll("circle")
	   .data(sFinal)
	   .transition()
	   .duration(1000)
	   .attr("cx", function(d) { return sXScale(d[0]); })
	   .attr("cy", function(d) { return sYScale(d[1]); })
	   .attr("r", radius)
	   .attr("fill", "red");

	// Re-draw Histograms
   svgThree.selectAll("rect")
      .data(histogramO)
      .transition()
      .duration(1000)
      .attr("x", function(d) { return hXScale(d.x) })
      .attr("y", function(d) { return hYScale(d.y) - padding })
      .attr("width", function(d) { return 27*d.dx })
      .attr("height", function(d) { return hHeight - hYScale(d.y) })
      .attr("fill", "steelblue")

    svgFour.selectAll("rect")
       .data(histogramF)
	   .transition()
	   .duration(1000)
        .attr("x", function(d) { return hXScale(d.x) })
        .attr("y", function(d) { return hYScale(d.y) - padding })
        .attr("width", function(d) { return 27*d.dx })
        .attr("height", function(d) { return hHeight - hYScale(d.y) })
	    .attr("fill", "steelblue");

});
