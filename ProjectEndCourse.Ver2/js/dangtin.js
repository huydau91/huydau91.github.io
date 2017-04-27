
var i=13;
$('button.themtienich-desktop').on('click', function(){
	if ($('input.themtienich-desktop').val() == '') {
		return;
	}
	else{
		$('.tienich-desktop').append('<div class="col-sm-3">' + 
                    '<input type="checkbox" id="tienich' + i +'">' +
                    '<label for="tienich' + i +'">' + '&nbsp' + $('input.themtienich-desktop').val() + '</label></div>')
	i++;
	return i;
	}
});

$('button.themtienich-mobile').on('click', function(){
	if ($('input.themtienich-mobile').val() == '') {
		return;
	}
	else{
		$('.tienich-mobile').append('<div class="col-xs-6"><input type="checkbox" id="tienich' + i + '-mobi"><label for="tienich' + i + '-mobi">' + '&nbsp' + $('input.themtienich-mobile').val() + '</label></div>')
	i++;
	return i;
	}
});

$('#taianh-desktop').click(function(){
	$('#fileInput-desktop').trigger('click');
});

$('#taianh-mobile').click(function(){
	$('#fileInput-mobile').trigger('click');
});


window.onload = function() {

		var fileInput = document.getElementById('fileInput-desktop');
		var fileDisplayArea = document.getElementById('fileDisplayArea-desktop');
		
		var fileInputMobile = document.getElementById('fileInput-mobile');
		var fileDisplayAreaMobile = document.getElementById('fileDisplayArea-mobile');


		fileInput.addEventListener('change', function(e) {
			var file = fileInput.files[0];
			var imageType = /image.*/;

			if (file.type.match(imageType)) {
				var reader = new FileReader();

				reader.onload = function(e) {

					var img = new Image();
					img.src = reader.result;

					fileDisplayArea.appendChild(img);
				}

				reader.readAsDataURL(file);	
			} else {
				fileDisplayArea.innerHTML = "File not supported!"
			}
		});

		fileInputMobile.addEventListener('change', function(e) {
			var file = fileInputMobile.files[0];
			var imageType = /image.*/;

			if (file.type.match(imageType)) {
				var reader = new FileReader();

				reader.onload = function(e) {

					var img = new Image();
					img.src = reader.result;

					fileDisplayAreaMobile.appendChild(img);
				}

				reader.readAsDataURL(file);	
			} else {
				fileDisplayAreaMobile.innerHTML = "File not supported!"
			}
		});
	}