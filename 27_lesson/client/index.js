const ws = new WebSocket('ws://localhost:8080')
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

  ws.send(JSON.stringify(data))

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

ws.onmessage = (e) => {
  try {
    const data = JSON.parse(e.data)
    renderMessage(data)
  } catch (error) {
    console.error(`Can not parse this data, error: ${error.message}`)
  }
}

function renderMessage(data) {
  const htmlItem = generateMessageHtml(data)

  container.insertAdjacentHTML('beforeend', htmlItem)
}

function generateMessageHtml(value) {
  return `<li>${value.name}: ${value.message}</li>`
}

ws.onopen = () => {
  console.log('Connection was started')
}

ws.onclose = () => {
  console.log('Connection was stopped')
}

ws.onerror = (error) => {
  console.log(`Connection was interrupted, ${error.message}`)
}

