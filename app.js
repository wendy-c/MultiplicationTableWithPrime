var Table = require('cli-table');

class MulTable {
  constructor(nth) {
    this.current = 2;
    this.nth = nth || 10;
  }
}

MulTable.prototype.isPrime = function() {
  //check if input is dividible starting at 2, increment up to square root of the input
  var limit = Math.sqrt(this.current);
  for (var i = 2; i <= limit; i++) {
    if (this.current % i === 0) {
      return false;
    }
  }
  return true;
};

MulTable.prototype.firstNthPrime = function() {
  //1 is not a prime number, set starting point to 2
  // var current = 2;
  var result = [];

  while (result.length < this.nth) {
    //if result.length === input, return
    if (this.isPrime()) {
      result.push(this.current);
    }
    this.current++;
  }

  return result;
};

MulTable.prototype.printTable = function() {
  var primes = this.firstNthPrime();
  //add placeholder for table display
  primes.unshift('');
  var table = new Table({
    head: primes
  });

  for (var i = 1; i < primes.length; i++) {
    var row = [primes[i]];
    for (var j = 1; j < primes.length; j++) {
      row.push(primes[i] * primes[j]);
    }
    table.push(row);
  }

  return table.toString();

};

var test = new MulTable();
console.log(test.printTable());

module.exports = MulTable;
