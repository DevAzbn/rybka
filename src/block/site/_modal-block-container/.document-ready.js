$(
	function(){
		
	$('.modal-block-container').each(function(index){
		
		var mbc = $(this);
		
		var mb = mbc.find('.modal-block').eq(0);
		var wc = mbc.find('.white-container').eq(0);
		var mtt = mbc.find('.modal-title .text').eq(0);
		
		var pbtn = mbc.find('.prev-item-btn').eq(0);
		var nbtn = mbc.find('.next-item-btn').eq(0);
		var hbtn = mbc.find('.hide-modal').eq(0);
		
		var items = mbc.find('.item');
		
		var setIActive = function(el) {
			items.removeClass('active');
			el.addClass('active');
			mtt.html(el.attr('data-title'));
		};
		var setBActive = function(active) {
			if(active) {
				mbc.css({height : $(document).height() + 'px',}).addClass('active');
				mb.css({top : $(document).scrollTop() + 50 + 'px',})
			} else {
				mbc.removeClass('active');
			}
		};
		
		setIActive(items.eq(0));
		//setBActive();
		
		pbtn.on('click.fecss', function(event){
			
			var vis = items.filter('.active');
			var tos = vis.prev('.item');
			vis.removeClass('active');
			if(tos.size() > 0) {
				setIActive(tos);
			} else {
				setIActive(items.eq(-1));
			}
			
		});
		
		nbtn.on('click.fecss', function(event){
			
			var vis = items.filter('.active');
			var tos = vis.next('.item');
			vis.removeClass('active');
			if(tos.size() > 0) {
				setIActive(tos);
			} else {
				setIActive(items.eq(0));
			}
			
		});
		
		mbc.on('click.fecss', function(event){
			hbtn.trigger('click');
		});
		
		hbtn.on('click.fecss', function(event){
			mbc.removeClass('active');
		});
		
		wc.on('click.fecss', function(event){
			event.preventDefault();
			event.stopPropagation();
		});
		
		$(document.body).on('click.fecss', '.modal-item-btn', function(event){
			event.preventDefault();
			event.stopPropagation();
			var btn = $(this);
			var id = btn.attr('href');
			var el = mbc.find('.item').filter(id);
			if(el.size() > 0) {
				setBActive(true);
				setIActive(el);
			} else {
				setBActive(false);
			}
		});
		
	});

	}
);