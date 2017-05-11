# Vẽ hình kim cương bằng JAVASCRIPT

## Phân tích bài toán:

B1: Nhập vào n là bán kính của hình kim cương(tâm đối xứng)

B2: Xây dựng logic để có thể in dấu "*" và dấu " " hợp lý

## Code xử lý chính:
``` javascript
	var str = '';
	var size = n*2;
	var a = n - 1;
	for (var i = 0; i < size+1; i++){
		if (i == 0 || i == size){
			for (var j = 0; j < size+1; j++){
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
				for (var j = 0; j < size+1; j++){
					if (j == n-i || j == n+i){
						str += "*";
					}
					else
						str += " ";
				}
				str += '\n';
			}
			else {
				for (var j = 0; j < size+1; j++){
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
```

## Giải thích

* Thực hiện vòng lặp qua từng hàng i

```javascript
	for (var i = 0; i < size+1; i++)
```

* Với mỗi hàng thứ i, xét qua từng cột j

```javascript
if (i == 0 || i == size){
	for (var j=0; j < size+1; j++){
	if (j == n){
		str += "*";
	}
	else
		str += " ";
	}
	str += '\n';
```

* Nếu thỏa mãn điều kiện logic sẽ in dấu "*", ngược lại in dấu " "

## Cách chạy chương trình

* Gitclone https://github.com/huydau91/nodejs/blob/master/drawdiamonds/drawdiamonds.js
* Thay đổi n của `function drawdiamonds(n)`
* cd drawdiamonds
* Chạy: node drawdiamonds.js

## Kết quả

```javascript

D:\CODE\HTML5\Work Place\nodejs\drawdiamonds>node drawdiamonds.js
         *
        * *
       *   *
      *     *
     *       *
    *         *
   *           *
  *             *
 *               *
*                 *
 *               *
  *             *
   *           *
    *         *
     *       *
      *     *
       *   *
        * *
         *
```