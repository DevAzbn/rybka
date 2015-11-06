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
	}
);