'use strict'
const gitInput = document.querySelector('#gitInput')
const gitButton = document.querySelector('#gitButton')
const container = document.querySelector('#container')

gitButton.addEventListener('click', onGitButtonClick)

function onGitButtonClick() {
  fetch(`https://api.github.com/users/${gitInput.value}`)
    .then((response) => {
      if(response.ok) {
        return response.json()
      }
      throw new Error('User login not found')
    })
    .then((value) => {
      renderUserData(value)
    })
    .catch((error) => {
      console.log('Error:', error.message)
    })

  clearInput()
}

function renderUserData(item) {
  container.innerHTML = generateDataHtml(item)
}

function generateDataHtml(data) {
  return `
    <img src="${data.avatar_url}" alt="logo">
    <p>
      <strong>Public repositories: ${data.public_repos}</strong>
    </p>
    <p>
      <strong>Followers: ${data.followers}</strong>
    </p>
    <p>
      <strong>Following: ${data.following}</strong>
    </p>
  `
}

function clearInput() {
  gitInput.value = ''
}

