---
layout: post
comments: true
title: The Finite Difference Method and Schrodinger's Equation
difficulty: medium
category: [Computational Physics]
tags: [Derivation, Downloadable Content]
description: I derive the methodology behind the finite difference method and then use it to solve the one-dimensional, time-independent Schrodinger equation.
---

### Introduction

Source Code: [https://github.com/CupcakePhysics/finite_difference_schrodinger/releases](https://github.com/CupcakePhysics/finite_difference_schrodinger/releases)

The [Schrodinger equation](http://en.wikipedia.org/wiki/Schr%C3%B6dinger_equation) gives the time-evolution of some wavefunction due to some [Hamiltonian](http://en.wikipedia.org/wiki/Hamiltonian_(quantum_mechanics)):

$$
\begin{equation}
i\hbar \frac{\partial}{\partial t} \left | \psi \right \rangle = \hat{H} \left | \psi \right \rangle
\end{equation}
$$

If we separate the time-dependent part of the wavefunction from the spatial part of the wavefunction, we can analyze the eigenvalues of the spatial wavefunction using the time-independent Schrodinger equation:

$$
\begin{equation}
\hat{H} \left | \psi \right \rangle = E \left | \psi \right \rangle
\end{equation}
$$

We can find exact solutions for the time-independent Schrodinger equation for simple potentials (square wells, square barriers, harmonic oscillators, etc.). However, we usually cannot find an exact solution for more complicated potential distributions. In these cases, we have to turn to numerical methods. In this post, we are going to use the finite difference method to solve the one-dimensional, time-independent Schrodinger equation.

### The Schrodinger Equation

Recall that the Hamiltonian operator acting on the wavefunction of the particle yields the energy of the particle:

$$
\begin{equation}
\hat{H} \left | \psi \right \rangle = E \left | \psi \right \rangle
\end{equation}
$$

The Hamiltonian is simply the sum of the kinetic and potential energies:

$$
\begin{equation}
\left [ \hat{K} + \hat{V} \right ] \left | \psi \right \rangle = E \left | \psi \right \rangle
\end{equation}
$$

We know that the kinetic energy of the particle is $$\hat{K} = \hat{p}^2/2m$$ and the potential energy of the particle is $$\hat{V} = V(\hat{x})$$.

Recall that the momentum operator is $$\hat{p} = -i\hbar \nabla$$ for a position dependent wavefunction. We can then expand the Hamiltonian:

$$
\begin{align}
\left [ \frac{\hat{p}^2}{2m} + V(\hat{x}) \right ] \left | \psi \right \rangle &= E \left | \psi \right \rangle \\[0.1cm]
\left [ -\frac{\hbar^2}{2m} \nabla^2 + V(x) \right ] \left | \psi \right \rangle &= E \left | \psi \right \rangle\\[0.1cm]
\left [ -\frac{\hbar^2}{2m} \frac{d^2}{d x^2} + V(x) \right ] \left | \psi \right \rangle &= E \left | \psi \right \rangle\\[0.1cm]
\end{align}
$$

### The Finite Difference Method

We can find an approximate solution to the Schrodinger equation by transforming the differential equation above into a matrix equation. If we divide the x-axis up into a grid of n equally spaced points $$(x_1, x_2, ..., x_n)$$, we can express the wavefunction as:

$$
\begin{equation}
\left | \psi \right \rangle =
\begin{bmatrix}
\psi(x_1)\\[0.1cm]
\psi(x_2)\\[0.1cm]
\vdots\\[0.1cm]
\psi(x_n)
\end{bmatrix}
\end{equation}
$$

where each $$\psi(x_i)$$ gives the value of the wavefunction at the point $$x_i$$. Now, all we have to do is express the Hamiltonian as a matrix operator.

Let's look at the kinetic energy term first. Suppose that the distance between each grid point is $$\ell$$. We remember that the first derivative of a function is just the slope of the function. If we are on some grid point, we can find the forward slope (between the current grid point and its neighbor to the right) or the backward slope (between the current grid point and its neighbor to the left).

$$
\begin{align}
\frac{d \psi(x_i)}{dx}\bigg|_{forward} = \frac{\psi(x_{i+1}) - \psi(x_i)}{\ell}
\end{align}
$$

$$
\begin{align}
\frac{d \psi(x_i)}{dx}\bigg|_{backward} = \frac{\psi(x_i) - \psi(x_{i-1})}{\ell}
\end{align}
$$

The second derivative is simply the derivative of the first derivative. We can find the second derivative of the wavefunction at a given grid point by using the forward and backward derivatives above:

$$
\begin{align}
\frac{d^2 \psi(x_i)}{dx^2} &= \frac{\frac{d\psi(x_i)}{dx}\bigg|_{forward} - \frac{d\psi(x_i)}{dx}\bigg|_{backward}}{\ell}\\[0.1cm]
&=\frac{\frac{\psi(x_{i+1}) - \psi(x_i)}{\ell} - \frac{\psi(x_i) - \psi(x_{i-1})}{\ell}}{\ell}\\[0.1cm]
&= \frac{\psi(x_{i+1}) - 2\psi(x_i) + \psi(x_{i-1})}{\ell^2}
\end{align}
$$

Thus, in our case, we can write a kinetic energy operator as:

$$
\begin{equation}
\hat{K} = -\frac{\hbar^2}{2m\ell^2}
\begin{bmatrix}
-2 & 1 & 0 & \dots & \dots & 0\\[0.1cm]
1 & -2 & 1 & \dots & \dots & 0\\[0.1cm]
0 & 1 & -2 & \dots & \dots & 0\\[0.1cm]
\vdots & \vdots & \vdots & \ddots & & \vdots\\[0.1cm]
\vdots & \vdots & \vdots & & \ddots & 1\\[0.1cm]
0 & 0 & 0 & \dots & 1 & -2
\end{bmatrix}
\end{equation}
$$

We note that if we multiply this kinetic energy operator and the wavefunction vector, we get the correct expression for the second derivative at every grid point.

If we have periodic boundary conditions, we need to make sure that we connect the first and last gird points with an off-diagonal term:

$$
\begin{equation}
\hat{K} = -\frac{\hbar^2}{2m\ell^2}
\begin{bmatrix}
-2 & 1 & 0 & \dots & \dots & 1\\[0.1cm]
1 & -2 & 1 & \dots & \dots & 0\\[0.1cm]
0 & 1 & -2 & \dots & \dots & 0\\[0.1cm]
\vdots & \vdots & \vdots & \ddots & & \vdots\\[0.1cm]
\vdots & \vdots & \vdots & & \ddots & 1\\[0.1cm]
1 & 0 & 0 & \dots & 1 & -2
\end{bmatrix}
\end{equation}
$$

Next we can focus on the potential energy operator. If there were no kinetic energy in the system, we would expect the energy at each grid point $$x_i$$ to equal the potential energy $$V(x_i)$$. Thus, the matrix V must be diagonal with the potential energy at each point along the diagonal:

$$
\begin{equation}
V(\hat{x}) =
\begin{bmatrix}
V(x_1) & 0 & \dots & \dots & \dots & 0\\[0.1cm]
0 & V(x_2) & 0 & \dots & \dots & 0\\[0.1cm]
\vdots & 0 & \ddots & & & \vdots\\[0.1cm]
\vdots & \vdots & & \ddots & & \vdots\\[0.1cm]
\vdots & \vdots & & & \ddots & 0\\[0.1cm]
0 & 0 & \dots & \dots & 0 & V(x_n)
\end{bmatrix}
\end{equation}
$$

The Hamiltonian is then the sum of the kinetic and potential energies. Once we have the Hamiltonian, we can use an eigenvalue solver to determine the final solution for the wavefunction.

### Matlab Code

I created a short Matlab script to calculate the three lowest energy states of the Schrodinger equation given some potential energy distribution. It plots the wavefunction onto the potential energy distribution so that we can see how the changing potential affects the probability of finding the particle at a certain position.

The [source code](https://github.com/cmvandrevala/finite_difference_schrodinger/releases/tag/2.0.0) can be found on the Cupcake Physics GitHub page. All of the instructions for changing the parameters of the simulation are included in the script. Feel free to play around with the code and create your own custom potentials!
