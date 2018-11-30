---
layout: post
comments: true
title: Linear Interpolation
difficulty: easy
category: [Math Methods]
tags: [Interactive Visual]
description: I visualize the method of linear interpolation on a curvy polynomial.
---

### Linear Interpolation

Oftentimes in physics or engineering, we know the value of a quantity at certain points but not others. For example take a look at [this saturation table for water](http://thermofluids.sdsu.edu/testhome/Test/solve/basics/tables/tablesPC/TSatH2O.html). We know the thermodynamic properties of water at certain temperatures ($$5^\circ C$$, $$10^\circ C$$, $$15^\circ C$$,...). However, suppose we want to know the saturation pressure of water at $$32^\circ C$$. What do we do? It's not on the table!

<div style="text-align:center" markdown="1">
![Teacher Cupcake]({{ site.url }}/assets/images/2015-08-02/teacher.png)
</div>

Linear interpolation allows us to figure out the values between entires in that table. It is easiest to think about linear interpolation in terms of the graph of a straight line. Take a look at the simple graph of a line below.

<div style="text-align:center" markdown="1">
![Linear Graph]({{ site.url }}/assets/images/2015-08-02/linear_graph.png)
</div>

Suppose we know the values of two points on the graph: $$(x_i,y_i)$$ and $$(x_f, y_f)$$. We want to determine the value of $$y$$ at some point $$x$$ along the line connecting the two known points. First, we can write out a simple ratio that relates the known values to the unknown values.

$$
\begin{equation}
\frac{y - y_i}{x - x_i} = \frac{y_f - y_i}{x_f - x_i}
\end{equation}
$$

Now, we can multiply each side of the expression by $$(x - x_i)$$.

$$
\begin{equation}
y - y_i = \frac{x - x_i}{x_f - x_i} \left ( y_f - y_i \right )
\end{equation}
$$

Finally, we can move $$y_i$$ to the other side of the equation to get the formula for $$y$$.

$$
\begin{equation}
y = y_i + \frac{x - x_i}{x_f - x_i} \left ( y_f - y_i \right )
\end{equation}
$$

Going back to the saturation table from before, suppose I want to determine the saturation pressure for water at $$32^\circ C$$ ($$P_{32^\circ C}$$). We will let the $$y$$ variables represent pressure and the $$x$$ variables represent temperature. Plugging in the appropriate values gives:

$$
\begin{equation}
P_{32^\circ C} = P_{30^\circ C} + \frac{32^\circ C - 30^\circ C}{35^\circ C - 30^\circ C} \left ( P_{35^\circ C} - P_{30^\circ C} \right )
\end{equation}
$$

$$
\begin{equation}
P_{32^\circ C} = 4.2460 \hspace{1mm} kPa + \frac{2}{5} \left ( 5.6280 \hspace{1mm} kPa - 4.2460 \hspace{1mm} kPa \right )
\end{equation}
$$

$$
\begin{equation}
P_{32^\circ C} = 4.7988 \hspace{1mm} kPa
\end{equation}
$$

Linear interpolation is not just restricted to table entires. Suppose I have some [continuous function](http://mathworld.wolfram.com/ContinuousFunction.html) $$f(x)$$. I can pick two points along the curve and estimate the value of the function at some point between them using the equation above. However, we have to be careful - our estimate may not be very accurate if the function $$f(x)$$ is very curvy.

### Visualizing the Error in Linear Interpolation

There are lots of websites that derive the error bounds in linear interpolation (e.g. [here](http://www-solar.mcs.st-andrews.ac.uk/~clare/Lectures/num-analysis/Numan_chap3.pdf) and [here](http://www.math.montana.edu/~davis/Classes/MA442/Sp07/Notes/InterpError.pdf) and [here](http://pages.cs.wisc.edu/~amos/412/lecture-notes/lecture09.pdf) and [here](http://www2.kau.se/yourshes/Mm2_2.pdf)). Instead of doing yet another error derivation, I would like to visualize what linear interpolation is actually doing. From there, it is easy to see where the error comes from.

In the graph below, I have plotted an equation that has lots of bends and wiggles:

$$
\begin{equation}
f(x) = 2 cos(2x) + sin(6x) + 4
\end{equation}
$$

You can adjust the $$x$$ values of the endpoints and the point of interpolation. The readout will tell you the [percent error](http://mathworld.wolfram.com/PercentageError.html) of the interpolated value ($$y$$) versus the actual value of the function at $$x$$. Think about a couple of things as you play with the simulation:

1. How does the error change as the known points get farther apart?
2. How does the error change between the extra curvy parts of the graph and the straighter parts of the graph?

<div style="text-align:center" markdown="1">
<div id='linearInterpolation'></div>
</div>

<center>
<table style="table-layout: fixed; width: 560px">
	<tr>
		<td>Endpoint A</td>
		<td><input type="range" id="xiSlider" min="0" max="8" step="0.1" value="0" oninput="updateGraph();" onchange="updateGraph();"></td>
		<td>(<span id="xiReadoutX">0.00</span>, <span id="xiReadoutY">6.00</span>)</td>
	</tr>
	<tr>
		<td>Endpoint B</td>
		<td><input type="range" id="xfSlider" min="0" max="8" step="0.1" value="3" oninput="updateGraph();" onchange="updateGraph();"></td>
		<td>(<span id="xfReadoutX">3.00</span>, <span id="xfReadoutY">5.17</span>)</td>
	</tr>
	<tr>
		<td>Interpolated Point (C)</td>
		<td><input type="range" id="xSlider" min="0" max="1" step="0.01" value="0.5" oninput="updateGraph();" onchange="updateGraph();"></td>
		<td>(<span id="xReadoutX">1.50</span>, <span id="xReadoutY">5.58</span>)</td>
	</tr>
	<tr>
		<td>Percent Error</td>
		<td bgcolor="#ebd9b8"></td>
		<td><span id="percentError">129.62</span> %</td>
	</tr>
</table>
</center>

<script type="text/javascript" src="{{site.BASE_PATH}}/assets/js/2015-08-02/linearInterpolation.js"></script>