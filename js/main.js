// ************ Search On Click
    $(".search_btn").on("click", function(event) {
        event.preventDefault();
        $("#search").addClass("open");
        $("#search > form > input[type='search']").focus();
    });
	$("#search, #search button.close").on("click keyup", function(event) {
        if (event.target == this || event.target.className == "close" || event.keyCode == 27) {
            $(this).removeClass("open");
        }
    });
	$('.header-slider').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})
	//jQuery Counter
    $('.counter').counterUp({
        time : 3000
    });