---
layout: post
comments: true
title: The Low Speed Limit of the Lorentz Factor
difficulty: medium
category: [Relativity]
tags: [Common Homework Problem]
description: I explain how to recover the equations for Newtonian energy and momentum from the low-speed limit of the Lorentz factor.
---

### Introduction

The Lorentz factor ($$\gamma$$) describes how space and time measurements are scaled between two different frames of reference. It is a function of the speed ($$v$$) at which one reference frame moves relative to another. We often express $$\gamma$$ in terms of $$\beta = v/c$$.

$$
\begin{equation}
\gamma = \frac{1}{\sqrt{1-\beta^2}}
\end{equation}
$$

It might seem like the theory of special relativity is far removed from Newtonian mechanics, but this is definitely not the case. It is easy to recover the expressions for Newtonian momentum ($$p$$) and energy ($$E$$) by expanding the equation for $$\gamma$$ and taking a low-speed limit.

### The Maclaurin Series of $$\gamma$$

Let's start off our analysis by finding the [Maclaurin series](http://mathworld.wolfram.com/MaclaurinSeries.html) expansion of $$\gamma$$. First, we write $$\gamma$$ as:

$$
\begin{equation}
\gamma(\beta) = \frac{1}{\sqrt{1-\beta^2}} = \left ( 1 - \beta^2 \right )^{-1/2}
\end{equation}
$$

The Maclaurin series for some function $$f(x)$$ is given by:

$$
\begin{equation}
f(x) = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \dots + \frac{f^{(n)}(0)}{n!}x^n + \dots
\end{equation}
$$

Thus, we can write $$\gamma$$ as:

$$
\begin{equation}
\gamma(\beta) = \gamma(0) + \beta \gamma'(0) + \frac{\beta^2}{2!} \gamma''(0) + \frac{\beta^3}{3!}  \gamma'''(0) + \dots
\end{equation}
$$

The math here is not difficult; it just gets a bit tedious after awhile. I will calculate the first few terms in the series just to demonstrate how it's done.

The first term is very simple to calculate:

$$
\begin{equation}
\gamma(0) = \left ( 1 - 0^2 \right )^{-1/2} = 1
\end{equation}
$$

The second term turns out to be zero:

$$
\begin{align}
\beta \gamma'(0) &= \beta \left [ \frac{d}{d\beta} \left ( 1 - \beta^2 \right )^{-1/2} \right ]_{\beta=0}\\[0.1cm]
&= \beta \left [ -\frac{1}{2} \left ( 1 - \beta^2 \right )^{-3/2} \left ( -2\beta \right ) \right ]_{\beta = 0}\\[0.1cm]
&= 0
\end{align}
$$

The third term simplifies nicely:

$$
\begin{align}
\frac{\beta^2}{2!} \gamma''(0) &= \frac{\beta^2}{2} \left [ \frac{d^2}{d\beta^2} \left ( 1 - \beta^2 \right )^{-1/2} \right ]_{\beta=0}\\[0.1cm]
&= \frac{\beta^2}{2} \left [ \frac{d}{d\beta} \left ( -\frac{1}{2} \left [ 1 - \beta^2 \right ]^{-3/2} \left [ -2\beta \right ] \right ) \right ]_{\beta = 0}\\[0.1cm]
&= \frac{\beta^2}{2} \left [ \frac{d}{d\beta} \left ( \beta \left [ 1 - \beta^2 \right ]^{-3/2} \right ) \right ]_{\beta = 0}\\[0.1cm]
&= \frac{\beta^2}{2} \left [ \left ( 1 - \beta^2 \right )^{-3/2} - 3\beta^2 \left ( 1 - \beta^2 \right )^{-5/2} \right ]_{\beta = 0}\\[0.1cm]
&= \frac{\beta^2}{2}
\end{align}
$$

The fourth term is where the math starts getting tedious. However, it still simplifies very nicely to zero:

