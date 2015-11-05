$(document).ready(function() {

	var h = $(window).height();

	(function(){
		$('.about-page .top-slider').height(h);
	})();

	$(document.body).on('click.fecss', '.scrolltotop', function(event){
		event.preventDefault();
		$('body').eq(0).jqfeScrollTo({diff:0,speed:777});
	});

	$(document.body).on('click.fecss', '.site-menu .close-btn', function(event){
		event.preventDefault();
		event.stopPropagation();
		$(this).parents('.site-menu').removeClass('active');
	});

	$(window).on('scroll',function(){
		var pos = $(document).scrollTop();
		if(pos > 50) {
			if(!$('.top-menu').hasClass('top-scale')) {
				$('.top-menu').addClass('top-scale');
			} else {
				
			}
		} else {
			$('.top-menu').removeClass('top-scale');
		}
		
		if(pos > 100) {
			if(!$('.mouse-fixed').is(':visible')) {
				
			} else {
				$('.mouse-fixed').fadeOut('fast');
			}
		} else {
			$('.mouse-fixed').fadeIn('fast');
		}
	});


	$('.top-img-block.slider').each(function(index){
		event.preventDefault();
		
		var block = $(this);
		var imgs = block.find('.img-block .item');
		var counter = block.find('.info-block .counter');
		var position = counter.find('.position');
		
		imgs.each(function(index){
			$(this).attr('data-index', index+1);
		});
		imgs.eq(0).each(function(index){
			$(this).addClass('active');
			counter.find('.position').html(index+1);
			counter.find('.form').html(imgs.size());
		});
		block.on('click.site', '.arrow-block .s-arrow.right', function(event){
			var i = imgs.filter(':visible').eq(-1).index();
			var _act = imgs.eq(i);
			var _next =_act.next('.item');
			if(_next.is(':hidden')) {
				
			} else {
				_next = imgs.eq(0);
			}
			
			_act.fadeOut('fast').removeClass('active');
			_next.fadeIn('fast').addClass('active');
			
			position.html(_next.index() + 1);
		})
		block.on('click.site', '.arrow-block .s-arrow.left', function(event){
			var i = imgs.filter(':visible').eq(0).index();
			var _act = imgs.eq(i);
			var _prev =_act.prev('.item');
			if(_prev.is(':hidden')) {
				
			} else {
				_prev = imgs.eq(-1);
			}
			
			_act.fadeOut('fast').removeClass('active');
			_prev.fadeIn('fast').addClass('active');
			
			position.html(_prev.index() + 1);
		})
	});
	
	$(document.body).on('click', '.adr-content .how-go-to-fish', function(event){
		alert('fish');
	});
	
	$(document.body).on('click', '.top-menu .menu-btn', function(event){
		$('.site-menu').addClass('active');
	});


[snp tpl="block/fecss/block/.fecss/.document-ready.js" ]

[snp tpl="block/fecss/block/.page-loader/.document-ready.js" ]

[snp tpl="block/fecss/block/.scrollto/.document-ready.js" ]

[snp tpl="block/fecss/block/.arrow-slider/.document-ready.js" ]

[snp tpl="block/fecss/block/.can-close/.document-ready.js" ]



$(window).on('resize',function(event){
	
	[snp tpl="block/fecss/block/.fecss/.window-resize.js" ]
	
}).trigger('resize');



});