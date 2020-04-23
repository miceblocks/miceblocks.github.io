
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