# This is a very small documentation about the file structuring of this project

This project contain 3 folders :

- root folder
- assets
- layout

> I use .php extension for my files just for including header & footer, Other than that all files are wrotten by html, You can use inspect tools on your browser to know classes & their styles

## Root file

It Contains the design of some important pages like :

- campaigns.php (The heart of the website)
- contact.php
- how.php (How The website works)
- index.php (landing page of the website)
- login.php
- members.php (list of members looged in)
- not_found.php (404 error page)
- photos.php (list the photos published by someone)
- privacy.php

## layout

- header.html (The header of the website)
- footer.html (the footer of the wesite)

## assets

That folder contains

- css file (with sass code inside)
- fonts file
- images file (some images used in this website)
- js file (script.js)
- libs (libruaries)

## css/scss

- helpers/base (the general styles & simple normalize)

* helpers/fonts (include the website font -DroidKufi-)
* helpers/variables (colors + media + font variables to prevent repeatition)
* layout (that folder contain the styling of website header & footer)
* pages (that folder contain the styling of each [page mentionned above](#root-file))

> All Those scss file are imported into style.scss & compiled to style.css. Please If You want change something use sass.

## libs

- aos (Animate on scroll libruary. I used it in the landing page)
- bootstrap-grid (I just use .container class from it)
- font-awesome (icons)
- jquery (js libruary)
- normalize (reset the style & prevent some conflicts in all browsers)

# Finally

I hope that you find what you want in this simple guide. please if you don't understand something on my code contact me for more clarification ^\_^
