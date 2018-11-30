---
layout: post
comments: true
title: Small Angle Oscillations of the Double Pendulum
difficulty: medium
category: [Classical Mechanics]
tags: [Common Homework Problem, Derivation]
description: I go through the derivation of the normal modes of a double pendulum, simplifying the math with the small angle approximation.
---

### Background

When physicists study the double pendulum, they often do so in the context of [chaos theory](https://en.wikipedia.org/wiki/Chaos_theory). It is one of the simplest dynamical systems that has chaotic solutions. However, under the right conditions, even the double pendulum simplifies down to a simple series of oscillators with well-defined normal modes. Let's take a look.

### The Double Pendulum

We will start off with a diagram of the double pendulum. Suppose two point masses (each with mass $$m$$) are attached to two massless strings (each with length $$\ell$$). We measure the angles $$\theta_1$$ and $$\theta_2$$ from the rest positions of each pendulum.

<div style="text-align:center" markdown="1">
![Double Pendulum Setup]({{ site.url }}/assets/images/2015-08-09/setup.png)
</div>

We can calculate the $$x$$ and $$y$$ positions of each mass using some simple trigonometry. Let $$x_1$$ and $$y_1$$ be the $$x$$ and $$y$$ positions of the upper mass. Let $$x_2$$ and $$y_2$$ be the $$x$$ and $$y$$ positions of the lower mass. We will set the origin of the system to be the point where the double pendulum is connected to the ceiling. The positive $$y$$-direction will be measured downwards.

<div style="text-align:center" markdown="1">
![Double Pendulum Positions]({{ site.url }}/assets/images/2015-08-09/double-pendulum.png)
</div>

$$
\begin{equation}
x_1 = \ell sin\theta_1
\end{equation}
$$

$$
\begin{align}
y_1 &= \ell - \ell cos\theta_1\\[0.1cm]
&= \ell \left ( 1 - cos\theta \right )
\end{align}
$$

$$
\begin{align}
x_2 &= x_1 + \ell sin\theta_2\\[0.1cm]
&= \ell sin\theta_1 + \ell sin\theta_2\\[0.1cm]
&= \ell \left ( sin\theta_1 + sin\theta_2 \right )\\[0.1cm]
\end{align}
$$

$$
\begin{align}
y_2 &= y_1 + \ell - \ell cos\theta_2\\[0.1cm]
&= 2\ell - \ell cos\theta_1 - \ell cos\theta_2\\[0.1cm]
&= \ell \left (2 - cos\theta_1 - cos\theta_2 \right )\\[0.1cm]
\end{align}
$$

We want to analyze the motion of the double pendulum under small angle oscillations ($$\theta_1$$ and $$\theta_2$$ close to zero). In that case, we know that $$sin\theta \approx \theta$$ and $$cos\theta \approx 1$$.

$$
\begin{equation}
x_1 \approx \ell \theta_1 \Rightarrow \theta_1 \approx \frac{x_1}{\ell}
\end{equation}
$$

$$
\begin{equation}
y_1 \approx 0
\end{equation}
$$

$$
\begin{equation}
x_2 \approx \ell \left ( \theta_1 + \theta_2 \right ) \Rightarrow \theta_2 \approx \frac{x_2 - x_1}{\ell}
\end{equation}
$$

$$
\begin{equation}
y_2 \approx 0
\end{equation}
$$

Notice how $$y_1$$ and $$y_2$$ are equal to zero under the small angle approximation. Thus, the masses have negligible motion in the vertical direction, and we can ignore the $$y$$-component of acceleration. Let's set up Newton's laws for each mass along the horizontal ($$x$$) direction. Let $$T_1$$ and $$T_2$$ be the tensions in the upper and lower strings respectively.

$$
\begin{align}
m \ddot{x}_1 &= -T_1 sin\theta_1 + T_2 sin\theta_2\\[0.1cm]
&\approx -T_1 \theta_1 + T_2 \theta_2\\[0.1cm]
&\approx -T_1 \frac{x_1}{\ell} + T_2 \frac{x_2 - x_1}{\ell}
\end{align}
$$

$$
\begin{align}
m \ddot{x}_2 &= -T_2 sin\theta_2\\[0.1cm]
&\approx -T_2 \theta_2\\[0.1cm]
&\approx -T_2 \frac{x_2 - x_1}{\ell}
\end{align}
$$

The small angle approximation implies that the double pendulum will hang almost vertically, even during the oscillations. Thus, the magnitude of the tension in each string is simply equal to the weight of the masses that it supports; the tensions are $$T_1 \approx 2mg$$ and $$T_2 \approx mg$$.

Solving for $$\ddot{x}_1$$ yields:

$$
\begin{equation}
m \ddot{x}_1 = -2mg \frac{x_1}{\ell} + mg \frac{x_2 - x_1}{\ell}
\end{equation}
$$

$$
\begin{align}
\ddot{x}_1 &= \frac{g}{\ell} \left [ -2 x_1 + x_2 - x_1 \right ]\\[0.1cm]
&= \frac{g}{\ell} \left [ -3 x_1 + x_2 \right ]
\end{align}
$$

Solving for $$\ddot{x}_2$$ yields:

$$
\begin{equation}
m \ddot{x}_2 = -T_2 \frac{x_2 - x_1}{\ell}
\end{equation}
$$

$$
\begin{equation}
m \ddot{x}_2 = -mg \frac{x_2 - x_1}{\ell}
\end{equation}
$$

$$
\begin{align}
\ddot{x}_2 = -\frac{g}{\ell} \left ( x_2 - x_1 \right )
\end{align}
$$

Let $$\omega_o \equiv \sqrt{g/\ell}$$. Then:

$$
\begin{equation}
\ddot{x}_1 + 3\omega_o^2 x_1 - \omega_o^2 x_2 = 0
\end{equation}
$$

$$
\begin{equation}
\ddot{x}_2 + \omega_o^2 x_2 - \omega_o^2 x_1 = 0
\end{equation}
$$

It is easiest to solve this system of equations by writing it out in matrix form.

$$
\begin{equation}
\begin{bmatrix}
\ddot{x}_1\\[0.1cm]
\ddot{x}_2
\end{bmatrix}
+
\begin{bmatrix}
3\omega_o^2 & -\omega_o^2\\[0.1cm]
-\omega_o^2 & \omega_o^2
\end{bmatrix}
\begin{bmatrix}
x_1\\[0.1cm]
x_2
\end{bmatrix}
= 0
\end{equation}
$$

Let's assume that the oscillations have a form $$x(t) = A cos(\omega t + \delta)$$. Then:

$$
\begin{equation}
x_1(t) = c_1 cos(\omega t + \delta_1)
\end{equation}
$$

$$
\begin{equation}
\ddot{x}_1(t) = -\omega^2 c_1 cos(\omega t + \delta_1)
\end{equation}
$$

$$
\begin{equation}
x_2(t) = c_2 cos(\omega t + \delta_2)
\end{equation}
$$

$$
\begin{equation}
\ddot{x}_2(t) = -\omega^2 c_2 cos(\omega t + \delta_2)
\end{equation}
$$

Plugging these expressions into the matrix equation yields:

$$
\begin{equation}
\begin{bmatrix}
-\omega^2 x_1\\[0.1cm]
-\omega^2 x_2
\end{bmatrix}
+
\begin{bmatrix}
3\omega_o^2 & -\omega_o^2\\[0.1cm]
-\omega_o^2 & \omega_o^2
\end{bmatrix}
\begin{bmatrix}
x_1\\[0.1cm]
x_2
\end{bmatrix}
= 0
\end{equation}
$$

$$
\begin{equation}
\begin{bmatrix}
-\omega^2 & 0\\[0.1cm]
0 & -\omega^2
\end{bmatrix}
\begin{bmatrix}
x_1\\[0.1cm]
x_2
\end{bmatrix}
+
\begin{bmatrix}
3\omega_o^2 & -\omega_o^2\\[0.1cm]
-\omega_o^2 & \omega_o^2
\end{bmatrix}
\begin{bmatrix}
x_1\\[0.1cm]
x_2
\end{bmatrix}
= 0
\end{equation}
$$

$$
\begin{equation}
\begin{bmatrix}
3\omega_o^2 - \omega^2 & -\omega_o^2\\[0.1cm]
-\omega_o^2 & \omega_o^2 - \omega^2
\end{bmatrix}
\begin{bmatrix}
x_1\\[0.1cm]
x_2
\end{bmatrix}
= 0
\end{equation}
$$

$$
\begin{equation}
det
\begin{bmatrix}
3\omega_o^2 - \omega^2 & -\omega_o^2\\[0.1cm]
-\omega_o^2 & \omega_o^2 - \omega^2
\end{bmatrix}
= 0
\end{equation}
$$

$$
\begin{align}
\left ( 3\omega_o^2 - \omega^2 \right ) \left ( \omega_o^2 - \omega^2 \right ) - \omega_o^4 &= 0\\[0.1cm]
3\omega_o^4 - \omega^2 \omega_o^2 - 3\omega_o^2 \omega^2 + \omega^4 - \omega_o^4 &= 0\\[0.1cm]
2\omega_o^4 - 4\omega_o^2 \omega^2 + \omega^4 &= 0
\end{align}
$$

Let $$\xi = \omega^2$$. Then

$$
\begin{equation}
\xi^2 - 4\omega_o^2 \xi + 2 \omega_o^4 = 0
\end{equation}
$$

We can solve for $$\xi$$ using the quadratic formula:

$$
\begin{align}
\xi &= \frac{4\omega_o^2 \pm \sqrt{16\omega_o^4 - 8\omega_o^4}}{2}\\[0.1cm]
&= 2 \omega_o^2 \pm \frac{\sqrt{8\omega_o^4}}{2}\\[0.1cm]
&= 2 \omega_o^2 \pm \omega_o^2 \sqrt{2}
\end{align}
$$

$$
\begin{equation}
\omega^2 = \omega_o^2 \left ( 2 \pm \sqrt{2} \right )
\end{equation}
$$

Now we can solve for the corresponding eigenvector for each eigenvalue. First we can solve for the eigenvector corresponding to $$\omega^2 = \omega_o^2 \left ( 2 + \sqrt{2} \right )$$:

$$
\begin{equation}
\begin{bmatrix}
3\omega_o^2 - \omega_o^2 \left ( 2 + \sqrt{2} \right ) & -\omega_o^2\\[0.1cm]
-\omega_o^2 & \omega_o^2 - \omega_o^2 \left ( 2 + \sqrt{2} \right )
\end{bmatrix}
\begin{bmatrix}
x_1\\[0.1cm]
x_2
\end{bmatrix}
= 0
\end{equation}
$$

$$
\begin{equation}
\begin{bmatrix}
\omega_o^2 - \omega_o^2 \sqrt{2} & -\omega_o^2\\[0.1cm]
-\omega_o^2 & -\omega_o^2 - \omega_o^2 \sqrt{2}
\end{bmatrix}
\begin{bmatrix}
x_1\\[0.1cm]
x_2
\end{bmatrix}
= 0
\end{equation}
$$

$$
\begin{equation}
\begin{bmatrix}
1 - \sqrt{2} & -1\\[0.1cm]
-1 & -1 - \sqrt{2}
\end{bmatrix}
\begin{bmatrix}
x_1\\[0.1cm]
x_2
\end{bmatrix}
= 0
\end{equation}
$$

$$
\begin{equation}
\left ( 1 - \sqrt{2} \right ) x_1 = x_2
\end{equation}
$$

Now we can solve for the eigenvector corresponding to $$\omega^2 = \omega_o^2 \left ( 2 - \sqrt{2} \right )$$:

$$
\begin{equation}
\begin{bmatrix}
3\omega_o^2 - \omega_o^2 \left ( 2 - \sqrt{2} \right ) & -\omega_o^2\\[0.1cm]
-\omega_o^2 & \omega_o^2 - \omega_o^2 \left ( 2 - \sqrt{2} \right )
\end{bmatrix}
\begin{bmatrix}
x_1\\[0.1cm]
x_2
\end{bmatrix}
= 0
\end{equation}
$$

$$
\begin{equation}
\begin{bmatrix}
\omega_o^2 + \omega_o^2 \sqrt{2} & -\omega_o^2\\[0.1cm]
-\omega_o^2 & -\omega_o^2 + \omega_o^2 \sqrt{2}
\end{bmatrix}
\begin{bmatrix}
x_1\\[0.1cm]
x_2
\end{bmatrix}
= 0
\end{equation}
$$

$$
\begin{equation}
\begin{bmatrix}
1 + \sqrt{2} & -1\\[0.1cm]
-1 & -1 + \sqrt{2}
\end{bmatrix}
\begin{bmatrix}
x_1\\[0.1cm]
x_2
\end{bmatrix}
= 0
\end{equation}
$$

$$
\begin{equation}
\left (1 + \sqrt{2} \right ) x_1 = x_2
\end{equation}
$$

Thus, the two normal modes for the double pendulum at small angle amplitude are:

$$
\begin{equation}
\eta_1(t) = c_1
\begin{bmatrix}
1\\[0.1cm]
1 - \sqrt{2}
\end{bmatrix}
cos(\sqrt{2 + \sqrt{2}}\omega_o t + \delta_1)
\end{equation}
$$

$$
\begin{equation}
\eta_2(t) = c_2
\begin{bmatrix}
1\\[0.1cm]
1 + \sqrt{2}
\end{bmatrix}
cos(\sqrt{2 - \sqrt{2}}\omega_o t + \delta_2)
\end{equation}
$$

<div style="text-align:center" markdown="1">
![Till Next Week!]({{ site.url }}/assets/images/2015-08-09/next-week.png)
</div>
