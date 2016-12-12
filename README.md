# myJS30
Inspired by Wes Bos' admirable javascript 30 series: https://javascript30.com/ (check it out);
I try and keep up with the challenges whilst putting more or less of my own spin on things :)

## day1: jsDrumKit
### base project:
using even listeners and such, make the keys light up and make sounds when you press the right characters on your keyboard

### the twist:
So me and probably everyone else doing javscript 30 got distracted playing the drums as soon as they were working...

First thing I wanted to do? Lay down a looping beat!

Well now you can!

Characters typed into the input will playback as if you pressed them on the keyboard yourself.

Check Loop first if you want it to loop.

Adjust the slider to change the speed.

Any characters that don't match a drum key take up time but don't play any sound. Use this to build rhythm!

## day2: cssClock
### base project:
using transitions and transforms along with setInterval (again - that's where I got the idea for the drum loop in day1) make the hands on the clock go round

### the twist:
Not as impressive by any means. I simply adjusted the hands' length so you can tell which is which. This involved some offsetting.

Overall, a nice looking clock. Maybe I'll think of more to do with this one later?

## day3: cssVariables
### base prject:
Learn and use CSS variables. New and Shiny and full of possibilities! If you thought Sass variables were neat, these are something else.

Make stuff change size, colour and blurriness. Good use of sliders and more interesting events.

### the twist:
So I started with a simple swap from blur slider to grayscale slider (looking at all these new-to-me css filters),
this introduced a whole new problem!

The colourful padding of the image changed to grayscale too.
This wasn't intended so I fixed it. Couple of divs and some trusty flexbox to the rescue...
oh and CSS [calc()](https://developer.mozilla.org/en/docs/Web/CSS/calc), which is [var()](https://developer.mozilla.org/en-US/docs/Web/CSS/var)'s best friend!
I've never used floats or negative margins and I certainly don't intend to start now!

## day 4: is tomorrow! see you then

