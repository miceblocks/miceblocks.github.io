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

var slideIndex = 1
var arrowsId = document.getElementsByClassName("carousel-arrows");
var imageId = document.getElementById("carousel-images-id");
var headerId = document.getElementById("header-id"); 
var headerNavId = document.getElementById("header-nav-id");
var slideTimerVar;

function SlideTimer() {
  slideTimerVar = setTimeout(function(){
    arrowsId[0].click();
    SlideTimer();
  }, 7000);
}

SlideTimer();

function showSlides(n) {
  clearTimeout(slideTimerVar);
  for (i = 0; i < arrowsId.length; i++) {
    arrowsId[i].disabled = true;
    arrowsId[i].style.opacity = 0.3;
  }
  slideIndex += n;
  if (slideIndex > 3) {
    slideIndex = 1;
  }
  else if (slideIndex < 1) {
    slideIndex = 3;
  }
  if(slideIndex == 1) {
    headerId.style.backgroundColor = "#8aacff";
    headerNavId.style.backgroundColor = "#8aacff";
    imageId.style.backgroundImage = "url('imgs/background-main.jpg')";
  }
  else if(slideIndex == 2) {
    headerId.style.backgroundColor = "#4f659b";
    headerNavId.style.backgroundColor = "#4f659b";
    imageId.style.backgroundImage = "url('imgs/background1.jpg')";
  }
  else if(slideIndex == 3) {
    headerId.style.backgroundColor = "#546395";
    headerNavId.style.backgroundColor = "#546395";
    imageId.style.backgroundImage = "url('imgs/background2.jpg')";
  }
  
  setTimeout(function(){
    for (i = 0; i < arrowsId.length; i++) {
      arrowsId[i].disabled = false;
      arrowsId[i].style.opacity = 1;
    }
  }, 1500);
}