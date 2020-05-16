/* Transitions Only After Page Load */
function onLoadTransitions() {
  var element = document.body;
  element.classList.remove("preload");
}

/*================Universal Button Mouse in/out================*/
function ButtonOn(id, name) {
  var image = document.getElementById(id);
  image.src = "imgs/" + name + "-on.png";
}

function ButtonOff(id, name) {
  var image = document.getElementById(id);
  image.src = "imgs/" + name + "-off.png";
}

/*================Universal Spoiler Area================*/
function SpoilerVersionToggle(name) {
  var x = document.getElementById(name);
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById(name + '-button').innerHTML = 'Close';
  } else {
    document.getElementById(name + '-button').innerHTML = 'Open';
    x.style.display = "none";
  }
}

/*================Go To Top Button================*/
var topbutton = document.getElementById("top-arrow-id");
var scrollTest = true;
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (scrollTest == true) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topbutton.style.display = "block";
    } else {
      topbutton.style.display = "none";
    }
  } else {
    setTimeout(function(){
      scrollTest = true;
    }, 1000);
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  topbutton.style.display = "none";
  scrollTest = false;
}
