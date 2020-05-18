/*================Carousel Area================*/
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
    headerId.style.backgroundColor = "#80a8ff";
    headerNavId.style.backgroundColor = "#80a8ff";
    imageId.style.backgroundImage = "url('imgs/background-main.jpg')";
  }
  else if(slideIndex == 2) {
    headerId.style.backgroundColor = "#7a9ced";
    headerNavId.style.backgroundColor = "#7a9ced";
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