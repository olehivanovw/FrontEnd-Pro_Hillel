console.log(pow(3, 3))

function pow(num, degree) {
  return (degree === 1) ? num : (num * pow(num, degree - 1))
}

// ============================ WITH BASIC RECURSION FUNCTION ============================
// function pow(num, degree) {
//   if (degree === 1) {
//     return num
//   }
//
//   return num * pow(num,degree - 1)
// }

// ============================ WITH LOOP FOR ============================
// function pow(num, degree) {
//   let x = 1
//   for (let i = 0; i < degree; i++) {
//     x *= num
//   }
//
//   return x
// }

