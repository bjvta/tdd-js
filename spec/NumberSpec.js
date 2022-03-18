describe("Number", function() {
  it("should get the highest number", function() {
    let number = new Numbers();
    let highest = number.highest_number(1,2,3)
    let expected = 3
    expect(highest).toEqual(expected);
  });

  it("should get the highest number with similar number", function(){
    let number = new Numbers();
    let highest = number.highest_number(-1, 1, 1)
    expected = 1;
    expect(highest).toEqual(expected);
  })

  it("should get a hightes number from two numbers", function(){
    let number = new Numbers();
    let highest = number.highest_number_two(1, 2);
    expected = 2;
    expect(highest).toEqual(expected);
  })

  it("should get a hightes number from args", function(){
    let number = new Numbers();
    let highest = number.highest_number(1, 2, 3, 4, 5);
    expected = 5;
    expect(highest).toEqual(expected);
  })
  
});
