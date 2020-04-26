function NavDownloadOn(name) {
  //console.log("On");
  var image = document.getElementById(name);
  image.src = "imgs/download-button-selected.png";
}

function NavDownloadOff(name) {
  //console.log("Off");
  var image = document.getElementById(name);
  image.src = "imgs/download-button-unselected.png";
}

function NavChangelogOn(name) {
  //console.log("On");
  var image = document.getElementById(name);
  image.src = "imgs/changelog-button-selected.png";
}

function NavChangelogOff(name) {
  //console.log("Off");
  var image = document.getElementById(name);
  image.src = "imgs/changelog-button-unselected.png";
}

function NavInfoOn(name) {
  //console.log("On");
  var image = document.getElementById(name);
  image.src = "imgs/info-button-selected.png";
}

function NavInfoOff(name) {
  //console.log("Off");
  var image = document.getElementById(name);
  image.src = "imgs/info-button-unselected.png";
}



function DownloadButtonOn(number) {
    //console.log("On");
    var image = document.getElementById("download-button-image" + number);
    image.src = "imgs/download-icon-green.png";
}

function DownloadButtonOff(number) {
    //console.log("Off");
    var image = document.getElementById("download-button-image" + number);
    image.src = "imgs/download-icon-gold.png";
}



//Get the button
var mybutton = document.getElementById("top-arrow-id");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}