$(document).ready(function() {
// init
// toggleMenu
toggleMenu();

// slider jobs
var slider1 = $('.js-slider1');

initSlider(slider1, {
	speed: 500,
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 5000,	
	prevArrow: '.js-prev1',
	nextArrow: '.js-next1',
	responsive: [
	{
		breakpoint: 767,
		settings: {
			slidesToShow: 2
		}
	},
	{
		breakpoint: 480,
		settings: {
			slidesToShow: 1,
			dots: true
		}
	}
	]
});
// slider reviews
var slider2 = $('.js-slider2');

initSlider(slider2, {
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 5000,
	height: true,
	speed: 700,
	arrows: true,
	prevArrow: '.js-prev2',
	nextArrow: '.js-next2',
	responsive: [
	{
		breakpoint: 991,
		settings: {
			slidesToShow: 2
		}
	},
	{
		breakpoint: 767,
		settings: {
			slidesToShow: 1
		}
	},
	{
		breakpoint: 480,
		settings: {
			slidesToShow: 1,
			dots: true
		}
	}
	]
});



// initSlider
function initSlider(slider, options) {
	slider.on('init', function() {
		setTimeout(function() {
			slider.addClass('is-ready');
		}, 100);
	});
	slider.not('.slick-initialized').slick(options);
}

// Menu
function toggleMenu() {
	var $trigger = $(".js-burger"),
	$nav = $('.js-nav'),
	$body = $("body"),
	$overlay = $('.js-overlay');

	$trigger.on("click", function() {
		if($trigger.hasClass("is-active")) {
			menuClose();
		} else {
			menuOpen();
		}
	});
	var menuOpen = function() {
		$nav.add($overlay).add($trigger).removeClass("is-active").addClass("is-active");
		$body.addClass('is-hidden');
	};

	var menuClose = function() {
		$nav.add($overlay).add($trigger).removeClass('is-active');
		$body.removeClass('is-hidden');
	};
}

// anchor-is-visible
var arrow = $('.js-arrow');

$(window).scroll(function() {
	if($(this).scrollTop() > 200) {
		arrow.addClass('is-show');
	} else {
		arrow.removeClass('is-show');
	}
});

// anchor
arrow.click(function(event) {
	event.preventDefault();
	$('html,body').animate({'scrollTop' : 0},500);
});


// click on document
$(document).on('click touchstart', function (e) {
	var menuClose = !$(e.target).closest('.js-burger').length &&
	!$(e.target).closest('.js-nav').length;
	if (menuClose) {
		$('.js-burger, .js-nav, .js-overlay').removeClass('is-active');
		// $('.menu').removeClass('is-open');
		$('body').removeClass("is-hidden");

	}

});

// SELECT
$('.js-select').each(function(){
	var $this = $(this), 
	numberOfOptions = $(this).children('option').length;

	$this.addClass('is-hidden'); 
	$this.wrap('<div class="select"></div>');
	$this.after('<div class="select-styled"></div>');

	var $styledSelect = $this.next('div.select-styled');
	$styledSelect.text($this.children('option').eq(0).text());

	var $list = $('<ul />', {
		'class': 'select-options'
	}).insertAfter($styledSelect);

	for (var i = 0; i < numberOfOptions; i++) {
		$('<li />', {
			text: $this.children('option').eq(i).text(),
			rel: $this.children('option').eq(i).val()
		}).appendTo($list);
	}

	var $listItems = $list.children('li');

	$styledSelect.click(function(e) {
		e.stopPropagation();
		$('div.select-styled.is-active').not(this).each(function(){
			$(this).removeClass('is-active').next('ul.select-options').hide();
		});
		$(this).toggleClass('is-active').next('ul.select-options').toggle();
	});

	$listItems.click(function(e) {
		e.stopPropagation();
		$styledSelect.text($(this).text()).removeClass('is-active');
		$this.val($(this).attr('rel'));
		$list.hide();
        //console.log($this.val());
    });

	$(document).click(function() {
		$styledSelect.removeClass('is-active');
		$list.hide();
	});

});





});



