/*================Carousel Area / Gallery ================*/
var slideIndex = 1;
var arrowsId = document.getElementsByClassName("gallery-carousel-arrows");
var imageId = document.getElementById("gallery-carousel-id");
var imageListId = document.getElementsByClassName("gallery-image-list");
var slideTimerVar;


function GallerySlideTimer() {
  slideTimerVar = setTimeout(function(){
    arrowsId[1].click();
    GallerySlideTimer();
  }, 6000);
}

GallerySlideTimer();

function galleryShowSlides(n, slide) {
  clearTimeout(slideTimerVar);
  for (i = 0; i < arrowsId.length; i++) {
    arrowsId[i].disabled = true;
    arrowsId[i].style.opacity = 0.3;
  }
  if (slide == true) {
    slideIndex += n;
    if (slideIndex > 15) {
      slideIndex = 1;
    }
    else if (slideIndex < 1) {
      slideIndex = 15;
    }
  } else {
    slideIndex = n;
  }
  imageId.style.backgroundImage = "url('imgs/screenshots/screenshot-" + slideIndex + ".jpg')";

  for (i = 0; i < 15; i++) {
    imageListId[i].style.opacity = ".2";
  }
  imageListId[slideIndex-1].style.opacity = "1";
  
  setTimeout(function(){
    for (i = 0; i < arrowsId.length; i++) {
      arrowsId[i].disabled = false;
      arrowsId[i].style.opacity = 1;
    }
  }, 1500);
}