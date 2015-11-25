/*

$(document).ready(function() {

src/block/fecss/_fecss/.document-ready.js

src/block/fecss/_page-loader/.document-ready.js

src/block/fecss/_scrollto/.document-ready.js

src/block/fecss/_arrow-slider/.document-ready.js

src/block/fecss/_can-close/.document-ready.js



$(window).on('resize',function(event){
	
	block/fecss/.fecss/.window-resize.js
	
}).trigger('resize');



});

*/

$(document).ready(function() {
	
	var h = $(window).height();
	
	(function(){
		$('.about-page .top-slider').height(h);
	})();
	
	$(document.body).on('click.fecss', '.scrolltotop', function(event){
		event.preventDefault();
		$('body').eq(0).jqfeScrollTo({diff:0,speed:777});
	});
	
	$(document.body).on('click', '.top-menu .menu-btn', function(event){
		$('.site-menu').addClass('active');
	});
	
	$(document.body).on('click.fecss', '.site-menu .close-btn', function(event){
		event.preventDefault();
		event.stopPropagation();
		$(this).parents('.site-menu').removeClass('active');
	});
	
	
	$(document.body).on('click.fecss', '.show-chief-menu', function(event){
		event.preventDefault();
		event.stopPropagation();
		$('.show-desk-menu').removeClass('active');
		$('.menu-desk').hide();
		$('.menu-list').fadeIn('fast');
		$(this).addClass('active');
	});
	$('.show-chief-menu').eq(0).trigger('click');
	
	$(document.body).on('click.fecss', '.show-desk-menu', function(event){
		event.preventDefault();
		event.stopPropagation();
		$('.show-chief-menu').removeClass('active');
		$('.menu-list').hide();
		$('.menu-desk').fadeIn('fast');
		$(this).addClass('active');
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
	
	
	var clMap, opMap;
	ymaps.ready(initYandexMap);
	
	function initYandexMap() {
		
		if($('#contact-map-cl').size()) {
			clMap = new ymaps.Map('contact-map-cl', {
				center: [47.907757, 36.077768],
				zoom: 13,
			}, {
				searchControlProvider: 'yandex#search'
			});
		}
		
		if($('#contact-map-op').size()) {
			opMap = new ymaps.Map('contact-map-op', {
				center: [55.757339, 37.544117],
				zoom: 17,
			}, {
				searchControlProvider: 'yandex#search'
			});
			
			
			var op_office = new ymaps.Placemark([55.757339, 37.544117], { //myMap.getCenter(), {
				hintContent: 'Золотая рыбка'
			}, {
				//iconLayout: 'default#image',
				//iconImageHref: '/wp-content/themes/solnechny/img/yandex-map-icon.png',
				//iconImageSize: [104, 115],
				//iconImageOffset: [-52, -115]
			});
			opMap.geoObjects.add(op_office);
		}
	
	}
	

[snp tpl="src/_/concat.document-ready.js" ]


$(window).on('resize',function(event){
	
	
	[snp tpl="src/_/concat.window-resize.js" ]
	
	
}).trigger('resize');


$(window).on('scroll',function(){


	[snp tpl="src/_/concat.window-scroll.js" ]
	
	
}).trigger('scroll');


$('body').on('changeClass',function(){
	
	
	[snp tpl="src/_/concat.body.changeClass.js" ]

	
});

[snp tpl="src/_/concat.changeClass.js" ]

});