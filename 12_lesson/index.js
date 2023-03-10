'use strict'
const ul = document.querySelector('#todoList')
const input = document.querySelector('#msgInput')
const btn = document.querySelector('#msgButton')
const li = document.createElement('li')

btn.addEventListener('click', onBtnClick)

function onBtnClick() {
  if (isInputEmpty(input)) {
    li.textContent = input.value
    ul.append(li)
  }

  input.value = ''
}

function isInputEmpty(n) {
  return n.value.trim() !== ''
}