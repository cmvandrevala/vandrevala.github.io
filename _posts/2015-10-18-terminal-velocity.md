---
layout: post
comments: true
title: Terminal Velocity
difficulty: medium
category: [Classical Mechanics]
tags: [Derivation]
description: Objects don't usually fall in a vacuum! I derive an expression for the terminal velocity of a falling object for Stokes' and turbulent drag.
---

### Introduction

Students of introductory physics are well-versed in projectile motion. You throw a ball up into the air, and it falls back down, making a nice parabolic arc. We can calculate all sorts of properties of the thrown ball including its maximum height, its time of flight, and the horizontal distance it travels over the course of its motion. This type of motion might work very well when you are on the surface of the moon, but it is not accurate when there is a non-negligble atmosphere.

<div style="text-align:center" markdown="1">
![Like Here on Earth!]({{ site.url }}/assets/images/2015-10-18/earth.png)
</div>

Let's take a look at the motion of a projectile when there is a drag force acting on it. The solutions in this post are applicable in other settings besides the analysis of falling objects; they work anytime an object travels through a medium that produces a retarding force dependent on velocity.

### The Drag Coefficient

Drag is complicated. Really complicated.

There are all sorts of factors that influence the amount of drag a moving object feels including its shape, its speed, its orientation in the surrounding fluid, and the properties of the fluid itself. Some people spend their entire careers calculating the drag properties of different objects in different fluids (I'm looking at you, aerospace engineers).

We are going to use a simplified model of drag in our derivations; the drag force is going to be equal to:

$$
\begin{equation}
\vec{F}_D = - C_d v^n \hat{v}
\end{equation}
$$

In the equation above $$v^n$$ tells us that the magnitude of the drag force is equal to the speed of the object ($$v$$) to some power ($$n$$). The $$-\hat{v}$$ tells us that the drag force is opposite to the object's direction of motion. All of the complicated details involving shape, fluid properties, orientation, etc. are included in that $$C_d$$ coefficient. Yeah, if you are an engineer, that $$C_d$$ is extremely important. But that is a job for a different blog (maybe Muffin Engineering?).

The falling object that we are going to analyze has only two forces acting on it - a gravitational force ($$F_G$$) and a drag force ($$F_D$$). The free-body diagram for the falling object is given in the picture below. I will set the upward direction as positive and the downward direction as negative.

<div style="text-align:center" markdown="1">
![Free Body Diagram]({{ site.url }}/assets/images/2015-10-18/fbd.png)
</div>

### Stokes' Drag

In Stokes' drag the resistive force is proportional to the velocity of the moving object (i.e. $$n=1$$). Thus, the drag force is equal to the drag coefficient multiplied by the negative of the velocity of the moving object.

$$
\begin{equation}
\vec{F}_D = -C_d \vec{v}
\end{equation}
$$

We can use [Newton's second law](http://www.physicsclassroom.com/class/newtlaws/Lesson-3/Newton-s-Second-Law) to solve for the acceleration of the object.

$$
\begin{equation}
\vec{F}_D + \vec{F}_G = \vec{F}_{net}
\end{equation}
$$

$$
\begin{equation}
- C_d \vec{v} + m\vec{g} = m\vec{a}
\end{equation}
$$

The acceleration is just the time derivative of velocity.

$$
\begin{equation}
- C_d \vec{v} + m\vec{g} = m \frac{d\vec{v}}{dt}
\end{equation}
$$

I can rewrite the force equation in terms of the speed ($$v$$) rather than velocity ($$\vec{v}$$). In order to do this, I have to add in the appropriate negative signs to each term.

$$
\begin{equation}
C_d v - mg = - m \frac{dv}{dt}
\end{equation}
$$

$$
\begin{equation}
g - \frac{C_d}{m} v = \frac{dv}{dt}
\end{equation}
$$

I will also let $$\gamma \equiv C_d/m$$, just to tidy up our equation.

$$
\begin{equation}
g - \gamma v = \frac{dv}{dt}
\end{equation}
$$

This is a [separable differential equation](http://tutorial.math.lamar.edu/Classes/DE/Separable.aspx) that we can solve pretty easily! Move all of the v's to one side of the equals sign and move all of the t's to the other. You get:

$$
\begin{equation}
dt = \frac{dv}{g - \gamma v}
\end{equation}
$$

Now take the integral of each side.

$$
\begin{equation}
\int dt = \int \frac{dv}{g - \gamma v}
\end{equation}
$$

The left-hand side of this equation is easy to solve; it simply equals $$t$$. We can use [u-substitution](http://tutorial.math.lamar.edu/Classes/CalcI/SubstitutionRuleIndefinite.aspx) for the right-hand side of the equation. Let $$u = g - \gamma v$$ and $$du = -\gamma dv$$. Then:

$$
\begin{equation}
t = -\frac{1}{\gamma} \int \frac{du}{u}
\end{equation}
$$

$$
\begin{equation}
-\gamma t = \int \frac{du}{u}
\end{equation}
$$

$$
\begin{equation}
-\gamma t = ln \left | u \right | + C
\end{equation}
$$

Remember, since this is an [improper integral](https://en.wikipedia.org/wiki/Improper_integral), we need to include the constant C. It is usually easier to work with exponential terms than logarithmic terms. Thus, I will rewrite the expression as:

$$
\begin{equation}
e^{-\gamma t} = e^{ln \left | u \right | + C}
\end{equation}
$$

$$
\begin{equation}
e^{-\gamma t} = e^{ln \left | u \right |} e^C
\end{equation}
$$

$$
\begin{equation}
e^{-\gamma t} = u C^*
\end{equation}
$$

$$C^* = e^C$$ is just a constant that we can solve for using initial conditions. Plugging in the expression for u yields:

$$
\begin{equation}
e^{-\gamma t} = C^* (g - \gamma v)
\end{equation}
$$

We will assume that at time $$t = 0$$, the initial speed is $$v = v_o$$.

$$
\begin{equation}
e^0 = 1 = C^* (g - \gamma v_o)
\end{equation}
$$

$$
\begin{equation}
C^* = (g - \gamma v_o)^{-1}
\end{equation}
$$

The final expression for the speed of the object as a function of time is:

$$
\begin{equation}
e^{-\gamma t} = C^* (g - \gamma v)
\end{equation}
$$

$$
\begin{equation}
e^{-\gamma t} = \frac{g - \gamma v}{g - \gamma v_o}
\end{equation}
$$

$$
\begin{equation}
\left (g - \gamma v_o \right ) e^{-\gamma t} = g - \gamma v
\end{equation}
$$

$$
\begin{equation}
\left (g - \gamma v_o \right ) e^{-\gamma t} - g = - \gamma v
\end{equation}
$$

$$
\begin{equation}
-\frac{1}{\gamma}\left (g - \gamma v_o \right ) e^{-\gamma t} + \frac{g}{\gamma} = v
\end{equation}
$$

Let's just tidy up this final expression a little bit:

$$
\begin{equation}
v(t) = \frac{g}{\gamma} - \frac{1}{\gamma}\left (g - \gamma v_o \right ) e^{-\gamma t}
\end{equation}
$$

$$
\begin{equation}
v(t) = \frac{g}{\gamma} \left ( 1 - e^{-\gamma t} \right ) + v_o e^{-\gamma t}
\end{equation}
$$

You might notice that my final expression does not exactly match what you see on many other sites; I have that extra exponential decay term that takes the initial speed of the object into account. Don't worry - if the initial speed of the object is equal to zero, we recover the "traditional" expression for the velocity.

$$
\begin{equation}
v(t) = \frac{g}{\gamma} \left ( 1 - e^{-\gamma t} \right )
\end{equation}
$$

From here, you can take the integral of velocity to get the position as a function of time. Or you can take the derivative of velocity to get the acceleration as a function of time.

### Turbulent Drag

In turbulent drag the resistive force is proportional to the speed squared of the moving object (i.e. $$n=2$$).

$$
\begin{equation}
\vec{F}_D = -C_d v^2 \hat{v}
\end{equation}
$$

Otherwise, our analysis is pretty much identical to what we did in the previous section. First, we will use Newton's second law to solve for the acceleration.

$$
\begin{equation}
\vec{F}_D + \vec{F}_G = \vec{F}_{net}
\end{equation}
$$

$$
\begin{equation}
- C_d v^2 \hat{v} + m\vec{g} = m\vec{a}
\end{equation}
$$

$$
\begin{equation}
- C_d v^2 \hat{v} + m\vec{g} = m \frac{d\vec{v}}{dt}
\end{equation}
$$

Once again, I can rewrite the force equation in terms of the speed ($$v$$).

$$
\begin{equation}
C_d v^2 - mg = - m \frac{dv}{dt}
\end{equation}
$$

$$
\begin{equation}
g - \frac{C_d}{m} v^2 = \frac{dv}{dt}
\end{equation}
$$

I will let $$\gamma \equiv C_d/m$$.

$$
\begin{equation}
g - \gamma v^2 = \frac{dv}{dt}
\end{equation}
$$

This is another [separable differential equation](http://tutorial.math.lamar.edu/Classes/DE/Separable.aspx):

$$
\begin{equation}
dt = \frac{dv}{g - \gamma v^2}
\end{equation}
$$

$$
\begin{equation}
\int dt = \int \frac{dv}{g - \gamma v^2}
\end{equation}
$$

$$
\begin{equation}
t = \int \frac{dv}{g - \gamma v^2}
\end{equation}
$$

I will admit, the right hand side of this equation is more difficult to solve than the one in the previous section. I just used a table of integrals to look up the answer. It turned out to be an inverse [hyperbolic tangent function](http://mathworld.wolfram.com/HyperbolicTangent.html).

$$
\begin{equation}
t = \frac{1}{\sqrt{g\gamma}} tanh^{-1} \left ( \sqrt{\frac{\gamma}{g}} v \right ) + C
\end{equation}
$$

$$
\begin{equation}
\sqrt{g\gamma} t = tanh^{-1} \left ( \sqrt{\frac{\gamma}{g}} v \right ) + C^*
\end{equation}
$$

Once again, when $$t = 0$$, the speed equals $$v = v_o$$.

$$
\begin{equation}
0 = tanh^{-1} \left ( \sqrt{\frac{\gamma}{g}} v_o \right ) + C^*
\end{equation}
$$

$$
\begin{equation}
C^* = -tanh^{-1} \left ( \sqrt{\frac{\gamma}{g}} v_o \right )
\end{equation}
$$

Then:

$$
\begin{equation}
\sqrt{g\gamma} t = tanh^{-1} \left ( \sqrt{\frac{\gamma}{g}} v \right ) - tanh^{-1} \left ( \sqrt{\frac{\gamma}{g}} v_o \right )
\end{equation}
$$

Yuck... You can simplify that general answer if you so wish. However, if $$v_o = 0$$, the answer is actually not too bad.

$$
\begin{equation}
\sqrt{g\gamma} t = tanh^{-1} \left ( \sqrt{\frac{\gamma}{g}} v \right )
\end{equation}
$$

$$
\begin{equation}
tanh \left ( \sqrt{g\gamma} t \right )= \sqrt{\frac{\gamma}{g}} v
\end{equation}
$$

$$
\begin{equation}
v(t) = \sqrt{\frac{g}{\gamma}} tanh \left ( \sqrt{g\gamma} t \right )
\end{equation}
$$

Again, you can take a [derivative](http://www.wolframalpha.com/input/?i=derivative+tanh%28x%29) to find acceleration and an [integral](http://www.wolframalpha.com/input/?i=integral+tanh%28x%29) to find position. Doing this is not so bad - hyperbolic trig functions actually behave rather well.

### Other Drags

Every once in awhile, the drag force in your problem is particularly weird. Maybe $$n$$ is larger than two. Maybe $$n$$ is not an [integer](https://en.wikipedia.org/wiki/Integer), but instead some general [real number](https://en.wikipedia.org/wiki/Real_number). Maybe the general form of the drag force that I gave above just does not work at all, and you need to express $$F_D$$ as some complicated function of velocity.

At that point, you are better off using Matlab or some other program to solve the differential equation numerically. Could you get a general analytic form for the solution? Yeah, but it will only make sense if you love using [hypergeometric functions](https://en.wikipedia.org/wiki/Hypergeometric_function).

Just use Matlab :)

