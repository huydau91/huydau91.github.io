function validate(){
	if(hoten.value == ''){
		hoten.style.border = "1px solid red";
		hoten_error.textContent = "Họ tên không được để trống";
		return false;
	}

	if(namsinh.value == ''){
		namsinh.style.border = "1px solid red";
		namsinh_error.textContent = "Năm sinh không được để trống";
		return false;
	}

	var chongioitinh = document.querySelector('input[type=radio]:checked');
	if(!chongioitinh){
		gioitinh.style.border = "1px solid red";
		gioitinh_error.textContent = "Giới tính không được để trống";
		return false;
	}

	if(diachi.value == ''){
		diachi.style.border = "1px solid red";
		diachi_error.textContent = "Địa chỉ không được để trống";
		return false;
	}

	if(dienthoai.value == ''){
		dienthoai.style.border = "1px solid red";
		dienthoai_error.textContent = "Điện thoại không được để trống";
		return false;
	}

	if(email.value == ''){
		email.style.border = "1px solid red";
		email_error.textContent = "Email không được để trống";
		return false;
	}

	if(facebook.value == ''){
		facebook.style.border = "1px solid red";
		facebook_error.textContent = "Facebook không được để trống";
		return false;
	}

	if(matkhau.value == ''){
		matkhau.style.border = "1px solid red";
		matkhau_error.textContent = "Mật khẩu không được để trống";
		return false;
	}

	return true;
}

hoten.addEventListener("blur", verify, true);
namsinh.addEventListener("blur", verify, true);
gioitinh.addEventListener("blur", verify, true);
diachi.addEventListener("blur", verify, true);
dienthoai.addEventListener("blur", verify, true);
email.addEventListener("blur", verify, true);
facebook.addEventListener("blur", verify, true);
matkhau.addEventListener("blur", verify, true);

function verify(){
	if(hoten.value != ''){
		hoten.style.border = "1px solid cadetblue";
		hoten_error.textContent = "";
	}

	if(namsinh.value != ''){
		namsinh.style.border = "1px solid cadetblue";
		namsinh_error.textContent = "";

		if(Number(namsinh.value) == namsinh.value){
			if(Number(namsinh.value) < 1900 && Number(namsinh.value) > 2017){
				namsinh.style.border = "1px solid red";
				namsinh_error.textContent = "Năm sinh phải nằm trong dải từ 1900-2017";
			}	
		}
		else{
				namsinh.style.border = "1px solid red";
				namsinh_error.textContent = "Năm sinh phải là số nằm trong dải từ 1900-2017";
			}
	}

	if(nam.checked == true || nu.checked == true){
		gioitinh.style.border = "";
		gioitinh_error.textContent = "";
	}

	if(diachi.value != ''){
		diachi.style.border = "1px solid cadetblue";
		diachi_error.textContent = "";
	}

	if(dienthoai.value != ''){
		dienthoai.style.border = "1px solid cadetblue";
		dienthoai_error.textContent = "";

		if(Number(dienthoai.value) != dienthoai.value || dienthoai.value.length < 9){
			dienthoai.style.border = "1px solid red";
			dienthoai_error.textContent = "Số điện thoại phải có 9 chữ số trở lên";
		}
	}

	if(email.value != ''){
		email.style.border = "1px solid cadetblue";
		email_error.textContent = "";

		var acong = email.value.indexOf('@');
		var daucham = email.value.lastIndexOf('.');
		if(acong < 1 || daucham < acong + 2 || daucham + 2 > email.value.length){
			email.style.border = "1px solid red";
			email_error.textContent = "Email bạn điền không chính xác";
		}
	}

	if(facebook.value != ''){
		facebook.style.border = "1px solid cadetblue";
		facebook_error.textContent = "";

		var myRegExp =/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;
		if (!myRegExp.test(facebook.value)){
		facebook.style.border = "1px solid red";
		facebook_error.textContent = "Địa chỉ facebook bạn điền không chính xác";;
		}
	}

	if(matkhau.value != ''){
		matkhau.style.border = "1px solid cadetblue";
		matkhau_error.textContent = "";
	}
}