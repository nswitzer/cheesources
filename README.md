
# Overview
***

## Viewing Instructions
Everything in the repo is compiled and ready to view. Just clone the repo and open either [my-profile.html](my-profile.html) or [resources.html](resources.html) in your browser.

## General Thoughts and Approach
This was an interesting project and one that I initially intended to use a CSS framework for, like Foundation. I chose to go the route of custom styles and project structure, aided by the fantastic Gulp and Bower apps, to give myself an opportunity to write everything from scratch because, believe it or not, I do enjoy that. In a time where there are countless time-saving tools and workflows, this likely wouldn't be my choice most of the time. However, the advantage here is some insight into how I organize a project given the rare opportunity to be completely in control of the structure.

I started by putting together a quick sketch of what the general concept would be. It took three iterations to get to something that felt like it made sense for the context of this project, but could also potentially scale to become a small piece of a real application.

The goofy name is an attempt at giving this project a little more life. Originally my intention was to carry the theme all the way through the dummy copy, but, alas, it's Sunday night and it's time for the Game of Thrones season finale.

## Known Issues
- Angular 1.3.17 is being used because Angular 1.4+ appear to have changed how filters work, and the default state of a list using filters how this application does loads nothing, rather than all results. This is obviously a critical piece for this app, so, in the interest of time, an older version of Angular is being used. This is something I'll be revisiting in the near future.

## Branch Notes

`master` |  Everything in this branch should be considered safe for live.  This branch should reflect what is currently active.
  
`develop` | Items in `develop` are works-in-progress and should be planned to be included in the next release.  Larger or pending features should reside in a seperate feature branch until ready for `develop`.