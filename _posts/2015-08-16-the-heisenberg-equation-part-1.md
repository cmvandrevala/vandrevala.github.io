---
layout: post
comments: true
title: The Heisenberg Equation (Part 1)
difficulty: medium
category: [Quantum Mechanics]
tags: [Common Homework Problem, Derivation]
description: First I derive the expression for the time evolution of an expectation value in quantum mechanics. Then, I derive the Heisenberg equation and compare it with the time evolution equation.
---

### Introduction

Most students of quantum mechanics are familiar with the [Schrodinger equation](http://scienceworld.wolfram.com/physics/SchroedingerEquation.html):

$$
\begin{equation}
i\hbar \frac{d \psi (t)}{dt} = H \psi (t)
\end{equation}
$$

It is the starting point for a huge number of derivations and solutions in the quantum world. Arguably, it is the most important equation in non-relativistic quantum mechanics. However, the Schrodinger equation has an often neglected twin brother - the Heisenberg equation. If we simply shift our focus from [wavefunctions](https://en.wikipedia.org/wiki/Wave_function) to [operators](https://en.wikipedia.org/wiki/Operator_(physics)), we find that the quantum world is much deeper than we once thought.

Let's start off with the simple example of the time evolution of [expectation values](https://en.wikipedia.org/wiki/Expectation_value_(quantum_mechanics)). We will use that as a stepping stone to derive the Heisenberg equation.

<div style="text-align:center" markdown="1">
![Let's Go!]({{ site.url }}/assets/images/2015-08-16/lets_go.png)
</div>

### The Time Evolution of an Expectation Value

Suppose I have some operator $$Q$$ with an expectation value given by:

$$
\begin{equation}
\left \langle Q \right \rangle = \left \langle \psi (t) \right | Q \left | \psi (t) \right \rangle \equiv \left \langle \psi \right | Q \left | \psi \right \rangle
\end{equation}
$$

I want to calculate how $$\left \langle Q \right \rangle$$ evolves as a function of time. To start off I can take a time derivative of the expression above and expand it using the [product rule](https://en.wikipedia.org/wiki/Product_rule).

$$
\begin{align}
\frac{d}{dt} \left \langle Q \right \rangle &= \frac{d}{dt} \left [ \left \langle \psi \right | Q \left | \psi \right \rangle \right ]\\[0.1cm]
&= \left \langle \frac{d \psi}{dt} \bigg | \hspace{0.5mm} Q \hspace{0.5mm} \bigg | \psi \right \rangle + \left \langle \psi \bigg | \frac{dQ}{dt} \bigg | \psi \right \rangle + \left \langle \psi \bigg | \hspace{0.5mm} Q \hspace{0.5mm} \bigg | \frac{d \psi}{dt} \right \rangle
\end{align}
$$

The Schrodinger equation tells us how the time derivative of the wavefunction is related to the Hamiltonian of the system. Thus, we can substitute the expression for the Hamiltonian in for the time derivatives. Remember, we do have to take into account the fact that the bra and ket terms differ by a minus sign:

$$
\begin{equation}
 \left | \frac{d\psi}{dt} \right \rangle =  \left | \frac{1}{i\hbar} H \psi \right \rangle
\end{equation}
$$

$$
\begin{equation}
\left \langle \frac{d\psi}{dt} \right | = \left \langle -\frac{1}{i\hbar} H \psi \right |
\end{equation}
$$

Then:

$$
\begin{align}
\frac{d}{dt} \left \langle Q \right \rangle &= \left \langle \frac{d \psi}{dt} \bigg | \hspace{0.5mm} Q \hspace{0.5mm} \bigg | \psi \right \rangle + \left \langle \psi \bigg | \frac{dQ}{dt} \bigg | \psi \right \rangle + \left \langle \psi \bigg | \hspace{0.5mm} Q \hspace{0.5mm} \bigg | \frac{d \psi}{dt} \right \rangle\\[0.1cm]
&= \left \langle \left ( -\frac{1}{i\hbar}H\psi \right ) \bigg | \hspace{0.5mm} Q \hspace{0.5mm} \bigg | \psi \right \rangle + \left \langle \psi \bigg | \frac{dQ}{dt} \bigg | \psi \right \rangle + \left \langle \psi \bigg | \hspace{0.5mm} Q \hspace{0.5mm} \bigg | \left ( \frac{1}{i\hbar}H\psi \right ) \right \rangle\\[0.1cm]
&= \left \langle \left ( -\frac{1}{i\hbar}H\psi \right ) \bigg | \hspace{0.5mm} Q \hspace{0.5mm} \bigg | \psi \right \rangle + \left \langle \psi \bigg | \hspace{0.5mm} Q \hspace{0.5mm} \bigg | \left ( \frac{1}{i\hbar}H\psi \right ) \right \rangle + \left \langle \psi \bigg | \frac{dQ}{dt} \bigg | \psi \right \rangle
\end{align}
$$

Factoring out the $$-(i\hbar)^{-1}$$ term yields:

$$
\begin{align}
\frac{d}{dt} \left \langle Q \right \rangle &= -\frac{1}{i\hbar} \left [ \left \langle H \psi \right | Q \left | \psi \right \rangle - \left \langle \psi \right | Q \left | H \psi \right \rangle \right ] + \left \langle \psi \bigg | \frac{dQ}{dt} \bigg | \psi \right \rangle\\[0.1cm]
&= -\frac{1}{i\hbar} \left [ \left \langle \psi \right | HQ \left | \psi \right \rangle - \left \langle \psi \right | QH \left | \psi \right \rangle \right ] + \left \langle \psi \bigg | \frac{dQ}{dt} \bigg | \psi \right \rangle\\[0.1cm]
&= -\frac{1}{i\hbar} \left \langle \psi \right | HQ - QH \left | \psi \right \rangle + \left \langle \psi \bigg | \frac{dQ}{dt} \bigg | \psi \right \rangle\\[0.1cm]
&= -\frac{1}{i\hbar} \left \langle \psi \right | [H,Q] \left | \psi \right \rangle + \left \langle \psi \bigg | \frac{dQ}{dt} \bigg | \psi \right \rangle\\[0.1cm]
\end{align}
$$

Now we can write out the final expression for the time evolution of the expectation value:

$$
\begin{equation}
\frac{d\left \langle Q \right \rangle}{dt} = \frac{i}{\hbar} \left \langle [H,Q] \right \rangle + \left \langle \frac{dQ}{dt} \right \rangle
\end{equation}
$$

This is a neat result! It gives a simple expression for the time evolution of the expectation value of $$Q$$.

### The Heisenberg Equation

Let's take a step back and approach quantum mechanics in a slightly different way. In the last section we assumed that the operators were constant in time and the wavefunction had some time dependence. Now, we will assume that the wavefunction is constant in time and move the time dependence to the operators.

The wavefunction of a particle at some final time $$t$$ is equal to the wavefunction of the particle at some initial time $$t_o$$ multiplied by a [unitary operator](https://en.wikipedia.org/wiki/Unitary_operator).

$$
\begin{equation}
\psi (t) = U(t,t_o) \psi (t_o)
\end{equation}
$$

In the expression above, $$\psi(t_o)$$ is a constant wavefunction and the unitary operator $$U$$ carries all of the time dependence of the system. We can substitute the expression for $$\psi(t)$$ into the Schrodinger equation and solve for $$U$$:

$$
\begin{equation}
i\hbar \frac{d\psi(t)}{dt} = H \psi(t)
\end{equation}
$$

$$
\begin{equation}
i\hbar \frac{d}{dt} \left [ U(t,t_o) \psi (t_o) \right ] = H U(t,t_o) \psi (t_o)
\end{equation}
$$

The unitary operator $$U$$ is a function of time $$t$$. However, the wavefunction $$\psi(t_o)$$ is not a function of $$t$$. Thus, we can pull $$\psi(t_o)$$ out of the time derivative.

$$
\begin{equation}
i\hbar \frac{dU(t,t_o)}{dt} \psi (t_o) = H U(t,t_o) \psi (t_o)
\end{equation}
$$

This expression needs to be true for any initial condition $$\psi(t_o)$$. Thus, we will cancel $$\psi(t_o)$$ on each side of the expression.

$$
\begin{equation}
i\hbar \frac{dU(t,t_o)}{dt} = H U(t,t_o)
\end{equation}
$$

Just to simplify our notation, we will let $$U(t,t_o) \equiv U$$.

$$
\begin{equation}
i\hbar \frac{dU}{dt} = HU
\end{equation}
$$

That is pretty neat. The expression for $$U$$ above is almost identical to the expression for $$\psi(t)$$ in the previous section. Let's solve for the expectation value of some operator $$Q$$ like we did in the previous section. Starting with the definition of an expectation value, we get:

$$
\begin{align}
\left \langle Q \right \rangle &= \left \langle \psi (t) \right | Q \left | \psi (t) \right \rangle\\[0.1cm]
&= \left \langle \psi (t_o) U^\dagger \right | Q \left | U \psi (t_o) \right \rangle\\[0.1cm]
&= \left \langle \psi (t_o) \right | U^\dagger Q U \left | \psi (t_o) \right \rangle\\[0.1cm]
\end{align}
$$

We can rewrite the time-dependent operator in terms of the time-independent operator and a unitary operator. To keep our notation clear, I will call $$Q_H$$ the time-dependent operator and $$Q_S \equiv Q$$ the time-independent operator. Those of you who have taken an advanced course in quantum mechanics might recognize these as the Heisenberg and Schrodinger pictures of the operator.

$$
\begin{equation}
Q_H = U^\dagger Q_S U \equiv U^\dagger Q U
\end{equation}
$$

We can now solve for the time evolution of the Heisenberg operator.

$$
\begin{align}
\frac{dQ_H}{dt} &= \frac{d}{dt} \left [ U^\dagger Q U \right ]\\[0.1cm]
&= \frac{d U^\dagger}{dt} QU + U^\dagger \frac{dQ}{dt} U + U^\dagger Q \frac{d U}{dt}
\end{align}
$$

Similar to section one, we can expand $$dU/dt$$ using the Hamiltonian.

$$
\begin{equation}
\frac{dU}{dt} = \frac{1}{i\hbar} HU
\end{equation}
$$

$$
\begin{equation}
\frac{dU^\dagger}{dt} = -\frac{1}{i\hbar} U^\dagger H
\end{equation}
$$

Then:

$$
\begin{align}
\frac{dQ_H}{dt} &= \left ( -\frac{1}{i\hbar} U^\dagger H \right ) QU + U^\dagger \frac{dQ}{dt} U + U^\dagger Q \left ( \frac{1}{i\hbar} HU \right )\\[0.1cm]
&= -\frac{1}{i\hbar} U^\dagger HQU + \frac{1}{i\hbar} U^\dagger Q HU + U^\dagger \frac{dQ}{dt} U
\end{align}
$$

Recall that $$U^\dagger U = U U^\dagger = 1$$ for a unitary operator. Then:

$$
\begin{align}
\frac{dQ_H}{dt} &= -\frac{1}{i\hbar} U^\dagger HQU + \frac{1}{i\hbar} U^\dagger Q HU + U^\dagger \frac{dQ}{dt} U\\[0.1cm]
&= -\frac{1}{i\hbar} U^\dagger HU U^\dagger QU + \frac{1}{i\hbar} U^\dagger QU U^\dagger HU + U^\dagger \frac{dQ}{dt} U\\[0.1cm]
&= -\frac{1}{i\hbar} H Q_H + \frac{1}{i\hbar} Q_H H + U^\dagger \frac{dQ}{dt} U
\end{align}
$$

Factoring out the $$-(i\hbar)^{-1}$$ term yields:

$$
\begin{align}
\frac{dQ_H}{dt} &= -\frac{1}{i\hbar} H Q_H + \frac{1}{i\hbar} Q_H H + U^\dagger \frac{dQ}{dt} U\\[0.1cm]
&= -\frac{1}{i\hbar} \left [ H Q_H - Q_H H \right ] + U^\dagger \frac{dQ}{dt} U
\end{align}
$$

$$
\begin{equation}
\frac{dQ_H}{dt} = \frac{i}{\hbar} \left [H, Q_H \right ] + \left ( \frac{dQ}{dt} \right )_H
\end{equation}
$$

### Aren't Those Answers Exactly the Same?

<div style="text-align:center" markdown="1">
![Question]({{ site.url }}/assets/images/2015-08-16/question.png)
</div>

No, they aren't  :)

The final expression in the first section gives the time derivative of the expectation value of an operator. The final expression in the second section gives the time derivative of an operator in the Heisenberg picture (i.e. the model of quantum mechanics where the wavefunctions are constant and the operators evolve in time). They describe two different things under two different models of quantum mechanics. However, the final expressions are almost identical in form, alluding to the fact that these two models of quantum mechanics are intimately related.

What we should take away from this is that the Schrodinger equation is not the end-all equation of quantum mechanics. Sometimes, the Heisenberg equation can yield very useful insights into the properties of a system. Additionally, any calculations done using the Schrodinger equation are intimately related to the calculations done using the Heisenberg equation due to the similarity of the expressions calculated above.

Next week, we will solve some specific examples using the Heisenberg equation and see how the solutions relate to those of the Schrodinger equation.
