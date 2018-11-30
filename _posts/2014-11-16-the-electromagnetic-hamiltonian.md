---
layout: post
comments: true
title: The Electromagnetic Hamiltonian
difficulty: medium
category: [Electromagnetism]
tags: [Derivation, Common Homework Problem]
description: I set up the classical electromagnetic Hamiltonian and use it to derive the Lorentz force.
---

### Introduction

We know that the Hamiltonian is very important in [non-relativistic quantum mechanics](http://en.wikipedia.org/wiki/Hamiltonian_%28quantum_mechanics%29). However, we sometimes forget that the Hamiltonian is also extremely useful in the realm of classical mechanics. For example, the classical equations for the motion of a particle in an electromagnetic field can be derived using the Hamiltonian formalism.

### Derivation

Consider a classical Hamiltonian for a single particle:

$$
\begin{equation}
\mathcal{H} = \frac{\vec{p}^2}{2m} + U(\vec{x},t)
\end{equation}
$$

The first term represents the total kinetic energy of the particle, and the second term represents the total potential energy of the particle. We want to update this Hamiltonian to include the effects of an external electromagnetic field. Although we do not know the exact form of the Hamiltonian just yet, we do know a few properties that must be satisfied:

1. The Hamiltonian should be reasonably simple since Maxwell's equations are all linear.
2. Electromagnetic fields can be expressed in terms of a scalar and vector potentials ($$\phi$$ and $$\vec{A}$$). Thus, our Hamiltonian should have additional $$\phi$$ and $$\vec{A}$$ terms.
3. Electromagnetic fields have momentum and energy. Thus, we have to alter both $$\vec{p}$$ and $$U$$ in the expression above.

Let's try something simple; we will insert the scalar and vector potential into the expression by making the following changes:

$$
\begin{equation}
\vec{p} \rightarrow \vec{p} - e\vec{A}
\end{equation}
$$

$$
\begin{equation}
U = e\phi
\end{equation}
$$

In the first expression, we subtract the momentum of the electromagnetic field from the momentum of the particle to get the total momentum of the system. In the second expression, we state that the total potential energy of the system is equal to the charge on the particle times the scalar potential. In both expressions, the charge on the particle is $$e$$. Note that this is a general expression - the variable $$e$$ is not necessarily the negative charge on an electron. Then, the Hamiltonian becomes:

$$
\begin{equation}
\mathcal{H} = \frac{\left ( \vec{p} - e\vec{A} \right )^2}{2m} + e\phi
\end{equation}
$$

How do we know that this Hamiltonian is correct? Well, if we analyze it using Hamilton's equations, we had better recover the classical equations of motion for a charged particle in an electromagnetic field.

Let's start with the time derivative of canonical position. In this case, the canonical position $$q_i$$ is equal to the coordinate position $$x_i$$. Taking the derivative with respect to momentum yields:

$$
\begin{align}
\dot{q_i} &= \frac{d\mathcal{H}}{dp_i} \\[0.1cm]
&= \frac{d}{dp_i} \left [ \frac{\left ( p_i - eA_i \right )^2}{2m} + e\phi \right ] \\[0.1cm]
&= \frac{2 \left ( p_i - eA_i \right ) }{2m} \\[0.1cm]
&= \frac{1}{m} \left ( p_i - eA_i \right )
\end{align}
$$

Multiplying each side by the mass of the particle and solving for the particle momentum gives:

$$
\begin{align}
m \dot{q_i} &= p_i - eA_i \\[0.1cm]
m \dot{x_i} &= p_i - eA_i \\[0.1cm]
p_i &= m\dot{x}_i + eA_i
\end{align}
$$

Now we can compute the time derivative of the momentum of the particle.

$$
\begin{align}
\dot{p}_i &= -\frac{d\mathcal{H}}{dq_i} \\[0.1cm]
&= -\frac{d\mathcal{H}}{dx_i} \\[0.1cm]
&= -\frac{d}{dx_i} \left [ \frac{\left ( p_i - eA_i \right )^2}{2m} + e\phi \right ] \\[0.1cm]
&= - \frac{2 \left ( p_i - eA_i \right ) \frac{d}{dx_i} \left [ p_i - eA_i \right ] }{2m} - e\frac{d\phi}{dx_i} \\[0.1cm]
&= - \frac{1}{m} \left ( p_i - eA_i \right ) \left ( \frac{dp_i}{dx_i} - e\frac{dA_i}{dx_i} \right ) - e\frac{d\phi}{dx_i}
\end{align}
$$

In our system, we will assume that the momentum $$\vec{p}$$ does not directly depend on the position (translational invariance). Thus, the derivative of momentum with respect to position is zero.

$$
\begin{align}
\dot{p}_i &= - \frac{1}{m} \left ( p_i - eA_i \right ) \left ( - e \frac{dA_i}{dx_i} \right ) - e\frac{d\phi}{dx_i} \\[0.1cm]
&= \frac{e}{m} \left ( p_i - eA_i \right ) \left ( \frac{dA_i}{dx_i} \right ) - e\frac{d\phi}{dx_i}
\end{align}
$$

We can now substitute $$p_i = m\dot{x}_i + eA_i$$ into this expression. First, we substitute it on the left side of the equation:

$$
\begin{align}
\frac{d}{dt} \left [ m\dot{x}_i + eA_i \right ] &= \frac{e}{m} \left ( p_i - eA_i \right ) \left ( \frac{dA_i}{dx_i} \right ) - e\frac{d\phi}{dx_i} \\[0.1cm]
m\ddot{x}_i + e \frac{dA_i}{dt} &= \frac{e}{m} \left ( p_i - eA_i \right ) \left ( \frac{dA_i}{dx_i} \right ) - e\frac{d\phi}{dx_i} \\[0.1cm]
m\ddot{x}_i &= \frac{e}{m} \left ( p_i - eA_i \right ) \left ( \frac{dA_i}{dx_i} \right ) - e \frac{dA_i}{dt} - e\frac{d\phi}{dx_i} \\[0.1cm]
F_i &= \frac{e}{m} \left ( p_i - eA_i \right ) \left ( \frac{dA_i}{dx_i} \right ) - e \frac{dA_i}{dt} - e\frac{d\phi}{dx_i} \\[0.1cm]
\end{align}
$$

In the last line, we replace $$m\ddot{x}_i$$ with the force $$F_i$$. Now we can replace $$p_i$$ on the right side of the equation.

$$
\begin{align}
F_i &= \frac{e}{m} \left ( m\dot{x}_i + eA_i - eA_i \right ) \left ( \frac{dA_i}{dx_i} \right ) - e \frac{dA_i}{dt} - e\frac{d\phi}{dx_i} \\[0.1cm]
&= \frac{e}{m} \left ( m\dot{x}_i \right ) \left ( \frac{dA_i}{dx_i} \right ) - e \frac{dA_i}{dt} - e\frac{d\phi}{dx_i} \\[0.1cm]
&= e v_i \left ( \frac{dA_i}{dx_i} \right ) - e \frac{dA_i}{dt} - e\frac{d\phi}{dx_i} \\[0.1cm]
\end{align}
$$

Remember, the derivative of the vector potential with respect to time is a [gauge covariant derivative](http://en.wikipedia.org/wiki/Gauge_covariant_derivative):

$$
\begin{align}
F_i &= e v_i \left ( \frac{dA_i}{dx_i} \right ) - e \left [ \frac{\partial \vec{A}}{\partial t} + e \left ( \vec{v} \cdot \vec{\nabla} \right ) \vec{A} \right ]_i - e\frac{d\phi}{dx_i} \\[0.1cm]
&= e v_i \frac{dA_i}{dx_i} - e \frac{\partial A_i}{\partial t} -  \left [ e \left ( \vec{v} \cdot \vec{\nabla} \right ) \vec{A} \right ]_i - e\frac{d\phi}{dx_i} \\[0.1cm]
&= e \frac{d(v_i A_i)}{dx_i} - e \frac{\partial A_i}{\partial t} -  \left [ e \left ( \vec{v} \cdot \vec{\nabla} \right ) \vec{A} \right ]_i - e\frac{d\phi}{dx_i} \\[0.1cm]
&= e \frac{d \left ( \vec{v} \cdot \vec{A} \right )_i }{dx_i} -  \left [ e \left ( \vec{v} \cdot \vec{\nabla} \right ) \vec{A} \right ]_i - e \frac{\partial A_i}{\partial t} - e\frac{d\phi}{dx_i} \\[0.1cm]
&= e \left [ \vec{\nabla} \left ( \vec{v} \cdot \vec{A} \right ) - \left ( \vec{v} \cdot \vec{\nabla} \right ) \vec{A} \right ]_i + e \left [ - \frac{\partial \vec{A}}{\partial t} - \vec{\nabla} \phi \right ]_i \\[0.1cm]
\end{align}
$$

We recognize the second term in the brackets on the right hand side of the equation as the electric field:

$$
\begin{equation}
F_i = e \left [ \vec{\nabla} \left ( \vec{v} \cdot \vec{A} \right ) - \left ( \vec{v} \cdot \vec{\nabla} \right ) \vec{A} \right ]_i + e E_i
\end{equation}
$$

And we also notice that the other term in brackets can be simplified by using a property of the triple cross product and a property of the magnetic field:

$$
\begin{equation}
\vec{v} \times \left ( \vec{\nabla} \times \vec{A} \right ) = \vec{\nabla} \left ( \vec{v} \cdot \vec{A} \right ) - \left ( \vec{v} \cdot \vec{\nabla} \right ) \vec{A}
\end{equation}
$$

$$
\begin{equation}
\vec{B} = \vec{\nabla} \times \vec{A}
\end{equation}
$$

Plugging this in yields:

$$
\begin{align}
F_i &= e \left [ \vec{v} \times \left ( \vec{\nabla} \times \vec{A} \right ) \right ]_i + eE_i \\[0.1cm]
&= e \left [ \vec{v} \times \vec{B} \right ]_i + eE_i \\[0.1cm]
\end{align}
$$

Writing the final vector expression yields:

$$
\begin{equation}
\vec{F} = e \left [ \vec{E} + \vec{v} \times \vec{B} \right ]
\end{equation}
$$

As we see here, we have derived the Lorentz force using Hamilton's equations of motion.


