---
layout: post
comments: true
title: The Gradient of a Complex Exponential Function
difficulty: hard
category: [Math Methods]
tags: [Common Homework Problem]
description: I spend some time commenting on one of the major difficulties that I had when I was learning undergraduate-level physics.  Then, I give an example of a derivation that seems simple to upper-level students, but can be difficult for younger students to grasp if notation is not well-defined.
---

### A Few Thoughts on Consistent Notation

Over that past few years studying physics, I have learned that the evolution of our mathematical notation has paved the way for much of the progress that has been made.  This should not come as a surprise; it is well known that language affects the way people think in their day to day lives.  Numerous social scientists have studied what is called [linguistic relativity](http://en.wikipedia.org/wiki/Linguistic_relativity), the idea that language influences the way we perceive the world.  Thus, it makes sense that the language of physics (mathematics) affects the way that we think about it.  When our notation is verbose or messy, concepts seem confusing.  However, when our notation is succinct and descriptive, complex problems suddenly reveal hidden symmetries.

Seasoned researchers have been working with physics concepts for most of their lives.  They have a solid background in general physics theory and are well versed in the latest breakthroughs in their area of research.  Thus, they are often willing to cut corners with notation, just to simplify the overall expression and/or save time writing.  Any student can easily identify a number of examples: writing $$sin(\theta)$$ as $$s\theta$$, omitting the "hat" on a quantum operator ($$\hat{A}$$), dropping the $$Re$$ prefix when talking about the real part of an oscillating exopnential function, representing the complex conjugate of an expression as "cc", etc.

Let me be clear - I am NOT saying that this is necessarily a bad thing.  If the audience is well versed in the material (like in an upper level course), then these shortcuts are very useful.  If an instructor makes good use of shortcuts, he or she can express many more ideas per inch of whiteboard space per unit class time.  However, I find that upper level instructors often forget that in many of the undergraduate physics classes, students are learning math methods while they are learning physics concepts.  Using inconsistent or overly sophisticated notation can be very unsettling to a student who is trying to grasp multiple new ideas.

This is especially true with the advent of free online notes.  Different professors around the world may use different notations for some concept.  An experienced scientist will readily notice that specific notational preferences make no difference to the final answer.  However, a novice student may have a hard time learning learning the material after seeing it expressed in two seemingly inconsistent ways.

Remember, good, consistent notation does not necessarily mean that a problem will be "short" or "easy".  You still have to struggle with the math in order to find an answer.  But consistent notation provides a scaffolding upon which students can think through problems.

As an example, I want to consider a problem that gave me a bit of trouble when I was younger.  Looking back now, I realize that the math itself is really not that complicated.  What made it difficult for me to comprehend was that I looked up some details of this derivation online and encountered a couple of different notations that seemed to contradict each other.  Thus, the concepts never solidified in my head until much later in the course.

### Gradient of a Complex Exponential Function

#### 3D Space

We are interested in taking the gradient of a complex exponential function.  This expression pops up all over the place in physics; for example, we see it in Maxwell's equations and the momentum operator in quantum mechanics.

Consider the following expression:

$$
\begin{equation}
\nabla \left [ e^{i(\vec{k} \cdot \vec{r} - \omega t)} \right ]
\end{equation}
$$

The vector $$\vec{k}$$ is the wavevector of some wave.  It is given by:

$$
\vec{k} =
\begin{bmatrix}
k_x \\[0.1cm]
k_y \\[0.1cm]
k_z
\end{bmatrix}
$$

The vector $$\vec{r}$$ is some position in space.  It is given by:

$$
\vec{r} =
\begin{bmatrix}
x \\[0.1cm]
y \\[0.1cm]
z
\end{bmatrix}
$$

The dot product of two vectors in Euclidean space is defined as:

$$
\vec{k} \cdot \vec{r} = \vec{k}^T \vec{r} =
\begin{bmatrix}
k_x & k_y & k_z
\end{bmatrix}
\begin{bmatrix}
x \\[0.1cm]
y \\[0.1cm]
z
\end{bmatrix}
=
k_x x + k_y y + k_z z
$$

Then, the exponential expression becomes:

$$
\begin{align}
\nabla \left [ e^{i(\vec{k} \cdot \vec{r} - \omega t)} \right ] &= \nabla \left [ e^{i\vec{k} \cdot \vec{r}} e^{-i\omega t} \right ] \\[0.1cm]
&= \nabla \left [ e^{i(k_x x + k_y y + k_z z)} e^{-i\omega t} \right ] \\[0.1cm]
&= \nabla \left [ e^{i k_x x} e^{i k_y y} e^{i k_z z} e^{-i\omega t} \right ] \\[0.1cm]
\end{align}
$$

The $$\nabla$$ operator takes derivatives with respect to x, y, and z.  Thus, the $$e^{-i\omega t}$$ term can be pulled out of the expression since it is not a function of x, y, or z.

$$
\begin{equation}
\nabla \left [ e^{i(\vec{k} \cdot \vec{r} - \omega t)} \right ]
= \left ( e^{-i\omega t} \right ) \nabla \left [ e^{i k_x x} e^{i k_y y} e^{i k_z z} \right ] \\[0.1cm]
\end{equation}
$$

Remember, the $$\nabla$$ operator is equal to:

$$
\nabla \equiv \left [ \frac{\partial}{\partial x} \hat{x} + \frac{\partial}{\partial y} \hat{y} + \frac{\partial}{\partial z} \hat{z} \right ]
$$

Plugging this in gives:

$$
\begin{align}
\nabla \left [ e^{i(\vec{k} \cdot \vec{r} - \omega t)} \right ]
&= (e^{-i\omega t}) \left [ \frac{\partial}{\partial x} \hat{x} + \frac{\partial}{\partial y} \hat{y} + \frac{\partial}{\partial z} \hat{z} \right ] \left [ e^{i k_x x} e^{i k_y y} e^{i k_z z} \right ] \\[0.1cm]
&= (e^{-i\omega t}) \left [ \frac{\partial}{\partial x}\left ( e^{i k_x x} e^{i k_y y} e^{i k_z z} \right ) \hat{x} + \frac{\partial}{\partial y}\left ( e^{i k_x x} e^{i k_y y} e^{i k_z z} \right ) \hat{y} + \frac{\partial}{\partial z} \left ( e^{i k_x x} e^{i k_y y} e^{i k_z z} \right ) \hat{z} \right ] \\[0.1cm]
\end{align}
$$

Now, we can simplify each individual derivative and solve for the final answer.

$$
\begin{align}
\nabla \left [ e^{i(\vec{k} \cdot \vec{r} - \omega t)} \right ]
&= (e^{-i\omega t}) \left [ e^{i k_y y} e^{i k_z z} \frac{\partial}{\partial x}\left ( e^{i k_x x} \right ) \hat{x} + e^{i k_x x}e^{i k_z z} \frac{\partial}{\partial y}\left (  e^{i k_y y} \right ) \hat{y} + e^{i k_x x} e^{i k_y y} \frac{\partial}{\partial z} \left ( e^{i k_z z} \right ) \hat{z} \right ] \\[0.1cm]
&= (e^{-i\omega t}) \left [ i e^{i k_y y} e^{i k_z z} \left ( ik_x e^{i k_x x} \right ) \hat{x} + e^{i k_x x}e^{i k_z z} \left (  ik_y e^{i k_y y} \right ) \hat{y} + e^{i k_x x} e^{i k_y y} \left ( ik_z e^{i k_z z} \right ) \hat{z} \right ] \\[0.1cm]
&= (i)(e^{-i\omega t}) \left ( e^{i k_x x} e^{i k_y y} e^{i k_z z} \right ) \left (  k_x \hat{x} + k_y \hat{y} + k_z \hat{z} \right ) \\[0.1cm]
&= i\vec{k} e^{i\vec{k} \cdot \vec{r}} e^{-i\omega t} \\[0.1cm]
&= i\vec{k} e^{i(\vec{k} \cdot \vec{r} - \omega t)} \\[0.1cm]
\end{align}
$$

Even this pretty simple example has a lot of structure to it.  When I took my first upper-level undergraduate course in electricity and magnetism I mistakenly thought that the final expression simply came from using the chain rule on the full expression $$i\vec{k} \cdot \vec{r}$$ without realizing that you had to break it into parts to do it correctly.  I am sure others have run into this problem as well.

#### Spacetime

A similar problem plagued me when I was learning about tensor notation as an upper-level undergraduate and first year graduate student.  Tensors were particularly tough for me to learn, partly because professors hate carrying through the indices and avoid writing out the matrices.  Thus, the notation was truncated in many of the online references that I referenced.  Here is a solution of one of the preliminary problems from Peskin and Schroeder, once again describing the gradient of a complex exponential function.  A knowledge of special relativity and tensors is assumed for this next proof.

First, a bit of notation.  Let a 4-vector be represented by a variable with a superscipt or subscript Greek letter (for example, $$k^\mu$$ or $$x_\nu$$).  A 3-vector is represented by a variable with an arrow over it (for example $$\vec{x}$$).  The inner product of two 4-vectors can be written as $$p \cdot x = p_\nu x^\nu = g_{\mu \nu} p^\mu x^\nu$$ where $$g_{\mu \nu}$$ is the metric tensor:

$$
\begin{equation}
g_{\mu \nu} = g^{\mu \nu} =
\begin{bmatrix}
1 & 0 & 0 & 0 \\[0.1cm]
0 & -1 & 0 & 0 \\[0.1cm]
0 & 0 & -1 & 0 \\[0.1cm]
0 & 0 & 0 & -1
\end{bmatrix}
\end{equation}
$$

We start off with a method similar to that of the previous section.  The main difference here is that we need to specifically write out the inner product in terms of the metric tensor.

$$
\begin{align}
\partial^\mu \left ( e^{ik \cdot x} \right ) &= \partial^\mu \left ( e^{i k_\mu x^\mu} \right ) \\[0.1cm]
&= \partial^\mu \left ( e^{i g_{\mu \nu} k^\mu x^\nu} \right ) \\[0.1cm]
&= \partial^\mu \left ( e^{i (k^0 x^0 - \vec{k} \cdot \vec{x}) } \right )
\end{align}
$$

Now we can solve for $$\partial^\mu$$:

$$
\begin{equation}
\partial_\mu = \frac{\partial}{\partial x^\mu} = \left ( \frac{\partial}{\partial x^0}, \nabla \right )^T
\end{equation}
$$

$$
\begin{equation}
\partial^\mu = g^{\mu \nu} \partial_\nu =
\begin{bmatrix}
1 & 0 & 0 & 0 \\[0.1cm]
0 & -1 & 0 & 0 \\[0.1cm]
0 & 0 & -1 & 0 \\[0.1cm]
0 & 0 & 0 & -1
\end{bmatrix}
\begin{bmatrix}
\frac{\partial}{\partial x^0} \\[0.1cm]
\frac{\partial}{\partial x^1} \\[0.1cm]
\frac{\partial}{\partial x^2} \\[0.1cm]
\frac{\partial}{\partial x^3}
\end{bmatrix} =
\begin{bmatrix}
\frac{\partial}{\partial x^0} \\[0.1cm]
-\frac{\partial}{\partial x^1} \\[0.1cm]
-\frac{\partial}{\partial x^2} \\[0.1cm]
-\frac{\partial}{\partial x^3}
\end{bmatrix} =
\left ( \frac{\partial}{\partial x^0}, -\nabla \right )^T
\end{equation}
$$

We can proceed with the remainder of the problem.

$$
\begin{align}
\left ( \frac{\partial}{\partial x^0}, \hspace{2mm} -\nabla \right )^T \left ( e^{ik \cdot x} \right ) &= \left ( \frac{\partial}{\partial x^0}, \hspace{2mm} -\nabla \right )^T e^{i (k^0 x^0 - \vec{k} \cdot \vec{x}) } \\[0.1cm]
&= \left ( \frac{\partial}{\partial x^0} e^{i (k^0 x^0 - \vec{k} \cdot \vec{x}) }, \hspace{2mm} -\nabla e^{i (k^0 x^0 - \vec{k} \cdot \vec{x}) } \right )^T \\[0.1cm]
&= \left ( e^{-i \vec{k} \cdot \vec{x}} \frac{\partial}{\partial x^0} e^{ i k^0 x^0 }, \hspace{2mm} -e^{i k^0 x^0} \nabla e^{-i \vec{k} \cdot \vec{x} } \right )^T \\[0.1cm]
\end{align}
$$

We notice that the second part of the expression is exactly what we calculated in the previous section.

$$
\begin{align}
\left ( \frac{\partial}{\partial x^0}, \hspace{2mm} -\nabla \right )^T \left ( e^{ik \cdot x} \right ) &= \left ( e^{-i \vec{k} \cdot \vec{x}} \left ( ik^0 e^{ i k^0 x^0 } \right ), \hspace{2mm} -e^{i k^0 x^0} \left (-i\vec{k} e^{-i \vec{k} \cdot \vec{x} } \right ) \right )^T \\[0.1cm]
&= (i) \left ( e^{-i \vec{k} \cdot \vec{x}} e^{ i k^0 x^0 } \right ) \left ( k^0, \hspace{2mm} \vec{k} \right )^T \\[0.1cm]
&= ik^\mu \left ( e^{i (k^0 x^0 - \vec{k} \cdot \vec{x}) } \right ) \\[0.1cm]
&= ik^\mu e^{i k \cdot x } \\[0.1cm]
\end{align}
$$

There is a lot of subtle structure that comes into play when you analyze this expression.

So remember, when you are teaching a class, notation matters!  Don't forget that what seems obvious to you might not be for your students.
