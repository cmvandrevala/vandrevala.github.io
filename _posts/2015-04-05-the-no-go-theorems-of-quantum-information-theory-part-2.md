---
layout: post
comments: true
title: The No-Go Theorems of Quantum Information Theory (Part 2)
difficulty: hard
category: [Quantum Mechanics]
tags: [Current Research, Derivation]
description: I continue my overview of the no-go theorems in quantum information theory.
---

### Introduction

A couple of weeks ago, I started a high-level overview of some of the no-go theorems in quantum information theory. In that first post, we covered the no-cloning theorem, the no-teleportation theorem, and the no-hiding theorem. The no-cloning theorem states that we cannot copy an arbitrary qubit using a unitary operator. The no-teleportation theorem states that we cannot determine an arbitrary quantum state with just one measurement. Finally, the no-hiding theorem states that quantum information is never truly lost; instead, the information only moves between our system and the environment.

This week, we will focus on two more no-go theorems in quantum information theory.

###The No-Deletion Theorem

The no-deletion theorem in quantum information theory states given two copies of some arbitrary quantum state, it is impossible to delete one of the copies against the other. In other words, there is no unitary operator $$U$$ such that:

$$
\begin{equation}
U \left ( | \psi \rangle | \psi \rangle | \phi \rangle \right )= | \psi \rangle | 0 \rangle | \phi' \rangle
\end{equation}
$$

In the expression above, $$\phi$$ and $$\phi'$$ are two general strings of qubits before and after the operation. They are simply written above for completeness.

The proof of this theorem is straightforward and similar to that of the no-cloning theorem. Suppose there did exist a unitary operator $$U$$ that could be used to perform a deletion as stated above. Then:

$$
\begin{equation}
U \left ( | 0 \rangle | 0 \rangle | \phi \rangle \right )= | 0 \rangle | 0 \rangle | \phi' \rangle
\end{equation}
$$

$$
\begin{equation}
U \left ( | 1 \rangle | 1 \rangle | \phi \rangle \right )= | 1 \rangle | 0 \rangle | \phi' \rangle
\end{equation}
$$

We can define an arbitrary state $$\psi$$ as:

$$
\begin{equation}
| \psi \rangle = a |0\rangle + b|1\rangle
\end{equation}
$$

On the one hand:

$$
\begin{align}
U \left ( | \psi \rangle | \psi \rangle | \phi \rangle \right )
&= | \psi \rangle | 0 \rangle | \phi' \rangle\\[0.1cm]
&= a | 0 \rangle | 0 \rangle | \phi' \rangle + b | 1 \rangle | 0 \rangle | \phi' \rangle
\end{align}
$$

But on the other hand:

$$
\begin{align}
U \left ( | \psi \rangle | \psi \rangle | \phi \rangle \right )
&= U \left [ \left ( a | 0 \rangle + b | 1 \rangle \right ) \left ( a | 0 \rangle + b | 1 \rangle \right ) | \phi \rangle \right ]\\[0.1cm]
&= U \left [ a^2 | 0 \rangle | 0 \rangle + b^2 | 1 \rangle | 1 \rangle + ab | 0 \rangle | 1 \rangle + ba | 1 \rangle | 0 \rangle \right ] | \phi \rangle\\[0.1cm]
&= a^2 U| 0 \rangle | 0 \rangle | \phi \rangle + b^2 U| 1 \rangle | 1 \rangle | \phi \rangle + ab U| 0 \rangle | 1 \rangle | \phi \rangle + ba U| 1 \rangle | 0 \rangle | \phi \rangle\\[0.1cm]
&= a^2 | 0 \rangle | 0 \rangle | \phi' \rangle + b^2 | 1 \rangle | 0 \rangle | \phi' \rangle + ab U \left ( | 0 \rangle | 1 \rangle + | 1 \rangle | 0 \rangle \right ) | \phi \rangle\\[0.1cm]
\end{align}
$$

The last part of the expression is an entangled state. We can define it as $$\Phi$$:

$$
\begin{align}
U \left ( | \psi \rangle | \psi \rangle | \phi \rangle \right )
&= a^2 | 0 \rangle | 0 \rangle | \phi' \rangle + b^2 | 1 \rangle | 0 \rangle | \phi' \rangle + ab U | \Phi \rangle | \phi \rangle\\[0.1cm]
\end{align}
$$

Thus, we see a contradiction. In the first calculation, the final state is defined in terms of a, b, 0, 1, and $$\phi'$$. But in the other calculation, we see an additional entangled state in the final expression. The two calculations are not equal in general, and $$U$$ cannot exist (proof by contradiction).

This theorem is important because it shows how quantum states are not as fragile as they seem. In general, we think about how quantum states can lose coherence due to even minor environmental interference. But here, we see that quantum states might be able to last in certain circumstances.

###The No-Communication Theorem

This is an unfortunately named theorem. It does not state that communication is impossible using quantum systems. Rather, it says that information cannot travel faster than the speed of light. This statement comes directly from the special theory of relativity.

How does this relate to quantum information theory specifically? About one decade ago, scientists discovered that when they created an entangled pair of qubits called a [Bell state](http://en.wikipedia.org/wiki/Bell_state), separated them, and measured them against each other, the information about the state of the system seemed to travel between them instantaneously. The quantum information community did not quite know how to deal with this situation; it seemed like the information about the two qubits were traveling between them faster than the speed of light. Does this violate the no-communication theorem?

It turns out that it does not. Suppose Alice prepares an entangled pair of qubits in a Bell state. She takes one of the qubits and gives Bob the other, without telling him any details about the initial preparation. Finally, Alice measures her qubit and collapses the state. What can Bob say about the original state of the qubits? Effectively nothing. He has no idea if it  was an entanlged state or simply a product state. Thus, even though the qubits "communicate" the collapse of the state seemingly faster than the speed of light, Bob cannot glean any useful information about the state from his measurement. Another way to state this theorem is one cannot transmit information using entanglement alone.

### Next Week

Next week, we will first take a bit of time to discuss the partial trace of a quantum system. Then, we will use that information to finish the discussion of the no-go theorems in quantum information theory. Until next week!
