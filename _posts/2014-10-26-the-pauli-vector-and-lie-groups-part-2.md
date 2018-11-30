---
layout: post
comments: true
title: The Pauli Vector and Lie Groups - Part 2
difficulty: hard
category: [Math Methods, Quantum Field Theory]
tags: [Derivation, Common Homework Problem]
description: I continue my discussion of the Pauli matrices and their relation to Lie Groups, focusing on the SU(2) group.
---

### Introduction

Last week I discussed some of the basic properties of the Pauli matrices and the Pauli vector. At the end of the post, I derived a simple expression for the matrix exponential of the Pauli vector. This week I am going to explore Lie groups and show how the Pauli vector relates to the SU(2) group.

### A Refresher on Finite Groups

Let's start off with a bit of group theory. A [group](http://en.wikipedia.org/wiki/Group_%28mathematics%29) is a set of elements along with a composition rule that satisfies a set of four [group axioms](http://mathworld.wolfram.com/Group.html). These four axioms are closure, associativity, the existence of an identity, and the existence of an inverse for each group element.

For example, we can analyze the set of transformations of an equilateral triangle that preserve its shape. The set of elements that preserve the shape of an equilateral triangle are rotations by 0, $$2\pi/3$$, and $$4\pi/3$$ rad. If I combine these three elements with a composition rule (in this case apply one rotation, then apply the second) this forms a group.

This is an example of a finite group because there are a finite number of elements in the group. Most upper level undergraduate students and lower level graduate students in mathematics and physics have seen finite groups at some point along their study (even if they do not recognize them at face value). I am going to assume that the reader has a working knowledge of finite groups for the remainder of this post.

### Continuous Groups and Lie Groups

