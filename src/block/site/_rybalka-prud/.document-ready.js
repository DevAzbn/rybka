$(
	function() {
		$(document.body).on('click.fecss', '.rybalka-prud-photo-btns a', function(event){
			var btn = $(this);
			var gal_id = btn.attr('data-gal-id');
			$('.slider.rybalka').hide();
			$('.slider.rybalka[data-gal-id="' + gal_id + '"]').show();
		});
		$('.rybalka-prud-photo-btns a').eq(0).trigger('click');
	}
);