---
layout: post
comments: true
title: Apparent Depth and the Cartesian Sign Convention
difficulty: easy
category: [Optics]
tags: [Common Homework Problem, Video]
description: I go through the Cartesian sign convention that is used in the derivation of apparent depth.
---

<center><iframe width="420" height="315" src="https://www.youtube.com/embed/zAIKDdHZRGc" frameborder="0" allowfullscreen></iframe></center><br />

Happy Turkey Day weekend everyone! After eating too much food, I think it is time for a post. I want to expand on the Cartesian sign convention that is used for the refraction of light at a single boundary. You can see my original video post above.

### The Cartesian Sign Convention

Students in introductory physics classes are often well versed in the mirror and thin lens equations, but they forget about the fundamental concept that is used to derive them - the refraction of light at a single surface. The refraction of light at a single surface is governed by a seemingly simple expression:

$$
\begin{equation}
\frac{n_1}{s} + \frac{n_2}{s'} = \frac{n_2 - n_1}{r}
\end{equation}
$$

where s is the distance from the boundary to the object, s' is the distance from the image to the boundary, r is the radius of curvature of the boundary, and $$n_1$$ and $$n_2$$ are the indices of refraction of the two media sandwiching the boundary. What makes this formula tricky to work with is the Cartesian sign convention:

1. The object distance s is positive for objects on the "incident light side". It is negative for objects on the "refracted light side".
2. Conversely, the image distance is positive for images on the "refracted light side". It is negative for objects on the "incident light side".
3. The radius of curvature r is positive if the center of curvature is on the "refracted light side". It is negative if the center of curvature is on the incident light side.
4. The material with index $$n_1$$ contains the object (technically not one of the official conventions, but I included it here just to be thorough about the setup).

The "incident light side" is the material from which light rays emanate. For a single surface this means that light comes from some source (e.g. a lightbulb, the sun, etc.), bounces off of the object of interest, and then travels through the boundary. Thus, we say that the light emanates from the object. For example, in the video above, light might come from the sun, bounce off of the fish, and then hit our eyes. We still say that light emanates from the fish because it is those light rays that will refract through the surface. We label the "incident light side" with index $$n_1$$.

The "refracted light side" is the side to which the refracted light rays travel. In the video, the refracted light side is the side with the smiling face; it is simply the other side of the boundary. We label it with index $$n_2$$.

Still remaining is the radius of curvature. If the boundary has some curvature, the radius of curvature will be finite. Conversely, if the boundary has no curvature (i.e. it is completely flat), the radius of curvature will be infinite. In the video, the radius of curvature is the radius of the Earth. This means:

1. The center of the circle that defines the radius of curvature is the center of the Earth. This implies a negative radius of curvature.
2. The radius of curvature is much larger than any of the other distances in the problem ($$r \gg s$$ and $$r \gg s'$$). Thus, we take r to approach infinity.

Using these conventions we can solve for the apparent depth of an object (as seen in the video).
