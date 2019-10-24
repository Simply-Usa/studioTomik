$(document).ready(function(){
	// Клики по табам начало
	$(function() {
		var tab = $('#tabs .tabs-items > div'); 
		tab.hide().filter(':first').show(); 
		
		// Клики по вкладкам.
		$('#tabs .tabs-nav a').click(function(){
			tab.hide(); 
			tab.filter(this.hash).slideDown(400); 
			$('#tabs .tabs-nav a').removeClass('active');
			$(this).addClass('active');
			return false;
		}).filter(':first').click();
		
		// Клики по якорным ссылкам.
		$('.tabs-target').click(function(){
			$('#tabs .tabs-nav a[href=' + $(this).data('id')+ ']').click();
		});
	});
	// Клики по табам конец
	
	
	// Для фотографий начало
	$(function() {
		var tab = $('#tabs .tabs-items-photos > div'); 
		tab.hide().filter(':first').show(); 
		
		// Клики по вкладкам.
		$('#tabs .tabs-nav-photos a').click(function(){
			tab.hide(); 
			tab.filter(this.hash).slideDown(400); 
			$('#tabs .tabs-nav-photos a').removeClass('active');
			$(this).addClass('active');
			return false;
		}).filter(':first').click();
		
		// Клики по якорным ссылкам.
		$('.tabs-target').click(function(){
			$('#tabs .tabs-nav-photos a[href=' + $(this).data('id')+ ']').click();
		});
	});
	// Для фотографий конец
	
	
	$(window).bind('scroll', function() {
		var windowTop = $(this).scrollTop();
		if(windowTop > 500){
			$('.tabs-items > #tab-2').html('<iframe width="100%" height="315" src="https://www.youtube.com/embed/NU67Bg4Gtck" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><iframe width="100%" height="315" src="https://www.youtube.com/embed/HGh9tjhbQSc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><iframe width="100%" height="315" src="https://www.youtube.com/embed/RP81XnxJ7pc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><iframe width="100%" height="315" src="https://www.youtube.com/embed/54tZnFnPx9Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><iframe width="100%" height="315" src="https://www.youtube.com/embed/UhSNPYDCuag" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><iframe width="100%" height="315" src="https://www.youtube.com/embed/zhLBRtkyUAM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
			$(window).unbind('scroll');
		}
	});
	
	// $(window).scroll(function(){
	// 	var windowsScroll = $(window).scrollTop();
	// 	if(windowsScroll >= 100) {
	// 		$('header .btn').css({
	// 			'position': 'fixed',
	// 			'top': '20px'
	// 		});
	// 		$('header ul.menu').css({
	// 			'top': '20px'
	// 		})
	// 	}else{
	// 		$('header .btn').css({
	// 			'top': '100px'
	// 		});
	// 	}
	// });
	$('a[data-rel^=lightcase]').lightcase();
	$('header  .btn').click(function(){
		$(this).toggleClass('active_btn');
		$('ul.menu').slideToggle();
	});
});
