$('#hien-mk').on('click',function () {
var passInput=$('#password-signup').attr('type');			
	if (passInput == 'password') {
		$('#password-signup').attr('type', 'text');
	}
	if (passInput == 'text') {
		$('#password-signup').attr('type', 'password');
	}
});

$('.taotaikhoan').on('click', function(){
	$('#sign-in').modal('hide');
	setTimeout(function(){
		$('#sign-up').modal('show');}, 400);	
});

$('.quenmk').on('click', function(){
	$('#sign-in').modal('hide');
	setTimeout(function(){
		$('#quenmk').modal('show');}, 400);	
});

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