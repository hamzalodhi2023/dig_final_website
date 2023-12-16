"use strict";
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
 * DIGP SOUTH ZONE COMPLAINT - 2023 Logic Start
 ****************************************************************/

const url =
  "https://script.google.com/macros/s/AKfycbz0UdjOz_zbYOUc_EEbYsh6W8awtTjnxP-5r_b0Lu5tdLYbjv5iiEH7dP3ZF5m-Q7HV/exec";
const dateInput = document.getElementById("time");
const complaintForm = document.querySelector("form");

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

  dateInput.value = `${dd} ${monthNames[mm]}, ${yyyy}  ${hours} : ${mins} : ${secs}`;
}, 1000);

complaintForm.addEventListener("submit", (e) => {
  if (complaintType.value !== "") {
    e.target.btn.innerText = "Complaint Submitting....";
    e.preventDefault();

    let data = new FormData(complaintForm);

    fetch(url, {
      method: "POST",
      body: data,
    })
      .then((res) => res.text())
      .then((finalRes) => {
        complaintForm.reset();
        e.target.btn.innerText = "Complaint Submitted!!";

        setTimeout(function () {
          e.target.btn.innerText = "Submit Complaint";
        }, 2000);

        let whatsappMessage =
          "https://wa.me/923332186472?text=" +
          "*DSP COMPLAIN CELL, DIGP SOUTH ZONE KYC*" +
          "%0a" +
          "*NAME* : " + "%0a" +
          data.get("name") +
          "%0a" +
          "*WHATSAPP* : " + "%0a" +
          data.get("whatsapp") +
          "%0a" +
          "*SUBJECT* : " + "%0a" +
          data.get("complaintType") +
          "%0a" +
          "*COMPLAINT DETAILS* : " + "%0a" +
          data.get("shortBrief") +
          "%0a" +
          "*COMPLAINT DATE* : " +"%0a" +
          data.get("time");

        window.open(whatsappMessage, "_blank");
      });
  } else {
    e.preventDefault();
    alert("Please Select Complaint Type!!");
  }
});

/****************************************************************
 * DIGP SOUTH ZONE COMPLAINT - 2023 Logic End
 ****************************************************************/
