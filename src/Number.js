function Numbers() {
}




Numbers.prototype.highest_number = function() {
	let highestNumber = arguments[0];
	for(let i=1; i< arguments.length; i++) {
		highestNumber = this.highest_number_two(highestNumber, arguments[i]);
	}
	return highestNumber
}

Numbers.prototype.highest_number_two = function(n1, n2) {
	if (n1 > n2) {
		return n1;
	}
	return n2;
}
