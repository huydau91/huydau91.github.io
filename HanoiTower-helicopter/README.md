# Mô hình hóa thuật toán Tháp Hà Nội (Hanoi Towers) bằng D3JS - Hướng đối tượng

## Phân tích bài toán:

B1: Nhập vào n là số tầng tháp (Mặc định đặt ở cột 1)

B2: Xây dựng thuật toán chuyển đĩa từ `cột 1` sang `cột 3`

## Code xử lý chính:
``` javascript
	function move(n, a, b, c){
		if (n > 0) {
			move(n-1, a, c, b);
			if (a == 0 && c == margin){
				floor[n-1]
				.transition()
				.delay(i*2000)
				.transition()
				.duration(750)
				.attr("y", 0)
				.transition()
				.duration(750)
				.attr("x", c+(floors-n)*(unit_floor/2))
				.transition()
				.duration(750)
				.attr("y", tower_height - tower2*40);
				tower1--; tower2++;
				console.log("tower1 " + tower1 + ", tower2 " + tower2);
				i++;
			}
			
	console.log("Move disk " + n + " from " + a + " to " + c);
	move(n-1, b, a, c);
```

## Giải thích

* Tạo thẻ `svg` chứa mô hình

```javascript
	const svg = d3.select(".container").append("svg").attr("width", $(".container").width()).attr("height", $(window).height());
```
* Tạo thẻ các tầng tháp và cột trong thẻ `svg` đã tạo trước đó

```javascript
	function build_floor(n) {
	// Them tower vao the avg
	for (var j=0; j<3; j++){
		svg.append("rect")
		.attr("x", function(){
			return j*margin + (biggest_floor/2) - 10;
		})
		.attr("y", 40)
		.attr("rx", 10)
		.attr("ry", 10)
		.attr("width", 20)
		.attr("height", n*40)
		.attr("fill", "rgba(105, 105, 105, 0.8)");
	}
	for (var j=0; j<3; j++){
		svg.append("rect")
		.attr("x", function(){
			return j*margin;
		})
		.attr("y", (n+1)*40)
		.attr("rx", 10)
		.attr("ry", 10)
		.attr("width", biggest_floor)
		.attr("height", 20)
		.attr("fill", "rgba(105, 105, 105, 0.8)");
	}
```
* Gọi `function` thực hiện chức năng chuyển đĩa (Code xử lý chính phía trên)
``` javascript
	move(n, 0, margin, 2*margin)
```

## Cách chạy chương trình

* Copy file `html` ở đường dẫn: https://github.com/huydau91/nodejs/blob/master/hanoitower/index.html
* Mở file bằng Sublime Text hoặc các chương trình tương tự
* Thay đổi n trong `function(n, 0, margin, 2*margin)` để thay đổi số lượng các tầng
* Mở file html để xem kết quả

## Kết quả
![alt text](https://github.com/huydau91/nodejs/blob/master/hanoitower/kq.png)