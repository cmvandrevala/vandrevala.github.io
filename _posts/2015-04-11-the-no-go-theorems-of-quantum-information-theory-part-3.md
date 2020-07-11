---
layout: post
comments: true
title: The No-Go Theorems of Quantum Information Theory (Part 3)
difficulty: hard
category: [Quantum Mechanics]
tags: [Current Research, Derivation]
description: I finish my discussion of some of the no-go theorems in quantum information theory.
---

### Introduction

This week, I am going to discuss two final no-go theorems in quantum information theory. In order to understand these theorems, we require a little bit more math than we have seen in the previous posts. Don't worry, I will introduce math concepts as we need them.

### The No-Broadcast Theorem

The first of the two theorems that we are going to discuss is the no-broadcast theorem. It is a slightly weaker form of the no-cloning theorem that states that it is impossible to broadcast a quantum state. However, the term \"broadcast\" has a very specific definition in this theorem. Let's take a look.

#### The Tensor Product

Recall that the state of a quantum particle is represented as a vector in a complex [vector space](http://mathworld.wolfram.com/VectorSpace.html). For example, the state of a single spin particle is:

$$
\begin{equation}
| \psi \rangle = \alpha |0 \rangle + \beta | 1 \rangle
=
\alpha
\begin{bmatrix}
1\\[0.1cm]
0
\end{bmatrix}
+
\beta
\begin{bmatrix}
0\\[0.1cm]
1
\end{bmatrix}
=
\begin{bmatrix}
\alpha\\[0.1cm]
\beta
\end{bmatrix}
\end{equation}
$$

But generally speaking, single isolated particles aren't too exciting. In quantum computing, we need multiple particles to see interesting effects like entanglement. So how do we represent the state of multiple quantum particles? We use the tensor product to form what is called a product state.

Suppose I have two spin particles given by:

$$
\begin{equation}
| \psi \rangle = \alpha |0 \rangle + \beta | 1 \rangle
\end{equation}
$$

$$
\begin{equation}
| \phi \rangle = \gamma |0 \rangle + \delta | 1 \rangle
\end{equation}
$$

The total state of the two particles (also called the product state) is given by a tensor product:

$$
\begin{equation}
| \Psi \rangle = | \psi \rangle \otimes | \phi \rangle
=
\begin{bmatrix}
\alpha\\[0.1cm]
\beta
\end{bmatrix}
\otimes
\begin{bmatrix}
\gamma\\[0.1cm]
\delta
\end{bmatrix}
=
\begin{bmatrix}
\alpha
\begin{bmatrix}
\gamma\\[0.1cm]
\delta
\end{bmatrix}\\[0.1cm]
\beta
\begin{bmatrix}
\gamma\\[0.1cm]
\delta
\end{bmatrix}
\end{bmatrix}
=
\begin{bmatrix}
\alpha\gamma\\[0.1cm]
\alpha\delta\\[0.1cm]
\beta\gamma\\[0.1cm]
\beta\delta
\end{bmatrix}
\end{equation}
$$

We know that individual quantum states can evolve by [unitary operations](http://en.wikipedia.org/wiki/Unitary_operator). In the case of spin states, this is usually given by:

$$
\begin{equation}
U |\psi \rangle = U \left ( \alpha |0\rangle + \beta |1 \rangle \right )
\end{equation}
$$

where $$U$$ is a $$2 \times 2$$ unitary matrix. How do we express a pair of unitary operators for two spins in a product state? The process is very similar to that above. Let $$U_1$$ and $$U_2$$ be two unitary operators. Then:

$$
\begin{equation}
U_1 =
\begin{bmatrix}
a & b\\[0.1cm]
c & d
\end{bmatrix}
\end{equation}
$$

$$
U_2 =
\begin{bmatrix}
w & x\\[0.1cm]
y & z
\end{bmatrix}
$$

$$
\begin{equation}
U_1 \otimes U_2
=
\begin{bmatrix}
a & b\\[0.1cm]
c & d
\end{bmatrix}
\otimes
\begin{bmatrix}
w & x\\[0.1cm]
y & z
\end{bmatrix}
=
\begin{bmatrix}
a
\begin{bmatrix}
w & x\\[0.1cm]
y & z
\end{bmatrix}
& b
\begin{bmatrix}
w & x\\[0.1cm]
y & z
\end{bmatrix}
\\[0.1cm]
c
\begin{bmatrix}
w & x\\[0.1cm]
y & z
\end{bmatrix}
& d
\begin{bmatrix}
w & x\\[0.1cm]
y & z
\end{bmatrix}
\end{bmatrix}
=
\begin{bmatrix}
aw & ax & bw & bx\\[0.1cm]
ay & az & by & bz\\[0.1cm]
cw & cx & dw & dx\\[0.1cm]
cy & cz & dy & dz
\end{bmatrix}
\end{equation}
$$

Thus, we have a nice (albeit verbose) notation for describing quantum states and operators. Just a quick thing to note - not all unitary operators are formed using tensor products. For example, the [CNOT gate](http://en.wikipedia.org/wiki/Controlled_NOT_gate) in quantum computing cannot be written as a tensor product of two $$2 \times 2$$ unitary operators. We call these entangling operators because they create [entangled quantum states](http://en.wikipedia.org/wiki/Quantum_entanglement) (i.e. quantum states that cannot be written as a tensor product).

#### The Density Matrix

In an intermediate or advanced quantum mechanics class, you might run into the density matrix representation of a quantum system. The density matrix representation for our spin state is given by $$\rho$$:

$$
\begin{equation}
|\psi \rangle = \alpha |0\rangle + \beta |1\rangle
\end{equation}
$$

$$
\begin{equation}
\rho \equiv | \psi \rangle \langle \psi |
=
\begin{bmatrix}
\alpha\\[0.1cm]
\beta
\end{bmatrix}
\begin{bmatrix}
\alpha^* & \beta^*
\end{bmatrix}
=
\begin{bmatrix}
|\alpha|^2 & \alpha \beta^*\\[0.1cm]
\beta \alpha^* & |\beta|^2
\end{bmatrix}
\end{equation}
$$

Note that we can create a density matrix for any state vector. This includes entangled states, products states, etc. For examples, the density matrix for a product state is given by:

$$
\begin{equation}
| \Psi \rangle = | \psi \rangle \otimes | \phi \rangle
=
\begin{bmatrix}
\alpha\\[0.1cm]
\beta
\end{bmatrix}
\otimes
\begin{bmatrix}
\gamma\\[0.1cm]
\delta
\end{bmatrix}
=
\begin{bmatrix}
\alpha
\begin{bmatrix}
\gamma\\[0.1cm]
\delta
\end{bmatrix}\\[0.1cm]
\beta
\begin{bmatrix}
\gamma\\[0.1cm]
\delta
\end{bmatrix}
\end{bmatrix}
=
\begin{bmatrix}
\alpha\gamma\\[0.1cm]
\alpha\delta\\[0.1cm]
\beta\gamma\\[0.1cm]
\beta\delta
\end{bmatrix}
\end{equation}
$$

$$
\begin{align}
\rho &= | \Psi \rangle \langle \Psi |\\[0.1cm]
&=
\begin{bmatrix}
\alpha \gamma\\[0.1cm]
\alpha \delta\\[0.1cm]
\beta \gamma\\[0.1cm]
\beta \delta
\end{bmatrix}
\begin{bmatrix}
\alpha^* \gamma^* & \alpha^* \delta^* & \beta^* \gamma^* & \beta^* \delta^*
\end{bmatrix}\\[0.1cm]
&=
\begin{bmatrix}
|\alpha \gamma|^2 & |\alpha|^2 \gamma\delta^* & |\gamma|^2 \alpha \beta^* & \alpha\gamma\beta^* \delta^*\\[0.1cm]
|\alpha|^2 \delta \gamma^* & |\alpha \delta|^2 & \alpha\delta\beta^*\gamma^* & |\delta|^2 \alpha \beta^*\\[0.1cm]
|\gamma|^2 \beta \alpha^* & \beta \gamma \alpha^* \delta^* & |\beta \gamma|^2 & |\beta|^2 \gamma \delta^* \\[0.1cm]
\beta \delta \alpha^* \gamma^* & |\delta|^2 \beta \alpha^* & |\beta|^2 \delta \gamma^* & |\beta \delta|^2
\end{bmatrix}\\[0.1cm]
&=
\begin{bmatrix}
|\alpha|^2 & \alpha \beta^*\\[0.1cm]
\beta \alpha^* & |\beta|^2
\end{bmatrix}
\otimes
\begin{bmatrix}
|\gamma|^2 & \gamma \delta^*\\[0.1cm]
\delta \gamma^* & |\delta|^2
\end{bmatrix}\\[0.1cm]
&= |\psi \rangle \langle \psi | \otimes | \phi \rangle \langle \phi |
\end{align}
$$

We can use this density matrix to do the same calculations that we used to do with a single spin vector. For example, we know from introductory quantum mechanics that the expectation value of an operator is given by:

$$
\begin{equation}
\langle A \rangle = \langle \psi | A | \psi \rangle
\end{equation}
$$

The expectation value of an observable can also be found using a density matrix $$\rho$$:

$$
\begin{equation}
\langle A \rangle = Tr \left ( \rho A \right )
\end{equation}
$$

This is straightforward to prove:

$$
\begin{align}
\langle A \rangle
&= Tr \left ( \rho A \right )\\[0.1cm]
&= Tr \left ( | \psi \rangle \langle \psi | A \right )\\[0.1cm]
&= \sum_n \langle n | \psi \rangle \langle \psi | A | n \rangle\\[0.1cm]
&= \sum_n \langle \psi | A | n \rangle \langle n | \psi \rangle\\[0.1cm]
&= \langle \psi | A | \psi \rangle\\[0.1cm]
&= \langle A \rangle
\end{align}
$$

So at the end of the day, why do we have two representations for quantum states? Shouldn't the state vector approach work in every situation? The state vector approach is great if you want to analyze a [pure quantum state](http://en.wikipedia.org/wiki/Quantum_state#Pure_states); these are states that have a well-defined wave function and a well-defined eigenvalue. For example, a particle in the spin up state is in a pure state because the probability of finding the particle in the spin down state is exactly zero.

However, the density matrix is great for studying particles in [mixed states](http://en.wikipedia.org/wiki/Quantum_state#Mixed_states); these are quantum states where there is a probability of finding the particle in one of many states with one of many eigenvalues. For example, we can separately prepare two sets of particles, one group in the spin up pure state and the other group in the spin down pure state. Then, we can mix these groups together in different ratios to form mixed states.

We have only scratched the surface on the discussion of density matrices. Right now, I will say that the density matrix formalism is most useful for deriving the no-broadcasting theorem and leave a further discussion of density matrices for another day.

#### The Partial Trace

The last bit of math that we have to define in order to derive the no-broadcast theorem is the partial trace. Suppose I have a density matrix $$\rho^{AB}$$ that is composed of states from a composite [Hilbert space](http://mathworld.wolfram.com/HilbertSpace.html) $$H_A \otimes H_B$$.

However, I only have access to one of the two systems. For example, I might be able to measure and manipulate the state from $$H_A$$, but I cannot do anything to the state from $$H_B$$. I need a way to retrieve the density matrix of the state from $$H_A$$, given the total density matrix $$\rho^{AB}$$. We define the partial trace over B (where $$H_B$$ has a set of basis states $$e_i$$) as:

$$
\begin{equation}
Tr_B \left ( \rho^{AB} \right ) \equiv \sum_i \left ( I_1 \otimes \langle e_i | \right ) \rho^{AB} \left ( I_1 \otimes | e_i \rangle \right )
\end{equation}
$$

In the specific case of a product state:

$$
\begin{equation}
\rho_A = Tr_B \left ( \rho^{AB} \right )
\end{equation}
$$

We call $$\rho_A$$ the reduced density matrix.

Obviously, we have only touched on the definition of the partial trace in this post. We can take some time to explore it more fully in future posts.

#### The Theorem

Now that we have set up all of the formalism, the actual proof of the no-broadcast theorem is very straightforward. Suppose I have a composite quantum state $$\Psi$$ made up of two individual quantum states $$\psi_A$$ and $$\psi_B$$:

$$
\begin{equation}
| \Psi \rangle \langle \Psi | = | \psi_A \rangle \langle \psi_A | \otimes | \psi_B \rangle \langle \psi_B | = \rho^{AB}
\end{equation}
$$

Then, there is no map or operator on $$\rho^{AB}$$ that broadcasts a state. A broadcast is defined as:

$$
\begin{equation}
Tr_A \left ( \rho^{AB} \right ) = Tr_B \left ( \rho^{AB} \right ) = \rho
\end{equation}
$$

This comes from the definition of the partial trace above; if A and B are two arbitrary states, then the density matrix for state A need not equal the density matrix for state B.

The math seems to work out pretty well, but what does this theorem physically mean? Well, the reduced density matrix that we obtain after taking the partial trace is still a regular old density matrix. We can still manipulate it in all of the usual ways as described above. However, if we look closely at the reduced density matrix, we see that it is almost identical to the density matrix of the full system except that one of the states is not included in the tensor product. Thus, it is the density matrix of the system assuming that we leave a certain state undisturbed.

### The No-Programming Theorem

Let's finish our discussion of the no-go theorems of quantum information theory by discussing the no-programming theorem. In classical computing, there is a type of computing architecture called a [stored program architecture](http://en.wikipedia.org/wiki/Stored-program_computer). Here, the input data and the computer programs are both stored in memory. A few examples of this architecture are the [Von Neumann architecture](http://en.wikipedia.org/wiki/Von_Neumann_architecture) and the [Harvard architecture](http://en.wikipedia.org/wiki/Harvard_architecture). What is special about this architecture is that you can dynamically create and run new programs in memory.

In quantum computing, we cannot create a programmable computer using the stored program architecture. The reason is very simple; a program in a quantum computer is just a unitary matrix acting on all of the input qubits. Distinct programs come from distinct unitary operators. We note that distinct unitary operators are orthogonal. Thus, we cannot create a unitary operator (a program) that can write another unitary operator (another program).

### Conclusions

It took a few weeks, but we finally made it through some of the major no-go theorems of quantum information theory. Remember, quantum information theory is a very young field of science, so this list of theorems may grow substantially as time goes on. For now though, it gives us a good idea of some of the restrictions that we face when designing quantum circuits.
