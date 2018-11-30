---
layout: post
comments: true
title: The Pauli Vector and Lie Groups - Part 1
difficulty: hard
category: [Math Methods, Quantum Field Theory]
tags: [Common Homework Problem]
description: I explore some of the subtle nuances of the Pauli vector that are sometimes glossed over in graduate level courses. This post will prepare us to talk about Lie groups and Lie algebras next week.
---

### Introduction

This is part one of two in a series of posts where I elaborate on Pauli matrices, the Pauli vector, Lie groups, and Lie algebras.  I have found that most resources on the subjects of Lie groups and Lie algebras present the material in an overly formal way, using notation that masks the simplicity of these concepts. Learning about Lie algebras and Lie groups is much easier if one first develops an intuition about what is actually happening, and then later dives into complicated notation.

We will start our discussion with the properties of the Pauli matrices and the Pauli vector.

### The Pauli Matrices

Let's go over some of the basic properties of the Pauli matrices before we move onto the Pauli vector.  The Pauli matrices are a set of three $$2 \times 2$$ complex matrices which are [Hermitian](http://en.wikipedia.org/wiki/Hermitian_matrix) and [unitary](http://en.wikipedia.org/wiki/Unitary_matrix). They are given by:

$$
\begin{equation}
\sigma_x =
\begin{bmatrix}
0 & 1 \\[0.1cm]
1 & 0
\end{bmatrix}
\end{equation}
$$

$$
\begin{equation}
\sigma_y =
\begin{bmatrix}
0 & -i \\[0.1cm]
i & 0
\end{bmatrix}
\end{equation}
$$

$$
\begin{equation}
\sigma_z =
\begin{bmatrix}
1 & 0 \\[0.1cm]
0 & -1
\end{bmatrix}
\end{equation}
$$

