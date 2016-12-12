# myJS30
Inspired by Wes Bos' admirable javascript 30 series: https://javascript30.com/ (check it out);
I try and keep up with the challenges whilst putting more or less of my own spin on things :)
___
## day1: [jsDrumKit](https://github.com/drmason13/myJS30/tree/master/jsDrumKit)
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
___
## day2: [CSSclock](https://github.com/drmason13/myJS30/tree/master/CSSclock)
### base project:
using transitions and transforms along with setInterval (again - that's where I got the idea for the drum loop in day1) make the hands on the clock go round

### the twist:
Not as impressive by any means. I simply adjusted the hands' length so you can tell which is which. This involved some offsetting.

Overall, a nice looking clock. Maybe I'll think of more to do with this one later?
___
## day3: [CSSvariables](https://github.com/drmason13/myJS30/tree/master/CSSvariables)
### base project:
Learn and use CSS variables. New and Shiny and full of possibilities! If you thought Sass variables were neat, these are something else.

Make stuff change size, colour and blurriness. Good use of sliders and more interesting events.

### the twist:
So I started with a simple swap from blur slider to grayscale slider (looking at all these new-to-me css filters),
this introduced a whole new problem!

The colourful padding of the image changed to grayscale too.
This wasn't intended so I fixed it. Couple of divs and some trusty flexbox to the rescue...
oh and CSS [calc()](https://developer.mozilla.org/en/docs/Web/CSS/calc), which is [var()](https://developer.mozilla.org/en-US/docs/Web/CSS/var)'s best friend!
I've never used floats or negative margins and I certainly don't intend to start now!

## day 4: [arraysForDays](https://github.com/drmason13/myJS30/tree/master/arraysForDays)
### base project:
Learn about four important array functions: filter(), map(), sort() & reduce()
This one was basically a textbook exercise and I did learn a few things and solidified my understanding of these important functions. Much less likely to fallback to a for loop without good reason now. reduce is particularly impressive!

### a fix:
Was getting horrendously confused when all of my best laid plans appeared to be failing utterly...
What happened?

The "new" array variables I made all referenced the same array!
I don't know how Wes Bos' testing and logging setup works exactly (a nice live preview for sure!) but he didn't appear to have any trouble.

The solution:

You might want to read [this](http://stackoverflow.com/questions/13166884/shallow-copy-for-arrays-why-cant-simply-do-newarr-oldarr) and [this](http://stackoverflow.com/questions/3978492/javascript-fastest-way-to-duplicate-an-array-slice-vs-for-loop) for the full breakdown but basically:

copy your arrays before sorting.
oldArray.slice(0) is a decent way of doing this
oldArray.concat() also does this.
These functions return new arrays with the same contents as oldArray

if you do this:
var newArray = oldArray, there is only one array (oldArray), and two variables point to it. Changing either variable changes that single array which often isn't what you want.

It gets more complicated with objects inside arrays, best read up on that yourself.

### the twist:
I noticed there was a spare "flavours" array in the starter file, so I did a little something with that.

Using [array.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) I built a kind of "menu" object. It holds all the flavours in it.

The interesting part is that all the flavours had a lot of recurring words, for example: Black Raspberry Crunch, Raspberry, and Black Walnut. The menu object lists all these flavours under each "sub-flavour" built from their individual words.

So we get

menu.raspberry = [Black Raspberry Crunch, Raspberry]

menu.black= [Black Raspberry Crunch, Black Walnut]

menu.walnut= [Black Walnut]

menu.crunch= [Black Raspberry Crunch]

I can see it being useful if you had to dynamically build some dropdown lists that let you filter some selection.
I hope to come back to this and throw together a quick ice cream parlour online ordering with these flavours after learning some more tips and tricks. Ideally with people being able to design their own flavours and those getting thrown in :)

## day 5: is tomorrow! see you then
