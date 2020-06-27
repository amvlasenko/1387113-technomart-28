var buys = document.querySelectorAll(".buy");
var addedPopup = document.querySelector(".popup-added");
var popupClose = addedPopup.querySelector(".popup-close");

for (buy of buys) {
buy.addEventListener("click", function (evt) {
    evt.preventDefault();
    addedPopup.classList.add("popup-show");
});
}

popupClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    addedPopup.classList.remove("popup-show");
  });