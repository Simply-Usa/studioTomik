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
	
	
	
	
	$(window).scroll(function(){
		var windowsScroll = $(window).scrollTop();
		if(windowsScroll >= 100) {
			$('header .btn').css({
				'position': 'fixed',
				'top': '20px'
			});
			$('header ul.menu').css({
				'top': '20px'
			})
		}else{
			$('header .btn').css({
				'top': '100px'
			});
		}
	});
	$('a[data-rel^=lightcase]').lightcase();
	$('header  .btn').click(function(){
		$(this).toggleClass('active_btn');
		$('ul.menu').slideToggle();
	});
});
