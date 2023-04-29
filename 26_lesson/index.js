let regexp1 = /love/
let regexp2 = /ing$/
let regexp3 = /^World!$/
let regexp4 = /^Hello [a-z]*\.$/
let regexp5 = /^\d{3}-\d{2}-\d{3}-\d{2}-\d{2}$/

console.log(regexp1.test('I love JavaScript')) // true
console.log(regexp1.test('I JavaScript')) // false

console.log(regexp2.test('Good morning')) // true
console.log(regexp2.test('Good morning!')) // false

console.log(regexp3.test('World!')) // true
console.log(regexp3.test('Hello World!')) // false

console.log(regexp4.test('Hello aaa.')) // true
console.log(regexp4.test('Hello 3.')) // false

console.log(regexp5.test('380-99-111-88-88')) // true
console.log(regexp5.test('380-99-111-88-88555')) // false