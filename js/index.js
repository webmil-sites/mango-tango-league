const buttonNonPro = document.getElementById("button-toogle-nonpro");
const buttonSolo = document.getElementById("button-toogle-solo");
const contentNonPro = document.getElementById("content-nonpro");
const contentNonProBottom = document.getElementById("content-nonpro-bottom");
const contentSolo = document.getElementById("content-solo");
const contentSoloBottom = document.getElementById("content-solo-bottom");

buttonNonPro.addEventListener("click", function() {
  buttonSolo.classList.remove("button-schedule-solo");
  buttonNonPro.classList.add("button-schedule");

  document
    .getElementById("headlineColor")
    .classList.remove("color-t-vivid-red");
  document
    .getElementById("headlineColor")
    .classList.add("color-t-yellow--mobile");

  document
    .getElementById("paragraphColor")
    .classList.add("color-t-yellow--mobile");
  document
    .getElementById("paragraphColor")
    .classList.remove("color-t-vivid-red");

  if (contentNonPro.classList.contains("js-hide")) {
    contentSolo.classList.add("js-hide");
    contentSolo.classList.remove("js-show");
    contentSoloBottom.classList.add("js-hide");
    contentSoloBottom.classList.remove("js-show");

    contentNonPro.classList.add("js-show");
    contentNonProBottom.classList.add("js-show");
  }
});

buttonSolo.addEventListener("click", function() {
  buttonSolo.classList.add("button-schedule-solo");
  buttonNonPro.classList.remove("button-schedule");

  document
    .getElementById("headlineColor")
    .classList.remove("color-t-yellow--mobile");
  document.getElementById("headlineColor").classList.add("color-t-vivid-red");

  document
    .getElementById("paragraphColor")
    .classList.remove("color-t-yellow--mobile");
  document.getElementById("paragraphColor").classList.add("color-t-vivid-red");

  if (contentSolo.classList.contains("js-hide")) {
    contentNonPro.classList.add("js-hide");
    contentNonPro.classList.remove("js-show");
    contentNonProBottom.classList.add("js-hide");
    contentNonProBottom.classList.remove("js-show");

    contentSolo.classList.add("js-show");
    contentSoloBottom.classList.add("js-show");
  }
});

const removeClasses = function() {
  if (window.innerWidth > 1080) {
    contentNonPro.classList.remove("js-show");
    contentNonPro.classList.remove("js-hide");
    contentSolo.classList.remove("js-show");
    contentSolo.classList.remove("js-hide");
  } else if (window.innerWidth < 1080) {
    contentSolo.classList.add("js-hide");
  }
};
removeClasses();

console.log("start");
