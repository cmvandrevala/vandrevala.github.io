---
layout: post
comments: true
title: The Relativistic Doppler Shift
difficulty: medium
category: [Relativity]
tags: [Derivation]
description: I derive the relativistic Doppler shift equation in three different ways. The first derivation uses only the definition of time dilation. The second derivation uses a Lorentz boost along the direction of motion. The third derivation uses the general matrix formalism of special relativity.
---

### Introduction

Relativity is a weird and wonderful branch of physics. It is chock full of lasers, contracting objects, and terrible Star Trek references. But since it is so outlandish, it also contains many paradoxes. More often than not, these paradoxes come from the fact that we do not fully understand the rules of relativity, rather than an inconsistency of the theory itself.

Of course, a good way to make sure that you are on the right track is to check your work in a few different ways; since the theory of relativity ought to be self-consistent, there ought to be a few different ways to derive a common result. A bit of mathematical creativity will ensure that your calculations are correct and your assumptions are valid. It may even lead to a bit of deeper insight.

I offer three different derivations of the relativistic Doppler effect in this post. The first one is easy to understand, needing only the concept of time dilation and the basic tenants of special relativity. The second one is the textbook-derivation of the effect in one dimension. The final one is a derivation Doppler effect using the full Lorentz transformation in all four dimensions. It results in a surprising conclusion.

