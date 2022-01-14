// jshint esversion: 6

// Start,Next,Finish Buttons Opcaity

var flow;

$(document).ready(function() {
  for(var i = 0 ; i < 5 ; i++) {
    if(i > 0) {
      $(".start" + i).hide();
    }
  }
  flow = 0;
});

$(".start").click(function() {
  if(flow == 4) {
    $(".finish").css("opacity","1");
  }
  else {
    $(".content" + flow).css("opacity","1");
  }
  $(".start" + flow).attr("disabled","true");
  flow+=1;
  $(".start" + flow).show();
});


// Start,Next,Finish Buttons Sounds

$(".start").click(function() {
  makeSound(this.innerHTML);
});


function makeSound(key) {
  switch (key) {
    case "Start":
    var start = new Audio("sounds/jeff.mp3");
    start.play();
      break;
    case "Next":
    var next = new Audio("sounds/jeff.mp3");
    next.play();
      break;
    case "Finish":
    var finish = new Audio("sounds/johncena.mp3");
    finish.play();
      break;
    default:
      console.log("Error");
  }
}
