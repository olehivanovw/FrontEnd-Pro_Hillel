'use strict'
const CLASS_DELETE_BTN = 'listDeleteBtn'
const SELECTOR_LIST_ITEM = '.listItem'
const CLASS_BACKGROUND_COLOR = 'listItem-background-green'
const todoUl = document.querySelector('#todoList')
const todoForm = document.querySelector('#todoForm')

todoForm.addEventListener('submit', onFormSubmit)
todoUl.addEventListener('click', onListElementClick)

TodoAPI.getList()
  .then((list) => {
    renderTodoList(list)
  })
  .catch(e => showError(e))

function onFormSubmit(e) {
  e.preventDefault()

  const data = getData()

  if (!isValidData(data)) {
    showError(new Error('You must enter correct data'))
    return
  }

  TodoAPI.create(data)
    .then((newData) => {
      renderData(newData)
      clearInput()
    })
    .catch(e => showError(e))
}

function onListElementClick(e) {
  const target = e.target
  const listEl = findListBtn(target)
  const idEl = findListElId(target)

  if (listEl) {
    TodoAPI.delete(idEl)
      .catch(e => showError(e))
    deleteItem(target)
  } else {
    changeBgColor(target)
    const statusBgColor = target.classList.contains(CLASS_BACKGROUND_COLOR)
    TodoAPI.update(idEl, statusBgColor)
      .catch(e => showError(e))
  }
}

function getData() {
  return { title: todoForm.msgInput.value }
}

function isValidData(data) {
  return data.title.trim() !== ''
}

function showError(error) {
  alert(error.message)
}

function renderTodoList(list) {
  todoUl.innerHTML = list.map(generateDataHtml).join('')
}

function renderData(data) {
  const html = generateDataHtml(data)

  todoUl.insertAdjacentHTML('beforeend', html)
}

function generateDataHtml(value) {
  if (value.done === true) {
    return `
    <li class="listItem listItem-background-green" id="${value.id}">
      ${value.title}
      <button class="listDeleteBtn">Delete</button>
    </li>
  `
  }
  return `
    <li class="listItem" id="${value.id}">
      ${value.title}
      <button class="listDeleteBtn">Delete</button>
    </li>
  `
}

function clearInput() {
  todoForm.reset()
}

function findListBtn(el) {
  return el.classList.contains(CLASS_DELETE_BTN)
}

function findListElId(el) {
  return el.closest(SELECTOR_LIST_ITEM).id
}

function deleteItem(el) {
  el.closest(SELECTOR_LIST_ITEM).remove()
}

function changeBgColor(el) {
  el.classList.toggle(CLASS_BACKGROUND_COLOR)
}
