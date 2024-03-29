const buttonNonPro = document.getElementById("button-toogle-nonpro");
const buttonSolo = document.getElementById("button-toogle-solo");
const contentNonPro = document.getElementById("content-nonpro");
const contentNonProBottom = document.getElementById("content-nonpro-bottom");
const contentSolo = document.getElementById("content-solo");
const contentSoloBottom = document.getElementById("content-solo-bottom");

buttonNonPro.addEventListener("click", function() {
  buttonSolo.classList.remove("button-schedule-solo");
  buttonNonPro.classList.add("button-schedule");

  if (contentNonPro.classList.contains("js-hide")) {
    contentSolo.classList.add("js-hide");
    contentSolo.classList.remove("js-show");
    contentNonPro.classList.add("js-show");
  }
});

buttonSolo.addEventListener("click", function() {
  buttonSolo.classList.add("button-schedule-solo");
  buttonNonPro.classList.remove("button-schedule");

  if (contentSolo.classList.contains("js-hide")) {
    contentNonPro.classList.add("js-hide");
    contentNonPro.classList.remove("js-show");
    contentSolo.classList.add("js-show");
  }
});

const removeClasses = function() {
  if (window.innerWidth > 1080) {
    contentNonPro.classList.remove("js-show");
    contentNonPro.classList.remove("js-hide");
  } else if (window.innerWidth < 1080) {
    contentSolo.classList.add("js-hide");
  }
};
removeClasses();