var writeUs = document.querySelector(".btn-write-us");
var writeusPopup = document.querySelector(".popup-writeus");
var popupClose = writeusPopup.querySelector(".popup-close");

writeUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeusPopup.classList.add("popup-show");
});

popupClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeusPopup.classList.remove("popup-show");
  });