If every group in the world had a finite number of elements, then it would be relatively straightforward to classify groups using [character tables](http://www.webqc.org/symmetry.php) and [Cayley tables](http://en.wikipedia.org/wiki/Cayley_table). However, there are groups that have an infinite number of elements (for example, the rotations of a sphere about its center). We need a more sophisticated way of analyzing these continuous groups.

Consider a set of group elements $$R$$ that depend on some number of real, continuous parameters $$R(a) \equiv R(a_1, a_2, ..., a_n)$$. For example, in the case of rotating a sphere, these parameters might be angles $$\theta$$ and $$\phi$$ in spherical coordinates. The elements $$R$$ form a continuous group G if they satisfy the four group axioms:

1. **Closure** - If $$R(a) \in G$$ and $$R(b) \in G$$, then $$R(a) \circ R(b) \in G$$

2. **Associativity** - If $$R(a)$$, $$R(b)$$, $$R(c)$$ $$\in G$$, then $$[R(a) \circ R(b)] \circ R(c) = R(a) \circ [R(b) \circ R(c)]$$

3. **Identity** - If $$R(a) \in G$$, then there exists an element e such that $$e \circ R(a) = R(a) \circ e = R(a)$$

4. **Inverse** - If $$R(a) \in G$$, then there exists an element S such that $$S \circ R(a) = R(a) \circ S = e$$

Since we cannot possibly determine the relationship between all of the infinitely many R's directly using a Cayley table, we instead analyze the relationships of the parameters of each group element. For example, in the expression:

$$
\begin{equation}
R(c) = R(a)R(b)
\end{equation}
$$

we note that c should be a real continuous function of a and b in order for the elements $$R(x)$$ to form a continuous group:

$$
\begin{equation}
c = f(a,b)
\end{equation}
$$

If $$f(a,b)$$ is an analytic function (i.e. the Taylor series of $$f$$ converges), then we call the resulting group a Lie Group. In other words, if the elements of the group $$R(a)$$ are differentiable with respect to the parameters $$\{a_1, a_2, ..., a_n\}$$, then $$R(a)$$ is a Lie group.

### Infinitesimal Generators

Suppose each element of our group can be written as a linear operator (i.e. an $$n \times n$$ matrix). More than that, suppose that the group elements obey the following rule:

$$
\begin{equation}
R(\theta_1) R(\theta_2) = R(\theta_1 + \theta_2)
\end{equation}
$$

This is similar to the relationship that one would expect when considering rotations about some axis. Let's take a derivative of the above expression with respect to $$\theta_1$$:

$$
\begin{align}
\frac{d}{d\theta_1} \left [ R(\theta_1) R(\theta_2) \right ] &= \frac{dR(\theta_1 + \theta_2)}{d\theta_1} \\[0.1cm]
\frac{dR(\theta_1)}{d\theta_1} R(\theta_2) &= \frac{dR(\theta_1 + \theta_2)}{d(\theta_1 + \theta_2)}\frac{d(\theta_1 + \theta_2)}{d\theta_1} \\[0.1cm]
\frac{dR(\theta_1)}{d\theta_1} R(\theta_2) &= \frac{dR(\theta_1 + \theta_2)}{d(\theta_1 + \theta_2)} \\[0.1cm]
\end{align}
$$

Taking the limit as $$\theta_1 \rightarrow 0$$ and renaming variables yields:

$$
\begin{align}
\frac{dR(\theta_1)}{d\theta_1}\bigg|_{\theta_1 = 0} R(\theta_2) &= \frac{dR(\theta_2)}{d\theta_2} \\[0.1cm]
\frac{dR(\theta_1)}{d\theta_1}\bigg|_{\theta_1 = 0} R(\theta) &= \frac{dR(\theta)}{d\theta} \\[0.1cm]
X R(\theta) &= \frac{dR(\theta)}{d\theta} \\[0.1cm]
\end{align}
$$

where

$$
\begin{equation}
X \equiv \frac{dR}{d\theta_1} \bigg|_{\theta_1 = 0}
\end{equation}
$$

We see that if $$R = e^{\theta X}$$, then it satisfies the expression above. We say that $$R$$ is the Lie group that is generated by the Lie algebra $$X$$ (or the operator $$X$$ generates the Lie algebra $$R$$). Since $$R$$ has this exponential form, we can determine the expression for higher powers of $$X$$. Taking n derivatives of the differential equation above yields:

$$
\begin{align}
\frac{d^n}{d\theta^n} \left [ X R(\theta) \right ] &= \frac{d^n}{d\theta^n} \left [ \frac{dR(\theta)}{d\theta} \right ] \\[0.1cm]
X \frac{d^n R(\theta)}{d\theta^n} &= \frac{d^{n+1}R(\theta)}{d\theta^{n+1}}
\end{align}
$$

If we once again take the limit as $$\theta \rightarrow 0$$ and pick test values for n:

$$
\begin{align}
X \frac{d^n R(\theta)}{d\theta^n}\bigg|_{\theta = 0} &= \frac{d^{n+1}R(\theta)}{d\theta^{n+1}}\bigg|_{\theta = 0}
\end{align}
$$

n = 0:

$$
\begin{align}
X &= \frac{dR(\theta)}{d\theta}\bigg|_{\theta = 0}
\end{align}
$$

n = 1:

$$
\begin{align}
X \frac{d R(\theta)}{d\theta}\bigg|_{\theta = 0} &= \frac{d^2R(\theta)}{d\theta^2}\bigg|_{\theta = 0} \\[0.1cm]
X^2 &= \frac{d^2R(\theta)}{d\theta^2}\bigg|_{\theta = 0} \\[0.1cm]
\end{align}
$$

general n:

$$
\begin{align}
X \frac{d^n R(\theta)}{d\theta^n}\bigg|_{\theta = 0} &= \frac{d^{n+1}R(\theta)}{d\theta^{n+1}}\bigg|_{\theta = 0} \\[0.1cm]
X^n &= \frac{d^nR(\theta)}{d\theta^n}\bigg|_{\theta = 0} \\[0.1cm]
\end{align}
$$

That is pretty cool! Writing out the final Taylor series expression for our matrix R gives:

$$
\begin{align}
R(\theta) &= R(0) + \frac{dR(\theta)}{d\theta}\bigg|_{\theta = 0} \theta + \frac{1}{2!} \frac{d^2R(\theta)}{d\theta^2}\bigg|_{\theta = 0} \theta^2 + ... \\[0.1cm]
&= I + \theta X + \frac{1}{2!} \theta^2 X^2 + ... \\[0.1cm]
&= \sum_{n=0}^\infty \frac{(\theta X)^n}{n!} \\[0.1cm]
&= e^{\theta X} \\[0.1cm]
\end{align}
$$

Similar to last week (taking the matrix exponential), this simplifies to:

$$
\begin{equation}
R(\theta) = e^{\theta X} = Icos(\theta) + Xsin(\theta)
\end{equation}
$$

### The Pauli Vector and SU(2)

Above, we stated that a Lie group is related to a Lie algebra by a matrix exponential. Let's look at a specific Lie group SU(2). SU(2) is the group of $$2 \times 2$$ matrices with complex elements that have a determinant of $$+1$$. Each group element of SU(2) has the form:

$$
\begin{equation}
R =
\begin{bmatrix}
\alpha & \beta \\[0.1cm]
-\beta^* & \alpha^*
\end{bmatrix}
\end{equation}
$$

Let $$\alpha = a + bi$$ and $$\beta = c + di$$. We can then rewrite the SU(2) matrix as:

$$
\begin{equation}
R =
\begin{bmatrix}
a + bi & c + di \\[0.1cm]
-c + di & a - bi
\end{bmatrix} \\[0.1cm]
\end{equation}
$$

with the condition that $$det(R) = a^2 + b^2 + c^2 + d^2 = 1$$. But just looking at the terms in $$R$$, we can rewrite the expression using the Pauli matrices:

$$
\begin{align}
R &= a I + di \sigma_x + ci \sigma_y + bi \sigma_z \\[0.1cm]
&= a I + i( d \sigma_x + c \sigma_y + b \sigma_z)
\end{align}
$$

With no loss of generality, let $$a = cos\theta$$ and $$\sqrt{b^2 + c^2 + d^2} = sin\theta$$. Then:

$$
\begin{align}
R &= I cos\theta + i \left ( \frac{d}{sin\theta} \sigma_x + \frac{c}{sin\theta} \sigma_y + \frac{b}{sin\theta} \sigma_z \right ) sin\theta \\[0.1cm]
&= I cos\theta + i \left ( \frac{d}{\sqrt{b^2 + c^2 + d^2}} \sigma_x + \frac{c}{\sqrt{b^2 + c^2 + d^2}} \sigma_y + \frac{b}{\sqrt{b^2 + c^2 + d^2}} \sigma_z \right ) sin\theta \\[0.1cm]
\end{align}
$$

And here we notice something really interesting...

If we call the expression in paranthesis $$\hat{n} \cdot \vec{\sigma}$$, then we get the exact same matrix exponenetial from last week!

$$
\begin{equation}
R = e^{i\theta(\hat{n}\cdot \vec{\sigma})} = Icos(\theta) + i(\hat{n} \cdot \vec{\sigma}) sin(\theta)
\end{equation}
$$

We have identified the Lie algebra $$X$$ for SU(2)! If we let $$X = i(\hat{n} \cdot \vec{\sigma})$$, then we see that the inner product of the Pauli vector and a unit vector multiplied by the constant i generates the SU(2) group. In other words, the three Pauli matrices times the constant i form the Lie algebra for SU(2).
