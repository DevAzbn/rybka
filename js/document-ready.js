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
	

$(".arrow-slider").each(function(i){event.preventDefault();var e=$(this),t=e.find(".img-block .item"),r=(e.find(".text-content"),e.find(".title-block"),e.find(".arrow-block")),n=r.find(".point-line");t.each(function(i){$("<a/>",{"class":"item",html:'<span class="point" ></span>',href:"#image-"+i}).on("click.arrow-slider.point",function(i){console.log("click.arrow-slider.point");var e=$(this).index();n.find(".item").removeClass("active"),t.fadeOut("fast").removeClass("active"),$(this).addClass("active"),t.eq(e).fadeIn("fast").addClass("active")}).appendTo(n)}),r.on("click.arrow-slider.right",".btn-arrow.right",function(i){var e=n.find(".item"),t=e.filter(".active").eq(0).index(),r=e.eq(t).next(".item");r.size()?r.trigger("click"):e.eq(0).trigger("click")}),r.on("click.arrow-slider.left",".btn-arrow.left",function(i){var e=n.find(".item"),t=e.filter(".active").eq(0).index(),r=e.eq(t).prev(".item");r.size()?r.trigger("click"):e.eq(-1).trigger("click")}),e.hasClass("with-timer")&&e.data("fecss-timer",setInterval(function(){e.is(":hover")||r.find(".btn-arrow.right").trigger("click")},3e3)),n.find(".item.active").size()||n.find(".item").eq(0).trigger("click")});
$(document.body).on("click",".can-close .close-btn",function(c){c.preventDefault(),$(this).closest(".can-close").removeClass("active")});
$(".code-editable-block").each(function(e){var o=$(this),t=o.find(".code-name").eq(0),d=o.find(".code-value").eq(0),c=o.find(".code-status").eq(0);$(document.body).on("click.code-editable",".code-editable-block .code-btn.open",function(e){$.get("/pagebuilder/code-editable/open",{name:t.val()},function(e){d.text(e),c.text("opened")})}),$(document.body).on("click.code-editable",".code-editable-block .code-btn.save",function(e){$.post("/pagebuilder/code-editable/save",{name:t.val(),value:d.text()},function(e){c.text(e)})});var n=window.location.hash.substr(1);""!=n&&(t.val(n),o.find(".code-btn.open").trigger("click"))});
$(function(){var e="noname-browser",r=navigator.userAgent.toLowerCase();-1!=r.indexOf("msie")&&(e="msie"),-1!=r.indexOf("konqueror")&&(e="konqueror"),-1!=r.indexOf("firefox")&&(e="firefox"),-1!=r.indexOf("safari")&&(e="safari"),-1!=r.indexOf("chrome")&&(e="chrome"),-1!=r.indexOf("chromium")&&(e="chromium"),-1!=r.indexOf("opera")&&(e="opera"),-1!=r.indexOf("yabrowser")&&(e="yabrowser"),$("body.fecss").eq(0).addClass(e)});
$(document.ready).on("click",".go-to-top",function(o){o.preventDefault(),$("body").jqfeScrollTo({diff:0,speed:777})});
$(".line-gallery").each(function(e){event.preventDefault();var i=$(this);i.on("click.line-gallery.right",".btn-arrow.right",function(e){var t=i.find(".img-block .item"),n=t.filter(":visible");n.size()>1?(n.eq(0).hide().insertAfter(t.eq(-1)),n.eq(-1).next(".item").fadeIn("fast")):(n.eq(0).hide().insertAfter(t.eq(-1)),i.find(".img-block .item").eq(0).fadeIn("fast"))}),i.on("click.line-gallery.left",".btn-arrow.left",function(e){var t=i.find(".img-block .item"),n=t.filter(":visible");n.size()>1?(n.eq(-1).hide(),t.eq(-1).insertBefore(n.eq(0)).fadeIn("fast")):(n.eq(0).hide(),i.find(".img-block .item").eq(-1).insertBefore(i.find(".img-block .item").eq(0)).fadeIn("fast"))}),i.hasClass("with-timer")&&i.data("fecss-timer",setInterval(function(){i.is(":hover")||i.find(".btn-arrow.right").trigger("click")},3e3))});
$(".page-loader .close-loader").on("click",function(e){e.preventDefault(),$(".page-loader").removeClass("active")}),$(window).load(function(e){$(".page-loader").removeClass("active")});
$(".scrollto").on("click",function(e){e.preventDefault(),$($(this).attr("href")).eq(0).jqfeScrollTo({diff:0,speed:777})});
$(function(){$(document.body).on("click.size",".show-menu-btn",function(n){var i=($(".mainpage-container:visible"),$(".mainpage-container.container-menu"));i.slideDown("fast").css({display:"table"})}),$(document.body).on("click.size",".hide-menu-btn",function(n){var i=($(".mainpage-container:visible"),$(".mainpage-container.container-menu"));i.slideUp("fast")})});
$(document.body).on("click",".top-menu .menu-btn",function(n){$(".site-menu").addClass("active")});


