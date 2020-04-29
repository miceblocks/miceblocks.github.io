function ButtonOn(name) {
  var image = document.getElementById(name);
  image.src = "imgs/" + name + "-on.png";
}

function ButtonOff(name) {
  var image = document.getElementById(name);
  image.src = "imgs/" + name + "-off.png";
}

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


var topbutton = document.getElementById("top-arrow-id");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}