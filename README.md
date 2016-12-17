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

## day 5: [flexPanels](https://github.com/drmason13/myJS30/tree/master/flexPanels)

I love flexbox! So using it to animate a web page was a joy. Very cool idea and like flexbox should be, so simple. The magic is in classes and CSS transitions.

If you're still not convinced by Flexbox, [this](https://css-tricks.com/dont-overthink-flexbox-grids/) is a very quick read with undeniable results. Check out [here](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) for a good overview of the syntax. (also CSS tricks is quickly becoming my go to website for all things CSS)

Didn't feel like this one needed much more. I added controls for the arrow keys which loop round with a touch of modulo arithmetic. Short but sweet :)

## day 6: [ajaxFuzzyFinder](https://github.com/drmason13/myJS30/tree/master/AjaxFuzzyFinder)


Excellent to see the fetch api, it's certainly more friendly than xmlHttpRequest!

This one turned out to be surprisingly tough for me, especially when adding my own features. I had a lot of trouble with arrow functions vs normal functions and then using *this*

But I have finally put together the working page, plus some sorting by how soon your match appears in the place. More little tweaks than usual as well, including creating a "lean" dataset to use for displaying the matches. It sped up a lot after that, and felt nice and snappy; plus thanks to css capitalize, there was no need to map back for displaying purposes

I did get waylaid by javascript closures, *this*, arrow functions and the difficulty of getting them all straight in my head. Despite the lack of work appearing here, I feel like I'm making good progress understanding them.

I wrote a quick little "[playground](https://github.com/drmason13/closurePlayground)" which helped me get a practical feel for them. (If you do take a look, everything happens in the console, so glance through client.js, open up dev tools and get typing). I think it is worth making your own if you aren't sure how they work or if [these](http://stackoverflow.com/questions/111102/how-do-javascript-closures-work?rq=1) answers scare/confuse you. [This](http://nathansjslessons.appspot.com/) is also good to practice.

### day 7: More Arrays

Sort of skipped this one. I get the functions and completed the challenge but the answers were already in the starter file? Oops!
Waaay more excited about the next day with HTML canvas!

## day 8: [HTMLscratchCanvas](https://github.com/drmason13/myJS30/tree/master/HTMLcanvas)

I have never used the canvas element before, always assuming it would be too complicated and not capable of much but I was pleasantly surprised. It takes getting used to but the built in functionality is powerful and with some imagination (and restraint) could add something special to your web pages.

...Whilst I wait for inspiration I made a simple scratch card game. Can you win three pots of gold!?
 - this was actually really good practice of flexbox, with some absolute positioning thrown in the mix.
