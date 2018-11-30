---
layout: post
comments: true
title: The Fourier Transform of the Coulomb Potential
difficulty: hard
category: [Electromagnetism, Math Methods]
tags: [Common Homework Problem]
description: I demonstrate how to take the Fourier transform of the Coulomb potential. The trick is to not use the Coulomb potential at all - instead, use the Yukawa potential.
---

### Introduction

Suppose we have an infinitely large crystal that is made up of evenly spaced nuclei, each with some charge +q.  From solid state physics, we know that the wavefunction of an electron in this periodic lattice will take the form of a [Bloch wave](http://en.wikipedia.org/wiki/Bloch_wave).  However, determining the exact expression for the wavefunction might be tricky if we only utilize the elementary techniques that we learn in introductory quantum mechanics.

In solid state physics, we often find it convenient to analyze particles in terms of their reciprocal space (also called the momentum space or "k-space"). This is different than analyzing particles in their real space (or position space).  For example, if I were to analyze an electron in real space, I would probably describe a wavefunction that is a function of position (x, y, z).  On the other hand, if I were to analyze that same wavefunction in the reciprocal space, I would express the wavefunction of the electron in terms of its momentum rather than its specific position ($$k_x$$, $$k_y$$, $$k_z$$).  The reciprocal space is related to the real space by the Fourier transform.  Thus, if we want to analyze the wavefunction of an electron in a periodic potential, it is useful to first convert the expression for potential to reciprocal space, analyze the system there, and then, if need be, convert it back to real space.

The potential energy between a single charged nucleus and an electron is the Coulomb potential (we will ignore the negative sign for now):

$$
\begin{equation}
V(r) = \frac{q^2}{r}
\end{equation}
$$

Computing the Fourier transform of the Coulomb potential is actually rather troublesome because of the $$1/r$$ term in the expression.  If we try to take the Fourier transform of the Coulomb potential directly, the integral would diverge and we would get a nonsensical answer.

### Derivation

Let's approach this problem in a different way.  Consider the Yukawa potential:

$$
\begin{equation}
V_\lambda(r) = \frac{q^2 e^{-\lambda r}}{r}
\end{equation}
$$

We can take the Fourier transform of this expression using polar coordinates (the z-axis points along the direction of $$\vec{k}$$).  Then:

$$
\begin{align}
\mathcal{F}[V_\lambda(r)] &= \int \frac{q^2 e^{-\lambda r}}{r} e^{-i\vec{k} \cdot \vec{r}} d^3\vec{r} \\[0.1cm]
&= \int_0^{2\pi} \int_0^\pi \int_0^\infty \frac{q^2 e^{-\lambda r}}{r} e^{-ikr cos\theta} r^2 sin\theta dr d\theta d\phi \\[0.1cm]
\end{align}
$$

The Yukawa potential does not depend on $$\phi$$.  Thus:

$$
\begin{equation}
\mathcal{F}[V_\lambda(r)] = 2\pi q^2 \int_0^\pi \int_0^\infty re^{-\lambda r} e^{-ikr cos\theta} sin\theta dr d\theta \\[0.1cm]
\end{equation}
$$

Let $$u = cos\theta$$ and $$du = -(sin\theta) d\theta$$.  Then the integral over $$\theta$$ becomes:

$$
\begin{align}
\mathcal{F}[V_\lambda(r)] &= -2\pi q^2 \int_1^{-1} \int_0^\infty re^{-\lambda r} e^{-ikru} dr du \\[0.1cm]
&= 2\pi q^2 \int_{-1}^{1} \int_0^\infty re^{-\lambda r} e^{-ikru} dr du \\[0.1cm]
&= 2\pi q^2 \int_0^\infty re^{-\lambda r} \left [ -\frac{1}{ikr} e^{-ikru} \right ]_{-1}^1 dr \\[0.1cm]
&= 2\pi q^2 \int_0^\infty re^{-\lambda r} \left [ -\frac{1}{ikr} e^{-ikr} + \frac{1}{ikr} e^{ikr} \right ] dr \\[0.1cm]
\end{align}
$$

Now, we can focus on the integral over $$r$$:

$$
\begin{align}
\mathcal{F}[V_\lambda(r)] &= \frac{2\pi q^2}{ik} \int_0^\infty e^{-\lambda r} \left [ -e^{-ikr} + e^{ikr} \right ] dr \\[0.1cm]
&= \frac{2\pi q^2}{ik} \int_0^\infty \left [ -e^{-(ik+\lambda)r} + e^{(ik-\lambda)r} \right ] dr \\[0.1cm]
&= \frac{2\pi q^2}{ik} \left [ \frac{e^{-(ik+\lambda)r}}{ik + \lambda} + \frac{e^{(ik-\lambda)r}}{ik - \lambda} \right ]_0^\infty \\[0.1cm]
&= \frac{2\pi q^2}{ik} \left [ \frac{e^{-(ik+\lambda)r}}{\lambda + ik} - \frac{e^{(ik-\lambda)r}}{\lambda - ik} \right ]_0^\infty \\[0.1cm]

&= \frac{2\pi q^2}{ik} \left [ \frac{(\lambda - ik)e^{-(ik+\lambda)r}}{k^2 + \lambda^2} - \frac{(\lambda + ik)e^{(ik-\lambda)r}}{k^2 + \lambda^2} \right ]_0^\infty \\[0.1cm]
&= \frac{2\pi q^2}{ik} \left [ \frac{(\lambda - ik)e^{-(ik+\lambda)r} - (\lambda + ik)e^{(ik-\lambda)r}}{k^2 + \lambda^2} \right ]_0^\infty \\[0.1cm]
&= \frac{2\pi q^2}{ik} \left [ \frac{\lambda e^{-(ik+\lambda)r} - ik e^{-(ik+\lambda)r} - \lambda e^{(ik-\lambda)r} - ik e^{(ik-\lambda)r}}{k^2 + \lambda^2} \right ]_0^\infty \\[0.1cm]
&= \frac{2\pi q^2}{ik} \left [ \frac{-\lambda + ik + \lambda + ik}{k^2 + \lambda^2} \right ] \\[0.1cm]
&= \frac{2\pi q^2}{ik} \left [ \frac{2ik}{k^2 + \lambda^2} \right ] \\[0.1cm]
&= \frac{4\pi q^2}{k^2 + \lambda^2} \\[0.1cm]
\end{align}
$$

In order to transform the Yukawa potential back into the Coulomb potential, we need to make the exponential term disappear.  If $$\lambda \rightarrow 0$$ we recover the expression for the Coulomb potential.  The Fourier transform of the Coulomb potential is then:

$$
\begin{equation}
\mathcal{F}[V(r)] = \frac{4\pi q^2}{k^2} \\[0.1cm]
\end{equation}
$$
