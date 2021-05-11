# TODO for Teutonic CSS

* [ ] Rewrite for Flex Gap
* [ ] Fix `.gap_s` with `.column` not to interfere with columns!
* [ ] Make link (a) accept "--color" var, fallback to other value
* [ ] Review `.link` in `.inverted`
* [ ] Fix span width issues, with content in multi lines.
* [ ] Implement webpack scripts
* [ ] Either update to Gulp 4 or skip Gulp totally
* [ ] CSS grid justify/align classes !!!! https://alligator.io/css/align-justify/

## IDEAS

* [ ] Triangle positioning classes?
* [ ] Rethink Triangle VS inverted
* [ ] Implement and try new `gap` classes (Flexbox, CSS Columns, CSS Grid)
* [ ] Flex-grow helper classes!
* [ ] Loop over color maps everywhere
* [ ] Separated tinted and tinted background as two files
* [ ] Transitions & Delays (Manuel) … http://tachyons.io/docs/themes/hovers/ ???
* [ ] Predefined Cool Gradients (Manuel) > https://webgradients.com/, https://gradients.cssgears.com/
* [ ] Redo and rethink Modular Scale for spacing / Manuel…
* [ ] Check if the min css is really min
* [ ] Naming vars: `dash` instead of `lodash` for sizes? `.gap_xl` > `.gap-xl`
* [ ] All SCSS vars in one file?
* [ ] Separate invert color generation to make that a bit more clear
* [ ] fine tune `.range` alignment across browser (in .range-box)
* [ ] Better Checkboxes for MS Edge with `::-ms-check` ?
* [ ] **Make it slimmer**: Throw out unused classes!
* [ ] Light border style > less strong border everywhere! (searchbox top)
* [ ] Rethink border and text color classes > separate color and border-color?
* [ ] Better mobile screen styles, normalize
* [ ] `pa_xl-t` < responsive padding classes
* [ ] Find a way to make read-widths calculated and less dependent (no magic numbers please!)
* [ ] Use Flex justify-self when supported with browsers
* [ ] ?? unify customization methods > like: `.bo-px.bo-custom`
* [ ] ?? pre: Use CSS Var and fallback here so that can be easier applied and will apply to childs (like buttons)
* [ ] ?? delete CSS VAR examples that can be done with standard CSS as well
* [ ] ?? fallback CSS Vars for each class and value (see borders)
* [ ] ?? pre > .pre ?! (like > button > .button) ??? (mind article) .pre > BG-color!
* [ ] Make other border color elements available. like with light weight search bar.
* [ ] Rename SCSS files with better naming conventions
* [ ] Extend classical columns usage for wrapped content (boxy elements wrap)!
* [ ] A new complete and good Charts system (81% is already there!)
* [ ] Do something cool with :focus-within https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within
* [ ] Search wrapper less magic numbers
* [ ] Replace SCSS with PostCSS
* [ ] Integrate CSS ENV vars, once available.
* [ ] rethink less borderish styles? (like columns & tables, but for forms?)
* [ ] Use `color-mod` / `color` functions, redo colors! https://drafts.csswg.org/css-color-4/
* [ ] "fixed" width and height modifier classes also for grids and flexes?!
* [ ] line-height helper? or more vertical rhythm with bigger text?
* [ ] Column reset to one column, buggy webkit !
* [ ] .span-4 default in CSS grid. More useful?!
* [ ] Make "Components" available? > Define what is and what is not a Component!
* [ ] `.preabled` button class instead of disabled?!
* [ ] "CSS Color Module Level 4" and less css-color vars!
* [ ] Rethink themes: What really needs to be done?! Provide ready-made themes?
* [ ] Make default gap for flex available, rethink one more time?
* [ ] reconsider `.teutonic` to house VARS? is `:root` plugable enough?
* [ ] Simple geometric subtle backgrounds? like striped, but better & more!
* [ ] Consider repsonsive margin helpers? like with padding...
* [ ] Position Utility classes (see below)
* [ ] Own `.active` file with extends, maybe?
* [ ] HSL pseudo color functions like: https://codepen.io/simurai/pen/RxxzoG/?editors=0100
* [ ] Consider a styled fieldset
* [ ] Generalize generic gravatar, make colors available everywhere! (media)
* [ ] `.block` style to make all inline block?
* [ ] `.inline` style to make all block elements inline-block, autoish?
* [ ] font awesome support?
* [ ] EXCLUDE half, third … classes from flexbox?!
* [ ] Sketch Library like: https://github.com/joachimesque/Bulma.sketch
* [ ] .read-widths based on calc (x times rem), grow when changing sizes.
* [ ] Columns: automatic class where number of cols = counter? https://www.webdesignerdepot.com/2013/05/learn-to-count-with-css/
* [ ] ?? .article : vertical rhythm line height VS margin-top
* [ ] ?? Columns: separate spacing for column gap and child gaps?!
* [ ] Attribute notation for code block syntax title?! https://www.w3.org/TR/css3-values/#attr-notation


