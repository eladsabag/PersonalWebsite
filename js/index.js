// jshint esversion: 6

// Start,Next,Finish Buttons Opcaity

var flow;

$(document).ready(function() {
  for (var i = 0; i < 5; i++) {
    if (i > 0) {
      $(".start" + i).hide();
    }
  }
  flow = 0;
});

$(".start").click(function() {
  if (flow == 4) {
    $(".finish").animate({"opacity": "1"});
  } else {
    $(".content" + flow).animate({"opacity":"1"});
  }
  $(".start" + flow).attr("disabled", "true");
  flow += 1;
  $(".start" + flow).show();
});


// Start,Next,Finish Buttons Sounds

$(".start").click(function() {
  makeSound(this.innerHTML);
});


function makeSound(key) {
  var sound;
  switch (key) {
    case "Start":
      sound = new Audio("sounds/jeff.mp3").play();
      break;
    case "Next":
      sound = new Audio("sounds/jeff.mp3").play();
      break;
    case "Finish":
      sound = new Audio("sounds/johncena.mp3").play();
      break;
    default:
      alert("Error");
  }
}
