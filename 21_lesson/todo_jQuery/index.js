'use strict'
const SELECTOR_DELETE_BTN = '.listDeleteBtn'
const SELECTOR_EDIT_BTN = '.listEditBtn'
const SELECTOR_LIST_ITEM = '.listItem'
const CLASS_DONE = 'done'
const $todoUl = $('#todoList')
const todoForm = document.querySelector('#todoForm')
let todoList = []

todoForm.addEventListener('submit', onFormSubmit)
$todoUl
  .on('click', SELECTOR_DELETE_BTN, deleteItem)
  .on('click', SELECTOR_EDIT_BTN, editTodoEl)
  .on('click', SELECTOR_LIST_ITEM, toggleDone)

TodosAPI.getList()
  .then((list) => {
    renderTodoList(list)
    todoList = list
  })
  .catch(e => showError(e))

function onFormSubmit(e) {
  e.preventDefault()

  const data = getData()

  if (!isValidData(data)) {
    showError(new Error('You must enter correct data'))
    return
  }

  if (data.id) {
    TodosAPI.update(data.id, data)
      .then((newData) => {
        changeTodo(data.id, newData)
        clearForm()
        todoList = todoList.map(todoItem => todoItem.id === data.id ? newData : todoItem)
      })
      .catch(e => showError(e))
  } else {
    TodosAPI.create(data)
      .then((data) => {
        renderData(data)
        clearForm()
        todoList.push(data)
      })
      .catch(e => showError(e))
  }
}

// function onListElementClick(e) {
//   // const target = e.target
//   // const listEl = findListEl(target)
//   //
//   // if(!listEl) {
//   //   return
//   // }
//   //
//   // if (isDeleteBtn(target)) {
//   //   deleteItem(listEl)
//   //   return
//   // } else if (isEditBtn(target)) {
//   //   editTodoEl(listEl)
//   //   return
//   // }
//
//   toggleDone(listEl)
// }

function getData() {
  const id = todoForm.hiddenInput.value
  const todo = findTodoById(id) || {}

  return {
    ...todo,
    title: todoForm.msgInput.value
  }
}

function isValidData(data) {
  return data.title.trim() !== ''
}

function showError(error) {
  alert(error.message)
}

function renderTodoList(list) {
  const html = list.map(generateDataHtml)

  $todoUl.html(html)
}

function renderData(data) {
  const html = generateDataHtml(data)

  $todoUl.append(html)
}

function changeTodo(id, data) {
  const oldTodoEl = document.querySelector(`[data-id="${id}"]`)
  oldTodoEl.outerHTML = generateDataHtml(data)
}

function generateDataHtml(value) {
  const done = value.done ? 'done' : ''

  return `
    <li class="listItem ${done}" data-id="${value.id}">
      <span>${value.title}</span>
      <button class="listEditBtn">Edit</button>
      <button class="listDeleteBtn">Delete</button>
    </li>
  `
}

function clearForm() {
  todoForm.reset()
  todoForm.hiddenInput.value = ''
}

function deleteItem(e) {
  const target = e.target
  const listEl = findListEl(target)
  const id = getTodoElId(listEl)

  TodosAPI.delete(id)
    .then(() => {
      listEl.remove()
    })
    .catch(e => showError(e))

  todoList = todoList.filter(todoItem => todoItem.id !== id)
}

function editTodoEl(e) {
  const target = e.target
  const listEl = findListEl(target)
  const id = getTodoElId(listEl)
  const todo = findTodoById(id)

  fillForm(todo)
}

function findListEl(el) {
  return el.closest(SELECTOR_LIST_ITEM)
}

function getTodoElId(el) {
  return el.dataset.id
}

function findTodoById(id) {
  return todoList.find(data => data.id === id)
}

function fillForm (todo) {
  todoForm.hiddenInput.value = todo.id
  todoForm.msgInput.value = todo.title
}

function toggleDone(e) {
  const target = e.target
  const listEl = findListEl(target)
  const id = getTodoElId(listEl)
  const todo = findTodoById(id)

  todo.done = !todo.done

  TodosAPI.update(id, todo)
    .catch(e => showError(e))

  listEl.classList.toggle(CLASS_DONE)
}
