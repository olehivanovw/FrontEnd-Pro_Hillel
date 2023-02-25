'use strict'
function Calculator(base) {
  this.counts = base

  this.add = function (item) {
    if (typeof item === 'number') {
      this.counts += item
    }
  }
  this.sub = function (item) {
    if (typeof item === 'number') {
      this.counts -= item
    }
  }
  this.set = function (item) {
    if (typeof item === 'number') {
      this.counts = item
    }
  }
  this.get = function () {
    return this.counts
  }
  this.reset = function () {
    this.counts = base
  }
}

const calc = new Calculator(100);

calc.add(10);
calc.add(10);
calc.sub(20);

calc.set(20);
calc.add(10);
calc.add(10);
calc.add('qwe');

console.log(calc.get())

calc.reset();

console.log(calc.get())