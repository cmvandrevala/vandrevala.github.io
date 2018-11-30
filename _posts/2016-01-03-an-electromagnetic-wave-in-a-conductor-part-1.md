---
layout: post
comments: true
title: An Electromagnetic Wave in a Conductor (Part 1)
difficulty: medium
category: [Electromagnetism]
tags: [Derivation, Plasma, Oscillations, Electromagnetic, Wave, Conductor, Propagation, Complex Permittivity, Skin Depth]
description: How does an electromagnetic wave propagate within a conductor?
---

### Introduction

One of the most important conclusions that comes from Maxwell's equations is that electric and magnetic fields can propagate as waves. However, this is only half the story - the propagation of light in a vacuum is very different from the propagation of light in a dielectric which is very different from the propagation of light in a conductor. Let's take a moment to analyze the propagation of light in a conductor.

### Maxwell's Equations

We will start off with Maxwell's equations in an [isotropic](https://en.wikipedia.org/wiki/Isotropy) medium with permittivity $$\epsilon$$ and permeability $$\mu$$.

$$
\begin{equation}
\nabla \cdot \vec{E} = \frac{\rho}{\epsilon}
\end{equation}
$$

$$
\begin{equation}
\nabla \cdot \vec{B} = 0
\end{equation}
$$

$$
\begin{equation}
\nabla \times \vec{E} = -\frac{d\vec{B}}{dt}
\end{equation}
$$

$$
\begin{equation}
\nabla \times \vec{B} = \mu \vec{J} + \mu \epsilon \frac{d\vec{E}}{dt}
\end{equation}
$$

Light is an electromagnetic wave, meaning that it can be modeled as a pair of oscillating electric and magnetic fields. The magnitude of the electric field is much larger than the magnitude of the magnetic field, so we will ignore the magnetic field for now.

The electric field won't do much to a dielectric or vacuum since there are no free charges to move around. However, the free charges in a metal can move around in response to the electric field, changing the properties of the propagation of light. We are going to assume that the current density ($$\vec{J}$$) only depends on the electric field from the propagating wave ($$\vec{E}$$) and the conductivity of the metal ($$\sigma$$). The simplest form of this relationship is $$\vec{J} = \sigma \vec{E}$$. Additionally, we know that excess charge within a conductor is equal to zero. Thus, Maxwell's equations become:

$$
\begin{equation}
\nabla \cdot \vec{E} = 0
\end{equation}
$$

$$
\begin{equation}
\nabla \cdot \vec{B} = 0
\end{equation}
$$

$$
\begin{equation}
\nabla \times \vec{E} = -\frac{d\vec{B}}{dt}
\end{equation}
$$

$$
\begin{equation}
\nabla \times \vec{B} = \mu \sigma \vec{E} + \mu \epsilon \frac{d\vec{E}}{dt}
\end{equation}
$$

Let's focus on the third equation in the group above (the curl of electric field). We can take the curl of each side of that equation and use a [vector calculus identity](https://en.wikipedia.org/wiki/Vector_calculus_identities) to simplify.

$$
\begin{equation}
\nabla \times \left ( \nabla \times \vec{E} \right ) = \nabla \times \left ( -\frac{d\vec{B}}{dt} \right )
\end{equation}
$$

$$
\begin{equation}
\nabla \left ( \nabla \cdot \vec{E} \right ) - \nabla^2 \vec{E} = - \frac{d}{dt} \left ( \nabla \times \vec{B} \right )
\end{equation}
$$

We can now use Maxwell's equations for the curl of $$\vec{B}$$ and the divergence of $$\vec{E}$$ to simplify this expression further.

$$
\begin{equation}
0 - \nabla^2 \vec{E} = - \frac{d}{dt} \left ( \mu \sigma \vec{E} + \mu \epsilon \frac{d\vec{E}}{dt} \right )
\end{equation}
$$

$$
\begin{equation}
- \nabla^2 \vec{E} = - \frac{d}{dt} \left ( \mu \sigma \vec{E} + \mu \epsilon \frac{d\vec{E}}{dt} \right )
\end{equation}
$$

