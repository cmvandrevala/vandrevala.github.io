---
layout: post
comments: true
title: The No-Go Theorems of Quantum Information Theory (Part 1)
difficulty: hard
category: [Quantum Mechanics]
tags: [Derivation, Current Research]
description: I review the no-cloning theorem as well as some of the less well-known no-go theorems in quantum information theory.
fullview: false
---

### Introduction

Over the past week I have been reading some sections from the [Elements of Quantum Computation and Quantum Communication](http://www.amazon.com/Elements-Quantum-Computation-Communication/dp/1466517913/ref=sr_1_1?ie=UTF8&qid=1426976364&sr=8-1&keywords=Elements+of+Quantum+Computation+and+Quantum+Communication++By+Anirban+Pathak) by Anirban Pathak. One concept that I learned from this book that really changed my way of thinking about quantum information was the [no-go theorem](http://en.wikipedia.org/wiki/No-go_theorem). This is not a fundamentally new concept. Rather, it is a useful way to think about some of the restrictions we encounter in quantum computing and quantum information theory. I want to summarize some of the no-go theorems that Pathak outlines in his book over the next couple of weeks.

### What is a No-Go Theorem?

First off, we must define what a no-go theorem is. A no-go theorem shows that a situation is not possible given some specific setup. Oftentimes, a no-go theorem may appear contradictory or strange; for example, the Heisenberg uncertainty principle is a classic no-go theorem that states that we cannot measure the momentum or position of a quantum particle to an arbitrary accuracy if we know the value of the other. Another example of a no-go theorem is the [Weinberg–Witten theorem](http://en.wikipedia.org/wiki/Weinberg%E2%80%93Witten_theorem). We will now look at a few specific theorems within quantum information theory.

### The No-Cloning Theorem

This is a major theorem that most scientists learn early in their quantum computing career. The no-cloning theorem states that there is no unitary operator that can clone an arbitrary quantum state. The proof is pretty straightforward. Suppose there does exist some operator $$U$$ that could clone an arbitrary quantum state:

$$
\begin{equation}
| \psi \rangle = a |0 \rangle + b |1 \rangle
\end{equation}
$$

$$
\begin{equation}
U \left [ | \psi \rangle | 0 \rangle \right ] = | \psi \rangle | \psi \rangle
\end{equation}
$$

We will run into a contradiction. On the one hand:

$$
\begin{align}
U \left [ | \psi \rangle | 0 \rangle \right ] &= U \left [ \left ( a |0 \rangle + b |1 \rangle \right ) | 0 \rangle \right ]\\[0.1cm]
&= U \left [ a |00 \rangle + b |10 \rangle \right ]\\[0.1cm]
&= a U |00 \rangle + b U |10 \rangle\\[0.1cm]
&= a |00 \rangle + b |11 \rangle\\[0.1cm]
\end{align}
$$

But on the other hand:

$$
\begin{align}
U \left [ | \psi \rangle | 0 \rangle \right ] &= | \psi \rangle | \psi \rangle\\[0.1cm]
&= \left [ a |0 \rangle + b |1 \rangle \right ] \left [ a |0 \rangle + b |1 \rangle \right ]\\[0.1cm]
&= |a|^2 |0 \rangle |0 \rangle + |b|^2 |1 \rangle |1 \rangle + ab \left [ |01 \rangle + |10 \rangle \right ]\\[0.1cm]
\end{align}
$$

In general, these expressions are not equal, so U cannot exist (proof by contradiction).

The implications of this theorem are far reaching in the world of quantum information theory. Since we cannot clone an arbitrary quantum state, the fan-out and fan-in operations are forbidden (i.e. you cannot split a wire into two or more pieces). This changes how we must think of many of the algorithms in quantum information theory. For example, classical error correction is largely based on fan-in and fan-out techniqes. Additionally, since measuring a qubit collapses it into a well-defined state, it is much harder to commit man-in-the-middle attacks. This is because there is no way to stealthily measure a qubit that is being sent between two parties.

###The No-Teleportation Theorem

This is one of those theorems that seems really mundane until you stop to consider its consequences. The no-teleportation theorem states that you cannot determine an arbitrary quantum state by one measurement alone. Instead, you can only get an approximate idea of the quantum state by taking many measurements and calculating the probability of recovering each eigenstate. Anybody who has taken introductory quantum mechanics should not be too surprised by this result. But the big idea here is that the information carried in a single qubit cannot be converted to classical bits. It would take an infinite number of classical bits to carry the exact state of an arbitrary qubit. Do note that it is easy to go the other way though; you can always convert classical bits to qubits.

###The No-Hiding Theorem

The no-hiding theorem states that if information is lost in a quantum system due to the interactions with its environment (a process called bleaching), then the information has simply moved from our system to its environment. This implies a couple of things. First, the information in our quantum system has not disappeared or been "deleted". Instead, it has just moved from one place to another. Secondly, the information cannot be hidden in the correlations between a system and its environment. A [recent study](http://phys.org/news/2011-03-quantum-no-hiding-theorem-experimentally.html#jCp) has demonstrated this experimentally.

Why is this useful? Let's consider an example in cryptography. You can hide a classical string of bits by encrypting it using the [Vernam cipher](http://www.cryptomuseum.com/crypto/vernam.htm). If the one time pad that you use is truly random, then the encoded bit string and the one time pad contain absolutely no information about the original bit string when you consider them separately. Instead, the information about the original bit string is stored in the correlations between the cipher and the key (i.e. you need both the encoded message and the pad to recover the original bit string). However, we do not have this advantage in quantum information theory. No matter how hard we try, the one time pad and the encoded bit string will both contain some amount of information about the original bit string. Thus, we need to rethink our strategy for cryptography.

###Next Week

Next week we will continue our discussion by looking at three more no-go theorems in quantum information theory. See you then!
