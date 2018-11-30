---
layout: post
comments: true
title: A Derivation of Centripetal Force
difficulty: easy
category: [Classical Mechanics]
tags: [Derivation]
description: I derive the expression for the centripetal force on a particle moving with uniform circular motion.
---

### Introduction

I love talking with undergraduate students. When you get to a certain level of study, you take most of the elementary material for granted. But then every once in awhile, a young student asks you a seemingly simple question that completely takes you by surprise.

That happened to me this past week. Twice!

Two undergraduate students came to me on two separate occasions and mentioned that most graduate students and professors could not explain the origin of the equation for centripetal force. And to my horror, I realized that I could not derive the equation for centripetal force during the conversations! I guess the universe really wanted me to look into it this week.

After a good night's sleep, I realized that this derivation is actually really straightforward. The key is to identify a few simple concepts and then mush them all together.

Brian and Chaitanya, thanks for throwing down the gauntlet! This post is for you!

### Angles and Arcs

We are analyzing a particle moving around a circle with a constant speed, so it might be helpful to identify some relationships between arc length ($$s$$), radius ($$r$$), central angle ($$\theta$$), and speed ($$v$$). From introductory geometry:

$$
\begin{equation}
\Delta s = r \Delta \theta
\end{equation}
$$

I am going to rearrange the expression above so that we can use it in the final derivation:

$$
\begin{equation}
\frac{1}{r} = \frac{\Delta \theta}{\Delta s}
\end{equation}
$$

Additionally, we know that the particle covers a certain arc length ($$\Delta s$$) per unit time ($$\Delta t$$):

$$
\begin{equation}
v = \frac{\Delta s}{\Delta t}
\end{equation}
$$

Multiplying the two expressions above yields:

$$
\begin{equation}
\frac{\Delta \theta}{\Delta t} = \frac{\Delta \theta}{\Delta s}\frac{\Delta s}{\Delta t} = \frac{v}{r}
\end{equation}
$$

### Changing Momentum

Let's draw a diagram of the particle moving along the circle. At some initial time, suppose that it has a momentum directed in some initial direction ($$\vec{p}_i$$). At some time $$\Delta t$$ in the future, the momentum has the same magnitude but a different direction ($$\vec{p}_f$$). This is because the particle has the same mass and speed, but it has moved along the circle.

<div style="text-align:center" markdown="1">
![Uniform Circular Motion]({{ site.url }}/assets/images/2015-03-15/ucm_momentum.png)
</div>

In the image above on the right, we let the magnitudes of $$\vec{p}_i$$ and $$\vec{p}_f$$ equal $$p$$. We can find the difference in momentum by subtracting the two vectors and doing some trig:

$$
\begin{equation}
sin \left ( \frac{\Delta \theta}{2} \right) = \frac{\Delta p/2}{p}
\end{equation}
$$

$$
\begin{equation}
\Delta p = 2 p sin \left ( \frac{\Delta \theta}{2} \right)
\end{equation}
$$

Dividing each side by $$\Delta \theta$$ yields:

$$
\begin{align}
\frac{\Delta p}{\Delta \theta} &= \frac{2 p sin \left ( \frac{\Delta \theta}{2} \right)}{\Delta \theta}\\[0.1cm]
&= p \frac{sin \left ( \frac{\Delta \theta}{2} \right)}{\frac{\Delta \theta}{2}}\\[0.1cm]
&= p \hspace{1mm} {\rm sinc} \left ( \frac{\Delta \theta}{2} \right)\\[0.1cm]
&= mv \hspace{1mm} {\rm sinc} \left ( \frac{\Delta \theta}{2} \right)
\end{align}
$$

Where the $$sinc$$ function is $$sinx/x$$.

### The Derivation

Now that we have all of the pieces of the problem, the derivation is really straightforward.

$$
\begin{align}
F &= \frac{\Delta p}{\Delta t}\\[0.1cm]
&= \left ( \frac{\Delta p}{\Delta \theta} \right ) \left ( \frac{\Delta \theta}{\Delta t} \right )\\[0.1cm]
&= \left [ mv \hspace{1mm} {\rm sinc} \left ( \frac{\Delta \theta}{2} \right) \right ] \left ( \frac{v}{r} \right )\\[0.1cm]
&= \frac{mv^2}{r} {\rm sinc} \left ( \frac{\Delta \theta}{2} \right)
\end{align}
$$

Finally, if we take the limit as $$\Delta \theta \rightarrow 0$$, we get the instantaneous centripetal force at some point on the circular path. The limit can be found using [L'Hospital's Rule](http://mathworld.wolfram.com/LHospitalsRule.html):

$$
\begin{align}
\lim_{\Delta \theta \rightarrow 0} {\rm sinc} \left ( \frac{\Delta \theta}{2} \right ) &= \lim_{\Delta \theta \rightarrow 0} \frac{sin \left ( \frac{\Delta \theta}{2} \right )}{\frac{\Delta \theta}{2}}\\[0.1cm]
&= \lim_{\Delta \theta \rightarrow 0} \frac{\frac{1}{2}cos \left ( \frac{\Delta \theta}{2} \right )}{\frac{1}{2}}\\[0.1cm]
&= cos(0)\\[0.1cm]
&= 1
\end{align}
$$

Thus, we get the final expression for centripetal force:

$$
\begin{equation}
F = \frac{mv^2}{r}
\end{equation}
$$