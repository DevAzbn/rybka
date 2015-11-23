$(
	function() {
		$(document.body).on('click.size', '.show-menu-btn', function(event){
			var main = $('.mainpage-container:visible');
			var menu = $('.mainpage-container.container-menu');
			menu.slideDown('fast').css({display : 'table'});
		});
		$(document.body).on('click.size', '.hide-menu-btn', function(event){
			var main = $('.mainpage-container:visible');
			var menu = $('.mainpage-container.container-menu');
			menu.slideUp('fast');
		});
		$(document.body).on('click.fecss', '.drd-btn', function(event){
			event.preventDefault();
			$(this).closest('ul').find('.drd-list').slideUp('fast');
			$(this).next('.drd-list').slideDown('fast');
		});
	}
);