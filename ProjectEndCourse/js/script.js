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
	$('#sign-up').modal('show');
});