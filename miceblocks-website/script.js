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


var slideIndex = 1;
var headerId = document.getElementById("header-id"); 
var headerNavId = document.getElementById("header-nav-id");
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("carousel-images"); 
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  if(slideIndex == 1) {
    headerId.style.backgroundColor = "#8aacff";
    headerNavId.style.backgroundColor = "#8aacff";
  }
  else if(slideIndex == 2) {
    headerId.style.backgroundColor = "#4f659b";
    headerNavId.style.backgroundColor = "#4f659b";
  }
  else if(slideIndex == 3) {
    headerId.style.backgroundColor = "#546395";
    headerNavId.style.backgroundColor = "#546395";
  }

  
  slides[slideIndex-1].style.display = "block";
}