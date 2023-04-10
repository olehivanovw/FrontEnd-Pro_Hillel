'use strict'
const SELECTOR_CONTACT_ROW = '.contactRow'
const SELECTOR_DELETE_BTN = '.deleteBtn'
const SELECTOR_EDIT_BTN = '.editBtn'
const contactForm = document.querySelector('#contactForm')
const $contactContainer = $('#contactContainer')
let contactList = []

contactForm.addEventListener('submit', onContactFormSubmit)
$contactContainer
  .on('click', SELECTOR_DELETE_BTN, deleteContactEl)
  .on('click', SELECTOR_EDIT_BTN, editContactEl)

ContactAPI.getContacts()
  .then((contacts) => {
    renderContactsList(contacts)
    contactList = contacts
  })
  .catch(e => showError(e))

function onContactFormSubmit(e) {
  e.preventDefault()

  const data = getData()

  if (!isValidData(data)) {
    showError(new Error('You must enter correct data'))
    return
  }

  if (data.id) {
    ContactAPI.updateContact(data.id, data)
      .then((newData) => {
        changeContact(data.id, newData)
        clearForm()
        contactList = contactList.map(contactItem => contactItem.id === data.id ? newData : contactItem)
      })
      .catch(e => showError(e))
  } else {
    ContactAPI.createContact(data)
      .then((data) => {
        renderContacts(data)
        clearForm()
        contactList.push(data)
      })
      .catch(e => showError(e))
  }
}

function deleteContactEl(e) {
  const target = e.target
  const contactEl = findContactEl(target)
  const id = getContactElId(contactEl)

  ContactAPI.deleteContact(id)
    .then(() => {
      contactEl.remove()
    })
    .catch(e => showError(e))

  contactList = contactList.filter(contactItem => contactItem.id !== id)
}

function findContactEl(el) {
  return el.closest(SELECTOR_CONTACT_ROW)
}

function editContactEl(e) {
  const target = e.target
  const contactEl = findContactEl(target)
  const id = getContactElId(contactEl)
  const contact = findContactById(id)

  fillForm(contact)
}

function getData() {
  const id = contactForm.hiddenInput.value
  const editContact = findContactById(id) || {}

  return {
    ...editContact,
    name: contactForm.nameInput.value,
    surname: contactForm.surnameInput.value,
    phone: contactForm.phoneInput.value,
  }
}

function isValidData(data) {
  return data.name
    && data.surname
    && data.phone
}

function showError(error) {
  alert(error.message)
}

function renderContactsList(data) {
  const html = data.map(generateContactsHtml)

  $contactContainer.html(html)
}

function renderContacts(data) {
  const htmlItem = generateContactsHtml(data)

  $contactContainer.append(htmlItem)
}

function changeContact(id, data) {
  const oldContactEl = document.querySelector(`[data-id="${id}"]`)
  oldContactEl.outerHTML = generateContactsHtml(data)
}

function generateContactsHtml(value) {
  return `
    <tr class="contactRow" data-id="${value.id}">
      <td>${value.name}</td>
      <td>${value.surname}</td>
      <td>${value.phone}</td>
      <td>
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
      </td>
    </tr>
  `
}

function clearForm() {
  contactForm.reset()
  contactForm.hiddenInput.value = ''
}

function getContactElId(el) {
  return el.dataset.id
}

function findContactById(id) {
  return contactList.find(data => data.id === id)
}

function fillForm (contact) {
  contactForm.hiddenInput.value = contact.id
  contactForm.nameInput.value = contact.name
  contactForm.surnameInput.value = contact.surname
  contactForm.phoneInput.value = contact.phone
}