# Teutonic CSS

Teutonic CSS is a modern web design system to develop responsive, accessible websites and web applications. It's based on CSS Variables for easy customization and extension. It features cool tech like CSS Grid. The source is a collection of SCSS modules, but you can use the minified version, as it can be modified using CSS Vars.

This repo only contains the pure SCSS files to build the CSS from, also check out the [Teutonic Docs](https://github.com/fortrabbit/teutonic-css-docs).

## Philosophy

* Little things play together nicely
* Slim but not skinny
* Do more with less
* Faster is better
* A clean look
* Opinionated


## Feature galore

* 3 grids: CSS Grid, Flexbox, Columns
* For modern browsers only
* CSS Vars customization
* CSS only, BYO JavaScript
* SCSS modules based source
* Free and open source
* Inverted styles
* All responsive


## Good to know

* Only MS Edge, no Internet Explorer support
* * { box-sizing: border-box}
* No screen reader support
* No JavaScript included


## Basic usage

1. Prototype: include the CSS from the CDN
2. Customize: match your brand with CSS vars
3. Fork: Build your own from the SCSS source


## Use cases and applications

* Websites: marketing, blogs …
* Web based applications: dashboards, eCommerce …


## Tested browsers

Teutonic CSS is made for modern browsers.

* Google Chrome 65
* Safari 12
* Firefox 60
* MS Edge 42

It will not work on much older browsers, not even MS IE. Use at least CSS feature detection (@supports) to warn the user.


## BYO JavaScript

No JavaScript here. Bring your own JS implementation.


### Name origins

_"Teutonic by nature"_ is a philosophy by fortrabbit, 


### The color system

Full black and full white are like in [nature](https://graphicdesign.stackexchange.com/questions/5497/why-is-black-not-a-natural-color) not used in big areas here. This way the bright colors of buttons will stand out a little more. But that's just one flavor.

### Pseudo-atomic design

Teutonic only loosely makes use of [Atomic design](http://atomicdesign.bradfrost.com/) philosophy, currently. No fancy web components.s


### CSS classes for humans

I like to understand HTML templates when I look at them. The Teutonic CSS class names are not following any strict naming convention, like BEM or OCSS. Most classes have speaking names, like `flex` to initiate Flexbox and `grid` for CSS Grid. Often used utility classes have very short abbreviations, like `pa-t_xl` for extra large padding top. More obscure class names often have longer abbreviations. Sometimes the class name is mix between property and value, sometimes it's just the value. Memorability over convention. 

This is subject to change in future versions for more strict naming conventions.

#### CSS class name goals

* Easy to read and write
* Few class names as possible
* Combine classes in meaningful ways
* Short class names
* Memorable names
* Failure tolerant
* Limited choices for a better design
* Keep it simple stupid

#### CSS class types

* Grid and layout helper classes like `.grid` and `.flex`
* Design system classes `.box`
* Resets and default styling for HTML elements, like `.textarea`
* Additional helper clases like `.form-label`
* Utility classes like `.pa-s` and `.ma-top-s`


## Features

### Flexbox based grid system

There is no clearfix hack here. Teutonic CSS contains a 'rigit' Flexbox grid system. The Teutonic Flexbox CSS grid has a few unique features.  The Teutonic CSS grid is used like a traditional floating grid, where container are floating in rows. Still the grid relies on negative margins which sometimes acts a bit strange/unexpected.

### CSS Grid based grid

There is an additional CSS Grid based grid. There are some shared features with the Flexbox grid system, others are unique.


### Responsive approach

Teutonic CSS is mostly "desktop first" framework. Simply because, it was developed on a desktop computer. But it aims to behave very well on mobile, your cooperation provided. It makes use of viewport units with `vw, vh` and relative units with `rem`. So it has very little re-writes for only three device breakpoints: Desktop, Tablet & Phone. The grid system features mobile classes for smart collapsing: A row of four items on Desktop can collapse to two rows of two items on Tablet.

## Usage

### SCSS built system

Browse the GitHub repo and grab whatever you like. The main `teutonic.scss` file contains all the include within the include folder. 

* [Usage guide on the website](https://teutonic.co/usage)

### Documentation

The GitHub repo contains the SCSS source files and the documentation files. The docs are based on Jekyll and are rendered as GitHub pages here.

* [The Teutonic docs on GitHub](https://github.com/fortrabbit/teutonic-css-docs)

## Key- & Buzz-words

* agnostic
* boilerplate
* design system
* fast
* flat
* lightweight
* low-friction
* modern
* modular
* opinionated
* performance
* powerful
* reusable
* SCSS modules
* skeuomorphism
* universal
* utilities
* web interfaces


## Author

* [Frank Lämmer](https://twitter.com/frank_laemmer)

## License

Code for the Teutonic CSS released under MIT license.