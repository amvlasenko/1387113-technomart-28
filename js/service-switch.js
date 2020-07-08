function Slider( element ) {
	this.el = document.querySelector( element );
	this.init();
}
Slider.prototype = {
	init: function() {
		this.links = this.el.querySelectorAll( ".switch-controls button" );
		this.wrapper = this.el.querySelector( ".switch-list" );
		this.navigate();
	},
	navigate: function() {
		for ( var i = 0; i < this.links.length; ++i ) {
			var link = this.links[i];
			this.slide( link );
		}
	},
	slide: function( element ) {
		var self = this;
		element.addEventListener( "click", function( e ) {
			e.preventDefault();
			var a = this;
			self.setCurrentLink( a );
			var index = parseInt( a.getAttribute( "data-switch" ), 10 ) + 1;
			var currentSlide = self.el.querySelector( ".switch-item:nth-child(" + index + ")" );
			self.wrapper.style.top = "-" + currentSlide.offsetTop + "px";
		},
		false);
	},
	setCurrentLink: function(link) {
		var parent = link.parentNode;
		var a = parent.querySelectorAll( "button" );
		link.className = "current";
		for ( var j = 0; j < a.length; ++j ) {
			var cur = a[j];
			if ( cur !== link ) {
				cur.className = "";
			}
		}
	}
};
document.addEventListener("DOMContentLoaded", function() {
	var aSlider = new Slider( ".switch" );
});	
