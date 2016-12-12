function stopTransition() {
  this.removeClass('playing');
}

function playSound(keycode) {
  const audio = document.querySelector(`audio[data-key="${keycode}"]`);
  const key = document.querySelector(`div[data-key="${keycode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function playSoundServer(e){
  //prepares for generic playSound function which accepts raw keyCodes only
  playSound(e.keyCode);
}

function stopTransition(){
  this.classList.remove('playing');
}

// sequencer variables...
var sequencer = document.querySelector('.sequence-keys');

// beat object stores information about a beat
// interval stores whatver object setInterval makes...
// defaults:
var beat = {
  speed: 20,
  loop: false,
  sequence: undefined,
  interval: undefined
};

var keycodes = {
  "a": 65,
  "s": 83,
  "d": 68,
  "f": 70,
  "g": 71,
  "h": 72,
  "j": 74,
  "k": 75,
  "l": 76
}
// functions!

function readSequence() {
  // returns an iterable of "keys" to simulate pressing
  var sequence = sequencer.value;
  var keydownArray = [];
  for (var i = 0; i < sequence.length; i++) {
    const curKeyCode = keycodes[sequence.charAt(i)]
    if (curKeyCode) {
      keydownArray.push(curKeyCode); }
    else {
      keydownArray.push(404); }
  }
  console.log("read array:");
  console.log(keydownArray);
  return keydownArray;
}

function playbackSequence(loop) {
  console.log(beat.loop);
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
  beat.loop = document.querySelector('#loop').checked;
  // generates array of keycodes
  beat.sequence = readSequence();
  beat.speed = document.querySelector('#slider').value;
  // kill current playback
  clearInterval(beat.interval);
  beat.interval = setInterval(playbackSequence, beat.speed);
}

function adjustBeatSpeed(e) {
  // sliding slider adjusts current beat speed
  // set and reset the interval, using beat's properties
  console.log("CHANGE");
  console.log(e.target.value);
  beat.speed = e.target.value;
  clearInterval(beat.interval);
  beat.interval = setInterval(playbackSequence, beat.speed)

}

//event listeners!
var play = document.querySelector('#play');
play.addEventListener('click', playSequence);

var slider = document.querySelector('#slider');
slider.addEventListener('change', adjustBeatSpeed)

var clear = document.querySelector('#clear');
clear.addEventListener('click', function() {
  clearInterval(beat.interval)
});

var keys = document.querySelectorAll('.key');
keys.forEach(function(eachKey) {
  eachKey.addEventListener('transitionend', stopTransition);
});
window.addEventListener('keydown', playSoundServer);
