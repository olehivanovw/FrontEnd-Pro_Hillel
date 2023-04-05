'use strict'
const SELECTOR_CONTACT_ROW = '.contactRow'
const CLASS_DELETE_BTN = 'deleteBtn'
const CLASS_EDIT_BTN = 'editBtn'
const contactForm = document.querySelector('#contactForm')
const contactContainer = document.querySelector('#contactContainer')
let contactList = []

contactForm.addEventListener('submit', onContactFormSubmit)
contactContainer.addEventListener('click', onContactContainerClick)

ContactsAPI.getContacts()
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
    ContactsAPI.updateContact(data.id, data)
      .then((newData) => {
        changeContact(data.id, newData)
        clearForm()
        contactList = contactList.map(contactItem => contactItem.id === data.id ? newData : contactItem)
      })
      .catch(e => showError(e))
  } else {
    ContactsAPI.createContact(data)
      .then((data) => {
        renderContacts(data)
        clearForm()
        contactList.push(data)
      })
      .catch(e => showError(e))
  }
}

function onContactContainerClick(e) {
  const target = e.target
  const contactEl = findContactEl(target)

  if (isDeleteBtn(target)) {
    deleteContactEl(contactEl)
  } else if (isEditBtn(target)) {
    editContactEl(contactEl)
  }
}

function findContactEl(el) {
  return el.closest(SELECTOR_CONTACT_ROW)
}

function isDeleteBtn(el) {
  return el.classList.contains(CLASS_DELETE_BTN)
}

function isEditBtn(el) {
  return el.classList.contains(CLASS_EDIT_BTN)
}

function deleteContactEl(el) {
  const id = getContactElId(el)

  ContactsAPI.deleteContact(id)
    .then(() => {
      el.remove()
    })
    .catch(e => showError(e))

  contactList = contactList.filter(contactItem => contactItem.id !== id)
}

function editContactEl(el) {
  const id = getContactElId(el)
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
  contactContainer.innerHTML = data.map(generateContactsHtml).join('')
}

function renderContacts(data) {
  const htmlItem = generateContactsHtml(data)

  contactContainer.insertAdjacentHTML('beforeend', htmlItem)
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