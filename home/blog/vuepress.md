# VuePress

## An Introduction
VuePress is a static site generator that builds a website from a directory of markdown files. It allows pages to be both authored in markdown and hosted as a collection of markdown files. This collection has a directory structure that maps directly to the site's navigation structure, like so:
```
home     
├─ README.md        // mysite.com  
├─ about.md         // mysite.com/about
├─ blog           
│  ├─ README.md     // mysite.com/blog/
│  ├─ post-one.md   // mysite.com/blog/post-one.html
│  └─ post-two.md   // mysite.com/blog/post-two.html     
└─ .vuepress    
   └─ config.js
```
This is what static site generators do. They transform a collection of files the developer likes to work with into a collection of files that web servers and browsers like to work with. If this directory structure seems refreshingly simple, then you too have noticed the complexities that come with many modern web development methods, which abstract away the notion of users requesting and navigating individual files on a web server. With static site generators, we return to this traditional model while retaining the magic of modern tools. 