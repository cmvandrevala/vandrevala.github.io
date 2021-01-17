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

### The Pauli Z Matrix

$$
\begin{equation}
\sigma_z =
\begin{bmatrix}
1 & 0 \\[0.1cm]
0 & -1
\end{bmatrix}
\end{equation}
$$

### Eigenvectors and Eigenvalues

$$
\begin{equation}
\begin{bmatrix}
1 & 0 \\[0.1cm]
0 & -1
\end{bmatrix}
\begin{bmatrix}
x \\[0.1cm]
y
\end{bmatrix}
=
\lambda
\begin{bmatrix}
x \\[0.1cm]
y
\end{bmatrix}
\end{equation}
$$

$$
\begin{equation}
\begin{bmatrix}
1 - \lambda & 0 \\[0.1cm]
0 & -1 - \lambda
\end{bmatrix}
\begin{bmatrix}
x \\[0.1cm]
y
\end{bmatrix}
=
0
\end{equation}
$$

$$
\begin{equation}
det
\begin{bmatrix}
1 - \lambda & 0 \\[0.1cm]
0 & -1 - \lambda
\end{bmatrix}
=
0
\end{equation}
$$

$$
\begin{equation}
(1 - \lambda)(-1 - \lambda) = 0
\end{equation}
$$

$$
\begin{equation}
\lambda = \pm 1
\end{equation}
$$

$$
\begin{equation}
\begin{bmatrix}
1 & 0 \\[0.1cm]
0 & -1
\end{bmatrix}
\begin{bmatrix}
x \\[0.1cm]
y
\end{bmatrix}
=
(+1)
\begin{bmatrix}
x \\[0.1cm]
y
\end{bmatrix}
\end{equation}
$$

$$
\begin{equation}
\begin{bmatrix}
x \\[0.1cm]
y
\end{bmatrix}
=
\begin{bmatrix}
1 \\[0.1cm]
0
\end{bmatrix}
\end{equation}
$$

$$
\begin{equation}
\begin{bmatrix}
1 & 0 \\[0.1cm]
0 & -1
\end{bmatrix}
\begin{bmatrix}
x \\[0.1cm]
y
\end{bmatrix}
=
(-1)
\begin{bmatrix}
x \\[0.1cm]
y
\end{bmatrix}
\end{equation}
$$

$$
\begin{equation}
\begin{bmatrix}
x \\[0.1cm]
y
\end{bmatrix}
=
\begin{bmatrix}
0 \\[0.1cm]
1
\end{bmatrix}
\end{equation}
$$

### Perturbation Theory



### Final Thoughts
