  console.log("Nhap n giai thua:");
  var prompt = require('prompt');

  prompt.start();

  prompt.get(['n'], function (err, result) {
  	let n = result.n;
  	let a = 1
  	for(let i = 1; i <= n; i++){
  		a *= i;
  	}
  	console.log("Giai thua cua " + n + " la: " + a);
  });