  console.log("Nhap chieu cao(height) va can nang(weight):");

  var prompt = require('prompt');

  prompt.start();

  prompt.get(['height', 'weight'], function (err, result) {
  	let c = result.height/100;
	let d = result.weight/(c*c);
	console.log("Chi so BMI la: " + d);
	if (d<=18.5) {
		console.log("Than hinh hoi gay")
	}
	if (18.5 < d && d <= 24.9) {
		console.log("Than hinh binh thuong")
	}
	if (d >= 25 && d <=29.9) {
		console.log("Than hinh hoi beo")
	}
	if (d >= 30 && d <=34.9) {
		console.log("Than hinh beo phi do I")
	}
	if (d >= 35 && d <=39.9) {
		console.log("Than hinh beo phi do II")
	}
	if (d >= 40) {
		console.log("Than hinh beo phi do III")
	}
  });