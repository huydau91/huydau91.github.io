function GetURLParameter(sParam) {
    var PageURL = window.location.search.substring(1);
    var replaceURL = PageURL.replace(/\+/g,"%20");
    var a = decodeURIComponent(replaceURL);
    var b = decodeURI(a);
    var sURLVariables = b.split('&')
    for (var i = 0; i < sURLVariables.length; i++){
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}

var hoten = GetURLParameter('hoten');
var namsinh = GetURLParameter('namsinh');
var gioitinh = GetURLParameter('gioitinh');
var diachi = GetURLParameter('diachi');
var dienthoai = GetURLParameter('dienthoai');
var email = GetURLParameter('email');
var facebook = GetURLParameter('facebook');
var matkhau = GetURLParameter('matkhau');
document.write("<p> Họ tên: " + hoten + "</p>");
document.write("<p> Sinh năm: " + namsinh + "</p>");
document.write("<p> Giới tính: " + gioitinh + "</p>");
document.write("<p> Địa chỉ: " + diachi + "</p>");
document.write("<p> Điện thoại: " + dienthoai + "</p>");
document.write("<p> Email: " + email + "</p>");
document.write("<p> Facebook: " + facebook + "</p>");
document.write("<p> Mật khẩu: " + matkhau + "</p>");