<div style="text-align:center" markdown="1">
![Let's Get Started!]({{ site.url }}/assets/images/2015-06-07/lets_get_started.png)
</div>

### Derivation #1 - Time Dilation

The first derivation is quick and cute. Suppose an observer stands still (reference frame O) while a light source moves past him or her at some speed $$\beta = v/c$$ in the +x direction (reference frame S). As the light source moves past the stationary observer (O), it radiates light in the -x direction. In reference frame S, the light has a wavelength of $$\lambda$$ and a frequency of $$f_s = c/\lambda$$. We want to determine the frequency of light in reference frame O ($$f_o$$).

Start with the definition of time dilation.

$$
\begin{equation}
t_o = \frac{t_s}{\gamma}
\end{equation}
$$

In the equation above, $$t_o$$ is a time interval measured by the observer at rest while $$t_s$$ is a time interval measured by the moving source. The time intervals $$t_o$$ and $$t_s$$ will henceforth refer to the period of the light emitted by the source.

We know that frequency seen by the observer ($$f_o$$) is inversely proportional to the time-dilated period $$t_o$$:

$$
\begin{equation}
\frac{1}{f_o} = \frac{t_s}{\gamma}
\end{equation}
$$

The expression for $$t_s$$ is a bit more complicated. According to both reference frames, the light moves in the -x direction with a speed $$c$$. Additionally, according to reference frame S, the observer in reference frame O moves in the -x direction with a speed of $$v$$. Thus, reference frame S comes to the conclusion that the wavelength of light as seen in reference frame O must be a function of the speed of light $$c$$ and the speed of the observer $$v$$:

$$
\begin{equation}
\lambda + v t_s = c t_s
\end{equation}
$$

$$
\begin{equation}
\lambda = c t_s - v t_s = (c - v) t_s
\end{equation}
$$

Solving for $$t_s$$ yields:

$$
\begin{equation}
t_s = \frac{\lambda}{c - v} = \frac{c/f_s}{c-v} = \frac{c}{(c-v)f_s} = \frac{1}{(1-\beta) f_s}
\end{equation}
$$

Plug your expression for $$t_s$$ into the one for time dilation:

$$
\begin{equation}
\frac{1}{f_o} = \frac{t_s}{\gamma} = \frac{1}{(1-\beta) f_s}\frac{1}{\gamma} = \frac{1}{(1-\beta) f_s}\sqrt{1 - \beta^2}
\end{equation}
$$

Simplifying the $$\beta$$ terms yields:

$$
\begin{equation}
\frac{1}{f_o} = \frac{\sqrt{1-\beta^2}}{1-\beta} \frac{1}{f_s} = \frac{\sqrt{(1 + \beta)(1-\beta)}}{1-\beta} \frac{1}{f_s} = \sqrt{\frac{1 + \beta}{1-\beta}} \frac{1}{f_s}
\end{equation}
$$

We usually write the ratio of the frequencies.

$$
\begin{align}
\frac{f_s}{f_o} = \sqrt{\frac{1 + \beta}{1-\beta}}
\end{align}
$$

### Derivation #2 - One Dimensional Lorentz Transformations

This is the textbook method to getting an expression for the relativistic Doppler effect. Just to keep everything simple, we will assume that our rest frame and the frame of the source coincide at time $$t = 0$$. This means that the reference frames cross at (0,0). We can use the [Lorentz transformations](http://en.wikipedia.org/wiki/Lorentz_transformation) to translate position and time in the observer's frame of reference (t,x) to position and time to the source's frame of reference (t',x').

$$
\begin{equation}
t' = \gamma \left ( t - \beta x \right )
\end{equation}
$$

$$
\begin{equation}
x' = \gamma \left ( x - \beta t \right )
\end{equation}
$$

For example, if an event occurs at (T,0) in the observer's frame of reference, then it occurs at $$(\gamma T, -\gamma \beta T)$$ in the source's frame of reference. We can reverse the direction of motion ($$\beta$$) and rearrange the equations above to translate position and time in the source frame of reference (t', x') to position and time in the observer's frame of reference (t,x):

$$
\begin{equation}
t = \gamma \left ( t' + \beta x' \right )
\end{equation}
$$

$$
\begin{equation}
x = \gamma \left ( x' + \beta t' \right )
\end{equation}
$$

Suppose that the moving source emits a light wave at a spacetime coordinate of (T,0) in the source reference frame. According to the observer, that event occured at the spacetime coordinate $$(\gamma T, \gamma \beta T)$$. Thus, that wave will reach the observer at time:

$$
\begin{equation}
t = \gamma T + \gamma \beta T = \gamma T (1 + \beta) = T \frac{1 + \beta}{\sqrt{1 - \beta^2}}
\end{equation}
$$

We can simplify this expression:

$$
\begin{align}
t &= T \frac{1 + \beta}{\sqrt{1 - \beta^2}}\\[0.1cm]
&= T \frac{1 + \beta}{\sqrt{(1 + \beta)(1 - \beta)}}\\[0.1cm]
&= T \sqrt{\frac{1 + \beta}{1 - \beta}}\\[0.1cm]
\end{align}
$$

$$
\begin{align}
\frac{t}{T} = \sqrt{\frac{1 + \beta}{1-\beta}}
\end{align}
$$

We finish the derivation by noting that $$t = 1/f_o$$ and $$T = 1/f_s$$:

$$
\begin{align}
\frac{f_s}{f_o} = \sqrt{\frac{1 + \beta}{1-\beta}}
\end{align}
$$

### Derivation #3 - Tensor Formalism

I know what you are thinking. Those two derivations above were a piece of cake. Let's up the difficulty! Bring on the tensors!

Our source is going to travel along the +x axis with a constant velocity of $$\beta$$. A general Lorentz transformation $$\Lambda$$ for a given reference frame moving at a constant velocity is given by:

$$
\begin{equation}
\Lambda_{00} = \gamma
\end{equation}
$$

$$
\begin{equation}
\Lambda_{0i} = \Lambda_{i0} = - \gamma \beta_i
\end{equation}
$$

$$
\begin{equation}
\Lambda_{ij} = ( \gamma - 1 ) \frac{\beta_i \beta_j}{\beta^2} + \delta_{ij}
\end{equation}
$$

In our case, since $$\beta_y = \beta_z = 0$$ and $$\beta_x = \beta$$:

$$
\begin{equation}
\Lambda =
\begin{bmatrix}
\gamma & -\gamma \beta & 0 & 0\\[0.1cm]
-\gamma \beta & \gamma & 0 & 0\\[0.1cm]
0 & 0 & 1 & 0\\[0.1cm]
0 & 0 & 0 & 1\\[0.1cm]
\end{bmatrix}
\end{equation}
$$

The source emits a photon with energy $$hf_s$$ that travels along the -x axis. The four vectors of the photon in the source and observer reference frames are:

$$
\begin{equation}
x^\mu =
\begin{bmatrix}
hf_o\\[0.1cm]
-hf_o\\[0.1cm]
0\\[0.1cm]
0
\end{bmatrix}
\end{equation}
$$

$$
\begin{equation}
x'^\mu =
\begin{bmatrix}
hf_s\\[0.1cm]
-hf_s\\[0.1cm]
0\\[0.1cm]
0
\end{bmatrix}
\end{equation}
$$

Let's solve for the four vector of the photon in the reference frame of the observer:

$$
\begin{equation}
x'^\mu = \Lambda x^\mu
\end{equation}
$$

$$
\begin{equation}
\begin{bmatrix}
hf_s\\[0.1cm]
-hf_s\\[0.1cm]
0\\[0.1cm]
0
\end{bmatrix}
=
\begin{bmatrix}
\gamma & -\gamma \beta & 0 & 0\\[0.1cm]
-\gamma \beta & \gamma & 0 & 0\\[0.1cm]
0 & 0 & 1 & 0\\[0.1cm]
0 & 0 & 0 & 1\\[0.1cm]
\end{bmatrix}
\begin{bmatrix}
hf_o\\[0.1cm]
-hf_o\\[0.1cm]
0\\[0.1cm]
0
\end{bmatrix} =
\begin{bmatrix}
\gamma h f_o + \gamma \beta h f_o\\[0.1cm]
-\gamma \beta h f_o - \gamma h f_o\\[0.1cm]
0\\[0.1cm]
0
\end{bmatrix}
= \gamma (1 + \beta)
\begin{bmatrix}
hf_o\\[0.1cm]
-hf_o\\[0.1cm]
0\\[0.1cm]
0
\end{bmatrix}
\end{equation}
$$

We have seen that $$\gamma (1+\beta)$$ term before from above:

$$
\begin{equation}
\begin{bmatrix}
hf_s\\[0.1cm]
-hf_s\\[0.1cm]
0\\[0.1cm]
0
\end{bmatrix}
= \left ( \sqrt{\frac{1 + \beta}{1 - \beta}} \right )
\begin{bmatrix}
hf_o\\[0.1cm]
-hf_o\\[0.1cm]
0\\[0.1cm]
0
\end{bmatrix}
\end{equation}
$$

Again! We see the same ratio of $$\beta$$s that relates the frequency seen by the observer and the frequency seen by the source.

Let's try something a little different. Suppose the photon is not directed along the x-axis. Instead, it is directed along the z-axes:

$$
\begin{equation}
x^\mu =
\begin{bmatrix}
hf_s\\[0.1cm]
0\\[0.1cm]
0\\[0.1cm]
-hf_s
\end{bmatrix}
\end{equation}
$$

Once again, the source travels along the +x axis with a constant velocity of $$\beta$$. Then:

$$
\begin{equation}
x'^\mu =
\begin{bmatrix}
\gamma & -\gamma \beta & 0 & 0\\[0.1cm]
-\gamma \beta & \gamma & 0 & 0\\[0.1cm]
0 & 0 & 1 & 0\\[0.1cm]
0 & 0 & 0 & 1\\[0.1cm]
\end{bmatrix}
\begin{bmatrix}
hf_s\\[0.1cm]
0\\[0.1cm]
0\\[0.1cm]
-hf_s
\end{bmatrix}
=
\begin{bmatrix}
\gamma h f_s \\[0.1cm]
-\gamma \beta h f_s\\[0.1cm]
0\\[0.1cm]
-hf_s
\end{bmatrix}
\ne
\begin{bmatrix}
h f_o \\[0.1cm]
0\\[0.1cm]
0\\[0.1cm]
-h f_o
\end{bmatrix}
\end{equation}
$$

We see something kind of strange. There does not seem to be any change in momentum along the z-direction, as expected. However, the transformation created a component of momentum along the x-direction!

In the non-relativistic case, if you are traveling at 90 degrees with respect to the motion of the source you do not see any Doppler shift. However, when you are moving at relativistic speeds, you see a Doppler shift perpendicular to the motion of the source; note the non-zero component along the x-direction. This is called the transverse Doppler effect.

### Conclusion

There we have it! Three derivations of the relativistic effect, all of them yielding the same answer. As a bonus, the final derivation yielded both the Doppler effect and the transverse Doppler effect.

Until next week!