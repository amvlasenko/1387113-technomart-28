var map = document.querySelector(".map-popup");
var showPopup = document.querySelector(".popup-address-container");
var popupClose = showPopup.querySelector(".popup-close");

map.addEventListener("click", function (evt) {
    evt.preventDefault();
    showPopup.classList.add("popup-show");
});

popupClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    showPopup.classList.remove("popup-show");
  });