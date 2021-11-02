// document.querySelectorAll("button").forEach((value) => {
//   value.addEventListener("click", function () {
//     var audio = new Audio("sounds/tom-2.mp3");
//     audio.play();
//   });
// });

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    chooseAudio(this.innerText);
    buttonAnimation(this.innerText);
  });
}
document.addEventListener("keydown", logKey);

function logKey(e) {
  chooseAudio(e.key);
  buttonAnimation(e.key);
}

function chooseAudio(selected){
  switch (selected) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      break;
  }
}

function buttonAnimation(selected){
  var activeButton = document.querySelector("."+selected);
  activeButton.classList.add("pressed");
  setTimeout(() => activeButton.classList.remove("pressed"),100);
}