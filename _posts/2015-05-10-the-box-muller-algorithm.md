---
layout: post
comments: true
title: The Box-Muller Algorithm
difficulty: medium
category: [Computational Physics]
tags: [Derivation, Interactive Visual]
description: I derive the Box-Muller algorithm and visualize the random samples that it produces.
---

### Introduction

There are many problems in computational science that can be efficiently solved using [stochastic methods](http://en.wikipedia.org/wiki/Stochastic); examples include the evaluation of multidimensional integrals, analyzing "what-if" scenarios in control systems, and predicting future events in physics and finance. It is fairly straightforward to generate a list of pseudo-random numbers on a computer. However, these numbers are [uniformly distributed](http://mathworld.wolfram.com/UniformDistribution.html). What if we want to generate a string of numbers with a different probability distribution, like a Gaussian distribution (i.e. a bell curve)?

The Box-Muller algorithm can be used to convert two sets of random numbers with uniform distributions into two sets of random numbers with Gaussian distributions. This algorithm does not use any approximation methods. Instead, it makes use of the famous Gaussian integral.

### The Gaussian Integral

The Gaussian integral is given by:

$$
\begin{equation}
\int_{-\infty}^\infty e^{-x^2/2} dx = \sqrt{2\pi}
\end{equation}
$$

If we try to integrate the Gaussian function using traditional methods, we quickly find that the integral does not have a neat solution. However, we can use a little trick to make short work of the integral.

Suppose I have two bell curves, one a function of $$x$$ and the other a function of $$y$$. We can multiply these two integrals together to get:

$$
\begin{align}
\left [ \int_{-\infty}^\infty e^{-x^2/2} dx \right ] \left [ \int_{-\infty}^\infty e^{-y^2/2} dy \right ]
&= \int_{-\infty}^\infty \int_{-\infty}^\infty e^{-x^2/2} e^{-y^2/2} dx dy\\[0.1cm]
&= \int_{-\infty}^\infty \int_{-\infty}^\infty e^{-(x^2 + y^2)/2} dx dy
\end{align}
$$

Since we are analyzing a function in the xy-plane, let's switch over to polar coordinates. Then, $$r^2 = x^2 + y^2$$ and $$dx dy = r dr d\theta$$. The limits of integration also change to $$r$$ and $$\theta$$ rather than $$x$$ and $$y$$. Now we integrate over all $$r$$ values and all $$\theta$$ values.

$$
\begin{align}
\int_{-\infty}^\infty \int_{-\infty}^\infty e^{-(x^2 + y^2)/2} dx dy
&= \int_0^{2\pi} \int_0^\infty e^{-r^2/2} r dr d\theta\\[0.1cm]
&= 2\pi \int_0^\infty r e^{-r^2/2} dr\\[0.1cm]
\end{align}
$$

Now we can use u-substitution to solve this integral. Let $$u = r^2/2$$ and $$du = r dr$$. Then:

$$
\begin{align}
\int_{-\infty}^\infty \int_{-\infty}^\infty e^{-(x^2 + y^2)/2} dx dy
&= 2\pi \int_0^\infty r e^{-r^2/2} dr\\[0.1cm]
&= 2\pi \int_0^\infty e^{-u} du\\[0.1cm]
&= 2\pi \left [ -e^{-u} \right ]_0^\infty\\[0.1cm]
&= 2\pi \left [ -e^{-\infty} + e^0 \right ]\\[0.1cm]
&= 2\pi
\end{align}
$$

Here's the cool part. Remember, $$x$$ and $$y$$ are just variable names. It does not matter if we call each variable $$x$$, $$y$$, $$z$$, or cupcake. All that matters is the integral is equal to $$2\pi$$. Let's just rename variable $$y$$ to $$x$$. Then:

$$
\begin{equation}
\left [ \int_{-\infty}^\infty e^{-x^2/2} dx \right ] \left [ \int_{-\infty}^\infty e^{-y^2/2} dy \right ] \Rightarrow \left [ \int_{-\infty}^\infty e^{-x^2/2} dx \right ]^2 = 2\pi
\end{equation}
$$

$$
\begin{equation}
\int_{-\infty}^\infty e^{-x^2/2} dx = \sqrt{2\pi}
\end{equation}
$$

There we go! We have solved for the total area under a Gaussian curve. Admittedly, I skipped over some of the nuances of why this procedure works, so if you want to know all of the nitty gritty details, read up on [Fubini's theorem](http://mathworld.wolfram.com/FubiniTheorem.html).

### The Box-Muller Algorithm

Now that we have solved the Gaussian integral, the Box-Muller algorithm is pretty straightforward. Suppose I want to create two sets of random numbers ($$X$$ and $$Y$$), each with a [probability density function](http://mathworld.wolfram.com/ProbabilityDensityFunction.html) given by a Gaussian integral ($$p(X)$$ and $$p(Y)$$). We can use the result above to get expressions for $$p(X)$$ and $$p(Y)$$:

$$
\begin{equation}
p(X) = \frac{1}{\sqrt{2\pi}} e^{- X^2 /2 }
\end{equation}
$$

$$
\begin{equation}
p(Y) = \frac{1}{\sqrt{2\pi}} e^{- Y^2 /2 }
\end{equation}
$$

We can call the total probability density function $$p(X,Y)$$. Since $$X$$ and $$Y$$ are independent sets of numbers:

$$
\begin{align}
p(X,Y) &= p(X)p(Y)\\[0.1cm]
&= \left [ \frac{1}{\sqrt{2\pi}} e^{- X^2 /2 } \right ] \left [ \frac{1}{\sqrt{2\pi}} e^{- Y^2 /2 } \right ]\\[0.1cm]
&= \frac{1}{2\pi} e^{- (X^2+Y^2) /2 }
\end{align}
$$

This looks really familiar. Letting $$R^2 = X^2 + Y^2$$ gives:

$$
\begin{equation}
p(X,Y) \Rightarrow p(R,\Theta) = \frac{1}{2\pi} e^{- R^2 /2 }
\end{equation}
$$

And now the interesting part. Suppose I can generate two uniformly distributed sets of numbers between zero and one, not including zero. Call them $$U_1$$ and $$U_2$$. First, I can transform $$U_1$$ and $$U_2$$ into two new sets, $$\Theta$$ and $$R$$ based on the expression above:

$$
\begin{equation}
U_1 = \frac{\Theta}{2\pi} \Rightarrow \Theta = 2\pi U_1
\end{equation}
$$

$$
\begin{equation}
U_2 = e^{-R^2/2} \Rightarrow R = \sqrt{-2ln(U_2)}
\end{equation}
$$

The first expression for $$\Theta$$ represents a uniform distribution of numbers over all values from zero to $$2\pi$$ (i.e. over all angles). The second expression for $$R$$ represents a Gaussian distribution. We can now convert these polar coordinates to cartesian coordinates using $$X = Rcos(\Theta)$$, and $$Y = Rsin(\Theta)$$:

$$
\begin{equation}
X = Rcos(\Theta) = \sqrt{-2ln(U_2)} cos(2\pi U_1)
\end{equation}
$$

$$
\begin{equation}
Y = Rsin(\Theta) = \sqrt{-2ln(U_2)} sin(2\pi U_1)
\end{equation}
$$

As weird as it sounds, $$X$$ and $$Y$$ both have Gaussian distributions because $$R$$ and $$\Theta$$ had Gaussian distributions!

We can see the transform in action below. I first genrate 500 pairs of random numbers that are uniformly distributed between zero and one. These 500 points look like a little $$1\times 1$$ box in the center of the plot. Then, when you click on the graph, the points change according to the Box-Muller transformation.

<div style="text-align:center" markdown="1">
<div id='scatterplot'></div>
<script type="text/javascript" src="{{site.BASE_PATH}}/assets/js/2015-05-10/scatterplot.js"></script>
</div>

Pretty neat!

We can also verify that the transformations produce Gaussian distributions. Below I have plotted four graphs. The one in the upper left shows pairs of uniformly distributed random numbers. The graph in the upper right corner shows the Box-Muller transformation of these points. The two graphs on the bottom show the probability density functions of the original dataset and the transformed dataset. For simplicity, I only show the probability density function along the horizontal axis ($$U_1$$), but the graphs look similar along the vertical axis. You can see that the graph in the upper left hand corner follows a uniform distribution, while the graph in the upper right hand corner follows a Gaussian distribution.

Click the graphs to redraw the points.

<div style="text-align:center" markdown="1">
<div id='histogram'></div>
<script type="text/javascript" src="{{site.BASE_PATH}}/assets/js/2015-05-10/histogram.js"></script>
</div>

### Conclusions

There we have it! We can use the Box-Muller transformation to generate random points with a Gaussian distribution. In the next couple of weeks, we will solve the diffusion equation and visualize it with the Box-Muller algorithm.

See you then!