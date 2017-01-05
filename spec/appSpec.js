describe("MultiplicationTable", function() {
  var Table = require('../app');
  var first10;
  var first15;

  beforeEach(function() {
    first10 = new Table(10);
    first15 = new Table(15);
  });

  it("Should return true when this.current is 29", function() {
    first10.current = 29;
    first10.isPrime();
    expect(first10.isPrime).toBeTruthy();
  });

  it("Should return primes array of length 10", function() {
    first10.current = 2;
    var primes = first10.firstNthPrime();
    expect(primes.length).toEqual(10);
  });

  it("Should return primes array of length 15", function() {
    first15.current = 2;
    var primes = first15.firstNthPrime();
    expect(primes.length).toEqual(15);
  });

});
