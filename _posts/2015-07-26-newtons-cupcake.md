---
layout: post
comments: true
title: Newton's Cupcake
difficulty: easy
category: [Classical Mechanics]
tags: [Interactive Visual]
description: Yesterday at the AAPT 2015 conference, I had a chance to attend a workshop on creating visualizations with the HTML5 canvas. I have created an interactive demonstration of Newton's cannon that launches a cupcake around the Earth.
---

### Newton's Cupcake

Isaac Newton published a famous thought experiment in [A Treatise of the System of the World](https://en.wikipedia.org/wiki/Philosophi%C3%A6_Naturalis_Principia_Mathematica). He imagined what would happen if one were to shoot a cannonball from the top of a very high mountain (so high up that air resistance could be ignored). If the canonball were launched with a relatively small velocity, it would strike the ground at some distance from the mountain. However, if the velocity of the canonball were much larger, it might "miss" the ground entirely and go into orbit around the planet. This thought experiment was the key to linking the force of gravity to orbital motion.

It is easy to determine the speed at which circular orbital motion will occur. Let $$M$$ be the mass of the planet, $$m$$ be the mass of the cannonball, and $$r$$ be the radius of the orbit. We know that the force of gravity provides the centripetal force for a body in [uniform circular motion](http://www.physicsclassroom.com/mmedia/circmot/ucm.cfm) around the planet.

$$
\begin{equation}
m\frac{v^2}{r} = \frac{GMm}{r^2}
\end{equation}
$$

$$
\begin{equation}
v^2 = \frac{GM}{r}
\end{equation}
$$

$$
\begin{equation}
v = \sqrt{\frac{GM}{r}}
\end{equation}
$$

After learning about the HTML5 canvas tag in a workshop at the [AAPT Summer Meeting](https://www.aapt.org/Conferences/sm2015/), I decided to make a little simulation in order to visualize this thought experiment. The planet below has the same radius as the Earth; you can adjust the mass of the planet, the initial velocity of the projectile, and the angle of launch of the projectile. Sadly, we are out of cannonballs, but we do have a brave cupcake volunteer.

<center>
	<canvas class="canvas" id="thePlanet" width="600" height="600" style="position:absolute"></canvas>
	<canvas class="canvas" id="theTrail" width="600" height="600" style="position:absolute"></canvas>
	<canvas class="canvas" id="theArrow" width="600" height="600" style="position:absolute"></canvas>
	<canvas class="canvas" id="newtonsCupcake" width="600" height="600" style="position:relative"></canvas>
</center>

<center>
	<p><input type="button" value="Fire!" onclick="fireProjectile();"><input type="button" value="Pause" onclick="pauseProjectile();"></p>
	<table style="table-layout: fixed; width: 550px">
		<tr>
			<td>Initial Cupcake Speed</td>
			<td><input type="range" id="speedSlider" min="0" max="16000" step="50" value="7500" oninput="showSpeed(); drawArrow();" onchange="showSpeed(); drawArrow();"></td>
			<td><span id="speedReadout">7500</span> m/s</td>
		</tr>
		<tr>
			<td>Planet Mass</td>
			<td><input type="range" id="massSlider" min="0" max="1.2e25" step="1e23" value="6e24" oninput="showMass(); colorPlanet();" onchange="showMass(); colorPlanet();"></td>
			<td><span id="massReadout">6.0e24</span> kg</td>
		</tr>
		<tr>
			<td>Angle of Fire</td>
			<td><input type="range" id="angleSlider" min="-90" max="90" step="0.5" value="0" oninput="showAngle(); drawArrow();" onchange="showAngle(); drawArrow();"></td>
			<td><span id="angleReadout">0</span> degrees</td>
		</tr>
	</table>
</center>

<script type="text/javascript" src="{{site.BASE_PATH}}/assets/js/2015-07-26/global.js"></script>

<script type="text/javascript" src="{{site.BASE_PATH}}/assets/js/2015-07-26/planet.js"></script>

<script type="text/javascript" src="{{site.BASE_PATH}}/assets/js/2015-07-26/arrow.js"></script>

<script type="text/javascript" src="{{site.BASE_PATH}}/assets/js/2015-07-26/cupcake.js"></script>
