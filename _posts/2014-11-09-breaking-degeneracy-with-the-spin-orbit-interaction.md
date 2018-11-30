---
layout: post
comments: true
title: Breaking Degeneracy with the Spin-Orbit Interaction
difficulty: hard
category: [Quantum Mechanics]
tags: [Common Homework Problem]
description: I analyze some of the commutation relations in the presence of spin-orbit interaction and explain some of their consequences.
---

### Background

In quantum mechanics, the [spin-orbit interaction](http://en.wikipedia.org/wiki/Spin%E2%80%93orbit_interaction) is the interaction of the spin of a particle $$S$$ with its orbital motion $$L$$. It is a well-known effect that lifts the degeneracy of the one-electron energy levels in atoms, molecules, and crystals.

The nonrelativistic Schrodinger equation is used to find the [electronic band structure](http://en.wikipedia.org/wiki/Electronic_band_structure) of crystal lattices. Since there are no relativistic corrections (i.e. no spin terms in the Hamiltonian), each of the bands is doubly degenerate - both the spin up and spin down electrons have the same energy. However, if we introduce a correction in the Schrodinger equation that involves the spin of the particle, we see that these degenerate bands split apart. The spin-orbit interaction is one such correction; it has the form:

$$
\begin{equation}
\mathcal{H}_{so} = \frac{1}{2 m^2 c^2} \frac{1}{r} \frac{dV}{dr} \vec{L} \cdot \vec{S}
\end{equation}
$$

In the equation above, $$m$$ is the mass of the electron, $$c$$ is the speed of light, $$(1/r)(dV/dr)$$ describes the electric field of the nucleus on the electron, $$\vec{S}$$ is the spin of the electron, and $$\vec{L}$$ is the orbital angular momentum of the electron.

Let's take some time to analyze the commutation relationships of the spin-orbit interaction with the $$\vec{S}$$, $$\vec{L}$$, and $$\vec{J} = \vec{L} + \vec{S}$$ operators.

### Commutation Relationships

Let's start off with the spin operator $$\vec{S}$$. The commutation relationship between two orthoganal spins is:

$$
\begin{equation}
[S_i, S_j] = i\hbar \epsilon_{ijk} S_k
\end{equation}
$$

We can find the commutation relationship of spin and the spin-orbit interaction by analyzing a single component of the spin:

$$
\begin{align}
\left [ S_i, \vec{L} \cdot \vec{S} \right ]
&= \left [ S_i, L_i S_i + L_j S_j + L_k S_k \right ] \\[0.1cm]
&= \left [ S_i, L_i S_i \right ] + \left [ S_i, L_j S_j \right ] + \left [ S_i, L_k S_k \right ] \\[0.1cm]
&= \left [ S_i, L_i \right ] S_i + L_i \left [ S_i, S_i \right ] + \left [ S_i, L_j \right ] S_j + L_j \left [ S_i, S_j \right ] + \left [ S_i, L_k \right ] S_k + L_k \left [ S_i, S_k \right ] \\[0.1cm]
&= L_j \left [ S_i, S_j \right ] + L_k \left [ S_i, S_k \right ] \\[0.1cm]
&= L_j \left ( i \hbar S_k \right ) + L_k \left (  -i \hbar S_j \right ) \\[0.1cm]
&= i\hbar \left ( L_j S_k - L_k S_j \right ) \\[0.1cm]
&= i\hbar \left ( \vec{L} \times \vec{S} \right )_i
\end{align}
$$

We see that this procedure can be repeated for each of the other two components of spin giving:

$$
\begin{equation}
\left [ \vec{S}, \vec{L} \cdot \vec{S} \right ] = i\hbar \left ( \vec{L} \times \vec{S} \right )
\end{equation}
$$

Finally, the commutation of the $$\vec{S}^2$$ operator and the spin-orbit operator is:

$$
\begin{align}
\left [ \vec{S}^2, \vec{L} \cdot \vec{S} \right ]
&= \left [ S_i S_i + S_j S_j + S_k S_k, \vec{L} \cdot \vec{S} \right ] \\[0.1cm]
&= \left [ S_i S_i, \vec{L} \cdot \vec{S} \right ] + \left [ S_j S_j, \vec{L} \cdot \vec{S} \right ] + \left [ S_k S_k, \vec{L} \cdot \vec{S} \right ] \\[0.1cm]
&= S_i \left [ S_i, \vec{L} \cdot \vec{S} \right ] + \left [ S_i, \vec{L} \cdot \vec{S} \right ] S_i + S_j \left [ S_j, \vec{L} \cdot \vec{S} \right ] + \left [ S_j, \vec{L} \cdot \vec{S} \right ] S_j + S_k \left [ S_k, \vec{L} \cdot \vec{S} \right ] + \left [ S_k, \vec{L} \cdot \vec{S} \right ] S_k \\[0.1cm]
&= 2i\hbar \left ( \vec{L} \times \vec{S} \right )_i S_i + 2i\hbar \left ( \vec{L} \times \vec{S} \right )_j S_j + 2i\hbar \left ( \vec{L} \times \vec{S} \right )_k S_k \\[0.1cm]
&= 2i\hbar \left ( \vec{L} \times \vec{S} \right ) \cdot \vec{S} \\[0.1cm]
&= 0
\end{align}
$$

The last line above comes from the properties of the cross product. The commutation relationship of orthogonal orbital angular momentum operators is given by:

$$
\begin{equation}
[L_i, L_j] = i\hbar \epsilon_{ijk} L_k
\end{equation}
$$

The commutation relationship of $$\vec{L}$$ and the spin-orbit interaction is very similar to the relationship seen for $$\vec{S}$$ seen above:

$$
\begin{align}
\left [ L_i, \vec{L} \cdot \vec{S} \right ]
&= \left [ L_i, L_i S_i + L_j S_j + L_k S_k \right ] \\[0.1cm]
&= \left [ L_i, L_i S_i \right ] + \left [ L_i, L_j S_j \right ] + \left [ L_i, L_k S_k \right ] \\[0.1cm]
&= \left [ L_i, L_i \right ] S_i + L_i \left [ L_i, S_i \right ] + \left [ L_i, L_j \right ] S_j + L_j \left [ L_i, S_j \right ] + \left [ L_i, L_k \right ] S_k + L_k \left [ L_i, S_k \right ] \\[0.1cm]
&= \left [ L_i, L_j \right ] S_j + \left [ L_i, L_k \right ] S_k \\[0.1cm]
&= \left ( i \hbar L_k \right )S_j + \left (  -i \hbar L_j \right )S_k \\[0.1cm]
&= i\hbar \left ( L_k S_j - L_j S_k \right ) \\[0.1cm]
&= i\hbar \left ( \vec{S} \times \vec{L} \right )_i
\end{align}
$$

Repeating for the remaining two components and adding the three terms gives:

$$
\begin{equation}
\left [ \vec{L}, \vec{L} \cdot \vec{S} \right ] = i\hbar \left ( \vec{S} \times \vec{L} \right )
\end{equation}
$$

Finally, the commutation relationship between $$\vec{L}^2$$ and the spin-orbit interaction is:

$$
\begin{align}
\left [ \vec{L}^2, \vec{L} \cdot \vec{S} \right ]
&= \left [ L_i L_i + L_j L_j + L_k L_k, \vec{L} \cdot \vec{S} \right ] \\[0.1cm]
&= \left [ L_i L_i, \vec{L} \cdot \vec{S} \right ] + \left [ L_j L_j, \vec{L} \cdot \vec{S} \right ] + \left [ L_k L_k, \vec{L} \cdot \vec{S} \right ] \\[0.1cm]
&= L_i \left [ L_i, \vec{L} \cdot \vec{S} \right ] + \left [ L_i, \vec{L} \cdot \vec{S} \right ] L_i + L_j \left [ L_j, \vec{L} \cdot \vec{S} \right ] + \left [ L_j, \vec{L} \cdot \vec{S} \right ] L_j + L_k \left [ L_k, \vec{L} \cdot \vec{S} \right ] + \left [ L_k, \vec{L} \cdot \vec{S} \right ] L_k \\[0.1cm]
&= 2i\hbar \left ( \vec{S} \times \vec{L} \right )_i L_i + 2i\hbar \left ( \vec{S} \times \vec{L} \right )_j L_j + 2i\hbar \left ( \vec{S} \times \vec{L} \right )_k L_k \\[0.1cm]
&= 2i\hbar \left ( \vec{S} \times \vec{L} \right ) \cdot \vec{L} \\[0.1cm]
&= 0
\end{align}
$$

The total angular momentum operator $$J$$ is given by:

$$
\begin{equation}
\vec{J} = \vec{L} + \vec{S}
\end{equation}
$$

We can analyze the commutation relationship between $$\vec{J}$$ and the spin-orbit interaction using some of the relationships that we derived above to simplify this expression. Unlike spin operator or the orbital angular momentum operator, we see that the total angular momentum operator does commute with the spin-orbit interaction:

$$
\begin{align}
\left [ \vec{J}, \vec{L} \cdot \vec{S} \right ] &=
\left [ (\vec{L} + \vec{S}), \vec{L} \cdot \vec{S} \right ] \\[0.1cm]
&= \left [ \vec{L}, \vec{L} \cdot \vec{S} \right ] + \left [ \vec{S}, \vec{L} \cdot \vec{S} \right ] \\[0.1cm]
&= i\hbar (\vec{S} \times \vec{L}) + i\hbar (\vec{L} \times \vec{S}) \\[0.1cm]
&= i\hbar (\vec{S} \times \vec{L}) - i\hbar (\vec{S} \times \vec{L}) \\[0.1cm]
&= 0
\end{align}
$$

Finally, we can analyze the commutation relationship between the spin-orbit interaction and the $$\vec{J}^2$$ operator. Once again, we can simplify the expression and use some of the relationships that we derived above:

$$
\begin{align}
\left [ \vec{J}^2, \vec{L} \cdot \vec{S} \right ] &=
\left [ (\vec{L} + \vec{S})^2, \vec{L} \cdot \vec{S} \right ] \\[0.1cm]
&= [(\vec{L}^2 + \vec{S}^2 + 2\vec{L} \cdot \vec{S}), \vec{L} \cdot \vec{S} ] \\[0.1cm]
&= \left [ \vec{L}^2, \vec{L} \cdot \vec{S} \right ] + \left [ \vec{S}^2, \vec{L} \cdot \vec{S} \right ] + \left [ 2\vec{L} \cdot \vec{S}, \vec{L} \cdot \vec{S} \right ] \\[0.1cm]
&= \left [ \vec{L}^2, \vec{L} \cdot \vec{S} \right ] + \left [ \vec{S}^2, \vec{L} \cdot \vec{S} \right ] + 2 \left [ \vec{L} \cdot \vec{S}, \vec{L} \cdot \vec{S} \right ] \\[0.1cm]
&= 0 + 0 + 2(0) \\[0.1cm]
&= 0
\end{align}
$$

### Conclusions

These relationships are interesting, but why do we care?

Suppose I want to use perturbation theory to study the splitting of the electronic band structure as I mentioned above. Choosing a basis in $$L_z$$ or $$S_z$$ is not a good idea in this case. The $$\vec{L}$$ and $$\vec{S}$$ operators do not commute with the spin-orbit Hamiltonian, and thus, will not make good basis states for degenerate perturbation theory. However, choosing a basis in $$L^2$$, $$S^2$$, $$J$$, or $$J^2$$ would work out very well. These operators commute with the spin-orbit Hamiltonian, and so they would be good choices for degenerate perturbation theory.

Additionally, since these operators commute with the spin-orbit Hamiltonian, they are constants of motion - quantities that are conserved throughout the evolution of the object. Thus, they are particularly interesting to study in this system.