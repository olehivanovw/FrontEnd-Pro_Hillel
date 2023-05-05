const chat = new Chat( {showMessage: renderMessage})

const form = document.querySelector('#formWs')
const container = document.querySelector('#container')

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(e) {
  e.preventDefault()

  const data = getData()

  if (!isValidData(data)) {
    showError(new Error('You must enter correct data'))
    return
  }

  chat.send(data)

  clearForm()
}

function getData() {
  return {
    name: form.name.value,
    message: form.message.value,
  }
}

function isValidData(data) {
  return data.name && data.message
}

function showError(error) {
  alert(error.message)
}

function clearForm() {
  // form.reset()
  form.message.value = ''
}

chat.onMessage()

function renderMessage(data) {
  const htmlItem = generateMessageHtml(data)

  container.insertAdjacentHTML('beforeend', htmlItem)
}

function generateMessageHtml(value) {
  return `<li>${value.name}: ${value.message}</li>`
}

chat.onOpen()

chat.onClose()

chat.onError()

