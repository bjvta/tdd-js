describe("Number", function() {
  it("should get the highest number", function() {
    let number = new Number();
    let highest = number.highest_number(1,2,3)
    let expected = 3
    expect(highest).toEqual(expected);
  });


});
