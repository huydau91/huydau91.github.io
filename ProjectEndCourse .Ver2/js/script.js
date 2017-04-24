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

var i=13;
$('button.themtienich').on('click', function(){
	if ($('input.themtienich').val() == '') {
		return;
	}
	else{
		$('.tienich').append('<tr><td><input type="checkbox" id="tienich' + i +'"><label for="tienich' + i + '">' + '&nbsp' + $('input.themtienich').val() + ' </label></td></tr>')
	i++;
	return i;
	}
});