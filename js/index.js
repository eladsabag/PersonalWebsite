// Start,Next,Finish Buttons Opcaity

document.querySelectorAll(".start")[0].addEventListener("click", () => {changeOpacity(".content",0)});
document.querySelectorAll(".start")[1].addEventListener("click", () => {changeOpacity(".content",1)});
document.querySelectorAll(".start")[2].addEventListener("click", () => {changeOpacity(".content",2)});
document.querySelectorAll(".start")[3].addEventListener("click", () => {changeOpacity(".content",3)});
document.querySelectorAll(".start")[4].addEventListener("click", () => {changeOpacity(".finish",0)});

var flow = 0;

function changeOpacity(name,index) {
  if(index<=flow) {
    flow+=1;
    document.querySelectorAll(name)[index].style.opacity = 1;
  } else {
    alert("Can't break flow!");
  }
}

// Start,Next,Finish Buttons Sounds

for (var i = 0; i < document.querySelectorAll(".start").length ; i++) {
  document.querySelectorAll(".start")[i].addEventListener("click", function() {
      makeSound(this.innerHTML);
  });
}

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
