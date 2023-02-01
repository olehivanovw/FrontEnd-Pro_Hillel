const operator = prompt('Select one operator: +, -, /, *')

const num1 = prompt('Enter the number one:')

const num2 = prompt('Enter the number two:')

switch (operator) {
  case '+':
    let value1 = Number(num1) + Number(num2)
    alert(`${num1} ${operator} ${num2} = ${value1}`)
    break
  case '-':
    let value2 = Number(num1) - Number(num2)
    alert(`${num1} ${operator} ${num2} = ${value2}`)
    break
  case '*':
    let value3 = Number(num1) * Number(num2)
    alert(`${num1} ${operator} ${num2} = ${value3}`)
    break
  case '/':
    let value4 = Number(num1) / Number(num2)
    alert(`${num1} ${operator} ${num2} = ${value4}`)
    break
  default:
    alert('You must select math operator')
}


// ================================= Another variant for me, with use "if/else if/else"  ===================================== //

/*
if (operator === '+') {
  let value1 = Number(num1) + Number(num2)
  alert(`${num1} ${operator} ${num2} = ${value1}`)
} else if (operator === '-') {
  let value2 = Number(num1) - Number(num2)
  alert(`${num1} ${operator} ${num2} = ${value2}`)
} else if (operator === '*') {
  let value3 = Number(num1) * Number(num2)
  alert(`${num1} ${operator} ${num2} = ${value3}`)
} else if (operator === '/') {
  let value4 = Number(num1) / Number(num2)
  alert(`${num1} ${operator} ${num2} = ${value4}`)
} else {
  alert('You must select math operator')
}
*/