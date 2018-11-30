---
layout: post
comments: true
title: The Heisenberg Equation (Part 2)
difficulty: medium
category: [Quantum Mechanics]
tags: [Common Homework Problem, Derivation]
description: I use the Heisenberg equation to analyze the quantum harmonic oscillator.
---

### Introduction

[Last week](http://blog.cupcakephysics.com/quantum%20mechanics/2015/08/16/the-heisenberg-equation-part-1.html) I derived the Heisenberg equation; it gives the time evolution of a quantum mechanical operator under the assumption that the wavefunction of a particle is held constant in time.

$$
\begin{equation}
\frac{d\hat{Q}_H}{dt} = \frac{i}{\hbar} \left [\hat{H}, \hat{Q}_H \right ] + \left ( \frac{d\hat{Q}}{dt} \right )_H
\end{equation}
$$

The operators indexed with H have a non-zero time evolution while the operators with no index are constant in time. We found that time evolution in quantum mechanics can be thought of in two different ways. In the first case, the operators are constant in time and the wavefunction changes (the Schrodinger picture). This is the method that is taught in most introductory quantum mechanics classes. In the second case, the wavefunction is constant in time and the quantum mechanical operators change (the Heisenberg picture). This method is used less often, but is still of vital importance.

<br />

<center>
	<table>
		<tr>
			<td style="font-weight: bold;">Property</td>
			<td style="font-weight: bold;">Schrodinger Picture</td>
			<td style="font-weight: bold;">Heisenberg Picture</td>
		</tr>
		<tr>
			<td>Operator</td>
			<td>Time Independent</td>
			<td>Time Dependent</td>
		</tr>
		<tr>
			<td>Wavefunction</td>
			<td>Time Dependent</td>
			<td>Time Independent</td>
		</tr>
	</table>
</center>

<br />

I made the claim that the Heisenberg equation can be used in place of the Schrodinger equation to analyze the properties of a quantum mechanical system. This week and next I will rederive all of the properties of the quantum harmonic oscillator using the Heisenberg equation. The final results of the harmonic oscillator should be the same, no matter which picture I use.

Let's do this...

<div style="text-align:center" markdown="1">
![Bring it On]({{ site.url }}/assets/images/2015-08-23/sunglasses.png)
</div>

### A Quick Bit of Notation

Solving the Heisenberg equation can be tricky if you are not careful with your notation. Any operator with an H subscript is an operator in the Heisenberg picture with time dependence. Any operator with no subscript is one in the Schrodinger picture with no time-dependence. From last week, the relationship between these operators is:

$$
\begin{equation}
\hat{Q}_H = \hat{U}^\dagger \hat{Q} \hat{U}
\end{equation}
$$

Where $$\hat{U}$$ is a unitary operator that describes the time evolution of the system.

### The Position and Momentum Operators

Start off with the Hamiltonian of the quantum harmonic oscillator. In the equation below, $$m$$ is the mass of the bound particle, $$\omega$$ is the frequency at which it oscillates, $$\hat{p}$$ is the momentum operator, and $$\hat{x}$$ is the position operator.

$$
\begin{equation}
\hat{H} = \frac{\hat{p}^2}{2m} + \frac{1}{2} m \omega^2 \hat{x}^2
\end{equation}
$$

I will start by finding the time evolution of the position operator. Note that the position operator in the Schrodinger picture does not depend on time, so the Heisenberg equation simplifies nicely.

$$
\begin{align}
\frac{d\hat{x}_H}{dt} &= \frac{i}{\hbar} \left [\hat{H}, \hat{x}_H \right ] + \left ( \frac{d\hat{x}}{dt} \right )_H\\[0.1cm]
&= \frac{i}{\hbar} \left [\hat{H}, \hat{x}_H \right ]\\[0.1cm]
&= \frac{i}{\hbar} \left [\hat{H}, \hat{U}^\dagger \hat{x} \hat{U} \right ]\\[0.1cm]
&= \frac{i}{\hbar} \hat{U}^\dagger \left [\hat{H}, \hat{x} \right ] \hat{U}\\[0.1cm]
\end{align}
$$

Now we can substitute in the expression for the Hamiltonian and solve.

$$
\begin{align}
\frac{d\hat{x}_H}{dt} &= \frac{i}{\hbar} \hat{U}^\dagger \left [\hat{H}, \hat{x}_H \right ] \hat{U}\\[0.1cm]
&= \frac{i}{\hbar} \hat{U}^\dagger \left [ \left (  \frac{\hat{p}^2}{2m} + \frac{1}{2} m \omega^2 \hat{x}^2 \right ), \hat{x} \right ] \hat{U}\\[0.1cm]
&= \frac{i}{\hbar} \hat{U}^\dagger \left [\frac{\hat{p}^2}{2m}, \hat{x} \right ] \hat{U} + \frac{i}{\hbar} \hat{U}^\dagger \left [\frac{1}{2} m \omega^2 \hat{x}^2, \hat{x} \right ] \hat{U}\\[0.1cm]
&= \frac{i}{2m\hbar} \hat{U}^\dagger \left [\hat{p}^2, \hat{x} \right ] \hat{U}\\[0.1cm]
&= \frac{i}{2m\hbar} \hat{U}^\dagger \left \{ \hat{p} \left [\hat{p}, \hat{x} \right ] + \hat{p} \left [\hat{p}, \hat{x} \right ] \right \} \hat{U}\\[0.1cm]
&= \frac{i}{2m\hbar} \hat{U}^\dagger \left [ -i\hbar \hat{p} + -i\hbar \hat{p} \right ] \hat{U}\\[0.1cm]
&= \frac{\hat{U}^\dagger \hat{p} \hat{U}}{m}\\[0.1cm]
&= \frac{\hat{p}_H}{m}
\end{align}
$$

Similarly, we can solve for the time evolution of the momentum operator.

$$
\begin{align}
\frac{d\hat{p}_H}{dt} &= \frac{i}{\hbar} \left [\hat{H}, \hat{p}_H \right ] + \left ( \frac{d\hat{p}}{dt} \right )_H\\[0.1cm]
&= \frac{i}{\hbar} \left [\hat{H}, \hat{p}_H \right ]\\[0.1cm]
&= \frac{i}{\hbar} \left [\hat{H}, \hat{U}^\dagger \hat{p} \hat{U} \right ]\\[0.1cm]
&= \frac{i}{\hbar} \hat{U}^\dagger \left [\hat{H}, \hat{p} \right ] \hat{U}\\[0.1cm]
&= \frac{i}{\hbar}  \hat{U}^\dagger \left [ \left (  \frac{\hat{p}^2}{2m} + \frac{1}{2} m \omega^2 \hat{x}^2 \right ), \hat{p} \right ] \hat{U}\\[0.1cm]
&= \frac{i}{\hbar} \hat{U}^\dagger \left [\frac{\hat{p}^2}{2m}, \hat{p} \right ] \hat{U} + \frac{i}{\hbar} \hat{U}^\dagger \left [\frac{1}{2} m \omega^2 \hat{x}^2, \hat{p} \right ] \hat{U}\\[0.1cm]
&= \frac{im\omega^2}{2\hbar} \hat{U}^\dagger \left [\hat{x}^2, \hat{p} \right ] \hat{U}\\[0.1cm]
&= \frac{im\omega^2}{2\hbar} \hat{U}^\dagger \left \{ \hat{x} \left [\hat{x}, \hat{p} \right ] + \hat{x} \left [\hat{x}, \hat{p} \right ] \right \} \hat{U}\\[0.1cm]
&= \frac{im\omega^2}{2\hbar} \hat{U}^\dagger \left [ i\hbar \hat{x} + i\hbar \hat{x} \right ] \hat{U}\\[0.1cm]
&= -m\omega^2 \hat{U}^\dagger \hat{x} \hat{U}\\[0.1cm]
&= -m\omega^2 \hat{x}_H\\[0.1cm]
\end{align}
$$

We can now combine the two equations above to solve for the time-dependent expressions for the momentum and position operators. Taking the time derivative of the equation for the momentum operator yields:

$$
\begin{align}
\frac{d^2 \hat{p}_H}{dt^2} &= -m\omega^2 \frac{d\hat{x}_H}{dt}\\[0.1cm]
&= -m\omega^2 \frac{\hat{p}_H}{m}\\[0.1cm]
&= -\omega^2 \hat{p}_H\\[0.1cm]
\end{align}
$$

$$
\begin{equation}
\frac{d^2 \hat{p}_H}{dt^2} + \omega^2 \hat{p}_H = 0
\end{equation}
$$

$$
\begin{equation}
\hat{p}_H(t) = A cos(\omega t) + B sin(\omega t)
\end{equation}
$$

In the expression above, $$A$$ and $$B$$ are the amplitudes of the sine and cosine functions. Similarly, taking the time derivative of the equation for the position operator yields:

$$
\begin{align}
\frac{d^2 \hat{x}_H}{dt^2} &= \frac{1}{m} \frac{d\hat{p}_H}{dt}\\[0.1cm]
&= -\frac{1}{m} \left ( m\omega^2 \hat{x}_H \right )\\[0.1cm]
&= -\omega^2 \hat{x}_H\\[0.1cm]
\end{align}
$$

$$
\begin{equation}
\frac{d^2 \hat{x}_H}{dt^2} + \omega^2 \hat{x}_H = 0
\end{equation}
$$

$$
\begin{equation}
\hat{x}_H(t) = C cos(\omega t) + D sin(\omega t)
\end{equation}
$$

In the expression above, $$C$$ and $$D$$ are the amplitudes of the sine and cosine functions. Now we can solve for $$A$$, $$B$$, $$C$$, and $$D$$ using the boundary conditions of the system. At time $$t = 0$$, the momentum operator is equal to $$\hat{p}_H(0) = \hat{p}$$. The initial time rate of change of the momentum operator is given by the position operator. Then:

$$
\begin{equation}
\hat{p}_H(0) = Acos(0) + Bsin(0) = A
\end{equation}
$$

$$
\begin{equation}
A = \hat{p}
\end{equation}
$$

$$
\begin{equation}
\left ( \frac{d\hat{p}_H}{dt} \right )_{t=0}= -\omega A sin(0) + \omega B cos(0) = \omega B
\end{equation}
$$

$$
\begin{equation}
\omega B = -m\omega^2 \hat{x} \Rightarrow B = -m\omega \hat{x}
\end{equation}
$$

Thus, the final expression for the momentum operator is:

$$
\begin{equation}
\hat{p}_H(t) = \hat{p} cos(\omega t) - m\omega \hat{x} sin(\omega t)
\end{equation}
$$

At time $$t = 0$$, the position operator is equal to $$\hat{x}_H(0) = \hat{x}$$. The initial time rate of change of the position operator is given by the momentum operator. Thus:

$$
\begin{equation}
\hat{x}_H(0) = C cos(0) + Dsin(0) = C
\end{equation}
$$

$$
\begin{equation}
C = \hat{x}
\end{equation}
$$

$$
\begin{equation}
\left ( \frac{d\hat{x}_H}{dt} \right )_{t=0}= -\omega C sin(0) + \omega D cos(0) = \omega D
\end{equation}
$$

$$
\begin{equation}
\omega D = \frac{\hat{p}}{m} \Rightarrow D = \frac{\hat{p}}{m \omega}
\end{equation}
$$

Thus, the final expression for the position operator is:

$$
\begin{equation}
\hat{x}_H(t) = \hat{x} cos(\omega t) + \frac{\hat{p}}{m\omega} sin(\omega t)
\end{equation}
$$

### Current Conclusions

We are not quite done with our analysis of the quantum harmonic oscillator, but this is a good time for a checkpoint. Take a look at our two results:

$$
\begin{equation}
\hat{x}_H(t) = \hat{x} cos(\omega t) + \frac{\hat{p}}{m\omega} sin(\omega t)
\end{equation}
$$

$$
\begin{equation}
\hat{p}_H(t) = \hat{p} cos(\omega t) - m\omega \hat{x} sin(\omega t)
\end{equation}
$$

These equations already give us a lot of information. Given some initial state $$\psi$$ in the Heisenberg picture, we can calculate the expectation values of position and momentum at any time in the future by operating on $$\psi$$ by $$\hat{x}_H$$ or $$\hat{p}_H$$.

$$
\begin{equation}
\langle \hat{x}_H \rangle = \langle \psi | \hat{x}_H | \psi \rangle = \langle \hat{x} \rangle cos(\omega t) + \frac{\langle \hat{p} \rangle}{m\omega} sin(\omega t)
\end{equation}
$$

$$
\begin{equation}
\langle \hat{p}_H \rangle = \langle \psi | \hat{p}_H | \psi \rangle = \langle \hat{p} \rangle cos(\omega t) - m\omega \langle \hat{x} \rangle sin(\omega t)
\end{equation}
$$

The expectation values for position and momentum are the same no matter which picture we use. For example, note that the expectation values for both position and momentum are zero for the ground state of the quantum harmonic oscillator.

Next week we will continue our analysis of the quantum harmonic oscillator, building up the ladder operations within the Heisenberg picture. See you then!