$(window).on('resize',function(event){
	
	
	$(function(){var w={xs:{min:0,max:768},sm:{min:767,max:992},md:{min:991,max:1200},lg:{min:1199,max:1e4}},s="window-width",d=$(window).outerWidth(!0),i=$("body.fecss").eq(0);d<w.xs.max&&(i.hasClass("window-width-sm")&&i.removeClass("window-width-sm"),i.hasClass("window-width-md")&&i.removeClass("window-width-md"),i.hasClass("window-width-lg")&&i.removeClass("window-width-lg"),s="window-width-xs"),d>w.sm.min&&d<w.sm.max&&(i.hasClass("window-width-xs")&&i.removeClass("window-width-xs"),i.hasClass("window-width-md")&&i.removeClass("window-width-md"),i.hasClass("window-width-lg")&&i.removeClass("window-width-lg"),s="window-width-sm"),d>w.md.min&&d<w.md.max&&(i.hasClass("window-width-xs")&&i.removeClass("window-width-xs"),i.hasClass("window-width-sm")&&i.removeClass("window-width-sm"),i.hasClass("window-width-lg")&&i.removeClass("window-width-lg"),s="window-width-md"),d>w.lg.min&&(i.hasClass("window-width-xs")&&i.removeClass("window-width-xs"),i.hasClass("window-width-sm")&&i.removeClass("window-width-sm"),i.hasClass("window-width-md")&&i.removeClass("window-width-md"),s="window-width-lg"),$("body.fecss").eq(0).addClass(s)});


$(function(){var e=$(window).height();$(".imaged-block.full-screen-image").height(e),console.log(e)});
	
	
}).trigger('resize');


$(window).on('scroll',function(){


	$(function(){var a=$(document).scrollTop(),o=$(".go-to-top");o.hasClass("active")?200>a&&o.removeClass("active"):a>200&&o.addClass("active")});

	
	
}).trigger('scroll');


$('body').on('changeClass',function(){
	
	
	
	$('.line-gallery').each(function(index){
		event.preventDefault();
		
		var block = $(this);
		var body = $('body').eq(0);
		var c = 1;
		
		if(body.hasClass('window-width-xs')) {
			c = block.attr('data-xs-vis') || 1;
		} else
		if(body.hasClass('window-width-sm')) {
			c = block.attr('data-sm-vis') || 2;
		} else
		if(body.hasClass('window-width-md')) {
			c = block.attr('data-md-vis') || 3;
		} else
		if(body.hasClass('window-width-lg')) {
			c = block.attr('data-lg-vis') || 3;
		}
		
		var imgs = block.find('.img-block .item').hide();
		for(var i = 0; i < c; i++) {
			imgs.eq(i).fadeIn('fast');
		}
		
	});
	
	

	
});

});