$$
\begin{equation}
\nabla^2 \vec{E} = \mu \sigma \frac{d \vec{E}}{dt} + \mu \epsilon \frac{d^2 \vec{E}}{dt^2}
\end{equation}
$$

The electric field in an electromagnetic wave oscillates with some frequency $$\omega$$ and has some wavevector $$\vec{k}$$. Thus, let's assume that our electric field has the form $$\vec{E} = \vec{E}_o exp[i(\vec{k}\cdot \vec{r} + \omega t)]$$ where $$\vec{E}_o$$ is the polarization of the electromagnetic wave and $$\vec{r}$$ is a position within the conducting material. Plugging that expression into the equation above yields:

$$
\begin{equation}
\nabla^2 \left [ \vec{E}_o e^{i(\vec{k}\cdot\vec{r}+\omega t)} \right ] = \mu \sigma \frac{d}{dt}\left [ \vec{E}_o e^{i(\vec{k}\cdot\vec{r}+\omega t)} \right ] + \mu \epsilon \frac{d^2}{dt^2}\left [ \vec{E}_o e^{i(\vec{k}\cdot\vec{r}+\omega t)} \right ]
\end{equation}
$$

$$
\begin{equation}
\nabla^2 \left [ \vec{E}_o e^{i\vec{k}\cdot\vec{r}}e^{i\omega t} \right ] = \mu \sigma \frac{d}{dt}\left [ \vec{E}_o e^{i\vec{k}\cdot\vec{r}}e^{i\omega t} \right ] + \mu \epsilon \frac{d^2}{dt^2}\left [ \vec{E}_o e^{i\vec{k}\cdot\vec{r}}e^{i\omega t} \right ]
\end{equation}
$$

$$
\begin{equation}
\vec{E}_o e^{i\omega t} \nabla^2 \left [ e^{i\vec{k}\cdot\vec{r}} \right ] = \mu \sigma \vec{E}_o e^{i\vec{k}\cdot\vec{r}} \frac{d}{dt}\left [ e^{i \omega t} \right ] + \mu \epsilon \vec{E}_o e^{i\vec{k}\cdot \vec{r}} \frac{d^2}{dt^2}\left [ e^{i\omega t} \right ]
\end{equation}
$$

We can expand $$\vec{k}\cdot\vec{r}$$ and $$\nabla^2$$ in order to solve for the Laplacian on the left side of the equation.

$$
\begin{align}
\vec{E}_o e^{i\omega t} \nabla^2 \left [ e^{i\vec{k}\cdot\vec{r}} \right ] &= \vec{E}_o e^{i\omega t} \left [ \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2} \right ] \left [ e^{i(k_xx+k_yy+k_zz)} \right ]\\
&= \vec{E}_o e^{i\omega t} \left [ \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2} \right ] \left [ e^{ik_xx} e^{ik_yy} e^{ik_zz} \right ]\\
&= \vec{E}_o e^{i\omega t} \left [ \frac{\partial^2}{\partial x^2} \left ( e^{ik_xx} e^{ik_yy} e^{ik_zz} \right ) + \frac{\partial^2}{\partial y^2} \left ( e^{ik_xx} e^{ik_yy} e^{ik_zz} \right ) + \frac{\partial^2}{\partial z^2} \left ( e^{ik_xx} e^{ik_yy} e^{ik_zz} \right ) \right ]\\
&= \vec{E}_o e^{i\omega t} \left [ e^{ik_yy} e^{ik_zz} \frac{\partial^2}{\partial x^2} \left ( e^{ik_xx} \right ) + e^{ik_xx}e^{ik_zz} \frac{\partial^2}{\partial y^2} \left ( e^{ik_yy} \right ) + e^{ik_xx} e^{ik_yy} \frac{\partial^2}{\partial z^2} \left ( e^{ik_zz} \right ) \right ]\\
&= \vec{E}_o e^{i\omega t} \left [ -k_x^2 e^{ik_xx} e^{ik_yy} e^{ik_zz} - k_y^2 e^{ik_xx}e^{ik_yy} e^{ik_zz} - k_z^2 e^{ik_xx} e^{ik_yy} e^{ik_zz} \right ]\\
&= - \vec{E}_o e^{i\omega t} \left [ k_x^2 + k_y^2 + k_z^2 \right ] e^{ik_xx} e^{ik_yy} e^{ik_zz}\\
&= - k^2 \vec{E}_o e^{i\omega t} e^{i(k_xx+k_yy+k_zz)}\\
&= - k^2 \vec{E}_o e^{i\omega t} e^{i\vec{k}\cdot\vec{r}}\\
&= - k^2 \vec{E}_o e^{i(\vec{k}\cdot\vec{r}+\omega t)}
\end{align}
$$

