function loadanh(){
	for(var i = 1; i <= 8; i++){
		$(".phaotrangtri").append('<div class="col-sm-3">' + '<a href="#"><img src="img/phao' + i + '.jpg"></a>' +
					'<p class="code">912 NV</p><p class="price">$5</p><p class="save"><span>Add to cart</span></p>' +
				'</div>')
	}
	for(var i = 1; i <= 8; i++){
		$(".bogiay").append('<div class="col-sm-3">' + '<a href="#"><img src="img/bogiay' + i + '.jpg"></a>' +
					'<p class="code">912 NV</p><p class="price">$5</p><p class="save"><span>Add to cart</span></p>' +
				'</div>')
	}
}

loadanh()