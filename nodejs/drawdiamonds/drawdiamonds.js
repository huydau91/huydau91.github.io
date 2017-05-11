function drawdiamonds(n){
	var str = '';
	var size = n*2;
	var a = n-1;
	for (var i = 0; i<size+1; i++){
		if (i == 0 || i == size){
			for (var j=0; j<size+1; j++){
				if (j == n){
					str += "*";
				}
				else
					str += " ";
			}
			str += '\n';
		}
		else {
			if (i <= n){
				for (var j=0; j<size+1; j++){
					if (j == n-i || j == n+i){
						str += "*";
					}
					else
						str += " ";
				}
				str += '\n';
			}
			else {
				for (var j=0; j<size+1; j++){
					if (j == n-a || j == n+a){
						str += "*";
					}
					else
						str += " ";
				}
				a--;
				str += '\n';
			}
		}
	}
	console.log(str);
}

drawdiamonds(5)  


  // console.log("Nhap n:");

  // var prompt = require('prompt');

  // prompt.start();

  // prompt.get('n', function (err, result) {
  // 	var n = result.n;
  // 	var str = '';
  // 	var size = n*2;
  // 	var a = n-1;
  // 	for (var i = 0; i < size + 1; i++){
  // 		if (i == 0 || i == size){
  // 			for (var j=0; j<size+1; j++){
  // 				if (j == n){
  // 					str += "*";
  // 				}
  // 				else{
  // 					str += " ";
  // 				}
  // 			}
  // 			str += '\n';
  // 		}
  // 		else {
  // 			if (i <= n){
  // 				for (var j=0; j<size+1; j++){
  // 					if (j == n-i || j == n+i){
  // 						str += "*";
  // 					}
  // 					else{
  // 						str += " ";
  // 					}
  // 				}
  // 				str += '\n';
  // 			}
  // 			else {
  // 				for (var j=0; j<size+1; j++){
  // 					if (j == n-a || j == n+a){
  // 						str += "*";
  // 					}
  // 					else{
  // 						str += " ";
  // 					}
  // 				}
  // 				a--;
  // 				str += '\n';
  // 			}
  // 		}
  // 	}
  // 	console.log(str);
  // });

