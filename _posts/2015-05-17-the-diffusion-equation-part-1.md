---
layout: post
comments: true
title: The Diffusion Equation (Part 1)
difficulty: hard
category: [Thermodynamics and Statistical Physics]
tags: [Derivation]
description: I derive and solve the diffusion equation.
---

### Introduction

Diffusion is the complicated process by which particles in two or more different substances mix together as a result of random motion. The particles move around, bump into each other, and redistribute themselves in a random way over time. Amazingly, after enough time has passed, the substances will be completely mixed together with no help from anybody stirring the mixture. We see diffusion in many areas of physics and chemistry - mixing solutions, Brownian motion, osmosis, etc.

A particle undergoing diffusion will experience huge numbers of collisions every second from all of the other particles randomly moving about and bumping into each other. Classical mechanics is not equipped to handle this problem because of the huge number of particles and collisions. Instead, we will turn to statistical physics to tell us something about the system.

### Deriving the Diffusion Equation

We can't possibly keep track of every single particle that diffuses through a mixture. Instead, we will keep track of the [number density](http://en.wikipedia.org/wiki/Number_density) of particles in every unit of space at every unit of time. We will call this number density $$\phi(x,t)$$. Notice that we are only looking at particle density along a single direction (x). We are only going to derive the diffusion equation in one dimension for now, just to get a good feel for what it entails. I might derive the three-dimensional diffusion equation at a later date (although it is pretty straightforward to do).

Let's start our analysis with the [continuity equation](http://en.wikipedia.org/wiki/Continuity_equation). The continuity equation states that the amount of "stuff" that goes into some volume of space minus the amount of "stuff" that leaves that volume of space, must equal the change in the amount of "stuff" in that volume of space. We can write that as:

$$
\begin{equation}
\frac{\partial \phi}{\partial t} + \nabla \cdot \vec{j} = 0
\end{equation}
$$

