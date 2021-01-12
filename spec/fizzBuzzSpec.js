describe('Javabuzz', function() {

  var javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe('when playing, says', function() {
    it('"Java" when a number is divisible by 3', function(){
      expect(javabuzz.says(3)).toEqual("Java")
    });
    it('"Buzz" when a number is divisible by 5', function(){
      expect(javabuzz.says(5)).toEqual("Buzz")
    });
    it('"JavaBuzz" when a number is divisible by 5', function(){
      expect(javabuzz.says(15)).toEqual("JavaBuzz")
    });
    it('returns the number when NOT divisible by 3,5,15', function(){
      expect(javabuzz.says(7)).toEqual(7)
    })
  });

  describe('knows when a number is', function() {
    it('divisible by 3', function() {
      expect(javabuzz._isDivisibleBy(3, 3)).toBe(true); 
    });
    it('divisible by 5', function() {
      expect(javabuzz._isDivisibleBy(5, 5)).toBe(true);
    })
    it('divisible by 15', function() {
      expect(javabuzz._isDivisibleBy(15, 15)).toBe(true);
    })
  });

  describe('knows when a number is NOT', function() {
    it('divisible by 3', function() {
      expect(javabuzz._isDivisibleBy(1, 3)).toBe(false);
    })
    it('divisible by 5', function(){
      expect(javabuzz._isDivisibleBy(1, 5)).toBe(false);
    })
    it('divisible by 15', function(){
      expect(javabuzz._isDivisibleBy(1, 15)).toBe(false);
    })
  }) 
});