// add card
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

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
	  if (addedPopup.classList.contains("popup-show")) {
		evt.preventDefault();
		addedPopup.classList.remove("popup-show");
	  }
	}
  });

//   map
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

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
	  if (showPopup.classList.contains("popup-show")) {
		evt.preventDefault();
		showPopup.classList.remove("popup-show");
	  }
	}
  });

//   service-switch
function Slider(element) {
  this.el = document.querySelector(element);
  this.init();
}
Slider.prototype = {
  init: function () {
    this.links = this.el.querySelectorAll(".switch-controls button");
    this.wrapper = this.el.querySelector(".switch-list");
    this.navigate();
  },
  navigate: function () {
    for (var i = 0; i < this.links.length; ++i) {
      var link = this.links[i];
      this.slide(link);
    }
  },
  slide: function (element) {
    var self = this;
    element.addEventListener(
      "click",
      function (e) {
        e.preventDefault();
        var a = this;
        self.setCurrentLink(a);
        var index = parseInt(a.getAttribute("data-switch"), 10) + 1;
        var currentSlide = self.el.querySelector(
          ".switch-item:nth-child(" + index + ")"
        );
        self.wrapper.style.top = "-" + currentSlide.offsetTop + "px";
      },
      false
    );
  },
  setCurrentLink: function (link) {
    var parent = link.parentNode;
    var a = parent.querySelectorAll("button");
    link.className = "current";
    for (var j = 0; j < a.length; ++j) {
      var cur = a[j];
      if (cur !== link) {
        cur.className = "";
      }
    }
  },
};
document.addEventListener("DOMContentLoaded", function () {
  var aSlider = new Slider(".switch");
});

// slider
(function () {
  function Slideshow(element) {
    this.el = document.querySelector(element);
    this.init();
  }

  Slideshow.prototype = {
    init: function () {
      this.wrapper = this.el.querySelector(".slider-list");
      this.slides = this.el.querySelectorAll(".slide");
      this.previous = this.el.querySelector(".back");
      this.next = this.el.querySelector(".forward");
      this.navigationLinks = this.el.querySelectorAll(
        ".slider-pagination button"
      );
      this.index = 0;
      this.total = this.slides.length;

      this.setup();
      this.actions();
    },
    _slideTo: function (slide) {
      var currentSlide = this.slides[slide];
      currentSlide.style.opacity = 1;

      for (var i = 0; i < this.slides.length; i++) {
        var slide = this.slides[i];
        if (slide !== currentSlide) {
          slide.style.opacity = 0;
        }
      }
    },
    _highlightCurrentLink: function (link) {
      var self = this;
      for (var i = 0; i < self.navigationLinks.length; ++i) {
        var a = self.navigationLinks[i];
        a.className = "";
      }
      link.className = "current";
    },
    setup: function () {
      var self = this;

      for (var l = 0; l < self.slides.length; ++l) {
        var elSlide = self.slides[l];
        var image = elSlide.getAttribute("data-image");
        elSlide.style.backgroundImage = "url(" + image + ")";
      }

      for (var k = 0; k < self.navigationLinks.length; ++k) {
        var pagLink = self.navigationLinks[k];
        pagLink.setAttribute("data-index", k);
      }
    },
    actions: function () {
      var self = this;

      self.next.addEventListener(
        "click",
        function () {
          self.index++;
          self.previous.style.display = "block";

          if (self.index == self.total - 1) {
            self.index = self.total - 1;
            self.next.style.display = "none";
          }

          self._slideTo(self.index);

          self._highlightCurrentLink(self.navigationLinks[self.index]);
        },
        false
      );

      self.previous.addEventListener(
        "click",
        function () {
          self.index--;
          self.next.style.display = "block";

          if (self.index == 0) {
            self.index = 0;
            self.previous.style.display = "none";
          }

          self._slideTo(self.index);

          self._highlightCurrentLink(self.navigationLinks[self.index]);
        },
        false
      );

      for (var i = 0; i < self.navigationLinks.length; ++i) {
        var a = self.navigationLinks[i];

        a.addEventListener(
          "click",
          function (e) {
            e.preventDefault();
            var n = parseInt(this.getAttribute("data-index"), 10);

            self.index = n;

            if (self.index == 0) {
              self.index = 0;
              self.previous.style.display = "none";
            }

            if (self.index > 0) {
              self.previous.style.display = "block";
            }

            if (self.index == self.total - 1) {
              self.index = self.total - 1;
              self.next.style.display = "none";
            } else {
              self.next.style.display = "block";
            }

            self._slideTo(self.index);

            self._highlightCurrentLink(this);
          },
          false
        );
      }
    },
  };

  document.addEventListener("DOMContentLoaded", function () {
    var slider = new Slideshow("#main-slider");
  });
})();

// writeus
var writeUs = document.querySelector(".btn-write-us");
console.log(writeUs);
var writeusPopup = document.querySelector(".popup-writeus");
var writeusForm = writeusPopup.querySelector(".writeus-form");
var popupClose = writeusPopup.querySelector(".popup-close");
var writeusName = writeusPopup.querySelector(".name");
var writeusEmail = writeusPopup.querySelector(".email");
var writeusText = writeusPopup.querySelector(".text");

writeUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeusPopup.classList.add("popup-show");
});

popupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeusPopup.classList.remove("popup-show");
  writeusPopup.classList.remove("popup-error");
});

writeusForm.addEventListener("submit", function (evt) {
	if (!writeusName.value || !writeusEmail.value || !writeusText.value) {
		evt.preventDefault();
		writeusPopup.classList.remove("popup-error");
		writeusPopup.offsetWidth = writeusPopup.offsetWidth;
		writeusPopup.classList.add("popup-error");
	  }
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
	  if (writeusPopup.classList.contains("popup-show")) {
		evt.preventDefault();
		writeusPopup.classList.remove("popup-show");
		writeusPopup.classList.remove("popup-error");
	  }
	}
  });
