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

setInterval(showImage, 7000);
