document.getElementsByClassName("start")[0].addEventListener("click", () => {changeOpacity("content",0)});
document.getElementsByClassName("start")[1].addEventListener("click", () => {changeOpacity("content",1)});
document.getElementsByClassName("start")[2].addEventListener("click", () => {changeOpacity("content",2)});
document.getElementsByClassName("start")[3].addEventListener("click", () => {changeOpacity("content",3)});
document.getElementsByClassName("start")[4].addEventListener("click", () => {changeOpacity("finish",0)});
var flow = 0;

function changeOpacity(name,index) {
  if(index<=flow) {
    flow+=1;
    document.getElementsByClassName(name)[index].style.opacity = 1;
  } else {
    alert("Can't break flow!");
  }
}
