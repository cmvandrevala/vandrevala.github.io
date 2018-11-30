---
layout: post
comments: true
title: An Electromagnetic Wave in a Conductor (Part 2)
difficulty: medium
category: [Electromagnetism]
tags: [Derivation, Plasma, Oscillations, Electromagnetic, Wave, Conductor, Propagation, Complex Permittivity, Skin Depth]
description: What exactly does it mean to have a complex refractive index?
---

### Introduction

[Last week](http://blog.cupcakephysics.com/electromagnetism/2016/01/03/an-electromagnetic-wave-in-a-conductor-part-1.html) we used Maxwell's equations to derive an expression for the wavevector of an electromagnetic wave within a conductor. We found that the wavevector turns out to be a complex number given by:

$$
\begin{equation}
\widetilde{k} = \omega \sqrt{ \mu \epsilon - \frac{i \mu \sigma}{\omega} } = \frac{\widetilde{n} \omega}{c}
\end{equation}
$$

where

$$
\begin{equation}
\widetilde{n} = c \sqrt{ \mu \epsilon - \frac{i \mu \sigma}{\omega} }
\end{equation}
$$

Of course, you can solve for the [real](http://www.wolframalpha.com/input/?i=Real%5B+sqrt%28A+%2B+B*i%29+%5D) and [imaginary](http://www.wolframalpha.com/input/?i=Imaginary%5B+sqrt%28A+%2B+B*i%29+%5D) parts of $$\widetilde{n}$$ or $$\widetilde{k}$$ using a little bit of algebra. However, that doesn't tell us what complex values actually mean. For that, we will simply look back to the formula for a plane wave of light.

### The Plane Wave

The electric field of a plane wave of light propagating in some material has the form:

$$
\begin{equation}
\vec{E}(\vec{r}) = \vec{E}_o e^{i(\vec{k} \cdot \vec{r} + \omega t)} = \vec{E}_o e^{i\vec{k} \cdot \vec{r}} e^{i\omega t}
\end{equation}
$$

In this plane wave the wavevector, refractive index, speed of light, and frequency of the light wave are all related by a [dispersion relationship](https://en.wikipedia.org/wiki/Dispersion_relation):

$$
\begin{equation}
ck = n\omega \Rightarrow k = \frac{n\omega}{c}
\end{equation}
$$

We will assume that the propagation of light is along the z-direction, meaning that the plane wave expression reduces down to:

$$
\begin{equation}
\vec{E}(z) = \vec{E}_o e^{ikz} e^{i\omega t}
\end{equation}
$$

Additionally, we will ignore the $$\omega t$$ term for the time being, just so we can get a sense of the shape of the wave without worrying about the oscillations of the wave.

$$
\begin{equation}
\vec{E}(z) = \vec{E}_o e^{ikz}
\end{equation}
$$

If k is a real number, then the expression above has the form of a regular, old, oscillating wave. However, if the wavevector is complex, something interesting happens. Let $$\widetilde{k}$$ be complex and $$k_1$$ and $$k_2$$ be real numbers:

$$
\begin{equation}
\widetilde{k} = k_1 + ik_2
\end{equation}
$$

Then:

$$
\begin{align}
\vec{E}(z) &= \vec{E}_o e^{i\widetilde{k}z}\\
&= \vec{E}_o e^{i(k_1 + ik_2)z}\\
&= \vec{E}_o e^{ik_1z + i^2k_2z}\\
&= \vec{E}_o e^{ik_1z - k_2z}\\
&= \vec{E}_o e^{ik_1z} e^{-k_2z}\\
\end{align}
$$

The real part of $$\widetilde{k}$$ (and by extension $$\widetilde{n}$$) determines the wavevector of the light in the material. The imaginary part of $$\widetilde{k}$$ (and by extension $$\widetilde{n}$$) is seen in a negative exponential term. This means that the electric field decays - the light wave can only penetrate part of the way into the conductor. This is called the skin depth of the wave in the conductor.

You can use the interactive plot below to see how changing $$k_1$$ and $$k_2$$ will affect the magnitude of the electromagnetic wave as a function of z-position. The blue curve represents the real part of the electric field while the red curve represents the imaginary part. The initial magnitude of the electric field has been scaled to one, just to provide a consistent starting point for the analysis.

<div style="text-align:center" markdown="1">
<div id='skin_depth'></div>
</div>

<center>
<table style="table-layout: fixed; width: 560px">
	<tr>
		<td>\(k_1\)</td>
		<td><input type="range" id="kOneSlider" min="0" max="80" step="1" value="40" oninput="updateGraph();" onchange="updateGraph();"></td>
		<td><span id="kOneReadout">40.0</span> \(m^{-1}\)</td>
	</tr>
	<tr>
		<td>\(k_2\)</td>
		<td><input type="range" id="kTwoSlider" min="0" max="10" step="0.1" value="0" oninput="updateGraph();" onchange="updateGraph();"></td>
		<td><span id="kTwoReadout">0.0</span> \(m^{-1}\)</td>
	</tr>
	<tr>
		<td colspan="3">The real part of the electric field is in <font color="blue">BLUE</font> while the imaginary part of the electric field is in <font color="red">RED</font>.</td>
	</tr>
</table>
</center>

<script type="text/javascript" src="{{site.BASE_PATH}}/assets/js/2016-01-10/skin_depth.js"></script>