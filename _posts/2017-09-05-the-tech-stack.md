---
layout: post
comments: true
title: The Tech Stack
category: [Cupcake Physics]
tags: [Ansible, Cupcake Physics News, Elixir, Elm, Phoenix]
description: I outline some of the technologies that I am going to use in the development of Cupcake Physics.
---

### Tech Stack

Over the past few weeks, I have been working hard to develop the groundwork for the Cupcake Physics site. Although I have had experience developing web apps in the past, this is the first time that I have coordinated all of the parts of a full stack app at one time; I have to think about everything from developing the app to managing deployment to monitoring the status of the servers (and much more). It has been challenging to learn about all of the details of managing an application, and I am sure I will learn plenty more in the future!

I want to write a blog post that outlines some of the progress that I have made in the past few weeks. I have experimented with a variety of technologies and written a number of toy applications in preparation for my actual project. This is a good time to reflect on some of my experiences. At the very least, this post will help me organize some of my thoughts for future development. Ideally, this reflection might help other developers in their own work. Instead of talking about every detail of my experimentation, I will dive into three different technologies in order to make sure that this post does not become a novel!

### The Frontend - Elm

I have experience coding the backends of a variety of applications at my current job and during my research. These apps range from legacy enterprise systems to more modern APIs and use a variety of languages - Java, PHP, Ruby, etc. I am generally comfortable with backend development and enjoy the challenge of implementing business logic in an elegant way.

However, frontend development has frustrated me in the past. Although I do have a fair amount of experience in this area, I have found the act of writing code for the frontend quite tedious. Javascript libraries and frameworks do help make the experience better, but I feel like I can never trust that browsers will do what I want them to do. No matter how many tests I write or no matter how simple I make my functions, I do not have a high degree of confidence in the code that is shipped out to the user's browser. There is too much variability in everything from the version of the browser to the device on which the page is viewed.

I heard about the [Elm language](http://elm-lang.org/) from a co-worker and grew quite curious about it. It is frontend development as I have never experienced - I have never used a statically typed, functional langage (let alone one on the frontend!). After a few tutorials, I fell in love with the language. After writing some well-tested Elm code, I am confident that it does what I expect it to do. As an added bonus, Elm is remarkably similar to Elixir (see below), so the frontend and backend feel very similar - even though they are written in two different languages.

### The Backend - Elixir/Phoenix

[Ruby on Rails](http://rubyonrails.org/) was my original choice for the backend of Cupcake Physics. I have enjoyed working with the framework in the past due to the fact that I can develop code very quickly and iterate efficiently. However, I have found issue with some aspects of the framework (e.g. it has a tendency to produce monolithic apps, it couples data persistence very tightly to your business logic, etc.). Since the functional style of programming drew me to the Elm language, I decided to try something new for the backend as well.

I had some experience writing Elixir apps before coming into this project. My experience with Elixir and Rails made the Phoenix framework seem very natural to me. Phoenix addresses many of the concerns that I had about the Rails framework, and it uses powerful elements of the Elixir language (like pattern matching) to create very simple and readable code.

### Infrastructure - Ansible

A few weeks ago, I had little experience with the operations side of running an app. Thus, a large amount of my time was spent learning how to run and monitor an app. I tried out a few different technologies during the past few weeks such as Chef and Puppet. However, I found that [Ansible](https://www.ansible.com/) to have the right mixture of ease of use and power for IT automation. I especially like the fact that Ansible uses simple Yaml files rather than a domain speicific language to specify and run tasks.

### Final Thoughts

These past few weeks have been a great learning experience for me. I know I will definitely have to keep learning about these technologies (and others) as I build this app.

Until next time!
