$(document).ready(function(){
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
