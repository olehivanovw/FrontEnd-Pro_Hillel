Array.prototype.max = function () {
  return this.reduce((accum, num) => {
    if (accum > num) {
      return accum
    } else {
      return num
    }
  })

  // return this.reduce((accum, num) => accum > num ? accum : num); // arrow method
}

const arr = [6, 5, 8, 7]

console.log(arr.max())
console.log([1, 8, 5, 9].max())