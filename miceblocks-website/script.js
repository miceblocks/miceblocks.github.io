function ButtonOn(name) {
  var image = document.getElementById(name);
  image.src = "imgs/" + name + "-on.png";
}

function ButtonOff(name) {
  var image = document.getElementById(name);
  image.src = "imgs/" + name + "-off.png";
}

function DownloadVersionToggle() {
  var x = document.getElementById("download-versions-id");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
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