---
layout: post
comments: true
title: Optical Levitation of a Cylinder
difficulty: easy
category: [Classical Mechanics, Optics]
tags: [Common Homework Problem]
description: I derive the maximum mass of a cylinder that can be levitated by a laser beam of a certain power.
---

### Introduction

Last week in our introductory electricity and magnetism class, we calculated the properties of a cylinder with mass $$m$$ that levitates due to the balance between an upward radiation force and a downward gravitational force. This effect, called [optical levitation](http://en.wikipedia.org/wiki/Optical_levitation), was studied in depth by Arthur Ashkin of Bell Laboratories. Our simple model of uniform, cylindrical laser beams and uniform, cylindrical masses left out a lot of the subtleties of Ashkin's work. However, it did give us a sense of how powerful laser light could be. In this post I want to review that simple calculation of the mass that we did in class.

### The Set Up

<div style="text-align:center" markdown="1">
![Cylinder in Laser Beam]({{ site.url }}/assets/images/2015-04-18/cylinder_in_laser.png)
![Free Body Diagram of Cylinder]({{ site.url }}/assets/images/2015-04-18/cylinder_fbd.png)
</div>

A laser beam with power $$P$$ is modeled as a cylinder with diameter $$D$$. The beam is directed upward (in the $$+\hat{z}$$ direction) onto one circular face of a cylindrical mass with diameter $$d$$, height $$H$$, and mass $$m$$.

### The Calculation

As we noted above, the cylinder levitates due to the balance between the upward radiation force and the downward gravitational force. Thus, the upward force from the laser must be equal to the downward force from gravity.

$$
\begin{align}
&\sum \vec{F} = 0\\[0.1cm]
&\vec{F}_{radiation} + \vec{F}_g = 0\\[0.1cm]
&F_{radiation} (+\hat{z}) + F_g (-\hat{z}) = 0
\end{align}
$$

$$
\begin{equation}
F_{radiation} = F_g
\end{equation}
$$

We know from mechanics that the gravitational force on a massive object is $$F_g = mg$$.

$$
\begin{equation}
F_{radiation} = mg
\end{equation}
$$

We also know that a light wave exerts a radiation pressure on the surface that it strikes. Thus, we can define the total force from the laser as the radiation pressure from the laser multiplied by the area of one face of the cylinder.

$$
\begin{equation}
P_{radiation} \left [ \pi \left ( \frac{d}{2} \right )^2 \right ] = mg
\end{equation}
$$

We know that we can relate the radiation pressure to the intensity ($$I$$) of the laser beam; we have to be careful though. If the laser beam is completely absorbed by the face of the cylinder, the pressure is:

$$
\begin{equation}
P_{radiation} = \frac{I}{c}
\end{equation}
$$

On the other hand, if the laser beam is completely reflected by the face of the cylinder, the pressure is:

$$
\begin{equation}
P_{radiation} = \frac{2I}{c}
\end{equation}
$$

Let us assume that the laser beam is perfectly reflected at the face of the cylinder in this case.

$$
\begin{equation}
\frac{2I}{c} \left [ \pi \left ( \frac{d}{2} \right )^2 \right ] = mg
\end{equation}
$$

Finally, we can convert intensity to power. Remember, intensity is just power per unit area. In this case, we are using the area of the laser beam:

$$
\begin{equation}
I = \frac{P}{A_{laser}} = \frac{P}{\pi \left ( \frac{D}{2} \right )^2}
\end{equation}
$$

Substituting the expression for intensity into the expression for power and solving for the mass yields:

$$
\begin{equation}
\frac{2P}{c \pi \left ( \frac{D}{2} \right )^2} \left [ \pi \left ( \frac{d}{2} \right )^2 \right ] = mg
\end{equation}
$$

$$
\begin{equation}
m = \frac{2Pd^2}{cg D^2}
\end{equation}
$$

We know from this result that the mass of the cylinder must be very small due to the $$cg$$ term in the denominator. Thus, optical levitation really only works for objects that have a mass of fractions of a gram.
