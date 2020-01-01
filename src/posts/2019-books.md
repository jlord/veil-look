---
layout: layouts/post.njk
title: 2019 Books
date: 2019-12-31
---

I set a goal of reading 12 books in 2019 and I read 19—how about that! If you want to see a shelf and list without my ramblings, [view the book page](/books). Below, I ramble. You can [skip to the how-to](#how-to-books), if you want to make a book page, too.

<h3 id="book-shelf">2019 Shelf</h2>
<div class="book-shelf-container">
  {%- for book in books -%}
  <div class="book">
    <a href="{{ book.GoodreadsURL }}">
      <img src="{{ book.CoverURL }}">
    </a>
    <!-- <h3>{{ book.Title }}</h3> -->
  </div>
  {%- endfor -%}
</div>

## Some highlights

I read more Fiction than I have in many years combined! I enjoyed it, too. I really liked Sally Rooney's _Normal People_; I was sucked into the world she built and learned some handy Irish slang. _Fleishman Is in Trouble_, oof, ruined me emotionally for two days (worth it).

Despite venturing away from Non-Fiction more often this year I still enjoyed some great tales of history: _The Professor and the Madman_ is the story of how the Oxford English Dictionary came to be and goes places you wouldn't expect; _King Cnut and the Viking Conquest of England_ is about Cnut, the first Danish King of England, and with this book I started the year true to my love for all this story touches (Denmark! Vikings! Medieval England!); the last book I read this year, _The Library Book_, tells the story of 1986 fire to the Los Angeles Public Library, the investigation, the restoration and the incredible inner workings of a library.


I loved _The Art Detective_ because I love the BBC show Fake or Fortune and this book, by one of the hosts, Philip Mould, is the same sort of detective, restoration, and history tales as the show—which, tragically, I wasn't able to find the latest season of unofficially on YouTube this year.

I read my first Science Fiction books this year! _Exhalation_ was beautiful and thought provoking. _Ancillary Justice_ created an atmosphere that spilled into real life and merged with the music I was listening to on my commutes at the time.

I re-read _The Course of Love_ by School of Life's Alain de Botton. And I'd read it again! It uses the story of a fictional couple's marriage over the years to talk about the psychology of relationships and ourselves. _Love is a service_. I read a few more books from the School of Life, too. And I'll read more!

<h3 id="book-list">2019 List</h2>
<div class="book-list-container">
  <table>
    <thead>
      <tr>
        <th>No.</th><th>Title</th><th>Author</th><th>Read</th><th>Category</th><th>Pages</th><th>Rating</th>
      </tr>
    </thead>
    <tbody>
      {%- for book in books -%}
      <tr>
        <td class="table-row-number"></td><td><a href="{{ book.GoodreadsURL }}">{{ book.Title }}</a></td><td>{{ book.Author }}</td><td>{{ book.Read }}</td><td>{{ book.Category }} <span class="meta-text">{{ book.SubCategory }}</span></td><td class="center">{{ book.Pages }}</td><td class="center">{{ book.Rating }}</td>
      </tr>
      {%- endfor -%}
    </tbody>
  </table>
</div>

<h2 id="how-to-books">How this Page is Made</h2>
<p>I use <a href="https://www.goodreads.com/user/show/768192-jlord" target="_blank">Goodreads</a> to keep track of books I've read but their API is not stellar and they can't provide links to cover images which is a must-have for a shelf view. Since I don't read at breakneck speeds I just made a <a href="https://docs.google.com/spreadsheets/d/1tJtKdvCWCLLv9mZwTFjSXM6t2mMfPHgkhtWJDBdpjYc/edit#gid=0" target="_blank">spreadsheet</a> myself with information from my Goodreads data and links to cover art.</p>

<p>That spreadsheet is turned into JSON via my <a href="https://spreadsheet.glitch.me" target="_blank">tool</a> that does the spreadsheet-to-JSON conversion for you. This site is built with <a href="https://www.11ty.dev" target="_blank">Eleventy</a> so I use a template in the HTML that uses that JSON data. You can go directly the template and <a href="https://glitch.com/edit/#!/veil-look?path=src/_includes/posts/2019-books.md" target="_blank">see the code on Glitch</a>.</p>

<h3>Here are the steps to updating this page after finishing a book:</h3>

<ol>
  <li>Add a row to <a href="https://docs.google.com/spreadsheets/d/1tJtKdvCWCLLv9mZwTFjSXM6t2mMfPHgkhtWJDBdpjYc/edit#gid=0" target="_blank">my spreadsheet</a> for the finished book.</li>
  <li>Generate JSON for the updated spreadsheet with <code>https://spreadsheet.glitch.me/?key=SPREADSHEETKEYHERE</code>.</li>
  <li>Copy and paste the updated JSON into the file <code>books.json</code>, <a href="https://glitch.com/edit/#!/veil-look?path=src/_data/books.json" target="_blank">see the file in Glitch</a>.</li>
  <li>Use Git to commit the changes and push them to Glitch, or do it directly in Glitch with automatic deploys.</li>
</ol>

There's a duplicate copy of <a href="https://github.com/jlord/veil-look" target="_blank">this site's code on GitHub</a>.
