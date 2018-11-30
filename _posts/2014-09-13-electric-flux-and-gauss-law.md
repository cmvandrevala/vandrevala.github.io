---
layout: post
comments: true
title: Electric Flux, Symmetry, and Gauss's Law
difficulty: easy
category: [Electromagnetism]
tags: [Video]
description: The nuances of Gauss's law can be rather strange to students who are learning about it for the first time.  I go over some of the properties of the electric flux on a Gaussian surface and why symmetry is so important.
---

<center><iframe width="420" height="315" src="https://www.youtube.com/embed/d8mz2BRe_Tk" frameborder="0" allowfullscreen></iframe></center><br />

This past week we covered Gauss's law in my introductory physics classes.  After teaching Gauss's law for a number of years (as well as thinking back to when I was learning it), I know that it can be pretty difficult for students to grasp the nuances of what is actually going on.  It is probably the first time that they are given a real-world example of when we actually use the abstract concept of a vector field over a closed surface.

I want to focus on one specific part of Gauss's law this week: the electric flux on the Gaussian surface.  Specifically, I want to look at the difference between the total flux over the entire surface and the flux at each individual point on the surface.

### An Overview of Electric Flux and Gauss's Law

Let's start off with electric flux.  The electric flux is simply the amount of electric field passing through a surface.  The expression for electric flux is:

$$
\begin{equation}
\Phi_E = \int \vec{E} \cdot \hat{n} dA
\end{equation}
$$

where $$\vec{E}$$ is the electric field vector, $$dA$$ is a small amount of area, and $$\hat{n}$$ is a unit vector perpendicular to the surface $$dA$$.  The integral tells us that we are adding up the contributions of flux from each tiny area $$dA$$.

Normally in my classes, we work with a simplified form of the flux.  If the electric field is constant in magnitude and direction and the entire surface is flat, then we notice that the vector $$\vec{E}$$ is at some constant angle with respect to vector $$\hat{n}$$ (let's call this angle $$\theta$$).  Thus, the expression for electric flux can be simplified.  Let $$E$$ be the magnitude of $$\vec{E}$$.  The magnitude of $$\hat{n}$$ is one since it is a unit vector.  Then using the following property of the dot product:

$$
\begin{equation}
\vec{A} \cdot \vec{B} = |\vec{A}||\vec{B}|cos\theta
\end{equation}
$$

we can simplify the expression for flux.

$$
\begin{align}
\Phi_E &= \int | \vec{E} | |\hat{n}| dA cos \theta \\[0.1cm]
&= \int E dA cos\theta \\[0.1cm]
&= E cos\theta \int dA \\[0.1cm]
&= EAcos\theta
\end{align}
$$

where $$A$$ is the total area of the surface.  Gauss's Law tells us that the net flux over a closed surface is simply equal to the amount of charge contained within the surface divided by some constant:

$$
\begin{equation}
\oint_S \vec{E} \cdot \hat{n} dA = \frac{Q_{enc}}{\epsilon_o}
\end{equation}
$$

### Net Flux Over the Entire Surface

Just looking at the expression for Gauss's law, we can actually say quite a bit about the flux (and field) over the entire surface.  We know that the net flux is given by $$Q_{enc}/\epsilon_o$$.  By convention, the vector $$\hat{n}$$ points outwards for a closed surface.  Thus, if the flux is positive, then more electric field lines point out from the surface than point in.  If the flux is negative, then more electric field lines point inwards than point out.  Finally, if the flux is zero, then an equal number of electric field lines point in and out.

### Flux at Each Point on the Surface

So you might think that now that we have the flux over the entire surface, we can use it to find the electric flux at each point on the surface.  Sadly, nature is not that kind to us.

For an arbitrary Gaussian surface, we really can't say anything about the flux at each point.  Take a look at the video above for a few examples.

### Enter Symmetry

If we don't know anything about the flux at each point on the Gaussian surface, then why do we care about Gauss's law?  How on earth is it supposed to help us solve real world problems?  The answer is symmetry.  Our goal when using Gauss's law is to try to determine the relationship between all of the points on the Gaussian surface.  The moment that we find a relationship, we have found a symmetry of the system.  Once we have a symmetry of the system, we can solve for specific electric fields.

In my classes I take the time to derive the expressions for Gauss's law after we have exploited spherical and cylindrical symmetry.  For spherical symmetry, we get:

$$
\begin{equation}
E(4\pi r^2) = \frac{Q_{enc}}{\epsilon_o}
\end{equation}
$$

where $$r$$ is the radius of the spherical Gaussian surface and $$4\pi r^2$$ is the surface area of Gaussian surface.  For cylindrical symmetry, we get:

$$
\begin{equation}
E_{top} A_{top} + E_{bottom} A_{bottom} + E_{side} A_{side} = \frac{Q_{enc}}{\epsilon_o}
\end{equation}
$$

where each $$A$$ gives the area of the top, bottom, and side of the cylindrical Gaussian surface.

There are, of course, many other symmetries out there.  You generally see them in a more advanced course on electricity and magnetism.

### Conclusions

Gauss's law is *very* powerful.  We can use it to determine all sorts of properties of electric fields in media.  When we express the electric field of a system in terms of voltage, we can use it to derive [Poisson's equation](http://en.wikipedia.org/wiki/Poisson%27s_equation) or [Laplace's equation](http://en.wikipedia.org/wiki/Laplace%27s_equation).  If we couple Gauss's law with the remaining three [Maxwell's equations](http://en.wikipedia.org/wiki/Maxwell%27s_equations), we can solve for the propagation of light within a material.  However, the reason that Gauss's Law is so powerful is because we exploit symmetry within our system.  We have to remember that without symmetry, Gauss's law really only tells us about the flux as a whole, nothing more.
