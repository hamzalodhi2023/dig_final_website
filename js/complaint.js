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

let url =
  "https://script.google.com/macros/s/AKfycbyEOR1-JpD74Ds2OQuzhi91FaOizX_2qs9fAghtRzZU_VyhDSsthaKumjaGCWbe-FI9/exec";
let complaintForm = document.querySelector("form");
let complaintType = document.querySelector("#complaintType");

complaintForm.addEventListener("submit", (e) => {
  let data = new FormData(complaintForm);

  if (complaintType.value !== "") {
    e.target.btn.innerText === "Submitting....";
    fetch(url, {
      method: "POST",
      body: data,
    })
      .then((res) => {
        return res.text();
      })
      .then((finalRes) => {
        complaintForm.reset();
      });
    e.preventDefault();
  } else {
    e.preventDefault();
    alert("Please Select Complaint Type!!");
  }
});

/****************************************************************
 * DIGP SOUTH ZONE COMPLAINT - 2023 Logic End
 ****************************************************************/
