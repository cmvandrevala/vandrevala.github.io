---
layout: post
comments: true
title: Green's Function for the Three-Dimensional, Radial Laplacian
difficulty: hard
category: [Math Methods]
tags: [Derivation]
description: I derive an expression for the Green's function of the three-dimensional, radial Laplacian. I then spend some time talking about the relevant domain of the solution and how to properly verify the fundamental solution.
---

### Introduction

The Laplace operator or Laplacian ($$\nabla^2$$) appears in a variety of differential equations that describe physical phenomena; topics include gravitational potential, diffusion, electromagnetic fields, quantum mechanics, and many others. All students of physics come across Poisson's equation since it is one of the simplest, inhomogeneous differential equations involving the Laplacian.

$$
\begin{equation}
\nabla^2 \psi = f
\end{equation}
$$

In the expression above, $$\nabla^2$$ is the Laplacian, $$f$$ is a known function, and $$\psi$$ is a function that we must solve for. Techniques like [separation of variables](http://mathworld.wolfram.com/SeparationofVariables.html) are commonly used to solve for $$\phi$$ when $$f$$ is separable, but solving for $$\psi$$ can become very complicated in more sophisticated cases.

Green's functions are a staple in upper-level physics because they can be used to simplify or solve more complicated expressions (like when $$f$$ is not separable). In this post, we will derive the Green's function for the three-dimensional Laplacian in spherical coordinates.

### Derivation of the Green's Function

Consider Poisson's equation in spherical coordinates.

$$
\begin{equation}
\nabla^2 \psi = f
\end{equation}
$$

We can expand the Laplacian in terms of the $$(r,\theta,\phi)$$ coordinate system. I looked up the full Laplacian on [Wolfram Mathworld](http://mathworld.wolfram.com/Laplacian.html).

$$
\begin{equation}
\left [ \frac{1}{r^2} \frac{\partial}{\partial r} \left ( r^2 \frac{\partial \psi}{\partial r} \right ) + \frac{1}{r^2 sin^2 \phi} \frac{\partial^2 \psi}{\partial \theta^2} + \frac{1}{r^2 sin\phi} \frac{\partial}{\partial \phi} \left ( sin\phi \frac{\partial \psi}{\partial \phi} \right ) \right ] = f
\end{equation}
$$

Since we are only interested in the radial Green's function, we can immediately simplify the expression above to include only radial terms. Anything with a $$\theta$$ or $$\phi$$ gets canceled:

$$
\begin{equation}
\frac{1}{r^2} \frac{\partial}{\partial r} \left ( r^2 \frac{\partial \psi}{\partial r} \right ) = f
\end{equation}
$$

We want to find the Green's function for the Laplace operator. In other words, we are looking for a function $$G$$ that satisfies:

$$
\begin{equation}
\nabla^2 G = 4\pi \delta(r)
\end{equation}
$$

Using the expression for the Laplacian from above, we get:

$$
\begin{equation}
\frac{1}{r^2} \frac{d}{dr} \left ( r^2 \frac{dG}{dr} \right ) = 4\pi \delta(r)
\end{equation}
$$

Since the right-hand side of the equation contains a Dirac delta function, it seems natural to integrate both sides with respect to $$r$$. The expression becomes:

$$
\begin{equation}
\int \frac{1}{r^2} \frac{d}{dr} \left ( r^2 \frac{dG}{dr} \right ) dr = \int 4\pi \delta(r) dr
\end{equation}
$$

$$
\begin{equation}
\int \frac{1}{r^2} \frac{d}{dr} \left ( r^2 \frac{dG}{dr} \right ) dr = 4\pi
\end{equation}
$$

The derivatives within the integral suggest that this expression might be simplified by integration by parts. Let's give it a shot:

$$
\begin{equation}
u = \frac{1}{r^2} \Rightarrow du = -\frac{2}{r^3} dr
\end{equation}
$$

$$
\begin{equation}
dv = \frac{d}{dr} \left [ r^2 \frac{dG}{dr} \right ] dr \Rightarrow v = r^2 \frac{dG}{dr}
\end{equation}
$$

Thus, the expression becomes:

$$
\begin{equation}
\left ( \frac{1}{r^2} \right ) \left ( r^2 \frac{dG}{dr} \right ) - \int \left ( r^2 \frac{dG}{dr} \right ) \left ( -\frac{2}{r^3} dr \right ) = 4\pi
\end{equation}
$$

$$
\begin{equation}
\frac{dG}{dr} + 2 \int \frac{1}{r} \frac{dG}{dr} dr = 4\pi
\end{equation}
$$

This integral looks a little simpler, but we can do better! We can use integration by parts a second time to simplify it even further.

$$
\begin{equation}
u = \frac{1}{r} \Rightarrow du = -\frac{1}{r^2} dr
\end{equation}
$$

$$
\begin{equation}
dv = \frac{dG}{dr} dr \Rightarrow v = G
\end{equation}
$$

We expand the expression once again.

$$
\begin{equation}
\frac{dG}{dr} + 2 \left [ \left (\frac{1}{r} \right ) \left ( G \right ) - \int G \left ( -\frac{1}{r^2} dr\right ) \right ] = 4\pi
\end{equation}
$$

$$
\begin{equation}
\frac{dG}{dr} + 2 \left [ \frac{G}{r} + \int \frac{G}{r^2} dr \right ] = 4\pi
\end{equation}
$$

$$
\begin{equation}
\frac{dG}{dr} + \frac{2G}{r} + 2 \int \frac{G}{r^2} dr = 4\pi
\end{equation}
$$

Dealing with derivatives is usually easier than dealing with integral equations. Thus, we should take the derivative with respect to $$r$$ on each side in order to eliminate the integral. Note that $$G$$ is a function of $$r$$, so we have to use the quotient rule on the $$2G/r$$ term. This causes a couple of terms to cancel out nicely.

$$
\begin{equation}
\frac{d^2 G}{dr^2} + \left ( \frac{2}{r} \frac{dG}{dr} - \frac{2G}{r^2} \right ) + \frac{2G}{r^2} = 0
\end{equation}
$$

$$
\begin{equation}
\frac{d^2 G}{dr^2} + \frac{2}{r} \frac{dG}{dr} = 0
\end{equation}
$$

Hooray! We turned Poisson's equation for $$G$$ into a slightly less difficult to solve differential equation for $$G$$!

### Solving the Second Differential Equation

You can solve this new differential equation in a number of ways. I am going to use a tried and true method of analysis - guess and check! I am going to guess a solution of $$G = A/r$$ since that seems to fit pretty well. The variable A is some constant.

$$
\begin{align}
\frac{d^2 G}{dr^2} + \frac{2}{r}\frac{dG}{dr} &=\\
\frac{d^2}{dr^2} \left [ \frac{A}{r} \right ] + \frac{2}{r}\frac{d}{dr} \left [ \frac{A}{r} \right ] &=\\
\frac{2A}{r^3} + \frac{2}{r} \left ( -\frac{A}{r^2} \right ) &=\\
\frac{2A}{r^3} - \frac{2A}{r^3} &= 0
\end{align}
$$

Thus, we see that $$G = A/r$$ is the solution for our differential equation above. Or is it...?

Update (November 12, 2016): Technically, the solution of this differential equation is $$G = A/r + B$$ where both $$A$$ and $$B$$ are constants. However, we usually set $$B$$ equal to zero in order to obtain the so-called fundamental solution. The fundamental solution ignores scaling by a constant and instead looks at the properties of how $$G$$ changes with $$r$$.

### Checking the Solution

We have a bit of a problem. Suppose I plug $$G = A/r$$ back into the Laplacian. Let's see what happens:

$$
\begin{align}
\nabla^2 G &= \frac{1}{r^2} \frac{d}{dr} \left [ r^2 \frac{d}{dr} \left ( \frac{A}{r} \right ) \right ]\\
&= \frac{1}{r^2} \frac{d}{dr} \left [ r^2 \left ( -\frac{A}{r^2} \right ) \right ]\\
&= \frac{1}{r^2} \frac{d}{dr} \left [ -A \right ]\\
&= 0
\end{align}
$$

Technically speaking, that is not our expected output. We were expecting a Dirac delta function and instead got zero. So what gives?

Remember, we divided by $$r$$ throughout the derivation, so the domain of the solution cannot include the origin $$r = 0$$. We can, however, analyze the solution in the limiting case. Suppose we define a function $$\Phi_\epsilon$$ where:

$$
\begin{equation}
\Phi_\epsilon = \frac{A}{r + \epsilon}
\end{equation}
$$

As $$\epsilon$$ approaches zero, $$\Phi_\epsilon$$ approaches the Green's function $$G$$. Let's plug the expression $$\Phi_\epsilon$$ into the Laplacian and turn the crank.

$$
\begin{align}
\nabla^2 \Phi_\epsilon &= \frac{1}{r^2} \frac{d}{dr} \left [ r^2 \frac{d}{dr} \left ( \frac{A}{r + \epsilon} \right ) \right ]\\
&= \frac{1}{r^2} \frac{d}{dr} \left [ r^2 \left ( -\frac{A}{(r+\epsilon)^2} \right ) \right ]\\
&= \frac{1}{r^2} \frac{d}{dr} \left [ -\frac{A r^2}{(r+\epsilon)^2} \right ]\\
&= \frac{1}{r^2} \left [ -\frac{2A\epsilon r}{(r+\epsilon)^3} \right ]\\
&= -\frac{2A\epsilon}{r(r+\epsilon)^3}
\end{align}
$$

Ok, we are getting some expression with $$r$$'s and $$\epsilon$$'s. What does it mean?

Remember, I claimed that the Laplacian of $$G$$ (or more correctly, the Laplacian of the limiting case of $$\Phi_\epsilon$$), will yield $$4 \pi \delta(r)$$. If that is true, I should be able to integrate $$\nabla^2 \Phi_\epsilon$$ over all space and get $$4\pi$$. Let's try doing just that:

$$
\begin{align}
\int \nabla^2 \Phi_\epsilon dV &= - \int_0^R \int_0^{2\pi} \int_0^\pi \frac{2A\epsilon}{r(r+\epsilon)^3} r^2 sin\theta dr d\theta d\phi\\
&= - 4\pi \int_0^R \frac{2A\epsilon r}{(r+\epsilon)^3} dr\\
&= - 4\pi A \left [ \frac{r(2\epsilon + r)}{(r+\epsilon)^2} \right ]_0^R\\
&= - 4\pi A \left [ \frac{R(2\epsilon + R)}{(R + \epsilon)^2} \right ]\\
&= - 4\pi A \left [ \frac{R^2 + 2\epsilon R}{R^2 + 2\epsilon R + \epsilon^2} \right ]\\
\end{align}
$$

If we are going to integrate over all space, we need to take the limit of this expression as $$R \rightarrow \infty$$. This is a job for L'Hopital's rule!

$$
\begin{align}
\lim_{R \rightarrow \infty} \int \nabla^2 \Phi_\epsilon dV &= \lim_{R \rightarrow \infty} - 4\pi A \left [ \frac{R^2 + 2\epsilon R}{R^2 + 2\epsilon R + \epsilon^2} \right ]\\
&= \lim_{R \rightarrow \infty} - 4\pi A \left [ \frac{2R + 2\epsilon}{2R + 2\epsilon} \right ] = - 4\pi A
\end{align}
$$

It seems that when $$A = -1$$, the Laplacian of $$\Phi_\epsilon$$ satisfies our conditions. Let's define one last function $$f_\epsilon(r)$$ to simplify the expression. I promise we are in the home stretch!

$$
\begin{equation}
f_\epsilon (r) = \frac{1}{4 \pi A} \nabla^2 \Phi_\epsilon (r) = -\frac{1}{4\pi} \nabla^2 \Phi_\epsilon (r) = \frac{\epsilon}{2\pi r (r+\epsilon)^3}
\end{equation}
$$

We should take a good, long look at this equation in the limit of $$\epsilon \rightarrow 0$$. If $$r$$ is non-zero, the limit is very simple:

$$
\begin{equation}
\lim_{\epsilon \rightarrow 0} f_\epsilon (r) = \lim_{\epsilon \rightarrow 0} \frac{\epsilon}{2\pi r (r+\epsilon)^3} = \frac{0}{2\pi r (r)^3} = 0
\end{equation}
$$

If $$r$$ is equal to zero, we need to use L'Hopital's rule to simplify the expression.

$$
\begin{equation}
\lim_{\epsilon \rightarrow 0} f_\epsilon (r) = \lim_{\epsilon \rightarrow 0} \frac{\epsilon}{2\pi r (r+\epsilon)^3} = \lim_{\epsilon \rightarrow 0} \frac{1}{6 \pi r(r + \epsilon)^2} = \frac{1}{6 \pi r^3}
\end{equation}
$$

This becomes infinitely large when $$r = 0$$.

### Putting It All Together

Let's tie everything together. In the limiting case of $$\epsilon \rightarrow 0$$, the function $$f_\epsilon(r)$$ is infinitely large at the origin and zero everywhere else. This means that $$f_\epsilon(r)$$ is a Dirac delta function $$\delta(r)$$.

The function $$f_\epsilon(r)$$ is equal to the Laplacian of $$\Phi_\epsilon$$, multiplied by a constant. Thus, in the limit as $$\epsilon \rightarrow 0$$, the function $$\nabla^2\Phi_\epsilon$$ is equal to a Dirac delta function (times a constant).

But remember that the limiting case of $$\Phi_\epsilon$$ as $$\epsilon \rightarrow 0$$ is equivalent to the Green's function $$G = A/r = -1/r$$. Thus, the Laplacian of the Green's function is a Dirac delta function times the constant $$4\pi$$. This is exactly what we set out to prove in the first place! Woot!

One final thought. You often see the following expression written out in textbooks:

$$
\begin{equation}
\nabla^2 \left ( \frac{1}{r} \right ) = -4\pi \delta(r)
\end{equation}
$$

Technically, this is not entirely correct because $$1/r$$ is undefined at the origin. It should really be written as the following.

$$
\begin{equation}
\lim_{\epsilon \rightarrow 0} \left [ \nabla^2 \left ( \frac{1}{r + \epsilon} \right ) \right ] = -4\pi \delta(r)
\end{equation}
$$

This comes directly from the analysis above.

Until next time!