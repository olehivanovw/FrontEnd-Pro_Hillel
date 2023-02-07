const operator = getOperator('+, -, *, /')
const num1 = getOperand('one')
const num2 = getOperand('two')
let output

const arrOperator = ['+', '-', '*', '/']

if (Number.isNaN(num1 && num2) === false && arrOperator.includes(operator)) {
  output = calc(operator, num1, num2)
  showMassageResult(num1, operator, num2, output)
} else {
  alert("WARNING: You entered incorrect data")
}

// ============================ Another variant fot me, with use "!" ============================
// if (!Number.isNaN(num1 && num2) && arrOperator.includes(operator)) {
//   output = calc(operator, num1, num2)
//   showMassageResult(num1, operator, num2, output)
// } else {
//   alert("WARNING: You entered incorrect data")
// }

function getOperator(action) {
  return prompt(`Select one operator: ${action}`)
}

function getOperand(name) {
  return Number(prompt(`Enter the number ${name}:`))
}

function calc(operator, num1, num2) {
  switch (operator) {
    case '+': return add(num1, num2)
    case '-': return sub(num1, num2)
    case '*': return mul(num1, num2)
    case '/': return div(num1, num2)
  }
}

function add(x, y) {
  return x + y
}

function sub(x, y) {
  return x - y
}

function mul(x, y) {
  return x * y
}

function div(x, y) {
  return x / y
}

function showMassageResult(a, b, c, d) {
  alert(`${a} ${b} ${c} = ${d}`)
}

// ============================ My previously homework to 02 lesson ============================
// const operator = prompt('Select one operator: +, -, /, *')
// const num1 = prompt('Enter the number one:')
// const num2 = prompt('Enter the number two:')
//
// switch (operator) {
//   case '+':
//     let value1 = Number(num1) + Number(num2)
//     alert(`${num1} ${operator} ${num2} = ${value1}`)
//     break
//   case '-':
//     let value2 = Number(num1) - Number(num2)
//     alert(`${num1} ${operator} ${num2} = ${value2}`)
//     break
//   case '*':
//     let value3 = Number(num1) * Number(num2)
//     alert(`${num1} ${operator} ${num2} = ${value3}`)
//     break
//   case '/':
//     let value4 = Number(num1) / Number(num2)
//     alert(`${num1} ${operator} ${num2} = ${value4}`)
//     break
//   default:
//     alert('You must select math operator')
// }