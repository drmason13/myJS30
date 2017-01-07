function stopTransition() {
  this.classList.remove('playing');
}

function playSound(keycode) {
  const audio = document.querySelector(`audio[data-key="${keycode}"]`);
  const key = document.querySelector(`div[data-key="${keycode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

// sequencer variables...
const sequencer = document.querySelector('.sequence-keys');
const slider = document.querySelector('#slider');
const sliderMinMax = Number(slider.min) + Number(slider.max);
const loop = document.querySelector('#loop')
const clear = document.querySelector('#clear');
const play = document.querySelector('#play');
const keys = document.querySelectorAll('.key');

// beat object stores information about a beat
// interval property stores the result of setInterval
// defaults:
var beat = {
  speed: 100,
  loop: false,
  sequence: undefined,
  interval: undefined
};

var keycodes = {
  "a": 65,  "s": 83,  "d": 68,  "f": 70,  "g": 71,
  "h": 72,  "j": 74,  "k": 75,  "l": 76
}

// functions!

function readSequence() {
  // returns an iterable of "keys" to simulate pressing
  let sequence = sequencer.value;
  let keydownArray = [];
  for (var i = 0; i < sequence.length; i++) {
    const curKeyCode = keycodes[sequence.charAt(i)]
    curKeyCode ? keydownArray.push(curKeyCode) : keydownArray.push(404);
  }
  return keydownArray;
}

function playbackSequence(loop) {
  var currentKey = beat.sequence.shift();
  if (beat.loop) {
    beat.sequence.push(currentKey);
  }
  // we have a raw keycode, can playSound directly
  playSound(currentKey);
  if (beat.sequence.length == 0) { clearInterval(beat.interval); }
}

function playSequence() {
  // check checkbox to pass loop into setInterval
  beat.loop = loop.checked;
  // generates array of keycodes
  beat.sequence = readSequence();
  beat.speed = sliderMinMax - slider.value;
  // kill current playback
  clearInterval(beat.interval);
  beat.interval = setInterval(playbackSequence, beat.speed);
}

function adjustBeatSpeed(e) {
  // sliding slider adjusts current beat speed
  // set and reset the interval, using beat's properties
  beat.speed = sliderMinMax - e.target.value;
  clearInterval(beat.interval);
  beat.interval = setInterval(playbackSequence, beat.speed)
}

//event listeners!

play.addEventListener('click', playSequence);

slider.addEventListener('change', adjustBeatSpeed);

clear.addEventListener('click', () => { clearInterval(beat.interval) });

keys.forEach(eachKey => { eachKey.addEventListener('transitionend', stopTransition) });

window.addEventListener('keydown', e => { playSound(e.keyCode) });