In the equation above, $$\phi$$ is the number density of particles at some point in space and time while $$\vec{j}$$ is the [flux](http://en.wikipedia.org/wiki/Flux) of particles entering or leaving that point in space at that time. The continuity equation is a broad expression for any [conserved quantity](http://en.wikipedia.org/wiki/Conserved_quantity). We can combine the continuity equation with [Fick's first law](http://en.wikipedia.org/wiki/Fick%27s_laws_of_diffusion) in order to derive the diffusion equation.

$$
\begin{equation}
\vec{j} = -D \nabla \phi
\end{equation}
$$

$$
\begin{equation}
\frac{\partial \phi}{\partial t} + \nabla \cdot \left [ -D \nabla \phi \right ] = 0
\end{equation}
$$

Let's assume that the diffusivity is a constant. In other words, $$D$$ does not depend on position ($$x$$), time ($$t$$), or number density ($$\phi$$). Then:

$$
\begin{align}
\frac{\partial \phi}{\partial t} + \nabla \cdot \left [ -D \nabla \phi \right ] &= 0\\[0.1cm]
\frac{\partial \phi}{\partial t} - D \nabla \cdot \left [ \nabla \phi \right ] &= 0\\[0.1cm]
\frac{\partial \phi}{\partial t} - D \nabla^2 \phi &= 0
\end{align}
$$

We are only going to analyze the diffusion equation in one dimension (along the $$x$$-axis), so the expression becomes:

$$
\begin{equation}
\frac{\partial \phi}{\partial t} - D \frac{\partial^2 \phi}{\partial x^2} = 0
\end{equation}
$$

$$
\begin{equation}
\frac{\partial \phi}{\partial t} = D \frac{\partial^2 \phi}{\partial x^2}
\end{equation}
$$

### Solving the Diffusion Equation

Oftentimes when you solve the diffusion equation, you focus on the technique of separation of variables. [Paul's Online Notes](http://tutorial.math.lamar.edu/Classes/DE/SeparationofVariables.aspx) is a great resource if you are not sure how to go through this procedure. I personally am not a huge fan of separation of variables for this formula because your final answer is an infinite series of sines and exponentials. It is a technically correct answer, but it is also difficult to draw real and useful conclusions from it.

I want to tackle this problem in a different way using the [Laplace Transform](http://tutorial.math.lamar.edu/Classes/DE/LaplaceIntro.aspx). Yes, this is slightly more advanced math, but it will yield a pretty cool answer that actually makes intuitive sense.

Let's begin by taking the Laplace transform of each side of the diffusion equation. I have included the arguments $$(x,t)$$ for the number density, just to keep everything clear. I write the Laplace transform of the number density as $$\mathscr{L} \phi(x,t) = \Phi(x,s)$$. Otherwise, I simply used a [table of Laplace transforms](http://tutorial.math.lamar.edu/pdf/Laplace_Table.pdf) and some math:

$$
\begin{equation}
\frac{\partial \phi(x,t)}{\partial t} = D \frac{\partial^2 \phi(x,t)}{\partial x^2}
\end{equation}
$$

$$
\begin{align}
\mathscr{L} \left [ \frac{\partial \phi(x,t)}{\partial t} \right ] &= \mathscr{L} \left [ D \frac{\partial^2 \phi(x,t)}{\partial x^2} \right ]\\[0.1cm]
s\Phi(x,s) - \phi(x,0) &= D \frac{\partial^2 \Phi(x,s)}{\partial x^2}\\[0.1cm]
D\frac{\partial^2 \Phi(x,s)}{\partial x^2} - s\Phi(x,s) &= -\phi(x,0)
\end{align}
$$

We have converted a differential equation for $$\phi$$ in terms of $$x$$ and $$t$$ to a new differential equation for $$\Phi$$ in terms of $$x$$ only. The one for $$\Phi$$ is much easier to solve than the one for $$\phi$$. In fact, if you have taken a course in differential equations, you might be able to solve it by inspection alone. Let's work it out in detail. The total solution to the differential equation is the sum of the homogeneous and particular solutions:

$$
\begin{equation}
\Phi = \Phi_h + \Phi_p
\end{equation}
$$

First, we need to solve for the homogeneous solution. Let $$\Phi_h = e^{\lambda x}$$. Remember, this differential equation is only in terms of $$x$$, so variable $$s$$ is treated as a constant. Then:

$$
\begin{align}
D\frac{\partial^2 \Phi_h(x,s)}{\partial x^2} - s\Phi_h(x,s) &= 0\\[0.1cm]
D\frac{\partial^2 e^{\lambda x}}{\partial x^2} - se^{\lambda x} &= 0\\[0.1cm]
D \lambda^2 e^{\lambda x} - se^{\lambda x} &= 0\\[0.1cm]
D \lambda^2 - s &= 0\\[0.1cm]
\lambda &= \pm \sqrt{\frac{s}{D}}
\end{align}
$$

The homogeneous solution is:

$$
\begin{equation}
\Phi_h = C_1 e^{x \sqrt{\frac{s}{D}}} + C_2 e^{-x \sqrt{\frac{s}{D}}}
\end{equation}
$$

Now we can solve for the particular solution. We do not know what $$\phi(x,0)$$ is, but we can still use the method of [variation of parameters](http://tutorial.math.lamar.edu/Classes/DE/VariationofParameters.aspx) to get a genral solution. We start off with the [Wronskian](http://en.wikipedia.org/wiki/Wronskian):

$$
\begin{equation}
W =
\begin{vmatrix}
e^{x \sqrt{\frac{s}{D}}} & e^{-x \sqrt{\frac{s}{D}}}\\[0.1cm]
\sqrt{\frac{s}{D}} e^{x \sqrt{\frac{s}{D}}} & -\sqrt{\frac{s}{D}} e^{-x \sqrt{\frac{s}{D}}}
\end{vmatrix}
\end{equation}
$$

$$
\begin{align}
W &= -\sqrt{\frac{s}{D}} e^{x \sqrt{\frac{s}{D}}}  e^{-x \sqrt{\frac{s}{D}}} - \sqrt{\frac{s}{D}} e^{x \sqrt{\frac{s}{D}}}  e^{-x \sqrt{\frac{s}{D}}}\\[0.1cm]
&= -\sqrt{\frac{s}{D}} - \sqrt{\frac{s}{D}}\\[0.1cm]
&= -2 \sqrt{\frac{s}{D}}
\end{align}
$$

And then write out the integral for the particular solution:

$$
\begin{align}
\Phi_p &= e^{x \sqrt{\frac{s}{D}}} \int_0^x  \frac{e^{-\alpha \sqrt{\frac{s}{D}}} \phi(\alpha, 0)}{W}d\alpha - e^{-x \sqrt{\frac{s}{D}}} \int_0^x  \frac{e^{\alpha \sqrt{\frac{s}{D}}} \phi(\alpha, 0)}{W}d\alpha\\[0.1cm]
&= \frac{e^{x \sqrt{\frac{s}{D}}}}{W} \int_0^x e^{-\alpha \sqrt{\frac{s}{D}}} \phi(\alpha, 0) d\alpha - \frac{e^{-x \sqrt{\frac{s}{D}}}}{W} \int_0^x e^{\alpha \sqrt{\frac{s}{D}}} \phi(\alpha, 0) d\alpha\\[0.1cm]
&= -\frac{e^{x \sqrt{\frac{s}{D}}}}{2} \sqrt{\frac{D}{s}} \int_0^x e^{-\alpha \sqrt{\frac{s}{D}}} \phi(\alpha, 0) d\alpha + \frac{e^{-x \sqrt{\frac{s}{D}}}}{2} \sqrt{\frac{D}{s}} \int_0^x e^{\alpha \sqrt{\frac{s}{D}}} \phi(\alpha, 0) d\alpha\\[0.1cm]
\end{align}
$$

The general solution then becomes:

$$
\begin{equation}
\Phi = C_1 e^{x \sqrt{\frac{s}{D}}} + C_2 e^{-x \sqrt{\frac{s}{D}}} -\frac{e^{x \sqrt{\frac{s}{D}}}}{2} \sqrt{\frac{D}{s}} \int_0^x e^{-\alpha \sqrt{\frac{s}{D}}} \phi(\alpha, 0) d\alpha + \frac{e^{-x \sqrt{\frac{s}{D}}}}{2} \sqrt{\frac{D}{s}} \int_0^x e^{\alpha \sqrt{\frac{s}{D}}} \phi(\alpha, 0) d\alpha\\[0.1cm]
\end{equation}
$$

$$
\begin{equation}
\Phi = \left [ C_1 - \frac{1}{2} \sqrt{\frac{D}{s}} \int_0^x e^{-\alpha \sqrt{\frac{s}{D}}} \phi(\alpha, 0) d\alpha \right ]e^{x \sqrt{\frac{s}{D}}} + \left [ C_2 + \frac{1}{2} \sqrt{\frac{D}{s}} \int_0^x e^{\alpha \sqrt{\frac{s}{D}}} \phi(\alpha, 0) d\alpha \right ] e^{-x \sqrt{\frac{s}{D}}}
\end{equation}
$$

We can simplify the expression further by adding the condition that $$\phi(x,t)$$ be bounded (and then, by extension, $$\Phi(x,s)$$ also be bounded). In other words, the limit of $$\Phi$$ as variable $$x$$ approaches infinity must equal zero.

Then the first part of the expression yields:

$$
\begin{align}
\lim_{x \rightarrow \infty} \left [ C_1 - \frac{1}{2} \sqrt{\frac{D}{s}} \int_0^x e^{-\alpha \sqrt{\frac{s}{D}}} \phi(\alpha, 0) d\alpha \right ]e^{x \sqrt{\frac{s}{D}}} &= 0\\[0.1cm]
\lim_{x \rightarrow \infty} \left [ C_1 - \frac{1}{2} \sqrt{\frac{D}{s}} \int_0^x e^{-\alpha \sqrt{\frac{s}{D}}} \phi(\alpha, 0) d\alpha \right ] &= 0\\[0.1cm]
C_1 - \frac{1}{2} \sqrt{\frac{D}{s}} \int_0^\infty e^{-\alpha \sqrt{\frac{s}{D}}} \phi(\alpha, 0) d\alpha &= 0\\[0.1cm]
\end{align}
$$

$$
\begin{equation}
C_1 = \frac{1}{2} \sqrt{\frac{D}{s}} \int_0^\infty e^{-\alpha \sqrt{\frac{s}{D}}} \phi(\alpha, 0) d\alpha
\end{equation}
$$

And the second part of the expression yields:

$$
\begin{align}
\lim_{x \rightarrow -\infty} \left [ C_2 + \frac{1}{2} \sqrt{\frac{D}{s}} \int_0^x e^{\alpha \sqrt{\frac{s}{D}}} \phi(\alpha, 0) d\alpha \right ] e^{-x \sqrt{\frac{s}{D}}} &= 0\\[0.1cm]
\lim_{x \rightarrow -\infty} \left [ C_2 + \frac{1}{2} \sqrt{\frac{D}{s}} \int_0^x e^{\alpha \sqrt{\frac{s}{D}}} \phi(\alpha, 0) d\alpha \right ] &= 0\\[0.1cm]
C_2 + \frac{1}{2} \sqrt{\frac{D}{s}} \int_0^{-\infty} e^{\alpha \sqrt{\frac{s}{D}}} \phi(\alpha, 0) d\alpha &= 0
\end{align}
$$

$$
\begin{align}
C_2 &= - \frac{1}{2} \sqrt{\frac{D}{s}} \int_0^{-\infty} e^{\alpha \sqrt{\frac{s}{D}}} \phi(\alpha, 0) d\alpha\\[0.1cm]
&= \frac{1}{2} \sqrt{\frac{D}{s}} \int_{-\infty}^0 e^{\alpha \sqrt{\frac{s}{D}}} \phi(\alpha, 0) d\alpha
\end{align}
$$

Alright. Take $$C_1$$ and $$C_2$$. Plug them back into the expression for $$\Phi$$. Do some cancelling. I swear we are in the home stretch..

$$
\begin{align}
\Phi &= e^{x \sqrt{\frac{s}{D}}}\frac{1}{2} \sqrt{\frac{D}{s}} \int_0^\infty e^{-\alpha \sqrt{\frac{s}{D}}} \phi(\alpha, 0) d\alpha - e^{x \sqrt{\frac{s}{D}}} \frac{1}{2} \sqrt{\frac{D}{s}} \int_0^x e^{-\alpha \sqrt{\frac{s}{D}}} \phi(\alpha, 0) d\alpha\\[0.1cm]
&+ e^{-x \sqrt{\frac{s}{D}}} \frac{1}{2} \sqrt{\frac{D}{s}} \int_{-\infty}^0 e^{\alpha \sqrt{\frac{s}{D}}} \phi(\alpha, 0) d\alpha + e^{-x \sqrt{\frac{s}{D}}}\frac{1}{2} \sqrt{\frac{D}{s}} \int_0^x e^{\alpha \sqrt{\frac{s}{D}}} \phi(\alpha, 0) d\alpha
\end{align}
$$

$$
\begin{equation}
\Phi = e^{x \sqrt{\frac{s}{D}}}\frac{1}{2} \sqrt{\frac{D}{s}} \int_x^\infty e^{-\alpha \sqrt{\frac{s}{D}}} \phi(\alpha, 0) d\alpha + e^{-x \sqrt{\frac{s}{D}}} \frac{1}{2} \sqrt{\frac{D}{s}} \int_{-\infty}^x e^{\alpha \sqrt{\frac{s}{D}}} \phi(\alpha, 0) d\alpha
\end{equation}
$$

$$
\begin{equation}
\Phi = \frac{1}{2} \sqrt{\frac{D}{s}} \int_{-\infty}^\infty e^{-|x - \alpha| \sqrt{\frac{s}{D}}} \phi(\alpha, 0) d\alpha
\end{equation}
$$

Ok, assuming that I did not make any stupid math mistakes, we have gotten to a nice, simple(?), expression for $$\Phi$$. To finish this problem, I am going to take the inverse Laplace transform (once again using a table of Laplace transforms):

$$
\begin{align}
\phi &= \mathscr{L}^{-1} \left [ \frac{1}{2} \sqrt{\frac{D}{s}} \int_{-\infty}^\infty e^{-|x - \alpha| \sqrt{\frac{s}{D}}} \phi(\alpha, 0) d\alpha \right ]\\[0.1cm]
&= \frac{1}{2} \int_{-\infty}^\infty \mathscr{L}^{-1} \left [ \sqrt{\frac{D}{s}} e^{-|x - \alpha| \sqrt{\frac{s}{D}}}  \right ] \phi(\alpha, 0) d\alpha\\[0.1cm]
&= \frac{1}{\sqrt{4\pi Dt}} \int_{-\infty}^\infty  e^{-|x - \alpha|^2/(4Dt)} \phi(\alpha, 0) d\alpha
\end{align}
$$

The exponent inside the integral sign is called the heat kernel. We will definitely revisit it at a later date - there is lots of interesting structure in that expression. For now, let's finish up the problem. Suppose that at time $$t=0$$, all of the particles are at the origin. In other words, we can represent the total initial number density as a [Dirac delta function](http://mathworld.wolfram.com/DeltaFunction.html) -> $$\phi(\alpha,0) = \delta(\alpha)$$. The final expression becomes:

$$
\begin{align}
\phi(x,t) &= \frac{1}{\sqrt{4\pi Dt}} \int_{-\infty}^\infty  e^{-|x - \alpha|^2/(4Dt)} \delta(\alpha) d\alpha\\[0.1cm]
&= \frac{1}{\sqrt{4\pi Dt}}  e^{-x^2/(4Dt)}
\end{align}
$$

### Conclusion

Whew, that was a lot of math today. But we did get an answer for the diffusion equation that does not involve a bunch of sines and exponentials! Instead, it is a strange Gaussian-looking equation that evolves with time.

Next week, we will visualize this answer and take a look at it on a deeper level.
