function Numbers(){

}

Numbers.prototype.highest_number = function(n1, n2, n3) {
	return null
}




describe("Number", function(){
	var number;

	it("should get the highest number", function() {
		number = new Numbers();
		highest = number.highest_number(1,2,3)
		expected = 3
    expect(highest).toEqual(expected);
  });

})