Each of the Pauli matrices has a [trace](http://en.wikipedia.org/wiki/Trace_%28linear_algebra%29) of zero and a [determinant](http://en.wikipedia.org/wiki/Determinant) of -1. The product of any two Pauli matrices is given by:

$$
\begin{equation}
\sigma_i \sigma_j = I\delta_{ij} + i\epsilon_{ijk}\sigma_k
\end{equation}
$$

where $$\delta_{ij}$$ is the [Kronecker delta](http://en.wikipedia.org/wiki/Kronecker_delta) and $$\epsilon_{ijk}$$ is the [Levi-Civita symbol](http://en.wikipedia.org/wiki/Levi-Civita_symbol). Thus, we see that they are [involutory](http://en.wikipedia.org/wiki/Involution_%28mathematics%29):

$$
\begin{equation}
\sigma_i \sigma_i =
\begin{bmatrix}
1 & 0 \\[0.1cm]
0 & 1
\end{bmatrix}
\end{equation}
= I
$$

From the relations above, we see that the commutation relation of two Pauli matrices is:

$$
\begin{align}
[\sigma_i, \sigma_j] &= \sigma_i \sigma_j - \sigma_j \sigma_i \\[0.1cm]
&= (I\delta_{ij} + i\epsilon_{ijk}\sigma_k) - (I\delta_{ji} + i\epsilon_{jik}\sigma_k) \\[0.1cm]
&= (i\epsilon_{ijk} - i\epsilon_{jik})\sigma_k \\[0.1cm]
&= (i\epsilon_{ijk} + i\epsilon_{ijk})\sigma_k \\[0.1cm]
&= 2i\epsilon_{ijk} \sigma_k
\end{align}
$$

and the anti-commutation relation of two Pauli matrices is:

$$
\begin{align}
\{\sigma_i, \sigma_j\} &= \sigma_i \sigma_j + \sigma_j \sigma_i \\[0.1cm]
&= (I\delta_{ij} + i\epsilon_{ijk}\sigma_k) + (I\delta_{ji} + i\epsilon_{jik}\sigma_k) \\[0.1cm]
&= 2I\delta_{ij} + (i\epsilon_{ijk} + i\epsilon_{jik})\sigma_k \\[0.1cm]
&= 2I\delta_{ij} + (i\epsilon_{ijk} - i\epsilon_{ijk})\sigma_k \\[0.1cm]
&= 2I\delta_{ij}
\end{align}
$$


Combined with the identity matrix I (sometimes called $$\sigma_0$$), these four matrices span the full [vector space](http://en.wikipedia.org/wiki/Vector_space) of $$2 \times 2$$ Hermitian matrices.

### The Pauli Vector

The Pauli vector is defined as:

$$
\begin{equation}
\vec{\sigma} = \sigma_x \hat{x} + \sigma_y \hat{y} + \sigma_z \hat{z}
\end{equation}
$$

Given some vector $$\vec{a} = a_x \hat{x} + a_y \hat{y} + a_z \hat{z}$$, the inner product of $$\vec{a}$$ and the Pauli vector is simply:

$$
\begin{equation}
\vec{a} \cdot \vec{\sigma} = a_x \sigma_x + a_y \sigma_y + a_z \sigma_z
\end{equation}
$$

If we take the inner product of the Pauli vector with a unit vector ($$\hat{n} = n_x \hat{x} + n_y \hat{y} + n_z \hat{z}$$), then:

$$
\begin{equation}
\hat{n} \cdot \vec{\sigma} = n_x \sigma_x + n_y \sigma_y + n_z \sigma_z
\end{equation}
$$

and

$$
\begin{align}
(\hat{n} \cdot \vec{\sigma})^2 &= (n_x \sigma_x + n_y \sigma_y + n_z \sigma_z)^2 \\[0.1cm]
&= n_x \sigma_x n_x \sigma_x + n_y \sigma_y n_x \sigma_x + n_z \sigma_z n_x \sigma_x + n_x \sigma_x n_y \sigma_y + n_y \sigma_y n_y \sigma_y \\[0.1cm] &\hspace{6mm}+ n_z \sigma_z n_y \sigma_y + n_x \sigma_x n_z \sigma_z + n_y \sigma_y n_z \sigma_z + n_z \sigma_z n_z \sigma_z \\[0.1cm]
&= (n_x^2 + n_y^2 + n_z^2) + (\sigma_x \sigma_y + \sigma_y \sigma_x) n_x n_y \\[0.1cm] &\hspace{6mm}+ (\sigma_x \sigma_z + \sigma_z \sigma_x) n_x n_z + (\sigma_y \sigma_z + \sigma_z \sigma_y) n_y n_z \\[0.1cm]
&= I + 0 + 0 + 0 \\[0.1cm]
&= I
\end{align}
$$

The product of two separate inner products is given by:

$$
\begin{align}
(\vec{a} \cdot \vec{\sigma})(\vec{b} \cdot \vec{\sigma}) &= a_i \sigma_i b_j \sigma_j \\[0.1cm]
&= \sigma_i \sigma_j a_i b_j \\[0.1cm]
&= (\delta_{ij} + i\epsilon_{ijk}\sigma_k) a_i b_j \\[0.1cm]
&= \delta_{ij} a_i b_j + i\epsilon_{ijk}\sigma_k a_i b_j \\[0.1cm]
&= a_i b_i + i \epsilon_{ijk} a_i b_j \sigma_k \\[0.1cm]
&= \vec{a} \cdot \vec{b} + i \vec{\sigma} \cdot (\vec{a} \times \vec{b})
\end{align}
$$

### Exponential of the Pauli Vector

We can now take the exponential of the inner product of the Pauli vector and some other vector $$\vec{a} = a\hat{n}$$:

$$
\begin{align}
e^{ia(\hat{n}\cdot \vec{\sigma})} &= \sum_{n=0}^\infty \frac{[ia(\hat{n}\cdot\vec{\sigma})]^n}{n!} \\[0.1cm]
&= \sum_{n=0}^\infty \frac{[ia(\hat{n}\cdot\vec{\sigma})]^{2n}}{(2n)!} + \sum_{n=0}^\infty \frac{[ia(\hat{n}\cdot\vec{\sigma})]^{2n+1}}{(2n+1)!} \\[0.1cm]
&= \sum_{n=0}^\infty \frac{i^{2n} a^{2n} (\hat{n}\cdot\vec{\sigma})^{2n}}{(2n)!} + \sum_{n=0}^\infty \frac{i^{2n+1} a^{2n+1}(\hat{n}\cdot\vec{\sigma})^{2n+1}}{(2n+1)!} \\[0.1cm]
&= \sum_{n=0}^\infty \frac{(-1)^n a^{2n} (\hat{n}\cdot\vec{\sigma})^{2n}}{(2n)!} + \sum_{n=0}^\infty i\frac{(-1)^n a^{2n+1}(\hat{n}\cdot\vec{\sigma})^{2n+1}}{(2n+1)!} \\[0.1cm]
&= I\sum_{n=0}^\infty \frac{(-1)^n a^{2n}}{(2n)!} + i(\hat{n}\cdot\vec{\sigma}) \sum_{n=0}^\infty \frac{(-1)^n a^{2n+1}}{(2n+1)!} \\[0.1cm]
&= Icos(a) + i(\hat{n} \cdot \vec{\sigma}) sin(a)
\end{align}
$$

Notice that this expression is very similar to [Euler's formula](http://en.wikipedia.org/wiki/Euler%27s_formula).

### Final Thoughts

Up till now, all we have done is define three matrices, given them a name (the Pauli matrices), and explored some of their relationships. We focused on how they interact with each other and how the Pauli vector interacts with other vectors.  Finally, we took a [matrix exponential](http://en.wikipedia.org/wiki/Matrix_exponential#via_Laurent_series) of the inner product of the Pauli vector with another vector.

Now that we know some of the properties of the Pauli matrices and Pauli vector, next week we will look at the properties of Lie groups, Lie algebras, and the SU(2) group.





