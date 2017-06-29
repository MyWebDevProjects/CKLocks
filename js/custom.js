/*
	Project Name : Locksmith
	Author Company : Ewebcraft
	Project Date: 17 October, 2016
	Author Website : http://www.ewebcraft.com
	Author Email : ewebcraft@gmail.com
*/

$(window).load(function(){
    $('#loader').fadeOut("slow");
});

(function($) {
	"use strict";

		new WOW().init();

		// Dropdown on hover with slide effect

		if($(window).width() > 640){
			$('ul.nav li.dropdown').hover(function() {
			  $(this).find('.dropdown-menu').stop(true, true).delay(200).slideDown(300);
			}, function() {
			  $(this).find('.dropdown-menu').stop(true, true).delay(200).slideUp(200);
			});
		}		

		/* back to top */
		$('.back-to-top').css('display' , 'none');
		$(window).scroll(function() {
		    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
		        $('.back-to-top').fadeIn(200);    // Fade in the arrow
		    } else {
		        $('.back-to-top').fadeOut(200);   // Else fade out the arrow
		    }
		});
		/* back to top */

		/* Smooth-Scroll */

		$(".scroll").on('click',function(event){
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top}, 2000);
		});

		/* Smooth-Scroll */

		/* Search */

		$(".searchbox-icon").on('click',function(){
	    	$("#search-form .search-group").toggleClass("search-group-active");
	    	$(this).toggleClass('searchbox-icon-closed');
	    });    

		/* Search */

		// fixed navigation on scroll
		$(window).scroll(function () {
	        
	      if($(window).width() > 640){
	      	var topHeight = $("#header").outerHeight(true);	
	      }else {
	      	var topHeight = $("#header").outerHeight(true)+90;
	      }		  
		  	if ($(window).scrollTop() > topHeight) {
			  $('.navigation').addClass('navbar-fixed');
			}
			if ($(window).scrollTop() < topHeight) {
			  $('.navigation').removeClass('navbar-fixed');
			}
	 	});	 

		$( ".toggle-arrow" ).on("click",function() {
			$(this).toggleClass("active");  		
			$("#estimation").slideToggle( "slow" );
			$("#about").toggleClass('gray-bg');
		});
		 
		$('.testimonial-slider').bxSlider({
		  	pagerCustom: '#bx-pager',
			mode: 'horizontal',
			auto: true,
			pause: 3000,
			startSlide: 1,
			autoHover: true,
			controls: false
		});

		$('.logo-slider').bxSlider({
			mode: 'vertical',
			minSlides: 4,
  			maxSlides: 4,
			slideWidth: 175,
			responsive: true,
			pager: false,
			controls: false,
			auto: true,
			pause: 3000,
			startSlide: 1,
			autoHover: true
		});			

 })(jQuery); 
 