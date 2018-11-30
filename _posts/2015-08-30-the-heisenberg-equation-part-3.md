---
layout: post
comments: true
title: The Heisenberg Equation (Part 3)
difficulty: medium
category: [Quantum Mechanics]
tags: [Common Homework Problem, Derivation]
description: I finish my analysis of the quantum harmonic oscillator using the Heisenberg equation. This week, I focus on the famous creation and annihilation operators.
---

### A Bit of Review

[Last week](http://blog.cupcakephysics.com/quantum%20mechanics/2015/08/23/the-heisenberg-equation-part-2.html) I derived the expectation values of position and momentum of the quantum harmonic oscillator using the Heisenberg equation. First, I outlined how operators and wavefunctions evolve in time in the Schrodinger and Heisenberg pictures of quantum mechanics:

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

Then, I calculated that the time-dependent expectation values for position and momentum.

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

The expressions above state that the time-evolution of the expectation values of position and momentum depend on the initial expectation values of position and momentum as well as sinusoidal functions of time. This leads to two scenarios. First, suppose that the quantum harmonic oscillator starts off in some arbitrary state $$\psi$$. That means $$\langle \hat{x} \rangle$$ and $$\langle \hat{p} \rangle$$ are not necessarily zero. Thus, the expectation values of position and momentum oscillate as a function of time. On the other hand, suppose that the quantum harmonic oscillator is in an energy eigenstate. That means $$\langle \hat{x} \rangle$$ and $$\langle \hat{p} \rangle$$ are equal to zero. Thus, as we expect, the expectation values of position and momentum are zero at all points in time.

This week I am going to solve exactly the same problem as last week. However, instead of writing everything in terms of position and momentum, I am going to write everything in terms of the [creation and annihilation operators](https://en.wikipedia.org/wiki/Creation_and_annihilation_operators) ($$\hat{a}$$ and $$\hat{a}^\dagger$$).

Cue the sunglasses cupcake one more time...

<div style="text-align:center" markdown="1">
![Bring it On]({{ site.url }}/assets/images/2015-08-30/sunglasses.png)
</div>

### My Notation

The notation is exactly the same as last week. Any operator with an H subscript is an operator in the Heisenberg picture with time dependence. Any operator with no subscript is one in the Schrodinger picture with no time-dependence. The relationship between these operators is:

$$
\begin{equation}
\hat{Q}_H = \hat{U}^\dagger \hat{Q} \hat{U}
\end{equation}
$$

Where $$\hat{U}$$ is a unitary operator that describes the time evolution of the quantum system.

### The Creation and Annihilation Operators

When analyzing the quantum harmonic oscillator, we often try to avoid using the position and momentum operators explicitly. This is because the eigenstates of the Hamiltonian are not position or momentum eigenstates - they are energy eigenstates. Thus, it makes sense to recast position and momentum operators in terms of energy operators. Usually, the way this is done is by defining the creation and annihilation operators:

$$
\begin{equation}
\hat{a}^\dagger = \frac{1}{\sqrt{2\hbar m \omega}} \left ( m\omega \hat{x} - i\hat{p} \right )
\end{equation}
$$

$$
\begin{equation}
\hat{a} = \frac{1}{\sqrt{2\hbar m \omega}} \left ( m\omega \hat{x} + i\hat{p} \right )
\end{equation}
$$

There are a huge number of resources out on the internet that describe how these operators affect energy eigenstates (usually indexed by n). I will assume that you are familiar with the properties of $$\hat{a}$$, $$\hat{a}^\dagger$$, and $$n$$. If not, take some time to do a quick review before continuing on.

I will quickly prove that we can rewrite the Hamiltonian in terms of these two operators. Multiplying them together yields:

$$
\begin{align}
\hat{a}^\dagger \hat{a} &= \left [ \frac{1}{\sqrt{2\hbar m \omega}} \left ( m\omega \hat{x} - i\hat{p} \right ) \right ] \left [ \frac{1}{\sqrt{2\hbar m \omega}} \left ( m\omega \hat{x} + i\hat{p} \right ) \right ]\\[0.1cm]
&= \frac{1}{2\hbar m \omega} \left ( m^2\omega^2 \hat{x} \hat{x} - im\omega \hat{p} \hat{x} + im\omega \hat{x} \hat{p} + \hat{p} \hat{p} \right )\\[0.1cm]
&= \frac{1}{2\hbar m \omega} \left ( m^2\omega^2 \hat{x}^2 + im\omega \left [ \hat{x}, \hat{p} \right ] + \hat{p}^2 \right )\\[0.1cm]
&= \frac{1}{2\hbar m \omega} \left [ m^2\omega^2 \hat{x}^2 + im\omega \left ( i\hbar \right ) + \hat{p}^2 \right ]\\[0.1cm]
&= \frac{1}{2\hbar m \omega} \left [ m^2\omega^2 \hat{x}^2 - m \hbar \omega + \hat{p}^2 \right ]\\[0.1cm]
&= \frac{\hat{p}^2}{2\hbar m \omega} + \frac{1}{2\hbar} m\omega \hat{x}^2 - \frac{1}{2}
\end{align}
$$

Adding $$1/2$$ to the expression above yields:

$$
\begin{equation}
\hat{a}^\dagger \hat{a} + \frac{1}{2} = \frac{\hat{p}^2}{2\hbar m \omega} + \frac{1}{2\hbar} m\omega \hat{x}^2
\end{equation}
$$

Finally, multiplying each side by $$\hbar \omega$$ gives the Hamiltonian.

$$
\begin{equation}
\hat{H} = \hbar \omega \left ( \hat{a}^\dagger \hat{a} + \frac{1}{2} \right ) = \frac{\hat{p}^2}{2m} + \frac{1}{2} m \omega^2 \hat{x}^2
\end{equation}
$$

Thus, we can write the Hamiltonian in a position-momentum representation or an energy representation. We know from previous weeks that we can use the Heisenberg equation to recast the Hamiltonian from the Schrodinger to the Heisenberg picture. Let's see what happens when we plug the creation and annihilation operators into that equation.

$$
\begin{equation}
\frac{d\hat{a}_H}{dt} = \frac{i}{\hbar} \left [\hat{H}, \hat{a}_H \right ] + \left ( \frac{d\hat{a}}{dt} \right )_H
\end{equation}
$$

$$
\begin{equation}
\frac{d\hat{a}^\dagger_H}{dt} = \frac{i}{\hbar} \left [\hat{H}, \hat{a}^\dagger_H \right ] + \left ( \frac{d\hat{a}^\dagger}{dt} \right )_H
\end{equation}
$$

The operators $$\hat{a}$$ and $$\hat{a}^\dagger$$ are not functions of time. Thus, we can solve for $$\hat{a}$$ first:

$$
\begin{align}
\frac{d\hat{a}_H}{dt} &= \frac{i}{\hbar} \left [\hat{H}, \hat{a}_H \right ]\\[0.1cm]
&= \frac{i}{\hbar} \left [\hat{H}, \hat{U}^\dagger \hat{a} \hat{U} \right ]\\[0.1cm]
&= \frac{i}{\hbar} \hat{U}^\dagger \left [\hat{H},  \hat{a}  \right ] \hat{U}\\[0.1cm]
&= \frac{i}{\hbar} \hat{U}^\dagger \left ( -\hbar \omega \hat{a}  \right ) \hat{U}\\[0.1cm]
&= - i\omega \hat{U}^\dagger \hat{a} \hat{U}\\[0.1cm]
&= - i\omega \hat{a}_H
\end{align}
$$

$$
\begin{equation}
\frac{d\hat{a}_H}{dt} + i\omega \hat{a}_H = 0
\end{equation}
$$

$$
\begin{equation}
\hat{a}_H(t) = \hat{a}_H(0) e^{ -i\omega t} = \hat{a} e^{ -i\omega t}
\end{equation}
$$

And we can solve for $$\hat{a}^\dagger$$ second:

$$
\begin{align}
\frac{d\hat{a}^\dagger_H}{dt} &= \frac{i}{\hbar} \left [\hat{H}, \hat{a}^\dagger_H \right ]\\[0.1cm]
&= \frac{i}{\hbar} \left [\hat{H}, \hat{U}^\dagger \hat{a}^\dagger \hat{U} \right ]\\[0.1cm]
&= \frac{i}{\hbar} \hat{U}^\dagger \left [\hat{H},  \hat{a}^\dagger  \right ] \hat{U}\\[0.1cm]
&= \frac{i}{\hbar} \hat{U}^\dagger \left ( \hbar \omega \hat{a}^\dagger  \right ) \hat{U}\\[0.1cm]
&= i\omega \hat{U}^\dagger \hat{a}^\dagger \hat{U}\\[0.1cm]
&= i\omega \hat{a}^\dagger_H\\[0.1cm]
\end{align}
$$

$$
\begin{equation}
\frac{d\hat{a}^\dagger_H}{dt} - i\omega \hat{a}^\dagger_H = 0
\end{equation}
$$

$$
\begin{equation}
\hat{a}^\dagger_H(t) = \hat{a}^\dagger_H(0) e^{ i\omega t} = \hat{a}^\dagger e^{ i\omega t}
\end{equation}
$$

We have recovered nice expressions for $$\hat{a}$$ and $$\hat{a}^\dagger$$. Let's put them to use.

### Coming Full Circle

Now that we have the creation and annihilation operators in the Heisenberg picture, let's once again find the position and momentum expectation values of the quantum harmonic oscillator, in a slightly different way.

<div style="text-align:center" markdown="1">
![Word]({{ site.url }}/assets/images/2015-08-30/word.png)
</div>

Suppose I have some arbitrary quantum state that is a linear superposition of energy eigenstates (each $$b_n$$ is a constant):

$$
\begin{equation}
| \psi \rangle = b_0 \psi_0 + b_1 \psi_1 + b_2 \psi_2 + ... = \sum_{n=0}^N b_n \psi_n = \sum_{n=0}^N b_n | n \rangle
\end{equation}
$$

$$
\begin{equation}
\langle \psi | = b_0^* \psi^*_0 + b_1^* \psi_1^* + b_2^* \psi_2^* + ... = \sum_{n=0}^N b_n^* \psi_n^* = \sum_{n=0}^N b_n^* \langle n |
\end{equation}
$$

I want to calculate the expectation values of position and momentum as a function of time; however, this time I will put everything in terms of $$\hat{a}$$ and $$\hat{a}^\dagger$$. First, I will rewrite $$\hat{x}$$ and $$\hat{p}$$ in terms of $$\hat{a}$$ and $$\hat{a}^\dagger$$. Taking the definition of the creation and annihilation operators from above and rearranging terms gives:

$$
\begin{equation}
\hat{x}_H = \sqrt{\frac{\hbar}{2m\omega}} \left ( \hat{a}^\dagger_H + \hat{a}_H \right )
\end{equation}
$$

$$
\begin{equation}
\hat{p}_H = i\sqrt{\frac{m \hbar\omega}{2}} \left ( \hat{a}^\dagger_H - \hat{a}_H \right )
\end{equation}
$$

The expectation value of position is:

$$
\begin{align}
\langle \hat{x}_H \rangle &= \langle \psi | \hat{x}_H | \psi \rangle\\[0.1cm]
&= \sum_{n=0}^N \sum_{m=0}^M \langle n | b_n^* \hat{x}_H b_m | m \rangle\\[0.1cm]
&= \sqrt{\frac{\hbar}{2m\omega}} \sum_{n=0}^N \sum_{m=0}^M b_n^* b_m \langle n |  \left ( \hat{a}^\dagger_H + \hat{a}_H \right ) | m \rangle\\[0.1cm]
&= \sqrt{\frac{\hbar}{2m\omega}} \sum_{n=0}^N \sum_{m=0}^M b_n^* b_m \langle n |  \left ( e^{i\omega t} \hat{a}^\dagger |m\rangle + e^{-i\omega t} \hat{a} |m\rangle \right )\\[0.1cm]
&= \sqrt{\frac{\hbar}{2m\omega}} \sum_{n=0}^N \sum_{m=0}^M b_n^* b_m \langle n |  \left ( e^{i\omega t} \sqrt{m+1} |m+1\rangle + e^{-i\omega t} \sqrt{m} |m-1\rangle \right )\\[0.1cm]
&= \sqrt{\frac{\hbar}{2m\omega}} \sum_{n=0}^N \sum_{m=0}^M b_n^* b_m \left ( e^{i\omega t} \sqrt{m+1} \langle n |m+1\rangle + e^{-i\omega t} \sqrt{m} \langle n |m-1\rangle \right )\\[0.1cm]
&= \sqrt{\frac{\hbar}{2m\omega}} \sum_{n=0}^N \sum_{m=0}^M b_n^* b_m \left ( e^{i\omega t} \sqrt{m+1} \delta_{n,m+1} + e^{-i\omega t} \sqrt{m} \delta_{n,m-1} \right )\\[0.1cm]
&= \sqrt{\frac{\hbar}{2m\omega}} \sum_{m=0}^M \left [ b_{m+1}^* b_m e^{i\omega t} \sqrt{m+1} + b_{m-1}^* b_m e^{-i\omega t} \sqrt{m} \right ]
\end{align}
$$

And the expectation value of momentum is:

$$
\begin{align}
\langle \hat{p}_H \rangle &= \langle \psi | \hat{p}_H | \psi \rangle\\[0.1cm]
&= \sum_{n=0}^N \sum_{m=0}^M \langle n | b_n^* \hat{p}_H b_m | m \rangle\\[0.1cm]
&= i\sqrt{\frac{m\hbar\omega}{2}} \sum_{n=0}^N \sum_{m=0}^M b_n^* b_m \langle n |  \left ( \hat{a}^\dagger_H - \hat{a}_H \right ) | m \rangle\\[0.1cm]
&= i\sqrt{\frac{m\hbar\omega}{2}} \sum_{n=0}^N \sum_{m=0}^M b_n^* b_m \langle n |  \left ( e^{i\omega t} \hat{a}^\dagger |m\rangle - e^{-i\omega t} \hat{a} |m\rangle \right )\\[0.1cm]
&= i\sqrt{\frac{m\hbar\omega}{2}} \sum_{n=0}^N \sum_{m=0}^M b_n^* b_m \langle n |  \left ( e^{i\omega t} \sqrt{m+1} |m+1\rangle - e^{-i\omega t} \sqrt{m} |m-1\rangle \right )\\[0.1cm]
&= i\sqrt{\frac{m\hbar\omega}{2}} \sum_{n=0}^N \sum_{m=0}^M b_n^* b_m \left ( e^{i\omega t} \sqrt{m+1} \langle n |m+1\rangle - e^{-i\omega t} \sqrt{m} \langle n |m-1\rangle \right )\\[0.1cm]
&= i\sqrt{\frac{m\hbar\omega}{2}} \sum_{n=0}^N \sum_{m=0}^M b_n^* b_m \left ( e^{i\omega t} \sqrt{m+1} \delta_{n,m+1} - e^{-i\omega t} \sqrt{m} \delta_{n,m-1} \right )\\[0.1cm]
&= i\sqrt{\frac{m\hbar\omega}{2}} \sum_{m=0}^M \left [ b_{m+1}^* b_m e^{i\omega t} \sqrt{m+1} - b_{m-1}^* b_m e^{-i\omega t} \sqrt{m} \right ]
\end{align}
$$

And there we have it! Victory!

<div style="text-align:center" markdown="1">
![What the Heck?]({{ site.url }}/assets/images/2015-08-30/question.png)
</div>

Ok, at this point, you might be thinking what the heck is going on. How are the answers above anything like what we derived last week? They look very different, but they are actually one and the same. Let's look at a quick example. Suppose I start with the superposition state:

$$
\begin{equation}
| \psi \rangle = \frac{1}{\sqrt{2}} \left ( |0\rangle + |1\rangle \right )
\end{equation}
$$

Let's calculate the expectation values of position and momentum using the weird formulae above:

$$
\begin{align}
\langle \hat{x}_H \rangle &= \sqrt{\frac{\hbar}{2m\omega}} \sum_{m=0}^1 \left [ b_{m+1}^* b_m e^{i\omega t} \sqrt{m+1} + b_{m-1}^* b_m e^{-i\omega t} \sqrt{m} \right ]\\[0.1cm]
&= \sqrt{\frac{\hbar}{2m\omega}} \left \{ \left [ b_{1}^* b_0 e^{i\omega t} \sqrt{1} + b_{-1}^* b_0 e^{-i\omega t} \sqrt{0} \right ] + \left [ b_{2}^* b_1 e^{i\omega t} \sqrt{2} + b_{0}^* b_1 e^{-i\omega t} \sqrt{1} \right ] \right \}\\[0.1cm]
&= \sqrt{\frac{\hbar}{2m\omega}} \left [ b_{1}^* b_0 e^{i\omega t} + b_{0}^* b_1 e^{-i\omega t} \right ]\\[0.1cm]
&= \sqrt{\frac{\hbar}{2m\omega}} \left [ \left ( \frac{1}{\sqrt{2}} \right )^2 e^{i\omega t} + \left ( \frac{1}{\sqrt{2}} \right )^2 e^{-i\omega t} \right ]\\[0.1cm]
&= \sqrt{\frac{\hbar}{2m\omega}} \frac{1}{2} \left [ e^{i\omega t} + e^{-i\omega t} \right ]\\[0.1cm]
&= \sqrt{\frac{\hbar}{2m\omega}} cos(\omega t)\\[0.1cm]
\end{align}
$$

$$
\begin{align}
\langle \hat{p}_H \rangle &= i\sqrt{\frac{m\hbar\omega}{2}} \sum_{m=0}^1 \left [ b_{m+1}^* b_m e^{i\omega t} \sqrt{m+1} - b_{m-1}^* b_m e^{-i\omega t} \sqrt{m} \right ]\\[0.1cm]
&= i\sqrt{\frac{m\hbar\omega}{2}} \left \{ \left [ b_{1}^* b_0 e^{i\omega t} \sqrt{1} - b_{-1}^* b_0 e^{-i\omega t} \sqrt{0} \right ] + \left [ b_{2}^* b_1 e^{i\omega t} \sqrt{2} - b_{0}^* b_1 e^{-i\omega t} \sqrt{1} \right ] \right \}\\[0.1cm]
&= i\sqrt{\frac{m\hbar\omega}{2}} \left [ b_{1}^* b_0 e^{i\omega t} - b_{0}^* b_1 e^{-i\omega t} \right ]\\[0.1cm]
&= i\sqrt{\frac{m\hbar\omega}{2}} \left [ \left ( \frac{1}{\sqrt{2}} \right )^2 e^{i\omega t} - \left ( \frac{1}{\sqrt{2}} \right )^2 e^{-i\omega t} \right ]\\[0.1cm]
&= \sqrt{\frac{m\hbar\omega}{2}} \frac{i}{2} \left [ e^{i\omega t} - e^{-i\omega t} \right ]\\[0.1cm]
&= - \sqrt{\frac{m\hbar\omega}{2}} sin(\omega t)
\end{align}
$$

If you take the final equations from last week and use the initial conditions $$\langle \hat{x} \rangle = \sqrt{\hbar/2m\omega}$$ and $$\langle \hat{p} \rangle = 0$$, you get the same answer as above! Thus, the superposition state above is equivalent to a random state with an initial expected momentum of zero and an initial expected position of $$\sqrt{\hbar/2m\omega}$$.

### Final Thoughts

Wow, this has been an intense arc. The big take-home message is that there is more than one way to visualize quantum mechanics. The Heisenberg picture of quantum mechanics gives the same answers as the Schrodinger picture - it is a matter of preference as to which one you would use for a given problem.

See you next week!
