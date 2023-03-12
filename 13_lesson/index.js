'use strict'
// ============================= Variant with literal template ============================= //
const rowInput = document.querySelector('#rowInput')
const nameInput = document.querySelector('#nameInput')
const surnameInput = document.querySelector('#surnameInput')
const phoneInput = document.querySelector('#phoneInput')
const btn = document.querySelector('#addButton')

btn.addEventListener('click', onBtnClick)

function onBtnClick() {
  const data = getData()

  if (!isValidData(data)) {
    showError()
    return
  }

  renderData(data)

  clearInput()
}
function getData() {
  return { name: nameInput.value, surname: surnameInput.value, phone: phoneInput.value }
}

function isValidData(data) {
  return data.name !== ''
    && data.surname !== ''
    && data.phone !== ''
    && !isNaN(data.phone)
}

function showError() {
  alert('You must enter correct data')
}

function renderData(data) {
  const htmlItem = `
    <tr>
      <td>${data.name}</td>
      <td>${data.surname}</td>
      <td>${data.phone}</td>
      <td></td>
    </tr>
  `

  rowInput.insertAdjacentHTML('beforebegin', htmlItem)
}

function clearInput() {
  nameInput.value = ''
  surnameInput.value = ''
  phoneInput.value = ''
}

// ============================= Variant with template <script> and ul list in table ============================= //
// const nameUl = document.querySelector('#nameList')
// const surnameUl = document.querySelector('#surnameList')
// const phoneUl = document.querySelector('#phoneList')
// const nameInput = document.querySelector('#nameInput')
// const surnameInput = document.querySelector('#surnameInput')
// const phoneInput = document.querySelector('#phoneInput')
// const btn = document.querySelector('#addButton')
// const template = document.querySelector('#itemTemplate').innerHTML
//
// btn.addEventListener('click', onBtnClick)
//
// function onBtnClick() {
//   const data = getData()
//
//   if (!isValidData(data)) {
//     showError()
//     return
//   }
//
//   renderData(data)
//
//   clearInput()
// }
// function getData() {
//   return { name: nameInput.value, surname: surnameInput.value, phone: phoneInput.value }
// }
//
// function isValidData(data) {
//   return data.name !== ''
//     && data.surname !== ''
//     && data.phone !== ''
//     && !isNaN(data.phone)
// }
//
// function showError() {
//   alert('You must enter correct data')
// }
//
// function renderData(data) {
//   const htmlItemName = template.replace('{message}', data.name)
//   const htmlItemSurname = template.replace('{message}', data.surname)
//   const htmlItemPhone = template.replace('{message}', data.phone)
//
//   nameUl.insertAdjacentHTML('beforeend', htmlItemName)
//   surnameUl.insertAdjacentHTML('beforeend', htmlItemSurname)
//   phoneUl.insertAdjacentHTML('beforeend', htmlItemPhone)
// }
//
// function clearInput() {
//   nameInput.value = ''
//   surnameInput.value = ''
//   phoneInput.value = ''
// }