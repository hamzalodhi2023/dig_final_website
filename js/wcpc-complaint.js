"use strict";
/****************************************************************
 * Hamburger Variables Start
 ****************************************************************/

let HamburgerIcon = document.querySelector(".fa-bars-staggered");
let HamburgerCross = document.querySelector(".fa-xmark");
let HamburgerContainer = document.querySelector(".hamburger-container");
let HamburgerMenu = document.querySelectorAll(".hamburger-container ul a li");

/****************************************************************
 * Hamburger Variables End
 ****************************************************************/

/****************************************************************
 *  DSP COMPLAINT - 2023 Variables Start
 ****************************************************************/

const complaintFormUrl =
  "https://script.google.com/macros/s/AKfycbyNKo4OwsMuj5lxT0sK4MpbnilXEWW4cneUnMJUFGpIi7nkFsI9E0dsOezAciV9Vv19HQ/exec";
const dateInput = document.getElementById("date");
const complaintForm = document.querySelector("form");

/****************************************************************
 *  DSP COMPLAINT - 2023 Variables End
 ****************************************************************/

/****************************************************************
 * Hamburger Logic Start
 ****************************************************************/

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
 * DSP COMPLAINT - 2023 Logic Start
 ****************************************************************/

/****************************************************************
 * Date and Time Logic Start
 ****************************************************************/

setInterval(function () {
  const now = new Date();

  const mm = now.getMonth();
  const dd = now.getDate();
  const yyyy = now.getFullYear();

  let hours = now.getHours();
  let mins = now.getMinutes();
  let secs = now.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
  } else {
    hours = hours;
  }

  if (mins < 10) {
    mins = "0" + mins;
  } else {
    mins = mins;
  }

  if (secs < 10) {
    secs = "0" + secs;
  } else {
    secs = secs;
  }
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  dateInput.value = `${dd} ${monthNames[mm]}, ${yyyy}  ${hours}:${mins}:${secs}`;
}, 1000);

/****************************************************************
 * Date and Time Logic End
 ****************************************************************/

/****************************************************************
 * Data Sending to Google Sheet Logic Start
 ****************************************************************/

complaintForm.addEventListener("submit", (e) => {
  const complaintFormData = new FormData(complaintForm);
  const subject = complaintFormData.get("complaintType");

  if (subject !== "") {
    e.target.btn.textContent = "Complaint Submitting....";

    fetch(complaintFormUrl, {
      method: "POST",
      body: complaintFormData,
    })
      .then((res) => {
        return res.text();
      })
      .then((finalRes) => {
        complaintForm.reset();
        e.target.btn.textContent = "Complaint Submitted Successfully!!!";

        setTimeout(function () {
          e.target.btn.textContent = "Submit Complaint";
        }, 3000);

        /****************************************************************
         * Data Sending to Whatsapp Logic Start
         ****************************************************************/

        let whatsappMessage =
          "https://wa.me/923350020257?text=" +
          "*WOMEN AND CHILDREN PROTECTION CELL, DIGP SOUTH ZONE KYC*" +
          "%0a" +
          "*COMPLAINANT NAME* : " +
          "%0a" +
          complaintFormData.get("name") +
          "%0a" +
          "*WHATSAPP* : " +
          "%0a" +
          complaintFormData.get("whatsapp") +
          "%0a" +
          "*CNIC NUBMER* : " +
          "%0a" +
          complaintFormData.get("cnic") +
          "%0a" +
          "*SUBJECT* : " +
          "%0a" +
          complaintFormData.get("complaintType") +
          "%0a" +
          "*COMPLAINT DETAILS* : " +
          "%0a" +
          complaintFormData.get("shortBrief") +
          "%0a" +
          "*COMPLAINT DATE* : " +
          "%0a" +
          complaintFormData.get("time");

        window.open(whatsappMessage, "_blank");

        /****************************************************************
         * Data Sending to Whatsapp Logic Start
         ****************************************************************/
      })
      .catch((error) => {
        console.log(error);
      });
    e.preventDefault();
  } else {
    e.preventDefault();
    alert("Please Select a Complaint Subject !!");
  }
});

/****************************************************************
 * Data Sending to Google Sheet Logic End
 ****************************************************************/

/****************************************************************
 * DSP COMPLAINT - 2023 Logic End
 ****************************************************************/
