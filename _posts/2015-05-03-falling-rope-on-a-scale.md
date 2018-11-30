---
layout: post
comments: true
title: Falling Rope on a Scale
difficulty: medium
category: [Classical Mechanics]
tags: [Common Homework Problem]
description: I derive the force exerted by a falling rope on a scale. There are many variations of this problem involving chains, sand, string, etc.
---

### Introduction

I have recently been reading the [Matter and Interactions](http://matterandinteractions.org/) textbook for my research. Chabay and Sherwood really try to develop a few basic physics relationships that can be used repeatedly rather than listing equations. It is interesting how introductory material, seen in a different way, can change the way that you solve problems.

Today, I want to go over a problem that I found challenging in intermediate mechanics because I was thinking in terms of specific equations rather than broad ideas. What is the weight of a falling rope measured on a scale? There are many variations of the falling rope problem involving falling sand in an hourglass, falling chains, and other falling liquids. No matter what the description, the core concepts remain the same.

The mindeset that you have when you tackle this problem makes a huge difference. One "traditional" way of solving this problem is to break the chain up into little pieces, find their tiny contributions to the force, and integrate over all of them. This works just fine, but it isn't too elegant. Instead, when you think broadly in terms of momentum and energy, the problem turns out to be pretty straightforward.

### The Problem Statement

A flexible rope with a length $$L$$ and total mass $$M$$ hangs vertically just above a scale. The rope is released at time $$t = 0$$. What is the reading on the scale as a function of time?

<div style="text-align:center" markdown="1">
![Force vs. Time]({{ site.url }}/assets/images/2015-05-03/setup.png)
</div>

### The Solution

The force of the rope on the scale is equal and opposite to the force of the scale on the rope. Thus, rather than analyzing the scale, let's analyze the rope. We will define the height of the top of the rope as it falls as $$h$$ and the mass density of the rope as $$\lambda = M/L$$. Everything will be measured along the $$z$$-direction.

<div style="text-align:center" markdown="1">
![Force vs. Time]({{ site.url }}/assets/images/2015-05-03/fallen_rope.png)
</div>

The total force on the entire piece of rope is equal to the force of the scale upwards minus the force of gravity downwards:

$$
\begin{align}
\vec{F}_{tot} &= F_{scale} \hat{z} - Mg \hat{z} \\[0.1cm]
&= F_{scale} \hat{z} - \lambda L g \hat{z}
\end{align}
$$

We know that the total force on the rope is equal to the change in momentum of the rope with respect to time (Newton's Second Law). The total momentum of the rope at any given height $$h$$ is just the mass of the remaining section of the falling rope ($$\lambda h$$) times the speed of the falling rope ($$dh/dt$$).

$$
\begin{align}
\vec{p} &= m \vec{v}\\[0.1cm]
&= \lambda h \frac{dh}{dt} \hat{z}
\end{align}
$$

Note that $$\vec{p}$$ is negative becuase $$dh/dt$$ is negative.

Let's plug the expression for momentum into Newton's Second Law and turn the crank. We will use dot notation ($$\dot{h} \equiv dh/dt$$) just to keep the equations clean-looking:

$$
\begin{equation}
\vec{F}_{tot} = \frac{d\vec{p}}{dt}
\end{equation}
$$

$$
\begin{align}
F_{scale} - \lambda L g &= \frac{d}{dt} \left ( \lambda h \dot{h} \right )\\[0.1cm]
&= \lambda \dot{h}^2 + \lambda h \ddot{h}\\[0.1cm]
\end{align}
$$

We can solve for the speed of the rope ($$\dot{h}$$) by considering energy conservation. All of the potential energy of the rope is turning into kinetic energy when the top of the rope falls from its initial height (L) to some height (h). For a section of rope with height $$h$$ and mass $$m$$:

$$
\begin{equation}
K = \frac{1}{2} m \dot{h}^2
\end{equation}
$$

$$
\begin{equation}
U = m g \left ( L - h \right )
\end{equation}
$$

Setting them equal yields:

$$
\begin{align}
K &= U\\[0.1cm]
\frac{1}{2} m \dot{h}^2 &= m g \left ( L - h \right )\\[0.1cm]
\dot{h} &= \sqrt{2 g \left ( L - h \right ) }
\end{align}
$$

Then, we can continue simplifying the expression for force:

$$
\begin{align}
F_{scale} - \lambda L g &= \lambda \dot{h}^2 + \lambda h \ddot{h}\\[0.1cm]
&= \lambda \left [ 2g \left ( L - h \right ) \right ] + \lambda h \ddot{h}\\[0.1cm]
&= 2g\lambda L - 2g\lambda h + \lambda h \ddot{h}
\end{align}
$$

The acceleration of the top of the rope ($$\ddot{h}$$ is just the acceleration due to gravity. Remember, we are dealing with vectors, so $$\ddot{h} = -g$$.

$$
\begin{align}
F_{scale} - \lambda L g &= 2g\lambda L - 2g\lambda h - \lambda h g\\[0.1cm]
&= 2g\lambda L - 3 \lambda h g
\end{align}
$$

$$
\begin{align}
F_{scale} &= g\lambda L + 2g\lambda L - 3 \lambda h g\\[0.1cm]
&= 3g\lambda L - 3 g \lambda h\\[0.1cm]
&= 3g\lambda \left ( L - h \right )
\end{align}
$$

We have reached an important intermediate step. We now have the force measured by the scale as a function of rope height $$h$$. Remember, this equation is only valid while the rope is falling. After it comes to rest on the scale, the scale will simply read the weight of the rope ($$Mg$$).

We can now solve for the force read by the scale as a function of time. At some time $$t$$, the top of the rope has fallen an amount $$gt^2/2$$ (from the kinematics of a falling particle). Thus, the height ($$h$$) of the rope is equal to:

$$
\begin{equation}
h = L - \frac{1}{2} g t^2
\end{equation}
$$

Plugging the height into the expression for force gives:

$$
\begin{align}
F_{scale} &= 3 \lambda g \left [ L - h \right ]\\[0.1cm]
&= 3 \lambda g \left [ L - \left ( L - \frac{1}{2} g t^2 \right ) \right ]\\[0.1cm]
&= \frac{3}{2} \lambda g^2 t^2\\[0.1cm]
\end{align}
$$

While the rope is falling, the weight on the scale will increase proportional to $$t^2$$. Then, when the rope stops falling, the weight will suddenly drop down to $$Mg$$. I have plotted the force read by the scale as a function of time for a rope that is one meter long and weighs one kilogram. The red dots represent the weight read by the scale as a function of time. The green line is drawn at $$3Mg$$ for reference.

<div style="text-align:center" markdown="1">
![Force vs. Time]({{ site.url }}/assets/images/2015-05-03/scale_graph.png)
</div>

### Conclusions

Interestingly, when the last bit of the chain hits the scale, the scale reads $$3Mg$$ rather than just $$Mg$$. This is because we have to take the momentum of the falling chain into account as well as its weight.

Dr. Alex Dzierba performed an example of this experiment in his class (see [his writeup of the data](http://www.dzre.com/alex/hp221_f03/notes/chain.pdf)). Notice that the chain is generally proportional to $$t^2$$ with a few bumps along the way. The bumps in the graph come from the fact that a real chain is not perfectly uniform.
