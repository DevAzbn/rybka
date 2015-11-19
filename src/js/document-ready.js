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

(function(){
	//Сохраняем ссылку на стандартный метод jQuery
	var originalAddClassMethod = jQuery.fn.addClass;
	var originalRemoveClassMethod = jQuery.fn.removeClass;
	var originalToggleClassMethod = jQuery.fn.toggleClass;
	//Переопределяем
	$.fn.addClass = function(){
		var result = originalAddClassMethod.apply(this, arguments);
		//Инициализируем событие смены класса
		$(this).trigger('changeClass');
		return result;
	}
	$.fn.removeClass = function(){
		var result = originalRemoveClassMethod.apply(this, arguments);
		//Инициализируем событие смены класса
		$(this).trigger('changeClass');
		return result;
	}
	$.fn.toggleClass = function(){
		var result = originalToggleClassMethod.apply(this, arguments);
		//Инициализируем событие смены класса
		$(this).trigger('changeClass');
		return result;
	}
})();

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


});