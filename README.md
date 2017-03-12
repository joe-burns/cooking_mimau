# Cooking Mimau
This was a quick week long project I made after Dropbox stopped supporting serving HTML files out of their public folders. I was originally using a [TiddlyWiki](http://tiddlywiki.com/) to host recipes and instructions to help teach my friends how to cook. After much griping from my friends when the original went away, I used this as an excuse to play with [Hugo](http://gohugo.io/) and flex layouts added in HTML5.

![screenshot1](https://cloud.githubusercontent.com/assets/26366618/23835921/68668eaa-0735-11e7-8a14-b706f75b3791.png)

## Implementation Details
The site is written entirely in HTML5/CSS/Javascript, no external libraries used. Hugo was used as a static generator as the site did not need a large deal of interactivity. New recipes are added via a PHP script attached to an HTML form and the files are then processed via an hourly cron job that regenerates the site with Hugo. The deployment script was written to be used on a [NearlyFreeSpeech](https://www.nearlyfreespeech.net/) server, and will not work elsewhere. 

## Features
* Filterable recipe tree that remembers view state using local storage
* Flex layout that displays page appropriately for mobile devices
* I dunno, it uses Hugo, that's a feature right?

## Another screenshot, this time of the mobile version
![screenshot1](https://cloud.githubusercontent.com/assets/26366618/23835922/6876ce46-0735-11e7-8a89-5d4c4c2e63af.png)

## Links
[Hugo](http://gohugo.io/) - Static website generator that is great for non-user content heavy sites.

[fontgrube - Anke Calligraphic FG](http://www.fontgrube.de/en/ankecallig.htm) - Font used for the header.

[SiteOrigin Background Generator](http://bg.siteorigin.com/) - Background generator from SiteOrigin used to create the background pattern.
