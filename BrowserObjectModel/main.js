var cauganday = 0;
var diem = 0;
var socauhoi = dscauhoi.length;
var container = document.getElementById('container');
var cauhoi = document.getElementById('cauhoi');
var luachon1 = document.getElementById('luachon1');
var luachon2 = document.getElementById('luachon2');
var luachon3 = document.getElementById('luachon3');
var luachon4 = document.getElementById('luachon4');
var cautieptheo = document.getElementById('cautieptheo');
var ketqua = document.getElementById('ketqua');


function taicauhoi (cauhoiIndex) {
	var q = dscauhoi[cauhoiIndex];
	cauhoi.textContent = q.cauhoi;
	luachon1.textContent = q.luachon1;
	luachon2.textContent = q.luachon2;
	luachon3.textContent = q.luachon3;
	luachon4.textContent = q.luachon4;
};

function next(){
	var dapandachon = document.querySelector('input[type=radio]:checked');
	if(!dapandachon){
		alert('Mời bạn chọn đáp án!');
		return;
	}
	var dapan = dapandachon.value;
	if(dscauhoi[cauganday].dapan == dapan){
		diem += 1;
	}
	dapandachon.checked = false;
	cauganday++;
	if(cauganday == socauhoi - 1){
		cautieptheo.textContent = 'KẾT THÚC!';
	}
	if(cauganday == socauhoi && diem != socauhoi){
		container.style.display = 'none';
		ketqua.style.display = '';
		ketqua.textContent = 'Số điểm của bạn là: ' + diem + '/10';
		choilai.style.display = 'block';
		return;
	}
	if(diem == socauhoi){
		window.location.href = "diem.html"
	}
	taicauhoi(cauganday);
}

taicauhoi(cauganday);