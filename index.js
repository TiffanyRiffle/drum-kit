//event listener, this one targets first button only


//top section - detect button press
var numberOfDrums = document.querySelectorAll(".drum").length;


for (var i = 0; i < numberOfDrums; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    //this will activate the event listener when any drum button is pressed
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    //if a button is pressed, it will send the command to makeSound fxn

    buttonAnimation(buttonInnerHTML);
      //this will call the animation fxn when the button is pushed

  });
}
//use "event" to console log keyboard events that triggered the listener
//"Key" tells which key was tapped
// document.addEventListener("keydown", function(event) {
//   console.log(event);
// });

//lower section - detect keyboard press

document.addEventListener("keydown", function(event) {

  makeSound(event.key);
  //if a key press is detected, it sends the key from the event to the makeSound event
  buttonAnimation(event.key);
  //this will call the animation when the keyboard key is pressed

});

function makeSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
      // these will detect which button was pressed (case w) and play the sound for the correct drum button when pressed
    case "a":
      var bass = new Audio("sounds/kick-bass.mp3");
      bass.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "k":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "j":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;


    default:
      console.log(key);

  }
}

function buttonAnimation(currentKey) {

var activeButton = document.querySelector("." + currentKey);

activeButton.classList.add("pressed");
//adds pressed class/shadow to button when pressed or key pressed
setTimeout(function() {
  activeButton.classList.remove("pressed");
}, 100);
//removes the pressed class after 100 milliseconds

}
