$(document).ready(function () {

	// Header
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$(".navbar").addClass("header-bg");
		} else {
			$(".navbar").removeClass("header-bg");
		}
	})
	$(".testimonial-carousel").owlCarousel({
		loop: true,
		margin: 20,
		nav: false,
		dots: false,
		items: 1,
		// autoplay: true,
		// autoplayTimeout: 5000,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 1,
			},
		},
	});

	// Custom Navigation
	$("#testimonial-prev").click(function () {
		$(".testimonial-carousel").trigger("prev.owl.carousel");
		console.log("clicked");
	});
	$("#testimonial-next").click(function () {
		$(".testimonial-carousel").trigger("next.owl.carousel");
	});

	// Back to top Button
	$("#back-to-top").click(function () {
		$("html, body").animate({ scrollTop: 0 }, 800); // Smooth scroll to top over 800ms
		return false;
	});
});
