---
layout: layouts/post.njk
title: How to configure your blog
---
# Instructions for survival

## How to create your new blog

This here that you are reading is a Glitch project, so to create your own blog that is identical,
you just have to remix this. You can click this! 
<a class="glitch-remix" href="https://glitch.com/edit/#!/remix/ballistic-piranha">
  <img alt="Remix on Glitch" src="https://cdn.gomix.com/f3620a78-0ad3-4f81-a271-c8a4faa20f86%2Fremix-button.svg">
</a>

### Add new posts
All posts live in `src/`. Currently, there are 3 posts:
  - `index.md`, the 🏡
  - `instructions.md`, which you are reading right now
  - `sample-post.md`, which is an example post that you can duplicate over and over again for new content.

To create a new post, duplicate [`sample-post.md`](https://glitch.com/edit/#!/ballistic-piranha?path=src/sample-post.md:7:107), 
and start writing!

### Customize it

## Your webring
Use Glitch collections to add your friends' blogs to your webring.
<ol>
  <li>Create a Glitch collection</li>
  <li>Add its name to <code>src/_data/siteData.json</code>, in the "collection" field. For example, the 
  collection we're using in this sample is at <a href="https://glitch.com/@notwaldorf/frands">glitch.com/@notwaldorf/frands</a>,
  so we added <code>"collection": "notwaldorf/frands"</code> to the config file.</li>
</ol>