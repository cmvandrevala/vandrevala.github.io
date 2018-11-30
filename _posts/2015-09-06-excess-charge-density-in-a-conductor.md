---
layout: post
comments: true
title: Excess Charge Density in a Conductor
difficulty: medium
category: [Electromagnetism]
tags: [Derivation, Common Homework Problem]
description: We know from introductory physics that excess charge within a conductor travels to its surface. How long does this process take?
---

### Introduction

From introductory physics, we know that the net electric field inside of a conductor is equal to zero. It is a common exercise in electromagnetism courses to prove that any excess charge within the conductor moves to the surface (Gauss's law is one way to do this). This makes sense - if there did exist excess charge within a conductor, that excess charge would create an electric field and redistribute itself until it was in equilibrium.

How long does it take the excess charge to dissipate from the inside of the conductor? That is what I plan to answer today. Let's go through a small derivation - one that you can read over as you sip your [Labor Day cocktails](http://www.delish.com/holiday-recipes/g2466/mixed-drinks-rocks/).

<div style="text-align:center" markdown="1">
![Mmmm... Beer]({{ site.url }}/assets/images/2015-09-06/beer_cupcake.png)
</div>

### A Couple of Derivations

There are lots of ways to derive the time evolution of the charge density within a conductor. Below, I demonstrate two ways to do it - one using the continuity equation for charge and the other starting from Ampere's law with displacement current. In each of the derivations, the time dependent charge density is given by $$\rho(\vec{x},t) \equiv \rho$$.

#### Continuity Equation

Let's start off by writing out the [continuity equation](https://en.wikipedia.org/wiki/Continuity_equation) for charge.

$$
\begin{equation}
\frac{\partial \rho}{\partial t} + \nabla \cdot \vec{j} = 0
\end{equation}
$$

The current density ($$\vec{j}$$) at a point inside of a conductor is equal to the product of the conductivity ($$\sigma$$) of the conductor and the electric field ($$\vec{E}$$) at that point. The conductivity is constant for each specific conductor.

$$
\begin{equation}
\vec{j} = \sigma \vec{E}
\end{equation}
$$

Plug in $$\vec{j}$$ and simplify.

$$
\begin{align}
\frac{\partial \rho}{\partial t} + \nabla \cdot \left ( \sigma \vec{E} \right ) &= 0\\[0.1cm]
\frac{\partial \rho}{\partial t} + \sigma \left ( \nabla \cdot \vec{E} \right ) &= 0
\end{align}
$$

We know from Maxwell's equations that the divergence of the electric field is related to the charge density.

$$
\begin{equation}
\nabla \cdot \vec{E} = \frac{\rho}{\epsilon_o}
\end{equation}
$$

Thus, we end up with the following differential equation.

$$
\begin{equation}
\frac{\partial \rho}{\partial t} + \sigma \left ( \frac{\rho}{\epsilon_o} \right ) = 0
\end{equation}
$$

$$
\begin{equation}
\frac{\partial \rho}{\partial t} + \left ( \frac{\sigma}{\epsilon_o} \right ) \rho = 0
\end{equation}
$$

This particular differential equation has a simple solution.

$$
\begin{equation}
\rho(\vec{x}, t) = \rho_o e^{-\sigma t / \epsilon_o}
\end{equation}
$$

In the expression above, $$\rho_o$$ is a constant that can be solved for by plugging in the initial conditions of the system. We will say that $$\rho(\vec{x},t) = \rho(\vec{x},0)$$ when $$t=0$$. Then:

$$
\begin{equation}
\rho(\vec{x}, t) = \rho(\vec{x},0) e^{-\sigma t / \epsilon_o}
\end{equation}
$$

#### Ampere's Law

Let's redo the derivation with Ampere's law. Notice that we include the displacement current term.

$$
\begin{equation}
\nabla \times \vec{B} = \mu_o \vec{j} + \mu_o \epsilon_o \frac{\partial \vec{E}}{\partial t}
\end{equation}
$$

Once again, the current density is related to conductivity and electric field.

$$
\begin{equation}
\vec{j} = \sigma \vec{E}
\end{equation}
$$

Plug the expression for current density into Ampere's law in order to put everything in terms of electric field.

$$
\begin{equation}
\nabla \times \vec{B} = \mu_o \sigma \vec{E} + \mu_o \epsilon_o \frac{\partial \vec{E}}{\partial t}
\end{equation}
$$

Now, let's do something neat. Take the divergence of each side of the equation above. The left hand side will equal zero since the divergence of a curl is zero. However, the right hand side will simplify nicely.

$$
\begin{equation}
\nabla \cdot \left ( \nabla \times \vec{B} \right ) = \nabla \cdot \left ( \mu_o \sigma \vec{E} + \mu_o \epsilon_o \frac{\partial \vec{E}}{\partial t} \right )
\end{equation}
$$

$$
\begin{align}
0 &= \mu_o \sigma \left ( \nabla \cdot \vec{E} \right ) + \mu_o \epsilon_o \left ( \nabla \cdot \frac{\partial \vec{E}}{\partial t} \right )\\[0.1cm]
&= \mu_o \sigma \left ( \nabla \cdot \vec{E} \right ) + \mu_o \epsilon_o \frac{\partial}{\partial t} \left ( \nabla \cdot \vec{E} \right )
\end{align}
$$

Once again, we see the divergence of electric field. We know how to handle that!

$$
\begin{equation}
0 = \sigma \left ( \frac{\rho}{\epsilon_o} \right ) + \epsilon_o \frac{\partial}{\partial t} \left ( \frac{\rho}{\epsilon_o} \right )
\end{equation}
$$

$$
\begin{equation}
\frac{\partial \rho}{\partial t} + \left ( \frac{\sigma}{\epsilon_o} \right ) \rho = 0
\end{equation}
$$

This leads to the same final answer as above when we use the same initial conditions.

$$
\begin{equation}
\rho(\vec{x}, t) = \rho(\vec{x},0) e^{-\sigma t / \epsilon_o}
\end{equation}
$$

### How Fast Is It?

In the table below, I list the conductivity, the [time constant](https://en.wikipedia.org/wiki/Time_constant) of the density equation ($$\epsilon_o/\sigma$$), and the time it takes for 99% of the charge to dissipate from the bulk of a conductor. Notice that my units for time are attoseconds ($$10^{-18}$$ s).

So how fast is it? Really fast. See you next week!

<center>
	<table>
		<tr>
			<td>Material</td>
			<td>Conductivity (MS/m)</td>
			<td>Time Constant (as)</td>
			<td>Time to Dissipate by 99% (as)</td>
		</tr>
		<tr>
			<td>Iron</td>
			<td>10.0</td>
			<td>0.885</td>
			<td>4.08</td>
		</tr>
		<tr>
			<td>Aluminum</td>
			<td>35.0</td>
			<td>0.253</td>
			<td>1.17</td>
		</tr>
		<tr>
			<td>Gold</td>
			<td>41.0</td>
			<td>0.216</td>
			<td>0.995</td>
		</tr>
		<tr>
			<td>Copper</td>
			<td>59.6</td>
			<td>0.148</td>
			<td>0.682</td>
		</tr>
		<tr>
			<td>Silver</td>
			<td>63.0</td>
			<td>0.140</td>
			<td>0.645</td>
		</tr>
	</table>
</center>
