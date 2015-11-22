$(
	function(){
		var mbc = $('.modal-block-container').eq(0);
		
		var pbtn = mbc.find('.prev-item-btn').eq(0);
		var nbtn = mbc.find('.next-item-btn').eq(0);
		var hbtn = mbc.find('.hide-modal').eq(0);
		
		var items = mbc.find('.item');
		items.eq(0).addClass('active');
		
		pbtn.on('click.fecss', function(event){
			
			var vis = items.filter('.active');
			var tos = vis.prev('.item');
			vis.removeClass('active');
			if(tos.size() > 0) {
				tos.addClass('active');
			} else {
				items.eq(-1).addClass('active');
			}
			
		});
		
		nbtn.on('click.fecss', function(event){
			
			
			
		});
		
		hbtn.on('click.fecss', function(event){
			
			mbc.removeClass('active');
			
		});
		
	}
);