## Done (lately)

* [x] ".span-y-2" classes for CSS grid
* [ ] ~~Fix table border color when invert > see text sizes~~ < no overwrites!
* [x] Rethink line-height > see text sizes
* [x] Establish GitHub Release
* [x] Divide `_columns.scss` in multiple files.
* [x] Include min + gzip in built and as file
* [x] ~~??? Refactor: .labelinput > .input (remove the last one?)~~
* [x] Enhanced color matrix > each color in 5 shades.
* [x] Cross browser testing!
* [x] Prepare Range Issue for MS Edge
* [x] Refactor anim for progress intermediate
* [x] Prepare Padding Issue for MS Edge
* [x] MS Edge: fix meter element (kindof)
* [x] MS Edge: fix progress element (mostly)
* [x] MS Edge: Fix input type range (mostly)
* [ ] ??? MS Edge: margin-top code examples
* [ ] ~~Rethink and redo spacing without modular scale to make it work in MS Edge > also more preditable~~
* [x] Separate the scaling stuff from each other
* [x] Rename old files > _--old-{lalala}
* [x] MS Edge: table M padding fix!
* [x] .block > not 100% width?!
* [x] MS Edge: quick fix padding (WTF: explicit paddings in all directions)
* [ ] ~~iOS: loading example broken~~ < disabled for now
* [x] Bouncy scrolling inline scrollable containers (Momentum Scrolling)
* [x] Position sticky with vendor prefixes
* [x] Fine tune shades, only two per direction?!
* [x] iOS: fix credit card example
* [x] iOS: fix checkbox and radio styles?
* [ ] ?? Column bugs in combi w flexbox > breaks out of cols (workaround > label-box) < where?
* [ ] ~~"span-1-p" doesn't work?"~~ doesn't have to
* [x] .button.block < is that the best way to do it?
* [x] realize: display helper class: di-b, di-i, di-ib, di-if ………
* [ ] ~~realize: border-color-classes?~~ < looks ugly + confusion with tinted!
* [x] Tooltip higher z-index
* [x] more flexible form-box > respect different paddings!
* [x] ghost button ?!
* [x] Hoverable bgs? SB
* [ ] ~~inputs > no padding right for more text? clip by border, not by padding~~ < no, buggy
* [ ] ~~Table "caption"?~~ < Too obscure
* [ ] ~~Clean up graphs/charts: Horizontal & Vertical * SB~~ Too much work for now, do later
* [x] rethink coloring modes: active VS bg-main-5 VS inverted > test with zebra
* [x] ~~row-list sucks?! should accept paddings? how?~~ < no more row-list
* [x] `.span-all` for columns?! (not span-2) ?
* [x] Enhanced table styles (see below) 
* [x] `.article` headlines > less line-height.
* [x] `.text-select-all` (make work on inputs??). < not working on most browser
* [x] `.collapse-p` doesn't work for columns
* [x] Rethink default gap for grid (with horizontal & vertical gaps)!
* [x] Column gap border styles
* [ ] ~~column-with instead of column count?~~ < doesn't have min-max
* [x] Rethink columns with horizontal gap only?! < now with extra class for that.
* [x] box min-height VS box with pa_xs < make use of padding var?
* [ ] ~~Column gap VS general gaps?!~~
* [x] Header Nav colors check, dark prime against dark ui
* [x] rename: .text-link > .link
* [x] inverted: visited links less visible?!
* [ ] ~~hairline instead of pixel?~~ doesn't work
* [x] REdo flex-box helpers!? (column and auto stuff)
* [x] Redo theming for progress & meter
* [x] Notifications for real?
* [x] Rethink select triangle, at least with CSS var
* [x] Color picker CSS https://stackoverflow.com/a/44081389/1449386
* [x] Negative margin issues with CSS columns in Safari …
* [x] .untouchable > typography generalized
* [x] media containers refactor to make more flexible
* [x] make buttons accept a parental text class? http://localhost:4000/examples/utilities#background-states
* [x] Use @extends or mixin for row-list and other parts to make utilities work!
* [x] search.search ??? some defaults? magnifier! with parental
* [x] Where else to expose settings as (local) CSS Vars?
* [x] Use currentColor (inherit, initial) when possible
* [x] form font sizes overwrites!? `.text-l` #wtf tryout
* [x] CSS: "inverted" > styles for all!
* [x] Rethink separation of background colors and text/border (bring back states?)
* [x] WIP: Get rid of autoprefixer for now! only SASS as a dependency!
* [x] `.cover` not working as expected? 
* [x] `.ov-h` overflow hidden utility!
* [x] form errors! (with demo)
* [x] Chrome footer nav bugs > real-wrld, css grid (nach breakpoints Ok 5 > auto-height, auto-grid), …?
* [x] Decide: will it need an extra class? `input[type="color"].color`
* [x] Redo fallback VARS like: `var(--border-color, var(--color-main-5))`
* [x] ~~Default list style type? after .row-list is gone?~
* [x] ~~Padding via CSS vars and default~~
* [x] Rethink starts with [^=] as this only works when that's the first class!
* [x] ~~Visual: Show Z-grid flow in gap (more v-space)?~~
* [x] Modular Scale as SCCS version, test both in parallel!
* [x] Input range Slider SCSS styling!
* [x] Gather and unite rgba values in vars! disabled, skeuo?, placeholder?!
* [x] static background colors: `.bg-main-1` ………
* [x] Box min-height problem with absoulte positioned search?! and? 
* [x] `.media` container + `.ar` figure.media > img (auto-size) << more easy!
* [x] "colored" images mix mit blend mode
* [x] `--colored-5` against `--border-color`?! how to make this work? WIP: border = good!
* [x] Tweak disabled
* [x] General size class?! hhmm
* [x] bo-t-custom, how?
* [x] Unify utility class names!
* [x] mini-info focus extra class (with demo)
* [x] better form errors, rethink states https://codepen.io/jonschlinkert/pen/jGbXJJ
* [x] Firefox overflow bugs! 
* [x] mini-info permanent extra classes for hover and focus
* [x] Make select themable. Use a CSS triangle http://jsfiddle.net/NDJ3S/17/ currenColor?
* [x] Textcolor classes! (also better form errros)
* [x] Text selection in text input fields, better colors!
* [x] Reconsider SVG, maybe throw out!
* [x] Stand alone gap classes? stack 
* [x] disabled button is more clicky.... for pre-validation
* [x] Get rid of `--border-color` as border can inherit form color value?
* [x] Default columns with margin as well?!
* [x] ~~.label-box  > .form-box ??~~
* [x] redo CSS columns stuff
* [x] rethink colored with more then one color: outline VS button BG, prime.button:hover
* [ ] ~~Include Burger button? SVG? like close button?~
* [ ] ~~Redo search cancel button~~
* [ ] ~~label.box > label.label ???~~
* [ ] ~~Active & Interactive: Radio & Checkboxes (to be tested)(disabled?)~~
* [ ] ~~do close button (with SVG ?)~~ < use text
* [ ] ~~.button > block element in forms and rows?!~~
* [ ] ~~rethink wrapper! and flex helpers H-space, V-space …!~~
* [ ] ~~emment style short syntax! https://docs.emmet.io/cheat-sheet/ > bgc, mt, pt, bxsh, bdl+, ta:r https://github.com/LukeAskew/css-utils#spacing~~
* [ ] ~~Inline-block VS button in grid-f (needs .block?!)~~
* [ ] ~~Delete button > https://bulma.io/documentation/elements/delete/~~
* [ ] ~~Include SVG patterns? http://buseca.github.io/patternbolt/ http://lea.verou.me/css3patterns/#~~
* [ ] ~~Media: Video-thumbnails with play button (triangle)~~
* [x] .article : EM based for small large small ?!
* [x] size: width containers + height containers?
* [x] main-colors as bg-colors?!
* [x] Flex helpers for reverse, inline-flex, justify content...
* [x] Refactor Flex aligment helpers
* [x] Real world cards last item `span-auto`: no effect.