(function($) {
'use strict';

/**
 * All of the code for your admin-facing JavaScript source
 * should reside in this file.
 *
 * Note: It has been assumed you will write jQuery code here, so the
 * $ function reference has been prepared for usage within the scope
 * of this function.
 *
 * This enables you to define handlers, for when the DOM is ready:
 *
 * $(function() {
 *
 * });
 *
 * When the window is loaded:
 *
 * $( window ).load(function() {
 *
 * });
 *
 * ...and/or other possibilities.
 *
 * Ideally, it is not considered best practise to attach more than a
 * single DOM-ready or window-load handler for a particular page.
 * Although scripts in the WordPress core, Plugins and Themes may be
 * practising this, we should strive to set a better example in our own work.
 */

$(() => {

	$(window).load(function() {
		console.log('JQ Loaded');

		// function slidesToShow(number) {
		// 	if (number >= 4) {
		// 		return 4
		// 	} else if (number > 1) {
		// 		return number
		// 	// 1 or less
		// 	} else {
		// 		return 1
		// 	}
		// }

		function slickyfy() {
			$('.vl_slider').slick({
				dots: true,
				infinite: true,
				speed: 300,
				autoplay: true,
				autoplaySpeed: 2000,
				slidesToShow: 4,
				slidesToScroll: 4,
				// slidesToShow: nSlides > 4 ? 4 : slidesToShow(nSlides),
				// slidesToScroll: nSlides > 4 ? 4 : slidesToShow(nSlides),
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3,
							// slidesToShow: nSlides > 4 ? 3 : slidesToShow(nSlides - 1),
							// slidesToScroll: nSlides > 4 ? 4 : slidesToShow(nSlides - 1),
							infinite: true,
							dots: true
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
						// slidesToShow: nSlides > 4 ? 2 : slidesToShow(nSlides - 2),
						// slidesToScroll: nSlides > 4 ? 4 : slidesToShow(nSlides - 2)
						}
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						// slidesToShow: nSlides > 4 ? 1 : slidesToShow(nSlides - 3),
						// slidesToScroll: nSlides > 4 ? 4 : slidesToShow(nSlides)
						}
					}
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
				]
			});
		}

		slickyfy();

		$('.removeSlide,.addSlide').on('click', function() {
			$('.vl_slider').slick("unslick");
			setTimeout(function() {
				slickyfy();
			}, 10);
		})


	});


});



})(jQuery);