We can use this result to find the relationship between k and $$\omega$$.

$$
\begin{equation}
\vec{E}_o e^{i\omega t} \nabla^2 \left [ e^{i\vec{k}\cdot\vec{r}} \right ] = \mu \sigma \vec{E}_o e^{i\vec{k}\cdot\vec{r}} \frac{d}{dt}\left [ e^{i \omega t} \right ] + \mu \epsilon \vec{E}_o e^{i\vec{k}\cdot \vec{r}} \frac{d^2}{dt^2}\left [ e^{i\omega t} \right ]
\end{equation}
$$

$$
\begin{equation}
- k^2 \vec{E}_o e^{i(\vec{k}\cdot\vec{r}+\omega t)} = \mu \sigma \vec{E}_o e^{i\vec{k}\cdot\vec{r}} \left [ i\omega e^{i \omega t} \right ] + \mu \epsilon \vec{E}_o e^{i\vec{k}\cdot \vec{r}} \left [ -\omega^2 e^{i\omega t} \right ]
\end{equation}
$$

$$
\begin{equation}
- k^2 \vec{E}_o e^{i(\vec{k}\cdot\vec{r}+\omega t)} = i\omega \mu \sigma \vec{E}_o e^{i(\vec{k}\cdot\vec{r}+\omega t)} - \omega^2 \mu \epsilon \vec{E}_o e^{i(\vec{k}\cdot\vec{r}+\omega t)}
\end{equation}
$$

Dividing through by $$\vec{E}_o e^{i(\vec{k}\cdot\vec{r}+\omega t)}$$ yields:

$$
\begin{equation}
- k^2 = i\omega \mu \sigma - \omega^2 \mu \epsilon
\end{equation}
$$

$$
\begin{equation}
k^2 = \omega^2 \mu \epsilon - i\omega \mu \sigma
\end{equation}
$$

$$
\begin{equation}
k = \sqrt{ \omega^2 \mu \epsilon - i\omega \mu \sigma }
\end{equation}
$$

Oftentimes, this relationship is written as:

$$
\begin{equation}
\widetilde{k} = \omega \sqrt{ \mu \epsilon - \frac{i \mu \sigma}{\omega} } = \frac{\widetilde{n} \omega}{c}
\end{equation}
$$

where $$\widetilde{k}$$ is a complex wavevector and $$\widetilde{n}$$ is a complex refractive index.

### Same Problem, Different Convention

I have often seen theorists use the convention $$\vec{E} = \vec{E}_o exp[i(\vec{k}\cdot \vec{r} - \omega t)]$$ when describing the oscillations of the electric field. Really, this is the same problem as above - the only difference is that the $$i\omega\mu\sigma$$ term will pick up an extra negative sign and you will get:

$$
\begin{equation}
\widetilde{k} = \omega \sqrt{ \mu \epsilon + \frac{i \mu \sigma}{\omega} } = \frac{\widetilde{n} \omega}{c}
\end{equation}
$$

Try going through it yourself if you feel like you need some practice :)

### What Exactly Does This Mean?

Next week, we will discuss what a complex index of refraction actually means. It might seem complicated, but really, it has a simple interpretation. Until next week!
