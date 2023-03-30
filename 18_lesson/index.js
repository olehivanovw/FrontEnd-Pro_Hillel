'use strict'
const CLASS_DELETE_BTN = 'listDeleteBtn'
const SELECTOR_LIST_ITEM = '.listItem'
const COLOR_GREENYELLOW = 'greenyellow'
const COLOR_WHITE = 'white'
const todoUl = document.querySelector('#todoList')
const todoForm = document.querySelector('#todoForm')

todoForm.addEventListener('submit', onFormSubmit)
todoUl.addEventListener('click', onListElementClick)

function onFormSubmit(e) {
  e.preventDefault()

  const data = getData()

  if (!isValidData(data)) {
    showError()
    return
  }

  renderData(data)

  clearInput()
}

function onListElementClick(e) {
  const target = e.target
  const listEl = findListEl(target)

  if (listEl) {
    deleteItem(target)
  } else {
    changeBgColor(target)
  }

}

function getData() {
  return { dataInput: todoForm.msgInput.value }
}

function isValidData(data) {
  return data.dataInput.trim() !== ''
}

function showError() {
  alert('You must enter correct data')
}

function renderData(data) {
  const html = generateDataHtml(data)

  todoUl.insertAdjacentHTML('beforeend', html)
}

function generateDataHtml(value) {
  return `
    <li class="listItem">
      ${value.dataInput}
      <button class="listDeleteBtn">Delete</button>
    </li>
  `
}

function clearInput() {
  todoForm.reset()
}

function findListEl(el) {
  return el.classList.contains(CLASS_DELETE_BTN)
}

function deleteItem(el) {
  el.closest(SELECTOR_LIST_ITEM).remove()
}

function changeBgColor(el) {
  if (el.style.backgroundColor === COLOR_GREENYELLOW) {
    el.style.backgroundColor = COLOR_WHITE
  } else {
    el.style.backgroundColor = COLOR_GREENYELLOW
  }
}
