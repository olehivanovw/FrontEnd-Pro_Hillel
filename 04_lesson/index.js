const MATH_OPERATOR = { '+': add, '-': sub, '*': mul, '/': div }
const MATH_OPERATOR_LIST = Object.keys(MATH_OPERATOR)

const operator = getOperator(`${MATH_OPERATOR_LIST.join(', ')}`)
const totalOperand = getTotalOperand(2, 4)
const valueOperand = getArrayOperand([])
const calcValue = calc(operator, valueOperand)

showMassageResult(valueOperand, operator, calcValue)

function getOperator(action) {
  let mathOperator

  do {
    mathOperator = prompt(`Select one operator: ${action}`)
  } while (!MATH_OPERATOR_LIST.includes(mathOperator))

  return mathOperator
}
// ============================ operator - WITHOUT FUNCTION ============================
// let operator
// do {
//   operator = getOperator(`${MATH_OPERATOR_LIST.join(', ')}`)
// } while (!MATH_OPERATOR_LIST.includes(operator))
//
// function getOperator(action) {
//   return prompt(`Select one operator: ${action}`)
// }

function getTotalOperand(operand1, operand2) {
  let valueOperand

  do {
    valueOperand = prompt(`Select the number of operands to use with range ${operand1} - ${operand2}:`)
  } while (isNumber(valueOperand, operand1, operand2))

  function isNumber(x, A, B) {
    return  x < A || x > B || isNaN(x)
  }

  return valueOperand
}
// ============================ totalOperand - WITHOUT FUNCTION ============================
// let totalOperand
// do {
//   totalOperand = prompt('Select the number of operands to use with range two - four:')
// } while (isNumber(totalOperand))
//
// function isNumber(x) {
//   return  x < 2 || x > 4 || isNaN(x)
// }

function getArrayOperand(X) {
  let numOperand
  let arrOperand = X

  for (let i = 0; i < totalOperand; i++) {
    do {
      numOperand = prompt(`Enter the operand ${i + 1}:`)
    } while (isNaN(numOperand) || numOperand === '')

    arrOperand.push(numOperand)
  }

  return arrOperand
}
// ============================ valueOperand - WITHOUT FUNCTION ============================
// let numOperand
// let valueOperand = []
//
// for (let i = 0; i < totalOperand; i++) {
//   do {
//     numOperand = prompt(`Enter the operand ${i + 1}:`)
//   } while (isNaN(numOperand) || numOperand === '')
//
//   valueOperand.push(numOperand)
// }

function calc(operator, arr) {
  return MATH_OPERATOR[operator](arr)
}

function add(arr) {
  let x = Number(arr[0])
  for (let i = 1; i < arr.length; i++) {
    x += Number(arr[i])
  }
  return x
}

function sub(arr) {
  let x = Number(arr[0])
  for (let i = 1; i < arr.length; i++) {
    x -= Number(arr[i])
  }
  return x
}

function mul(arr) {
  let x = Number(arr[0])
  for (let i = 1; i < arr.length; i++) {
    x *= Number(arr[i])
  }
  return x
}

function div(arr) {
  let x = Number(arr[0])
  for (let i = 1; i < arr.length; i++) {
    x /= Number(arr[i])
  }
  return x
}

function showMassageResult(a, b, c) {
  alert(`${a.join(` ${b} `)} = ${c}`)
}

// ============================ MY PREVIOUSLY HOMEWORK TO 03_LESSON ============================
// const operator = getOperator('+, -, *, /')
// const num1 = getOperand('one')
// const num2 = getOperand('two')
// let output
//
// const arrOperator = ['+', '-', '*', '/']
//
// if (!Number.isNaN(num1 && num2) && arrOperator.includes(operator)) {
//   output = calc(operator, num1, num2)
//   showMassageResult(num1, operator, num2, output)
// } else {
//   alert("WARNING: You entered incorrect data")
// }
//
// function getOperator(action) {
//   return prompt(`Select one operator: ${action}`)
// }
//
// function getOperand(name) {
//   return Number(prompt(`Enter the number ${name}:`))
// }
//
// function calc(operator, num1, num2) {
//   switch (operator) {
//     case '+': return add(num1, num2)
//     case '-': return sub(num1, num2)
//     case '*': return mul(num1, num2)
//     case '/': return div(num1, num2)
//   }
// }
//
// function add(x, y) {
//   return x + y
// }
//
// function sub(x, y) {
//   return x - y
// }
//
// function mul(x, y) {
//   return x * y
// }
//
// function div(x, y) {
//   return x / y
// }
//
// function showMassageResult(a, b, c, d) {
//   alert(`${a} ${b} ${c} = ${d}`)
// }