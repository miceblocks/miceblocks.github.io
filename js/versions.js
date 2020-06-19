/*================Universal Spoiler Area================*/
var element = document.getElementById(name);
var otherElements = document.getElementsByClassName("changelog-version-div");
function SpoilerVersionToggle(name) {
  element = document.getElementById(name);
  otherElements = document.getElementsByClassName("changelog-version-div");
  if (element.style.opacity === "0") {
    element.style.opacity = "1";
    element.style.maxHeight = "300px";
    for  (i = 0; i < otherElements.length; i++) {
      if (otherElements[i] != element) {
        otherElements[i].style.opacity = "0";
        otherElements[i].style.maxHeight = "0px";
      }
    }
    
  } else {
    element.style.opacity = "0";
    element.style.maxHeight = "0px";
  }
}

function SpoilerVersionCloseAll() {
    for  (i = 0; i < otherElements.length; i++) {
        otherElements[i].style.opacity = "0";
        otherElements[i].style.maxHeight = "0px";
    }
}

/*================Page system================*/
var versionsList = document.getElementsByClassName("version-button");
var versionsPagesAmount = 0;
var versionsPageSelected = 0;
var versionsMax = 0;
var versionsMin = 0;
// Elements Per Page.
var versionsElementsPerPage = 5;

organizePages(1)

function organizePages(page, selected) {
  // Get max elements per page
  versionsMax = versionsElementsPerPage;

  // Get required number of pages
  versionsPagesAmount = 0;
  for (var i = 0; i < versionsList.length; i++) {
      versionsList[i].style.display = "none";
      if (Number.isInteger(i / versionsElementsPerPage) == true) {
        versionsPagesAmount++;
      }
  }

  if (selected == false) {
    versionsPageSelected+= page;
    if (versionsPageSelected <= 0) {
      versionsPageSelected = versionsPagesAmount
    } else if (versionsPageSelected >= versionsPagesAmount + 1) {
      versionsPageSelected = 1;
    }
  } else {
    versionsPageSelected = page;
  }
  // Set max elements per page
  versionsMax = versionsMax * versionsPageSelected;
    
  // Set min elements per page
  versionsMin = (versionsPageSelected-1) * versionsElementsPerPage;

  // If number of elements < max elements per page = Set total number of elements as max elements in that page
  if (versionsList.length < versionsMax) {
    versionsMax = versionsList.length;
  }

  // Close all tabs
  SpoilerVersionCloseAll();

  for (i = versionsMin; i < versionsMax; i++) {
    versionsList[i].style.display = "block";
  }

  CreatePageNumbers();
}

function CreatePageNumbers() {
  document.getElementById('version-pages-numbers-div').innerHTML = '';

  for (var i = 0; i < versionsPagesAmount; i++) {
    var buttons = document.createElement('button');
    buttons.className = "version-page-buttons version-pages-number-buttons";

    if (i+1 == versionsPageSelected) {
      buttons.innerHTML = "<u>" + (i+1) + "</u>";
    } else {
      buttons.innerHTML = i+1;
    }

    document.getElementById('version-pages-numbers-div').appendChild(buttons);
  }
  for (i = 0; i < versionsPagesAmount; i++) {
    numberButtons = document.getElementsByClassName("version-pages-number-buttons");
    
    numberButtons[i].setAttribute('onclick', 'organizePages(' + (i + 1) + ', true )' );
  }
}