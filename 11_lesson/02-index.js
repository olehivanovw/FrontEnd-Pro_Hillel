Array.prototype.max = function () {
  return this.reduce((accum, num) => {
    if (accum > num) {
      return accum
    } else {
      return num
    }
  })

  // return this.reduce((a, b) => a > b ? a : b); // arrow method
}

const arr = [6, 5, 8, 7]

console.log(arr.max())