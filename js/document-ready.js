
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
		//$('.menu-desk').hide();
		$('.menu-list').fadeIn('fast');
		$(this).addClass('active');
	});
	$('.show-chief-menu').eq(0).trigger('click');
	/*
	$(document.body).on('click.fecss', '.show-desk-menu', function(event){
		event.preventDefault();
		event.stopPropagation();
		$('.show-chief-menu').removeClass('active');
		$('.menu-list').hide();
		$('.menu-desk').fadeIn('fast');
		$(this).addClass('active');
	});
	*/
	
	$(document.body).on('click.fecss', '.show-africa-info', function(event){
		event.preventDefault();
		event.stopPropagation();
		$('.show-spain-info').removeClass('active');
		$('.spain-info').hide();
		$('.africa-info').fadeIn('fast');
		$(this).addClass('active');
	});
	$('.show-africa-info').eq(0).trigger('click');
	
	$(document.body).on('click.fecss', '.show-spain-info', function(event){
		event.preventDefault();
		event.stopPropagation();
		$('.show-africa-info').removeClass('active');
		$('.africa-info').hide();
		$('.spain-info').fadeIn('fast');
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
	if(typeof ymaps != 'undefined') {
		ymaps.ready(initYandexMap);
	}
	
	function initYandexMap() {
		
		if($('#contact-map-cl').size()) {
			clMap = new ymaps.Map('contact-map-cl', {
				center: [47.883352, 46.567960],
				zoom: 13,
			}, {
				searchControlProvider: 'yandex#search'
			});
			clMap.behaviors.disable('scrollZoom');
		}
		
		if($('#contact-map-op').size()) {
			opMap = new ymaps.Map('contact-map-op', {
				center: [55.757339, 37.544117],
				zoom: 17,
			}, {
				searchControlProvider: 'yandex#search'
			});
			opMap.behaviors.disable('scrollZoom');
			
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
	
	
	$('.opinion-list').each(function(index){
		var block = $(this);
		var more = block.find('.more').eq(0);
		var btn = more.find('a').eq(0);
		var items = block.find('.item');
		
		if(items.size() > 7) {
			
			items.hide();
			for(var i = 0; i < 7; i++) {
				items.eq(i).show();
			}
			
			btn.on('click.fecss', function(event){
				event.preventDefault();
				event.stopPropagation();
				var hd = block.find('.item').filter(':hidden');
				for(var i = 0; i < 5; i++) {
					hd.eq(i).slideDown('fast');
				}
				hd = block.find('.item').filter(':hidden');
				if(hd.size() == 0) {
					more.empty().remove();
				}
			});
			
		} else {
			
			more.empty().remove();
			
		}
	});
	
	
	$('.post-slider-block').each(function(index){
		var block = $(this);
		var header = block.find('.header').eq(0);
		var list = block.find('.list').eq(0);
		
		header.find('.point-control a').each(function(i){
			var btn = $(this);
			
			btn.on('click', function(event){
				btn.parent().find('a').removeClass('active');
				btn.addClass('active');
				
				var items = list.find('.f-box');
				items.filter(':visible').hide();
				
				var vi = i * 2;
				items.eq(vi).fadeIn('fast').next('.f-box').fadeIn('fast');
			});
		}).eq(0).trigger('click');
	});
	
	
	
	$(document.body).on('submit', '.azbn-review-form', function(event){
		event.preventDefault();
		//event.stopPropagation();
		var f = $(this);
		
		f.find('input[name="action"]').empty().remove();
		$('<input/>',{
			type:'hidden',
			name:'action',
			value:'azbn_review_create',
		}).appendTo(f);
		
		$.post('/wp-admin/admin-ajax.php',
			f.serialize(),
			function(data){
				console.log(data);
				
				alert('Ваш отзыв сохранен. После проверки он будет опубликован');
				
				f.trigger('reset');
			}
		);
		
		//return false;
	});
	
	
	
	

$(".arrow-slider").each(function(i){var e=$(this),t=e.find(".img-block .item"),r=(e.find(".text-content"),e.find(".title-block"),e.find(".arrow-block")),n=r.find(".point-line");t.each(function(i){$("<a/>",{"class":"item",html:'<span class="point" ></span>',href:"#image-"+i}).on("click.arrow-slider.point",function(i){console.log("click.arrow-slider.point");var e=$(this).index();n.find(".item").removeClass("active"),t.fadeOut("fast").removeClass("active"),$(this).addClass("active"),t.eq(e).fadeIn("fast").addClass("active")}).appendTo(n)}),r.on("click.arrow-slider.right",".btn-arrow.right",function(i){var e=n.find(".item"),t=e.filter(".active").eq(0).index(),r=e.eq(t).next(".item");r.size()?r.trigger("click"):e.eq(0).trigger("click")}),r.on("click.arrow-slider.left",".btn-arrow.left",function(i){var e=n.find(".item"),t=e.filter(".active").eq(0).index(),r=e.eq(t).prev(".item");r.size()?r.trigger("click"):e.eq(-1).trigger("click")}),e.hasClass("with-timer")&&e.data("fecss-timer",setInterval(function(){e.is(":hover")||r.find(".btn-arrow.right").trigger("click")},3e3)),n.find(".item.active").size()||n.find(".item").eq(0).trigger("click")});
$(document.body).on("click",".can-close .close-btn",function(c){c.preventDefault(),$(this).closest(".can-close").removeClass("active")});
$(".code-editable-block").each(function(e){var o=$(this),t=o.find(".code-name").eq(0),d=o.find(".code-value").eq(0),c=o.find(".code-status").eq(0);$(document.body).on("click.code-editable",".code-editable-block .code-btn.open",function(e){$.get("/pagebuilder/code-editable/open",{name:t.val()},function(e){d.text(e),c.text("opened")})}),$(document.body).on("click.code-editable",".code-editable-block .code-btn.save",function(e){$.post("/pagebuilder/code-editable/save",{name:t.val(),value:d.text()},function(e){c.text(e)})});var n=window.location.hash.substr(1);""!=n&&(t.val(n),o.find(".code-btn.open").trigger("click"))});
$(function(){var e="noname-browser",r=navigator.userAgent.toLowerCase();-1!=r.indexOf("msie")&&(e="msie"),-1!=r.indexOf("konqueror")&&(e="konqueror"),-1!=r.indexOf("firefox")&&(e="firefox"),-1!=r.indexOf("safari")&&(e="safari"),-1!=r.indexOf("chrome")&&(e="chrome"),-1!=r.indexOf("chromium")&&(e="chromium"),-1!=r.indexOf("opera")&&(e="opera"),-1!=r.indexOf("yabrowser")&&(e="yabrowser"),$("body.fecss").eq(0).addClass(e)});
$(document.ready).on("click",".go-to-top",function(o){o.preventDefault(),$("body").jqfeScrollTo({diff:0,speed:777})});
$(".line-gallery").each(function(e){event.preventDefault();var i=$(this);i.on("click.line-gallery.right",".btn-arrow.right",function(e){var t=i.find(".img-block .item"),n=t.filter(":visible");n.size()>1?(n.eq(0).hide().insertAfter(t.eq(-1)),n.eq(-1).next(".item").fadeIn("fast")):(n.eq(0).hide().insertAfter(t.eq(-1)),i.find(".img-block .item").eq(0).fadeIn("fast"))}),i.on("click.line-gallery.left",".btn-arrow.left",function(e){var t=i.find(".img-block .item"),n=t.filter(":visible");n.size()>1?(n.eq(-1).hide(),t.eq(-1).insertBefore(n.eq(0)).fadeIn("fast")):(n.eq(0).hide(),i.find(".img-block .item").eq(-1).insertBefore(i.find(".img-block .item").eq(0)).fadeIn("fast"))}),i.hasClass("with-timer")&&i.data("fecss-timer",setInterval(function(){i.is(":hover")||i.find(".btn-arrow.right").trigger("click")},3e3))});
$(".page-loader .close-loader").on("click",function(e){e.preventDefault(),$(".page-loader").removeClass("active")}),$(window).load(function(e){$(".page-loader").removeClass("active")});
$(".scrollto").on("click",function(e){e.preventDefault(),$($(this).attr("href")).eq(0).jqfeScrollTo({diff:0,speed:777})});
$(function(){$(document.body).on("click.size",".show-menu-btn",function(n){var i=($(".mainpage-container:visible"),$(".mainpage-container.container-menu"));i.slideDown("fast").css({display:"table"})}),$(document.body).on("click.size",".hide-menu-btn",function(n){var i=($(".mainpage-container:visible"),$(".mainpage-container.container-menu"));i.slideUp("fast")}),$(document.body).on("click.size",".hide-menu-logo",function(n){var i=($(".mainpage-container:visible"),$(".mainpage-container.container-menu"));i.slideUp("fast")}),$(document.body).on("click.fecss",".drd-btn",function(n){n.preventDefault(),$(this).closest("ul").find(".drd-list").slideUp("fast"),$(this).next(".drd-list").slideDown("fast")}),$(".mainpage-container .drd-btn").eq(0).trigger("click")});
$(function(){$(".modal-block-container").each(function(e){var i=$(this),t=i.find(".modal-block").eq(0),c=i.find(".white-container").eq(0),n=i.find(".modal-title .text").eq(0),o=i.find(".prev-item-btn").eq(0),s=i.find(".next-item-btn").eq(0),a=i.find(".hide-modal").eq(0),l=i.find(".item"),f=function(e){l.removeClass("active"),e.addClass("active"),n.html(e.attr("data-title"))},d=function(e){e?(i.css({height:$(document).height()+"px"}).addClass("active"),t.css({top:$(document).scrollTop()+50+"px"})):i.removeClass("active")};l.size()<2?(o.hide(),s.hide()):(o.show(),s.show()),f(l.eq(0)),o.on("click.fecss",function(e){var i=l.filter(".active"),t=i.prev(".item");i.removeClass("active"),f(t.size()>0?t:l.eq(-1))}),s.on("click.fecss",function(e){var i=l.filter(".active"),t=i.next(".item");i.removeClass("active"),f(t.size()>0?t:l.eq(0))}),i.on("click.fecss",function(e){a.trigger("click")}),a.on("click.fecss",function(e){i.removeClass("active")}),c.on("click.fecss",function(e){e.stopPropagation()}),$(document.body).on("click.fecss",".modal-item-btn",function(e){e.preventDefault(),e.stopPropagation(),l.size()<2?(o.hide(),s.hide()):(o.show(),s.show());var t=$(this),c=t.attr("href"),n=i.find(".item").filter(c);n.size()>0?(d(!0),f(n)):d(!1)})})});
$(function(){$(document.body).on("click.fecss",".rybalka-prud-photo-btns a",function(a){var t=$(this),d=t.attr("data-gal-id");$(".slider.rybalka").hide(),$('.slider.rybalka[data-gal-id="'+d+'"]').fadeIn("fast")}),$(".rybalka-prud-photo-btns a").eq(0).trigger("click")});



$(window).on('resize',function(event){
	
	
	$(function(){var w={xs:{min:0,max:768},sm:{min:767,max:992},md:{min:991,max:1200},lg:{min:1199,max:1e4}},s="window-width",d=$(window).outerWidth(!0),i=$("body.fecss").eq(0);d<w.xs.max&&(i.hasClass("window-width-sm")&&i.removeClass("window-width-sm"),i.hasClass("window-width-md")&&i.removeClass("window-width-md"),i.hasClass("window-width-lg")&&i.removeClass("window-width-lg"),s="window-width-xs"),d>w.sm.min&&d<w.sm.max&&(i.hasClass("window-width-xs")&&i.removeClass("window-width-xs"),i.hasClass("window-width-md")&&i.removeClass("window-width-md"),i.hasClass("window-width-lg")&&i.removeClass("window-width-lg"),s="window-width-sm"),d>w.md.min&&d<w.md.max&&(i.hasClass("window-width-xs")&&i.removeClass("window-width-xs"),i.hasClass("window-width-sm")&&i.removeClass("window-width-sm"),i.hasClass("window-width-lg")&&i.removeClass("window-width-lg"),s="window-width-md"),d>w.lg.min&&(i.hasClass("window-width-xs")&&i.removeClass("window-width-xs"),i.hasClass("window-width-sm")&&i.removeClass("window-width-sm"),i.hasClass("window-width-md")&&i.removeClass("window-width-md"),s="window-width-lg"),$("body.fecss").eq(0).addClass(s)});


$(function(){var e=$(window).height();$(".imaged-block.full-screen-image").height(e),console.log(e)});
	
	
}).trigger('resize');


$(window).on('scroll',function(){


	$(function(){var a=$(document).scrollTop(),o=$(".go-to-top");o.hasClass("active")?200>a&&o.removeClass("active"):a>200&&o.addClass("active")});

	
	
}).trigger('scroll');


$('body').on('changeClass',function(){
	
	
	$(".line-gallery").each(function(a){event.preventDefault();var t=$(this),s=$("body").eq(0),i=3;s.hasClass("window-width-xs")?i=t.attr("data-xs-vis")||1:s.hasClass("window-width-sm")?i=t.attr("data-sm-vis")||2:s.hasClass("window-width-md")?i=t.attr("data-md-vis")||3:s.hasClass("window-width-lg")&&(i=t.attr("data-lg-vis")||3);for(var d=t.find(".img-block .item").hide(),e=0;i>e;e++)d.eq(e).fadeIn("fast")});
	
	/*
	$('meta[name="viewport"]').empty().remove();
	if($(window).width() < 1199) {
		$('head').append('<meta name="viewport" content="width=1199">');
	}
	*/
	
});

$(".modal-block-container .item").on("changeClass",function(){});

});