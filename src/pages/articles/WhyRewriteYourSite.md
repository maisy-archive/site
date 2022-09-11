---
title: "Why rewrite your site 6 times?"
description: "Please, I can justify it this time I swear"
date: "2022-09-10"
tags: ["webdev", "misery"]
layout: ../../layouts/ArticleLayout.astro
---

# What?

If you're not aware, the site you are currently viewing is the ~~6th~~ 7th iteration - each time being a complete rewrite. Each version used a subtly different framework, too!

This article will serve as a comprehensive list of this site's iterations, as well as justification for rewriting it so many times.

# History

## Legacy / Version 0

This iteration was written in HTML, CSS and JS, and was my first dive into web development. There is no hosted version anymore. The source code is [here](//github.com/Beefers/site/tree/legacy). During this time, my online name was `rem`, a decision I regret.

## Version 1

Version 1 marked the migration from GitHub Pages to Vercel. It was written using SvelteKit, and was effectively a direct port of Legacy. It remained relatively similar to the first commit throughout it's lifespan. Here are the [first](//rem-my-github-io-kp5pssc3h-rem-my.vercel.app/) and [last](//site-git-v1-beefers.vercel.app/) commits.

## Version 2

In Version 2, I explored "advanced" CSS styling, using transitions to animate page switching, among other things. It was also written using SvelteKit, and made use of the [Dracula](//draculatheme.com) colour scheme. Between the [first working commit](//site-9zgoiir3s-rem-my.vercel.app/) and [last commit](//site-git-v2-beefers.vercel.app/), I moved back to using `Beef` as my online name.

## Version 3

Version 3 was... certainly an interesting case. It had 6 commits, with only 4 of them adding meaningful content, and some being outright broken on Vercel. The first commit did not work, and the last commit edited the README. This was the result of me being unable to deal with a few annoyances I encountered when using Astro and Svelte together - for example, fonts would not load properly. Considering the current iteration is also written with Astro, I guarantee these issues came from lack of experience as opposed to software bugs.

## Version 4

Version 4 was when I began to take web development more seriously. I wanted a real portfolio, and my own space on the internet. Unfortunately, this version never quite became what I imagined, remaining with placeholder text on the front page throughout it's lifespan. I am still proud of it, however, since it is written fairly sanely, using a tech stack of SolidJS, WindiCSS and Vite. The first 2 commits (4 deployments) did not work. Here is the [first working commit](//site-jh5zqygpw-beefers.vercel.app/) and the [last commit](//site-git-v4-beefers.vercel.app/).

## Version 5

In this iteration, I (at the time) thought I had *perfected* my website. Oh, how wrong I was! It used the same tech stack as Version 4, alongside TypeScript. The idea was that I would make it maintainable, preventing further rewrites. However, I quickly realised that a SolidJS app is not a good fit for a static site like this one. I never made use of the reactivity, so what was the point? In the end, I started work on yet another rewrite. Despite this, I am still proud of it. Here is the [first commit](//site-avz3yew0y-beefers.vercel.app/), the [first restyling commit](//site-8hxubuf83-beefers.vercel.app/), the [second restyling commit](https://site-ju02v5g2r-beefers.vercel.app/) and the [last commit](https://site-git-v5-beefers.vercel.app/).

## Version 6

The version you are looking at! I am very proud of it, as it uses an amazing tech stack consisting of Astro, UnoCSS and Vite. The styling makes me happy, [Catppuccin](//github.com/catppuccin) is very nice. I've said this with every iteration but I truly believe that Version 6 can be maintainable into the future, and should stop me from rewriting again. <sub>No promises, though.</sub> Here is the [first commit](//site-3rajshmt5-beefers.vercel.app/) and the [latest commit](//site-git-v6-beefers.vercel.app/).

## TODO

* Write justification
* Add version table