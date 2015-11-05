$(document).ready(function() {

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


	
	$(
		function() {
			var res = 'noname-browser';
			var userAgent = navigator.userAgent.toLowerCase();
			if (userAgent.indexOf('msie') != -1) res = 'msie';
			if (userAgent.indexOf('konqueror') != -1) res = 'konqueror';
			if (userAgent.indexOf('firefox') != -1) res = 'firefox';
			if (userAgent.indexOf('safari') != -1) res = 'safari';
			if (userAgent.indexOf('chrome') != -1) res = 'chrome';
			if (userAgent.indexOf('chromium') != -1) res = 'chromium';
			if (userAgent.indexOf('opera') != -1) res = 'opera';
			if (userAgent.indexOf('yabrowser') != -1) res = 'yabrowser';
			
			$('body.fecss').eq(0).addClass(res);
		}
	);
	


	$('.page-loader .close-loader').on('click',function(event){
		event.preventDefault();
		$('.page-loader').removeClass('active');
	});
	$(window).load(function(event){
		$('.page-loader').removeClass('active');
	});


	
	$('.scrollto').on('click', function(event){
		event.preventDefault();
		$($(this).attr('href')).eq(0).jqfeScrollTo({diff:0,speed:777});
	});
	
	$('.go-to-top').on('click', function(event){
		event.preventDefault();
		$('body').jqfeScrollTo({diff:0,speed:777});
	});
	
	$(window).on('scroll',function(){
		var pos = $(document).scrollTop();
		
		var gototop = $('.go-to-top');
		if(gototop.hasClass('active')) {
			if(pos < 220) {
				gototop.removeClass('active');
			}
		} else {
			if(pos > 220) {
				gototop.addClass('active');
			}
		}
	}).trigger('scroll');
	


	$('.arrow-slider').each(function(index){
		event.preventDefault();
		
		var block = $(this);
		var imgs = block.find('.img-block .item');
		var content = block.find('.text-content');
		var title_block = block.find('.title-block');
		var arrow_block = block.find('.arrow-block');
		var point_line = arrow_block.find('.point-line');
		//var counter = block.find('.info-block .counter');
		//var position = counter.find('.position');
		
		imgs.each(function(index){
			//$(this).attr('data-index', index+1);
			$('<a/>',{
				class : 'item',
				html : '<span class="point" ></span>',
				href : '#image-' + index,
			})
			.on('click.arrow-slider.point',function(event){
				console.log('click.arrow-slider.point');
				var i = $(this).index();
				point_line.find('.item').removeClass('active');
				imgs.fadeOut('fast').removeClass('active');
				$(this).addClass('active');
				imgs.eq(i).fadeIn('fast').addClass('active');
			})
			.appendTo(point_line);
		});
		/*
		imgs.eq(0).each(function(index){
			$(this).addClass('active');
			//counter.find('.position').html(index+1);
			//counter.find('.form').html(imgs.size());
		});
		*/
		arrow_block.on('click.arrow-slider.right', '.btn-arrow.right', function(event){
			var p = point_line.find('.item');
			var i = p.filter('.active').eq(0).index();
			var nxt = p.eq(i).next('.item');
			if(nxt.size()) {
				nxt.trigger('click');
			} else {
				p.eq(0).trigger('click');
			}
		});
		arrow_block.on('click.arrow-slider.left', '.btn-arrow.left', function(event){
			var p = point_line.find('.item');
			var i = p.filter('.active').eq(0).index();
			var nxt = p.eq(i).prev('.item');
			if(nxt.size()) {
				nxt.trigger('click');
			} else {
				p.eq(-1).trigger('click');
			}
		});
		
		if(block.hasClass('with-timer')) {
			block.data('fecss-timer', setInterval(function(){
				if(block.is(':hover')) {
					
				} else {
					arrow_block.find('.btn-arrow.right').trigger('click');
				}
			}, 3000))
		}
		
		if(point_line.find('.item.active').size()) {
			
		} else {
			point_line.find('.item').eq(0).trigger('click');
		}
		
	});
	

	
	$(document.body).on('click', '.can-close .close-btn', function(event){
		event.preventDefault();
		$(this).closest('.can-close').removeClass('active');
	});
	



$(window).on('resize',function(event){
	
		
	$(
		function() {
			var size = {
				xs : {
					min : 0,
					max : 768,
				},
				sm : {
					min : 767,
					max : 992,
				},
				md : {
					min : 991,
					max : 1200,
				},
				lg : {
					min : 1199,
					max : 10000,
				},
			};
			var cl = 'window-width';
			var w = $(window).outerWidth(true);
			var body = $('body.fecss').eq(0);
			if(w < size.xs.max) {
				body.removeClass('window-width-sm').removeClass('window-width-md').removeClass('window-width-lg');
				cl = 'window-width-xs';
			}
			if(w > size.sm.min && w < size.sm.max) {
				body.removeClass('window-width-xs').removeClass('window-width-md').removeClass('window-width-lg');
				cl = 'window-width-sm';
			}
			if(w > size.md.min && w < size.md.max) {
				body.removeClass('window-width-xs').removeClass('window-width-sm').removeClass('window-width-lg');
				cl = 'window-width-md';
			}
			if(w > size.lg.min) {
				body.removeClass('window-width-xs').removeClass('window-width-sm').removeClass('window-width-md');
				cl = 'window-width-lg';
			}
			$('body.fecss').eq(0).addClass(cl);
		}
	);
	
	
	$(
	function(){
		var h = $(window).height();
		$('.imaged-block.full-screen-image').height(h);
		console.log(h);
	}
);
	
}).trigger('resize');



});