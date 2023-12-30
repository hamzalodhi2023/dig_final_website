"use strict";

/****************************************************************
 * Slider Variables Start
 ****************************************************************/

const imgs = document.querySelectorAll("#hero .slider-img");
const sliderImg = document.querySelector("#hero img.animation");
let currentImgIndex = 0;

/****************************************************************
 * Slider Variables End
 ****************************************************************/

/****************************************************************
 *  Hamburger Variables Start
 ****************************************************************/

let HamburgerIcon = document.querySelector("nav .fa-bars-staggered");
let HamburgerCross = document.querySelector(".hamburger-container .fa-xmark");
let HamburgerContainer = document.querySelector(".hamburger-container");
let HamburgerMenu = document.querySelectorAll(".hamburger-container ul a li");
let smallHeroHamburgerIcon = document.querySelector(
  "#hero-small .fa-bars-staggered"
);

/****************************************************************
 * Hamburger Variables End
 ****************************************************************/

/****************************************************************
 *  Latest Events Popup Variables Start
 ****************************************************************/

let popup = document.querySelector("#event-popup");
let latestEventCard = document.querySelectorAll(".event");
let popupClosingIcon = document.querySelector(".popup-closing-icon");
let popupImg = popup.querySelector("img");
let popupTitle = popup.querySelector("h3");
let popupAbout = popup.querySelector("p");

/****************************************************************
 * Latest Events Popup Variables End
 ****************************************************************/
/****************************************************************
 *  Website Starting Popup Variables Start
 ****************************************************************/

let popupWindow = document.querySelector("#pop-up-window");
let popupWindowClosingIcon = popupWindow.querySelector("i");

/****************************************************************
 * Website Starting Popup Variables End
 ****************************************************************/
/****************************************************************
 *  Subscription Form Data Sending in Google Sheets Variables Start
 ****************************************************************/

const subscriptionForm = document.querySelector("form");
const subscriptionFormURL =
  "https://script.google.com/macros/s/AKfycbzPd85EbILMkz92KshwixEUhSyspMYggXZmUu7gvO-RFY5Jre6Y48HXx1ac8rqExHWIIQ/exec";

/****************************************************************
 * Subscription Form Data Sending in Google Sheets Popup Variables End
 ****************************************************************/

/****************************************************************
 * Slider Logic Start
 ****************************************************************/

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

HamburgerIcon.addEventListener("click", HamburgerOpening);
HamburgerCross.addEventListener("click", HamburgerClosing);
smallHeroHamburgerIcon.addEventListener("click", HamburgerOpening);
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

/****************************************************************
 * Subscription Form Data Sending in Google Sheets Logic Start
 ****************************************************************/

subscriptionForm.addEventListener("submit", (e) => {
  e.target.btn.innerHTML = "Submitting...";
  let subscriptionFormData = new FormData(subscriptionForm);
  e.preventDefault();

  fetch(subscriptionFormURL, {
    method: "POST",
    body: subscriptionFormData,
  })
    .then((res) => {
      return res.text();
    })
    .then((finalRes) => {
      /****************************************************************
       * Subscriber Email Sending Logic Start
       ****************************************************************/

      const emailBody =
        "<h1 style='font-size: 20px; text-align: center' >THANKS TO SUBSCRIBE US</h1><p style='font-size: 13px; text-align: justify; text-align-last: center'>Stay informed and connected with the latest updates from the DIGP South Zone Karachi by subscribing to our monthly newsletter! By joining our subscription list, you'll receive exclusive insights into our community initiatives, crime prevention tips, and updates on law enforcement activities in the region. Be the first to know about events, public safety announcements, and the outstanding work our officers are doing to keep our communities safe. Your subscription ensures you never miss a beat when it comes to staying involved with the DIGP South Zone Karachi. Sign up today to receive a monthly dose of important information delivered straight to your inbox. Together, let's build a safer and more secure future for our community</p><p style='text-align: center; margin: 0; padding: 0'><b>Address: </b> DIGP South Zone Office, Awan-e-Sadder Road, Karachi, Pakistan</p><p style='text-align: center; margin: 0; padding: 0'><b>Email: </b> <a href='mailto:info@digpsouthzonekarachi.com'> info@digpsouthzonekarachi.com </a></p><p style='text-align: center; margin: 0; padding: 0'><b>Website: </b> <a href='www.digpsouthzonekarachi.com'> www.digpsouthzonekarachi.com </a> </p><p style='text-align: center; margin: 0; padding: 0'>Copyright © 2023 DIGP South Zone Karachi, All rights reserved.</p>";

      Email.send({
        Host: "smtp.elasticemail.com",
        Username: "info@digpsouthzonekarachi.com",
        Password: "4578C9D116FB02F7CA9B97EF93747F360EDD",
        To: subscriptionFormData.get("email"),
        From: "info@digpsouthzonekarachi.com",
        Subject: "THANKS FOR SUBSCRIPTION!",
        Body: emailBody,
      });

      /****************************************************************
       * Subscriber Email Sending Logic Start
       ****************************************************************/

      subscriptionForm.reset();
      e.target.btn.innerHTML = "Subscribed!";

      setTimeout(function () {
        e.target.btn.innerHTML = "Subscribe";
      }, 3000);
    });
});

/****************************************************************
 * Subscription Form Data Sending in Google Sheets Logic End
 ****************************************************************/
/****************************************************************
 *  Website Starting Popup Logic Start
 ****************************************************************/

setTimeout(function () {
  popupWindow.style.top = "0%";
}, 5000);

popupWindowClosingIcon.addEventListener("click", function () {
  popupWindow.style.top = "100%";
});

/****************************************************************
 *  Website Starting Popup Logic End
 ****************************************************************/
