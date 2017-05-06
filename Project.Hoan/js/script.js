function loadanh(){
	for(var i = 1; i <= 24; i++){
		$("#loadanh").append('<a href="#"><div class="col-sm-4">' + '<img src="img/' + i + '.jpg"></div></a>')
	}
}

loadanh()