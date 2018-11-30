---
layout: post
comments: true
title: Reduced Mass and Binary Star Systems - Part 2
difficulty: medium
category: [Classical Mechanics]
tags: [Derivation]
description: I derive the equations that describe the orbit of a binary star system.
---

### Background

Hello all! Today, I continue my discussion of binary star systems. Recall that last week I introduced the problem of two orbiting massive bodies. We explored the concept of reduced mass and used it to derive an expression for the motion of this system. We found that by recasting the problem in terms of the total mass $$M = M_1 + M_2$$ and the relative distance $$\vec{r} = \vec{r}_2 - \vec{r}_1$$, the orbits of two bodies can be written in a form similar to that of the orbit for one body around a very massive object:

$$
\begin{equation}
- \frac{GM}{r^3} \vec{r} = \frac{d^2 \vec{r}}{dt^2}
\end{equation}
$$

Since gravity is a radial force, we can rewrite the radial vector as $$\vec{r} = r \hat{r}$$. Then:

$$
\begin{equation}
- \frac{GM}{r^2} \hat{r} = \frac{d^2 \vec{r}}{dt^2}
\end{equation}
$$

Our goal for today is to come up with a solution to this expression.

### Spherical Coordinates

Let's take a moment to think about what system of coordinates we want to use. Since we are studying orbiting motion, it makes sense to use either spherical or cylindrical coordinates. Cartesian coordinates are not as useful to us in this case because the expression $$r = \sqrt{x^2 + y^2 + z^2}$$ can make the math very tedious. Since we are dealing with a radial force, I am going to use spherical coordinates.

