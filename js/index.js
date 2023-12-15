"use strict";
/****************************************************************
 * Slider Logic Start
 ****************************************************************/

const imgs = document.querySelectorAll("#hero .slider-img");
const sliderImg = document.querySelector("#hero img.animation");
let currentImgIndex = 0;

function showImage() {
  sliderImg.classList.remove("animation");
  sliderImg.src = imgs[currentImgIndex].src;

  sliderImg.offsetHeight;
  sliderImg.classList.add("animation");
  currentImgIndex = (currentImgIndex + 1) % imgs.length;
}

setInterval(showImage, 9000);

/****************************************************************
 * Slider Logic End
 ****************************************************************/

/****************************************************************
 * Hamburger Logic Start
 ****************************************************************/

let HamburgerIcon = document.querySelector(".fa-bars-staggered");
let HamburgerCross = document.querySelector(".fa-xmark");
let HamburgerContainer = document.querySelector(".hamburger-container");
let HamburgerMenu = document.querySelectorAll(".hamburger-container ul a li");

HamburgerIcon.addEventListener("click", HamburgerOpening);
HamburgerCross.addEventListener("click", HamburgerClosing);
HamburgerMenu.forEach((element) => {
  element.addEventListener("click", HamburgerClosing);
});

function HamburgerOpening() {
  HamburgerContainer.style.right = "0%";
}

function HamburgerClosing() {
  HamburgerContainer.style.right = "-100%";
}
/****************************************************************
 * Hamburger Logic End
 ****************************************************************/
/****************************************************************
 * Latest Events Popup Logic Start
 ****************************************************************/

let popup = document.querySelector("#event-popup");
let latestEventCard = document.querySelectorAll(".event");
let popupClosingIcon = document.querySelector(".popup-closing-icon");
let popupImg = popup.querySelector("img");
let popupTitle = popup.querySelector("h3");
let popupAbout = popup.querySelector("p");

popupClosingIcon.addEventListener("click", () => {
  popup.style.top = "100%";
});

latestEventCard.forEach((element) => {
  element.addEventListener("click", () => {
    popup.style.top = "0%";

    let cardImg = element.querySelector("img");
    let cardTitle = element.querySelector(".event-txt-div p");
    let cardAbout = element.querySelector(".event-txt-div .about-news");

    popupImg.src = cardImg.src;
    popupTitle.textContent = cardTitle.textContent;
    popupAbout.textContent = cardAbout.textContent;
  });
});

/****************************************************************
 * Latest Events Popup Logic End
 ****************************************************************/
