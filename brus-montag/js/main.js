let sideMenuEnabled = false;


$(window).on('load', function() {
	$('.flexslider').flexslider({
		directionNav: false,
		controlNav: false
	})

	$('.articles-slider').flexslider({
		directionNav: false,
		controlNav: false
	})

	$('.our-works-slider').flexslider({
		directionNav: false,
		controlNav: false
	})


	$('.callback-link').click(function(){
		$('.callback-form').toggleClass('disabled');
		$(this).toggleClass('callback-pressed');
	})

	$('.item-projects').click(function(){
		$('.sub-menu').toggleClass('disabled');
		$('.search-menu').addClass('disabled');
		$(this).toggleClass('pressed');
		return false;
	})
	$('.btn-search').click(function(){
		$('.search-menu').toggleClass('disabled');
		$('.sub-menu').addClass('disabled');
//		$(this).toggleClass('pressed');
	})

	$(window).scroll(function(){
		if( $(window).scrollTop() >= 450 && !sideMenuEnabled )
		{
			$('.side-menu').removeClass('disabled');
			$('.static-menu').removeClass('disabled');
			sideMenuEnabled=true;
		}
		if( $(window).scrollTop() < 450 && sideMenuEnabled )
		{
			$('.side-menu').addClass('disabled');
			$('.static-menu').addClass('disabled');
			sideMenuEnabled=false;
		}	
	})

	$('.static-menu-button').click(function(){
		$('.static-sub-menu').toggleClass('disabled');
		$('.static-projects').addClass('disabled');
		return false;
	})


	$('.sub-projects').click(function(){
		$('.static-projects').toggleClass('disabled');
		return false;
	})




//	$('.callback-link').click(function(){
//		$(this).toggleClass('active');
//		$('#header-form').toggleClass('none');
//	})


});
