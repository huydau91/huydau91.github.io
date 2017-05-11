function move(n, a, b, c) {
	if (n > 0) {
		move(n-1, a, c, b);
		console.log("Move disk " + n + " from " + a + " to " + c);
		move(n-1, b, a, c);
	}
}
move(5, "A", "B", "C");