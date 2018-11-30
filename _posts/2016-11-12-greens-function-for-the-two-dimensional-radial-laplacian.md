---
layout: post
comments: true
title: Green's Function for the Two-Dimensional, Radial Laplacian
difficulty: hard
category: [Math Methods]
tags: [Derivation]
description: I derive an expression for the Green's function of the two-dimensional, radial Laplacian. Anybody who read my blog post that covered the derivation of the Green's function of the three-dimensional radial Laplacian should notice a large number of similarities between the two derivations.
---

### Introduction

In a [previous blog post](http://blog.cupcakephysics.com/math%20methods/2016/11/01/greens-function-for-the-three-dimensional-radial-laplacian.html) I derived the Green's function for the three-dimensional, radial Laplacian in spherical coordinates. That post showed how the actual derivation of the Green's function was relatively straightforward, but the verification of the answer was much more involved. At the end of the post, I commented on how many textbooks simplify the expression for the Green's function, ignoring the limiting behavior around the origin ($$r = 0$$).

I decided to follow up that post with a similar derivation for the two-dimensional, radial Laplacian. The derivations are almost identical - in fact, throughout this post, I will refer to the spherical Laplacian in a few places. You might want to read over the previous blog post before tackling this one.

### Derivation of the Green's Function

Consider Poisson's equation in [polar coordinates](http://mathworld.wolfram.com/PolarCoordinates.html).

$$
\begin{equation}
\nabla^2 \psi = f
\end{equation}
$$

We can expand the Laplacian in terms of the $$(r,\theta)$$ coordinate system. I looked up the full Laplacian on [Wolfram Mathworld](http://mathworld.wolfram.com/Laplacian.html) (i.e. cylindrical coordinates without the z-component).

$$
\begin{equation}
\frac{1}{r} \frac{\partial}{\partial r} \left ( r \frac{\partial \psi}{\partial r} \right ) + \frac{1}{r^2} \frac{\partial^2 \psi}{\partial \theta^2} = f
\end{equation}
$$

Some textbooks write the equation in a slightly different form; they expand the derivatives with respect to $$r$$, yielding:

$$
\begin{equation}
\frac{\partial^2 \psi}{\partial r^2} + \frac{1}{r} \frac{\partial \psi}{\partial r} + \frac{1}{r^2} \frac{\partial^2 \psi}{\partial \theta^2} = f
\end{equation}
$$

In this derivation, I am going to keep the original form of the Laplacian because it will make it easier to use integration by parts. We are only interested in the radial Green's function here, so we can immediately simplify the expression to include only radial terms.

$$
\begin{equation}
\frac{1}{r} \frac{\partial}{\partial r} \left ( r \frac{\partial \psi}{\partial r} \right ) = f
\end{equation}
$$

We are looking for a Green's function $$G$$ that satisfies:

$$
\begin{equation}
\nabla^2 G = \frac{1}{r} \frac{d}{dr} \left ( r \frac{dG}{dr} \right ) = \delta(r)
\end{equation}
$$

Let's point something out right off the bat. In the previous blog post, I set the Green's function equal to $$4\pi \delta(r)$$ wheras here, I set it equal to $$\delta(r)$$ without the constant. Why is that?

It's because physicists love to mix all sorts of conventions and confuse people :P

Traditionally, mathematicians use $$\delta(r)$$ in all cases. However, it is convenient to use $$4\pi\delta(r)$$ for the derivation of the three-dimensional Green's function for the Laplacian in spherical coordinates for a number of reasons. The final ouput is simple (no constants aside from a negative sign), the constant describes the solid angle of a sphere, and the answer aligns with [CGS units in electromagnetism](http://physics.stackexchange.com/questions/1673/coulomb-force-in-si-and-cgs). However, I have not come across any sources where the 2D Green's function is set to $$2\pi\delta(r)$$. Thus, sticking with tradition, I will use $$\delta(r)$$.

If this change of notation rubs you the wrong way, you can go back to my previous blog post and re-derive the Green's function using $$\delta(r)$$ without the constant of $$4\pi$$. Your answer will (unsurprisingly) be $$G = -1/(4\pi r)$$ rather than $$G = -1/r$$.

Let's integrate both sides of the expression above with respect to $$r$$. This will eliminate the Dirac delta function in the expression.

$$
\begin{equation}
\int \frac{1}{r} \frac{d}{dr} \left ( r \frac{dG}{dr} \right ) dr = \int \delta(r) dr
\end{equation}
$$

$$
\begin{equation}
\int \frac{1}{r} \frac{d}{dr} \left ( r \frac{dG}{dr} \right ) dr = 1
\end{equation}
$$

Whenever we see derivatives within an integral, there is a chance that the integral might be simplified by integration by parts. It turns out that integration by parts works splendidly in this case.

$$
\begin{equation}
u = \frac{1}{r} \Rightarrow du = -\frac{1}{r^2} dr
\end{equation}
$$

$$
\begin{equation}
dv = \frac{d}{dr} \left [ r \frac{dG}{dr} \right ] dr \Rightarrow v = r \frac{dG}{dr}
\end{equation}
$$

The expression becomes:

$$
\begin{equation}
\left ( \frac{1}{r} \right ) \left ( r \frac{dG}{dr} \right ) - \int \left ( r \frac{dG}{dr} \right ) \left ( -\frac{1}{r^2} dr \right ) = 1
\end{equation}
$$

$$
\begin{equation}
\frac{dG}{dr} + \int \frac{1}{r} \frac{dG}{dr} dr = 1
\end{equation}
$$

Similar to the radial Laplacian in spherical coordinates, we can use integration by parts a second time to simplify the integral in the expression above.

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

We expand the expression using integration by parts once again.

$$
\begin{equation}
\frac{dG}{dr} + \left [ \left (\frac{1}{r} \right ) \left ( G \right ) - \int G \left ( -\frac{1}{r^2} dr\right ) \right ] = 1
\end{equation}
$$

$$
\begin{equation}
\frac{dG}{dr} + \frac{G}{r} + \int \frac{G}{r^2} dr = 1
\end{equation}
$$

It is generally preferable to work with differential equations rather than integral equations. Thus, on each side of the expression above, we can take the derivative with respect to $$r$$; this will eliminate the integral in the expression. Remember that $$G$$ is a function of $$r$$, so we have to use the quotient rule on the $$G/r$$ term.

$$
\begin{equation}
\frac{d^2 G}{dr^2} + \left ( \frac{1}{r} \frac{dG}{dr} - \frac{G}{r^2} \right ) + \frac{G}{r^2} = 0
\end{equation}
$$

$$
\begin{equation}
\frac{d^2 G}{dr^2} + \frac{1}{r} \frac{dG}{dr} = 0
\end{equation}
$$

Similar to the case of the radial, spherical Laplacian, we have simplified the expression for $$G$$ into a straightforward, differential equation. I am going to guess and check the solution $$G = A ln \vert r \vert + B$$ where $$A$$ and $$B$$ are some constants.

$$
\begin{align}
\frac{d^2 G}{dr^2} + \frac{1}{r}\frac{dG}{dr} &=\\
\frac{d^2}{dr^2} \left [ A ln \vert r \vert + B \right ] + \frac{1}{r}\frac{d}{dr} \left [ A ln \vert r \vert + B \right ] &=\\
-\frac{A}{r^2} + \frac{1}{r} \left ( \frac{A}{r} \right ) &=\\
-\frac{A}{r^2} + \frac{A}{r^2} &= 0
\end{align}
$$

Thus, we see that the solution $$G = A ln \vert r \vert + B$$ solves the differential equation. Notice how $$B$$ is simply an additive constant in the expression. We usually set this constant equal to zero in order to obtain the fundamental solution of the differential equation. Thus, we will use the function $$G = A ln \vert r \vert$$ for the remainder of this post.

### Checking the Solution

Like the derivation in the previous blog post, we need to check that our solution makes sense. And like the previous blog post, we run into a small problem.

$$
\begin{align}
\nabla^2 G &= \frac{1}{r} \frac{d}{dr} \left [ r \frac{d}{dr} \left ( A ln \vert r \vert \right ) \right ]\\
&= \frac{1}{r} \frac{d}{dr} \left [ r \left ( \frac{A}{r} \right ) \right ]\\
&= \frac{1}{r} \frac{d}{dr} \left [ A \right ]\\
&= 0
\end{align}
$$

Zero is not our expected output - we were expecting a Dirac delta function. The reason that we are not getting the expected output is that the domain of the solution does not include the origin $$r = 0$$ (we divided by $$r$$ throughout the derivation). We need to analyze the solution in the limiting case of $$r \rightarrow 0$$. The strategy is identical to the previous blog post.

Define a function $$\Phi_\epsilon$$ where:

$$
\begin{equation}
\Phi_\epsilon = A ln \vert r + \epsilon \vert
\end{equation}
$$

As $$\epsilon$$ approaches zero, $$\Phi_\epsilon$$ approaches the Green's function $$G$$. Let's plug the expression $$\Phi_\epsilon$$ into the Laplacian and simplify.

$$
\begin{align}
\nabla^2 \Phi_\epsilon &= \frac{1}{r} \frac{d}{dr} \left [ r \frac{d}{dr} \left ( A ln \vert r + \epsilon \vert \right ) \right ]\\
&= \frac{1}{r} \frac{d}{dr} \left [ r \left ( \frac{A}{r+\epsilon} \right ) \right ]\\
&= \frac{1}{r} \frac{d}{dr} \left [ \frac{A r}{r+\epsilon} \right ]\\
&= \frac{1}{r} \left [ \frac{A}{r+\epsilon} - \frac{Ar}{(r+\epsilon)^2}\right ]\\
&= \frac{1}{r} \left [ \frac{A(r + \epsilon)}{(r+\epsilon)^2} - \frac{Ar}{(r+\epsilon)^2}\right ]\\
&= \frac{1}{r} \left [ \frac{Ar + A\epsilon - Ar}{(r+\epsilon)^2} \right ]\\
&= \frac{1}{r} \left [ \frac{A\epsilon}{(r+\epsilon)^2} \right ]\\
&= \frac{A\epsilon}{r(r+\epsilon)^2}
\end{align}
$$

Remember that by the definition of a Green's function, the Laplacian of $$G$$ (or more correctly, the Laplacian of the limiting case of $$\Phi_\epsilon$$), will yield $$\delta(r)$$. If that is true, I should be able to integrate $$\nabla^2 \Phi_\epsilon$$ over all space and get one. Let's try doing just that:

$$
\begin{align}
\int \nabla^2 \Phi_\epsilon dA &= \int_0^R \int_0^{2\pi} \frac{A\epsilon}{r(r+\epsilon)^2} r dr d\theta\\
&= 2\pi \int_0^R \frac{A\epsilon}{r(r+\epsilon)^2} r dr\\
&= 2\pi A\epsilon \int_0^R \frac{1}{(r+\epsilon)^2} dr\\
&= 2\pi A\epsilon \left [ - \frac{1}{r+\epsilon} \right ]_0^R\\
&= - 2\pi A\epsilon \left [ \frac{1}{R+\epsilon} - \frac{1}{\epsilon} \right ]\\
&= - 2\pi A\epsilon \left [ -\frac{R}{\epsilon(R+\epsilon)} \right ]\\
&=  \frac{2\pi A\epsilon R}{\epsilon(R+\epsilon)}\\
&=  \frac{2\pi A R}{R+\epsilon}
\end{align}
$$

If we are going to integrate over all space, we need to take the limit of this expression as $$R \rightarrow \infty$$. Once again, we turn to L'Hopital's rule.

$$
\begin{align}
\lim_{R \rightarrow \infty} \int \nabla^2 \Phi_\epsilon dA &= \lim_{R \rightarrow \infty} \frac{2\pi A R}{R+\epsilon}\\
&= \lim_{R \rightarrow \infty} 2\pi A\\
&= 2 \pi A
\end{align}
$$

When $$A = 1/(2\pi)$$, the Laplacian of $$\Phi_\epsilon$$ satisfies the condition that the integral must equal one. Finally, let's verify that the Laplacian of $$\Phi_\epsilon$$ is actually a Dirac delta function. We will define one final function, $$f_\epsilon(r)$$:

$$
\begin{equation}
f_\epsilon (r) = \frac{1}{2 \pi A} \nabla^2 \Phi_\epsilon (r) = \frac{1}{2\pi A} \frac{A\epsilon}{r(r+\epsilon)^2} = \frac{1}{2\pi} \frac{\epsilon}{r(r+\epsilon)^2}
\end{equation}
$$

What is the value of this function in the limit of $$\epsilon \rightarrow 0$$? If $$r$$ is non-zero, the limit is very simple:

$$
\begin{equation}
\lim_{\epsilon \rightarrow 0} f_\epsilon (r) = \lim_{\epsilon \rightarrow 0} \frac{1}{2\pi} \frac{0}{r^3} = 0
\end{equation}
$$

However, if $$r$$ is equal to zero, we need to use L'Hopital's rule to simplify the expression.

$$
\begin{equation}
\lim_{\epsilon \rightarrow 0} f_\epsilon (r) = \lim_{\epsilon \rightarrow 0} \frac{1}{2\pi} \frac{1}{2r(r+\epsilon)} = \frac{1}{2\pi} \frac{1}{2r(r)} = \frac{1}{ 4 \pi r^2}
\end{equation}
$$

This becomes infinitely large when $$r = 0$$.

### The Final Solution

We can now tie everything together in a similar method as the previous post. In the limit of $$\epsilon \rightarrow 0$$, the function $$f_\epsilon(r)$$ is infinitely large at the origin and zero everywhere else. Thus, $$f_\epsilon(r)$$ is a Dirac delta function $$\delta(r)$$.

The function $$f_\epsilon(r)$$ is equal to the Laplacian of $$\Phi_\epsilon$$ (remember that the constant $$(2 \pi A)^{-1}$$ is equal to one since $$A=(2\pi)^{-1}$$). This means that in the limit as $$\epsilon \rightarrow 0$$, the function $$\nabla^2\Phi_\epsilon$$ is equal to a Dirac delta function.

Finally, the limiting case of $$\Phi_\epsilon$$ as $$\epsilon \rightarrow 0$$ is equal to the Green's function $$G = A ln \vert r \vert = (2\pi)^{-1} ln \vert r \vert$$. Thus, the Laplacian of the Green's function is a Dirac delta function. Just what we needed.

Until next time!