$$
\begin{align}
\frac{\beta^3}{3!} \gamma'''(0) &= \frac{\beta^3}{6} \left [ \frac{d^3}{d\beta^3} \left ( 1 - \beta^2 \right )^{-1/2} \right ]_{\beta=0}\\[0.1cm]
&= \frac{\beta^3}{6} \left [ \frac{d^2}{d\beta^2} \left ( -\frac{1}{2} \left [ 1 - \beta^2 \right ]^{-3/2} \left [ -2\beta \right ] \right ) \right ]_{\beta = 0}\\[0.1cm]
&= \frac{\beta^3}{6} \left [ \frac{d^2}{d\beta^2} \left ( \beta \left [ 1 - \beta^2 \right ]^{-3/2} \right ) \right ]_{\beta = 0}\\[0.1cm]
&= \frac{\beta^3}{6} \left [ \frac{d}{d\beta} \left ( \left [ 1 - \beta^2 \right ]^{-3/2} - 3\beta^2 \left [ 1 - \beta^2 \right ]^{-5/2} \right ) \right ]_{\beta = 0}\\[0.1cm]
&= \frac{\beta^3}{6} \left [ -\frac{3}{2} \left ( 1 - \beta^2 \right )^{-5/2} (-2\beta) - 6\beta \left ( 1 - \beta^2 \right )^{-5/2} + \frac{15\beta^2}{2} \left ( 1 - \beta^2 \right )^{-7/2} (-2\beta) \right ]_{\beta = 0}\\[0.1cm]
&= \frac{\beta^3}{6} \left [ 3\beta \left ( 1 - \beta^2 \right )^{-5/2} - 6\beta \left ( 1 - \beta^2 \right )^{-5/2} - 15\beta^3 \left ( 1 - \beta^2 \right )^{-7/2} \right ]_{\beta = 0}\\[0.1cm]
&= \frac{\beta^3}{6} \left [ -3\beta \left ( 1 - \beta^2 \right )^{-5/2} - 15\beta^3 \left ( 1 - \beta^2 \right )^{-7/2} \right ]_{\beta = 0}\\[0.1cm]
&= 0
\end{align}
$$

You can continue solving for as many terms in the series as you wish. Notice how $$\gamma$$ is an even function (it only has even terms of $$\beta$$):

$$
\begin{equation}
\gamma = 1 + \frac{1}{2}\beta^2 + \frac{3}{8}\beta^4 + \frac{5}{16}\beta^6 + \frac{35}{128}\beta^8 + \dots
\end{equation}
$$

### The Low Speed Limit

Suppose we want to analyze motion at small values of $$\beta = v/c$$ (speeds much slower than the speed of light). In this case, we will say that $$\beta^n = 0$$ for $$n \ge 3$$. Why $$3$$? Remember back from classical mechanics that kinetic energy depends on $$v^2$$. Thus, in order to recover the expression for kinetic energy, at the very least, we need to take into account all terms of order $$\beta^2$$.

#### Momentum

Start off with the expression for relativistic momentum:

$$
\begin{equation}
p = \gamma m v
\end{equation}
$$

Substitute the full Maclaurin series for $$\gamma$$:

$$
\begin{align}
p &= \left ( 1 + \frac{1}{2}\beta^2 + \frac{3}{8}\beta^4 + \frac{5}{16}\beta^6 + \frac{35}{128}\beta^8 + ... \right ) m v\\[0.1cm]
&= \left ( 1 + \frac{1}{2}\beta^2 + \frac{3}{8}\beta^4 + \frac{5}{16}\beta^6 + \frac{35}{128}\beta^8 + ... \right ) mc \beta\\[0.1cm]
&= mc \beta + \frac{mc}{2}\beta^3 + \frac{3mc}{8}\beta^5 + \frac{5mc}{16}\beta^7 + \frac{35mc}{128}\beta^9 + ...
\end{align}
$$

Drop any terms of $$\beta^3$$ or higher:

$$
\begin{equation}
p \approx mc \beta
\end{equation}
$$

Simplify the expression:

$$
\begin{equation}
p \approx mv
\end{equation}
$$

The low speed limit of momentum is $$p = mv$$, just as we would expect.

#### Energy

Start off with the expression for relativistic energy:

$$
\begin{equation}
E = \gamma mc^2
\end{equation}
$$

Substitute the full Maclaurin series for $$\gamma$$:

$$
\begin{align}
E &= \left ( 1 + \frac{1}{2}\beta^2 + \frac{3}{8}\beta^4 + \frac{5}{16}\beta^6 + \frac{35}{128}\beta^8 + ... \right ) mc^2\\[0.1cm]
&= mc^2 + \frac{mc^2}{2}\beta^2 + \frac{3mc^2}{8}\beta^4 + \frac{5mc^2}{16}\beta^6 + \frac{35mc^2}{128}\beta^8 + ...
\end{align}
$$

Drop any terms that have $$\beta^3$$ or higher:

$$
\begin{equation}
E \approx mc^2 + \frac{mc^2}{2} \beta^2
\end{equation}
$$

Simplify the expression:

$$
\begin{equation}
E \approx mc^2 + \frac{1}{2} mv^2
\end{equation}
$$

The low speed limit of energy consists of the kinetic energy of the particle plus the rest energy of the particle, just as we might expect.


### Conclusion

We see that the classical momentum and energy are easily found by taking the low speed limit of the Lorentz factor. This is extremely important! We need to make sure that special relativity, under the right circumstances, returns the elementary expressions that we see in Newtonian mechanics.

Until next week!
