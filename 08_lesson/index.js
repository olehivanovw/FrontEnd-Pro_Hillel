'use strict'
function createCalculator(base = 0) {
  let counts = base

  return {
    add: (item) => {
      if (!isNaN(item)) {
        counts += item
      }
    },
    sub: (item) => {
      if (!isNaN(item)) {
        counts -= item
      }
    },
    set: (item) => {
      if (!isNaN(item)) {
        counts = item
      }
    },
    get: () => {
      return counts
    },
    reset: () => {
      counts = base
    },
  }
}


const calculator = createCalculator(100);


calculator.add(10);
calculator.add(10);
calculator.sub(20);


calculator.set(20);
calculator.add(10);
calculator.add(10);
calculator.add('qwe');


console.log(calculator.get())


calculator.reset();
console.log(calculator.get())