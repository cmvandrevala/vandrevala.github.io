---
layout: post
comments: true
title: An Oscillating Electron Around a Ring of Charge (Part 2)
difficulty: hard
category: [Electromagnetism]
tags: [Derivation]
description: I derive the expression for the Abraham-Lorentz force (i.e. the self-force) and set up the differential equation for the oscillatory motion of a radiating electron near a charged ring.
---

### Introduction

[Last week](http://blog.cupcakephysics.com/electromagnetism/2015/06/21/an-oscillating-electron-around-a-ring-of-charge-part-1.html) we studied the motion of an electron (mass $$m$$ and charge $$e$$) as it oscillates about the center of a ring with charge $$Q$$ and radius $$R$$. We found that the path of the electron is a simple sinusoidal wave with a constant angular frequency:

$$
\begin{equation}
z(t) = Asin \left (\sqrt{\frac{k Qe }{mR^3}} t \right ) + Bcos \left (\sqrt{\frac{k Qe }{mR^3}} t \right )
\end{equation}
$$

However, this isn't the full story. We learned in an [earlier blog post](http://blog.cupcakephysics.com/electromagnetism/2014/11/23/thomsons-derivation-of-the-larmor-formula.html) that an accelerating charged particle radiates according to the [Larmor formula](https://en.wikipedia.org/wiki/Larmor_formula). Thus, we need to expand this solution to include the effect of the recoil force on the accelerating electron due to the emission of electromagnetic radiation. This force has many names - the radiation reaction force, the self force, and the Abraham-Lorentz force.

### The Abraham-Lorentz Force

Let's start our derivation of the Abraham-Lorentz force by writing the expression that we derived for the Larmor formula (again, see my [earlier post](http://blog.cupcakephysics.com/electromagnetism/2014/11/23/thomsons-derivation-of-the-larmor-formula.html)).

$$
\begin{equation}
P = \frac{e^2 a^2}{6 \pi \epsilon_o c^3}
\end{equation}
$$

We know that the work done on the electron by its radiation force is defined to be the negative integral of power with respect to time:

$$
\begin{equation}
-\int P dt = -\int \frac{e^2 a^2}{6 \pi \epsilon_o c^3} dt
\end{equation}
$$

Let's integrate this expression over one period (starting at $$t_0$$ and ending at $$t_1$$).

$$
\begin{align}
-\int_{t_0}^{t_1} P dt &= -\int_{t_0}^{t_1} \frac{e^2 a^2}{6 \pi \epsilon_o c^3} dt\\[0.1cm]
&= - \frac{e^2}{6 \pi \epsilon_o c^3} \int_{t_0}^{t_1}  a^2 dt\\[0.1cm]
&= - \frac{e^2}{6 \pi \epsilon_o c^3} \int_{t_0}^{t_1} \left ( \frac{d\vec{v}}{dt} \right ) \cdot \left ( \frac{d\vec{v}}{dt} \right ) dt
\end{align}
$$

We can solve this expression further by using [integration by parts](http://tutorial.math.lamar.edu/Classes/CalcII/IntegrationByParts.aspx). Let $$u = dv/dt$$ and $$dy = (dv/dt) dt$$. Then:

$$
\begin{equation}
\int u dy = uy - \int y du
\end{equation}
$$

We can rewrite our integral as:

$$
\begin{align}
-\int_{t_0}^{t_1} P dt &= - \frac{e^2}{6 \pi \epsilon_o c^3} \int_{t_0}^{t_1} \left ( \frac{d\vec{v}}{dt} \right ) \cdot \left ( \frac{d\vec{v}}{dt} \right ) dt\\[0.1cm]
&= - \frac{e^2}{6 \pi \epsilon_o c^3} \left [ \left ( \frac{d\vec{v}}{dt} \right ) \cdot \vec{v} \right ]_{t_0}^{t_1} + \frac{e^2}{6 \pi \epsilon_o c^3} \int_{t_0}^{t_1} \vec{v} \cdot \frac{d^2 \vec{v}}{dt^2} dt
\end{align}
$$

This integral is over one period of motion. Thus, the first term in the expression above is zero because the velocity of the electron ($$\vec{v}$$) and the acceleration of the electron ($$d\vec{v}/dt$$) are the same at times $$t_0$$ and $$t_1$$.

$$
\begin{equation}
-\int_{t_0}^{t_1} P dt = \frac{e^2}{6 \pi \epsilon_o c^3} \int_{t_0}^{t_1} \vec{v} \cdot \frac{d^2 \vec{v}}{dt^2} dt
\end{equation}
$$

We note that the second derivative of velocity is just the first derivative of acceleration.

$$
\begin{equation}
-\int_{t_0}^{t_1} P dt = \frac{e^2}{6 \pi \epsilon_o c^3} \int_{t_0}^{t_1} \vec{v} \cdot \frac{d\vec{a}}{dt} dt
\end{equation}
$$

At this point, let's look at work through a different lens. Instead of writing the integral for work using power and time, we can write an equivalent integral using force, velocity, and time. We will define this force to be our Abraham-Lorentz force.

$$
\begin{equation}
-\int P dt = \int \vec{F}_{AL} \cdot \vec{v} dt
\end{equation}
$$

$$
\begin{equation}
-\int_{t_0}^{t_1} P dt = \int_{t_0}^{t_1} \vec{F}_{AL} \cdot \vec{v} dt = \frac{e^2}{6 \pi \epsilon_o c^3} \int_{t_0}^{t_1} \vec{v} \cdot \frac{d\vec{a}}{dt} dt
\end{equation}
$$

Thus, the expression for the Abraham-Lorentz force falls right out of the integral:

$$
\begin{equation}
\vec{F}_{AL} = \frac{e^2}{6 \pi \epsilon_o c^3} \frac{d\vec{a}}{dt}
\end{equation}
$$

This force is really quite strange. It is one of the few times that we see the use of jerk in physics (the third derivative of position).

### Oscillatory Motion With Radiation

In our analysis last week, we said that the net force on the electron was simply the electric force due to the charged ring. Now, our analysis is a bit more sophisticated - the net force $$\vec{F}_{net}$$ is the sum of the electric force $$\vec{F}_E$$ and the Abraham-Lorentz force $$\vec{F}_{AL}$$.

$$
\begin{equation}
\vec{F}_{net} = \vec{F}_E + \vec{F}_{AL}
\end{equation}
$$

We can plug in the appropriate expressions for each of the forces. Like last week, I will use dot notation to keep everything nice and neat.

$$
\begin{equation}
m \ddot{z} = - \frac{kQez}{\left [ z^2 + R^2 \right ]^{3/2}} + \frac{e^2}{6 \pi \epsilon_o c^3} \dddot{z}
\end{equation}
$$

Moving everything to one side and simplifying the first coefficient yields:

$$
\begin{equation}
\frac{e^2}{6 \pi \epsilon_o c^3} \dddot{z} - m \ddot{z} - \frac{kQe z}{\left [ z^2 + R^2 \right ]^{3/2}} = 0
\end{equation}
$$

$$
\begin{equation}
\dddot{z} - \left ( \frac{6 m \pi \epsilon_o c^3}{e^2} \right ) \ddot{z} - \left ( \frac{6 kQ \pi \epsilon_o c^3}{e} \right ) \left ( \frac{z}{\left [ z^2 + R^2 \right ]^{3/2}} \right ) = 0
\end{equation}
$$

This new differential equation takes the self-force of the electron into account. Notice how it is not just a simple oscillatory problem anymore!

### Conclusion

In physics, we are used to seeing second order differential equations with constant coefficients. These equation pop up in a variety of places like the mass-spring oscillator, the driven RLC circuit, and the Schrodinger equation. However, not everything is a simple second order differential equation; this might be the first time that you see the jerk of a particle come into play.

Next week we will wrap up our discussion of this problem by analyzing this differential equation. We need to add one more piece to this equation in order to get a reasonable answer.
