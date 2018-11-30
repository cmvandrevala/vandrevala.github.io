---
layout: post
comments: true
title: Refactoring One Year Later
difficulty: easy
category: [Computational Physics]
tags: [Downloadable Content]
description: I return to a tic-tac-toe practice project that I wrote about one year ago and refactor the code.  Then, I discuss three of the biggest issues that I came across while refactoring the code.
---

### Introduction

First, a bit of backstory.  About one year ago my friend Eric and I went on a trip to [Pelican Lake, WI](http://www.pelicanlakewi.org) over the long Fourth of July weekend.  While there we decided to practice our Ruby skills by coding tic-tac-toe.  It was a fun distraction between jet skiing and swimming.  And our resulting code was not too shabby.

Fast forward one year and Eric digs up the old repo with our code from break.  I created a gem out of it and was about to call it a day, but then I thought, "Why stop there?"  I am always looking for ways to hone my coding skills outside of work, so why not take the time to do a bit of refactoring?  I am about to begin a project on some legacy code at work, so this might be a good way to get the creative juices flowing.

Here are the links to the [GitHub Repo](https://github.com/cmvandrevala/tic-tac-toe-with-ai/releases) and the [Ruby Gem](https://rubygems.org/gems/tic-tac-toe-with-ai) for this project.  I will focus on three big ideas that I had to contend with during the refactoring process.

### Documentation

I'm not sure if this technically counts as refactoring, but I did update all of the supporting documents that went along with the code before I released it as a public gem.  I do think that good documentation is as much a part of your code as the functions and classes.  What is the point of writing an amazing program if nobody knows how to use it?

I added a LICENSE and README to the project.  Additionally, I added a description of how to initialize a game, make moves on the board, determine the state of the game, and have the computer decide where to move next. I decided not to add a Rakefile that automatically creates a game because I plan to use this gem in some practice Rails projects, and the rake task does not quite coincide with that.

When Eric and I were practicing one year ago, we did not create any sort of documentation - we were just playing around with Ruby. Luckily, we were trying to code the best and cleanest version of tic-tac-toe that we could, so our code was very easy to read at a later date. This made creating the documentation quite simple; it just goes to show that the first step to clean documentation is clean code!

### Determining the Computer Player's Scope

Generally speaking the tests that we wrote looked pretty good to me after a year - except one.  I looked at the acceptance tests and noticed that the way to have the AI create a new move is:

	$ ai_move = game.computer_player.decide_move(game.board.return_entire_board)

This stement looked long and ugly compared to the rest of the code. Something had to be done!

I decided to try to include the return_board method in the game class rather than the board class. My (incorrect) reasoning was that the satement was very long, so it must be dirty code.

The moment that I moved the return_board method to the Game class, I immediately had second thoughts.  Yes, the code works. Yes, the statement is not as long.  But is it really better? Should Game be in charge of returning a board?

I realized that the answer is no. The Game class should have nothing to do with the specific state of the Board. Otherwise it would be overstepping its boundaries of controlling the flow of a game. I reverted the change back to my original form and came to peace with the long statement. I learned that long statements are not necessarily bad, as long as the logic within them is sound and easy to follow.

### DRY-ing Up the Game Class

I noticed that there was a lot of repetition in the Game class in my code.  Many of the private functions were repeated as public functions in slightly different ways.  At the time, we were trying to keep each class as separated as possible.  However, I think that we added in a lot of fluff that gave the impression of the classes being disconnected without them really being separate.

Remember, classes do have to talk with each other (that's what makes programs interesting).  Yes, it is good to separate classes as much as possible, but it is not good to separate classes just for the sake of proclaiming that you have clean code.

### Conclusions

Overall, it was a fun little exercise that took a couple of hours total (including writing this post).  It gave me a real appreciation for why it is so important to write good, clean code the first time around rather than putting off refactoring till latler.  I hope to do this again in the future.

