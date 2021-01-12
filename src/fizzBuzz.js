class Javabuzz {

  says(number) { 

    if (this._isDivisibleBy(number, 15)) {
      return ("JavaBuzz")
    }
    if (this._isDivisibleBy(number, 3)) {
      return ("Java") 
    }
    if (this._isDivisibleBy(number, 5)) {
      return ("Buzz")
    }
    else {
      console.log(number)
      return number // quits running after a return
    }
  }

  _isDivisibleBy(number, divisor) {
    return (number % divisor === 0);
  }

  _isDivisibleByFifteen(number) {
    return this._isDivisibleBy(number, 15)
  }
}