---
layout: post
comments: true
title: Plasma Oscillations
difficulty: medium
category: [Electromagnetism]
tags: [Derivation, Plasma, Oscillations, Langmuir, Waves]
description: The electrons within a conductor are not bound to any specific atom; they are free to move around the entire crystal. What happens when you force these electrons to oscillate using an external electric field?
---

### Introduction

You have probably heard that free electrons within a conductor are able to move about the crystal. This makes it possible for conductors to carry currents and thermal energy very efficiently. There are plenty of examples of this in real life. Electrical wires are made out of copper, not wood. The heat sink in your computer is made out of aluminum or copper, not plastic.

Chemists often use the term [metallic bond](https://en.wikipedia.org/wiki/Metallic_bonding) to describe how shared electrons between metallic nuclei can hold metallic atoms together. Physicists use the terms electron liquid or electron gas to describe the free electrons in a metal. An electron liquid includes all of the [Coulomb interactions](https://en.wikipedia.org/wiki/Coulomb%27s_law) between the electrons while an electron gas (also called a free electron gas or a free Fermi gas) does not include these interactions. For now, we are going to focus on the free electron gas - the electrons do not interact with each other and the positive nuceli in the background are assumed to create a nearly uniform potential.

If we were to apply an external electric field to a uniform conductor, the electrons should feel a force in the appropriate direction. If we were to apply an oscillating external electric field to a uniform conductor, the electrons will wiggle with the electric field. These plasma oscillations (sometimes called Langmuir waves after their discoverer, Irving Langmuir) have some very interesting properties.

### The Equation of Motion

Suppose I want to analyze the motion of an electron in an [isotropic](https://en.wikipedia.org/wiki/Isotropy) conductor under an external, oscillating, electric field. We will use the free Fermi gas approximation, so a random electron is only affected by:

- Any damping forces it feels while moving around in the crystal (approximated as linear damping).
- Any binding forces it feels to atoms in the crystal (approximated as a restoring force like that of a spring).
- The external electric field that we apply to the conductor (no approximation necessary).

Let $$\vec{r}(t)$$ denote the position of our electron as a function of time and $$\vec{E}(t)$$ denote the external electric field as a function of time. We can use Newton's second law to determine the equation of motion for the electron in the conductor.

$$
\begin{equation}
\sum \vec{F}(t) = m\vec{a}(t)
\end{equation}
$$

$$
\begin{equation}
-m\Gamma \vec{v}(t) - m\Omega^2 \vec{r}(t) + e \vec{E}(t) = m\vec{a}(t)
\end{equation}
$$

$$
\begin{equation}
-m\Gamma \frac{d \vec{r}(t)}{dt} - m\Omega^2 \vec{r}(t) + e \vec{E}(t) = m\frac{d^2 \vec{r}(t)}{dt^2}
\end{equation}
$$

$$
\begin{equation}
m\frac{d^2 \vec{r}(t)}{dt^2} + m\Gamma \frac{d \vec{r}(t)}{dt} + m\Omega^2 \vec{r}(t) = e \vec{E}(t)
\end{equation}
$$

In the equations above, the electron has mass m and charge e. It is bound to a given atom with a spring-like force with spring constant $$m\Omega^2$$. As it moves through the crystal, it feels a retarding frictional force with coefficient $$m\Gamma$$. These approximations may not seem like they would lead to correct answers, but they are surprisingly accurate!

We have already mentioned that the electrons within a conductor are free to move about the crystal. Thus, $$\Omega \rightarrow 0$$, and we can recast the equation above in terms of the electron velocity.

$$
\begin{equation}
m\frac{d^2 \vec{r}(t)}{dt^2} + m\Gamma \frac{d \vec{r}(t)}{dt} = e \vec{E}(t)
\end{equation}
$$

$$
\begin{equation}
\frac{d^2 \vec{r}(t)}{dt^2} + \Gamma \frac{d \vec{r}(t)}{dt} = \frac{e}{m} \vec{E}(t)
\end{equation}
$$

$$
\begin{equation}
\frac{d \vec{v}(t)}{dt} + \Gamma \vec{v}(t) = \frac{e}{m} \vec{E}(t)
\end{equation}
$$

We know that the electron is going to oscillate as a function of time due to the external electric field. Suppose the electric field is given by $$\vec{E}(t) = \vec{E}e^{-i\omega t}$$. Then, the velocity of the electron is given by $$\vec{v}(t) = \vec{v} e^{-i\omega t}$$ where $$\vec{v}$$ is some velocity vector and $$\omega$$ is the frequency of our oscillating electric field. In other words, we are solving this differential equation by guessing the solution for $$\vec{v}(t)$$.

$$
\begin{equation}
\frac{d}{dt} \left [ \vec{v} e^{-i\omega t} \right ] + \Gamma \vec{v}e^{-i\omega t} = \frac{e}{m} \vec{E} e^{-i\omega t}
\end{equation}
$$

$$
\begin{equation}
\vec{v} \frac{d}{dt} e^{-i\omega t} + \Gamma \vec{v}e^{-i\omega t} = \frac{e}{m} \vec{E} e^{-i\omega t}
\end{equation}
$$

$$
\begin{equation}
-i\omega \vec{v} e^{-i\omega t} + \Gamma \vec{v}e^{-i\omega t} = \frac{e}{m} \vec{E} e^{-i\omega t}
\end{equation}
$$

$$
\begin{equation}
-i\omega \vec{v} + \Gamma \vec{v} = \frac{e}{m} \vec{E}
\end{equation}
$$

Solving for $$\vec{v}$$ gives:

$$
\begin{equation}
\left ( -i\omega + \Gamma \right ) \vec{v} = \frac{e}{m} \vec{E}
\end{equation}
$$

$$
\begin{equation}
\vec{v} = \frac{e \vec{E}}{m \left ( -i\omega + \Gamma \right )}
\end{equation}
$$

What is this answer telling us? Notice how the direction of $$\vec{v}$$ depends only on the direction of $$\vec{E}$$. Our electron oscillations line up with the polarization of the external electric field (as we might guess). Let's use this result to calculate the conductivity of the metal.

### Conductivity

Ohm's law defines the electrical conductivity of a system as:

$$
\begin{equation}
\vec{J}(t) = \sigma \vec{E}(t)
\end{equation}
$$

where $$\vec{J}(t)$$ is the time-dependent current density, $$\sigma$$ is the conductivity, and $$\vec{E}(t)$$ is the time-dependent electric field acting on the system. With a few steps of algebra, you can turn this expression back into good old $$V=IR$$ (that will be another post though).

Since we are dealing with an angular frequency $$\omega$$, it might be easier to analyze Ohm's law in the frequency domain rather than the time domain. Just like we did above, let $$\vec{E}(t) = \vec{E}e^{-i\omega t}$$ and $$\vec{J}(t) = \vec{J}e^{-i\omega t}$$. Taking the [Fourier transform of each side](http://www.wolframalpha.com/input/?i=fourier+transform+exp%28-i*w*t%29) yields:

$$
\begin{equation}
F[\vec{J}(t)] = \sqrt{2\pi} \vec{J}
\end{equation}
$$

$$
\begin{equation}
F[\vec{E}(t)] = \sqrt{2\pi} \vec{E}
\end{equation}
$$

$$
\begin{equation}
\vec{J} = \sigma \vec{E}
\end{equation}
$$

We can express $$\vec{J}$$ in terms of the velocity and the carrier density of the material (n):

$$
\begin{equation}
\vec{J} = ne\vec{v}
\end{equation}
$$

Substituting the expression for $$\vec{v}$$ from the previous section yields:

$$
\begin{equation}
\vec{J} = \frac{ne^2 \vec{E}}{m \left ( -i\omega + \Gamma \right )} =  \sigma \vec{E}
\end{equation}
$$

$$
\begin{equation}
\sigma = \frac{ne^2}{m} \frac{1}{ \left ( -i\omega + \Gamma \right )}
\end{equation}
$$

If we let $$\Gamma \equiv 1/\tau$$ (where $$\tau$$ is the mean free time of the electron), the expression becomes:

$$
\begin{equation}
\sigma = \frac{ne^2 \tau}{m} \frac{1}{ \left (1 - i\omega\tau \right )} = \frac{ne^2 \tau}{m} \left ( \frac{1 + i\omega \tau}{1 + \omega^2 \tau^2} \right )
\end{equation}
$$

The conductivity can now be used to solve for the [complex permittivity](https://en.wikipedia.org/wiki/Permittivity#Lossy_medium) of the system.

### Complex Permittivity

We can find the complex permittivity of the conductor (in Gaussian units) according to:

$$
\begin{equation}
\epsilon = \epsilon_r + \frac{4\pi i\sigma}{\omega}
\end{equation}
$$

where $$\epsilon_r$$ is the relative permittivity of the specific conductor within which the oscillations are taking place. Remember, we are using $$exp(-i \omega t)$$ as the oscillating term, so the complex permittivity has a plus sign rather than a minus sign.

Notice the imaginary number (i) in the expression for complex permittivity. The imaginary part of $$\sigma$$ contributes to the real part of $$\epsilon$$ (an imaginary number multiplied by an imaginary number is real) while the real part of $$\sigma$$ contributes to the imaginary part of $$\epsilon$$ (a real number multiplied by an imagninary number is imaginary). In other words, the real part of $$\sigma$$ contributes to the loss in the system while the imaginary part of $$\sigma$$ contributes to the permittivity of the system.

$$
\begin{align}
\epsilon &= \epsilon_r + \frac{4\pi i n e^2 \tau}{m \omega} \left ( \frac{1 + i\omega\tau}{1 + \omega^2\tau^2 } \right )\\
&= \epsilon_r + \frac{4\pi i n e^2 \tau}{m \omega} \frac{1}{1 + \omega^2\tau^2 } + \frac{4\pi i n e^2 \tau}{m \omega} \frac{i\omega \tau}{1 + \omega^2\tau^2 }\\
&= \epsilon_r + \frac{4\pi i n e^2 \tau}{m \omega} \frac{1}{1 + \omega^2\tau^2 } - \frac{4\pi n e^2 \tau}{m \omega} \frac{\omega \tau}{1 + \omega^2\tau^2 }\\
&= \epsilon_r + \frac{4\pi i n e^2 \tau}{m \omega \left ( 1 + \omega^2\tau^2 \right ) } - \frac{4\pi n e^2 \tau^2}{m \left ( 1 + \omega^2\tau^2 \right ) }
\end{align}
$$

In the limit of $$\omega\tau \gg 1$$, the expression becomes:

$$
\begin{align}
\epsilon &\approx \epsilon_r + \frac{4\pi i n e^2 \tau}{m \omega \left ( \omega^2\tau^2 \right ) } - \frac{4\pi n e^2 \tau^2}{m \left ( \omega^2\tau^2 \right ) }\\
&= \epsilon_r + \frac{4\pi i n e^2}{m \omega^3 \tau } - \frac{4\pi n e^2}{m \omega^2 }\\
\end{align}
$$

We technically have an expression for the complex permittivity of the system. However, physicists usually make one more simplification. Let's look at the real part of the permittivity in the limit of $$\omega\tau \gg 1$$:

$$
\begin{equation}
Re[\epsilon] \approx \epsilon_r \left [ 1 - \frac{4\pi ne^2}{m \omega^2 \epsilon_r} \right ] = \epsilon_r \left [ 1 - \frac{\omega_p^2}{\omega^2} \right ]
\end{equation}
$$

where $$\omega_p = [4\pi n e^2/m\epsilon_r]^{1/2}$$ is the plasma frequency of the system. You can think of the plasma frequency as the resonant frequency of electrons in the metal for small oscillations.

### Conclusions

We learned that an oscillating electric field incident on a conductor causes the electrons to oscillate at the same frequency. The electrons in a conductor have a resonant frequency, just like the driven mass-spring oscillator. We call it the plasma frequency of the conductor.

The formula for plasma frequency is a little bit strange though. If the incident frequency of light is greater than the plasma frequency, we see that the index of refraction of the metal will be less than one since $$n = \sqrt{\epsilon}$$. On first glance, this seems to violate the laws of special relativity (light in the metal is traveling faster than light in a vacuum because v = c/n). We will cover that in a future post.