The derivation and description of all of the spherical components and unit vectors would be a blog post in an of itself, so I will save it for a later date. I refer to [Wolfram Mathworld](http://mathworld.wolfram.com/SphericalCoordinates.html) for the relevant properties of the spherical coordinate system. Specifically, in the differential equation above, we are looking for a second derivative of position with respect to time:

$$
\begin{equation}
\frac{d^2 \vec{r}}{dt^2} = \left ( \ddot{r} - r\dot{\phi}^2 - rsin^2\phi \dot{\theta}^2 \right ) \hat{r} + \left ( 2sin \phi \dot{\theta} \dot{r} + 2r cos\phi \dot{\theta}\dot{\phi} + r sin\phi \ddot{\theta} \right ) \hat{\theta} + \left ( 2 \dot{r} \dot{\phi} + r \ddot{\phi} - r sin\phi cos\phi \dot{\theta}^2 \right ) \hat{\phi}
\end{equation}
$$

Let's think about this situation though. Since two bodies are orbiting each other, we can simplify our analysis by assuming that all of the motion of the bodies occurs in the xy-plane. Thus, we can eliminate all $$\phi$$ dependence by setting $$\phi = \pi/2$$ radians and $$\dot{\phi} = 0$$. Remember, $$\phi$$ is not zero because of our convention; $$\phi = \pi/2$$ radians will put us in the xy plane.

$$
\begin{equation}
\frac{d^2 \vec{r}}{dt^2} = \left ( \ddot{r} - r \dot{\theta}^2 \right ) \hat{r} + \left ( 2 \dot{\theta} \dot{r} + r \ddot{\theta} \right ) \hat{\theta} + \left ( 0 \right ) \hat{\phi}
\end{equation}
$$

Since neither the differential equation we are trying to solve nor the expression for acceleration above have any dependence on $$\phi$$, we will completely ignore it:

$$
\begin{equation}
\frac{d^2 \vec{r}}{dt^2} = \left ( \ddot{r} - r \dot{\theta}^2 \right ) \hat{r} + \left ( 2 \dot{\theta} \dot{r} + r \ddot{\theta} \right ) \hat{\theta}
\end{equation}
$$

### Solving for the Orbits

#### Tangential Equation

We can now plug in the expression for acceleration into the differential equation of interest:

$$
\begin{equation}
-\frac{GM}{r^2} \hat{r} = \left ( \ddot{r} - r \dot{\theta}^2 \right ) \hat{r} + \left ( 2 \dot{\theta} \dot{r} + r \ddot{\theta} \right ) \hat{\theta}
\end{equation}
$$

We see that if we break the expression down into components, we have two equations to solve. Let's analyze the tangential equation first:

$$
\begin{equation}
2 \dot{\theta} \dot{r} + r \ddot{\theta} = 0
\end{equation}
$$

$$
\begin{equation}
2 r \dot{\theta} \dot{r} + r^2 \ddot{\theta} = 0
\end{equation}
$$

$$
\begin{equation}
\frac{d}{dt}\left ( r^2 \dot{\theta} \right ) = 0
\end{equation}
$$

$$
\begin{equation}
r^2 \dot{\theta} = C
\end{equation}
$$

In the final line, C is some constant, meaning that the value $$r^2 \dot{\theta}$$ is a constant of motion.

#### Radial Equation

We can use the previous result to solve the radial equation:

$$
\begin{align}
-\frac{GM}{r^2} &= \ddot{r} - r \dot{\theta}^2\\[0.1cm]
&= \ddot{r} - r \left ( \frac{C}{r^2} \right )^2\\[0.1cm]
&= \ddot{r} - \frac{C^2}{r^3}\\[0.1cm]
\end{align}
$$

Suppose that $$r = u^{-1}$$. The first time derivative of r becomes:

$$
\begin{align}
\dot{r} &= \frac{d}{dt} \left ( \frac{1}{u} \right )\\[0.1cm]
&= -\frac{\dot{u}}{u^2}\\[0.1cm]
&= -r^2 \dot{u}\\[0.1cm]
&= -r^2 \frac{du}{d\theta} \frac{d\theta}{dt}\\[0.1cm]
&= -r^2 \frac{du}{d\theta} \frac{C}{r^2}\\[0.1cm]
&= -C \frac{du}{d\theta}
\end{align}
$$

And the second time derivative of r becomes:

$$
\begin{align}
\ddot{r} &= \frac{d^2}{dt^2} \left ( \frac{1}{u} \right )\\[0.1cm]
&= \frac{d}{dt} \left ( -C \frac{du}{d\theta} \right )\\[0.1cm]
&= -C \frac{d}{dt} \left ( \frac{du}{d\theta} \right )\\[0.1cm]
&= -C \left ( \frac{d^2 u}{d\theta^2} \frac{d\theta}{dt} \right )\\[0.1cm]
&= - C \left ( \frac{d^2 u}{d\theta^2} Cu^2 \right )\\[0.1cm]
&= - C^2 u^2 \frac{d^2 u}{d\theta^2}\\[0.1cm]
\end{align}
$$

Plugging these expressions back into the radial equation yields:

$$
\begin{align}
-\frac{GM}{r^2} &= \ddot{r} - \frac{C^2}{r^3}\\[0.1cm]
-GMu^2 &= - C^2 u^2 \frac{d^2 u}{d\theta^2} - C^2 u^3\\[0.1cm]
\frac{GM}{C^2} &= \frac{d^2 u}{d\theta^2} + u\\[0.1cm]
\end{align}
$$

We now have a second order, non-homogeneous differential equation with constant coefficients. We can solve this in a number of ways. I am first going to find the complementary solution using the [characteristic equation](http://tutorial.math.lamar.edu/Classes/DE/ComplexRoots.aspx). Then, I will determine the particular solution by using the [method of undetermined coefficients](http://tutorial.math.lamar.edu/Classes/DE/UndeterminedCoefficients.aspx) (and inspection):

Suppose I rewrite the differential equation above without the non-homogeneous term:

$$
\begin{equation}
\alpha \frac{d^2 u}{d\theta^2} + \beta \frac{d u}{d\theta} + \gamma u = 0
\end{equation}
$$

The coefficients are $$\alpha = 1$$, $$\beta = 0$$, $$\gamma = 1$$. Then:

$$
\begin{equation}
\lambda = \frac{-\beta \pm \sqrt{\beta^2 - 4\alpha \gamma}}{2\alpha} = \frac{\pm \sqrt{-4}}{2} = \pm i
\end{equation}
$$

Since the roots are complex, we get the following complementary solution:

$$
u(\theta) = C_1 cos\theta + C_2 sin\theta = C_3 cos(\theta + \zeta)
$$

where $$\zeta$$ is some arbitrary phase and $$C_1$$, $$C_2$$, and $$C_3$$ are arbitrary constants. By inspection, we see that the general solution to the non-homogeneous equation becomes:

$$
u(\theta) = C_3 cos(\theta + \zeta) + \frac{GM}{C^2}
$$

If you don't believe me, plug this solution into the differential equation and see if it works :)

Let's find a particular solution to this problem. First, we can rotate the coordinate system about the z-axis such that $$\zeta = 0$$:

$$
u(\theta) = C_3 cos(\theta) + \frac{GM}{C^2}
$$

Next, we can express any general coordinate $$C_3$$ as:

$$
\begin{equation}
C_3 \equiv -e \frac{GM}{C^2}
\end{equation}
$$

where -e is some other constant. The final expression becomes:

$$
u(\theta) = -\frac{GMe}{C^2} cos(\theta) + \frac{GM}{C^2} = \frac{GM}{C^2} \left [ 1 - ecos\theta \right ]
$$

We can take the inverse of this expression to find r:

$$
r(\theta) = \frac{C^2}{GM \left [1 - ecos\theta \right ]}
$$

### Conclusions

Ok, we got a lot done today. We solved for the time rate of change of $$\theta$$ and then the dependence of the radius r on $$\theta$$. But we still aren't done yet. Next week, we will finish up this problem by actually taking a closer look at what these results really mean. We will evaluate what the constant C is and figure out why we bother to use the variable e in the final expression for radius.

See you next week!