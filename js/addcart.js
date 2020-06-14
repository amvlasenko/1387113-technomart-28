var buy = document.querySelector(".buy");
var addedPopup = document.querySelector(".popup-added");
console.log(addedPopup);
var popupClose = addedPopup.querySelector(".popup-close");

buy.addEventListener("click", function (evt) {
    evt.preventDefault();
    addedPopup.classList.add("popup-show");
});

popupClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    addedPopup.classList.remove("popup-show");
  });