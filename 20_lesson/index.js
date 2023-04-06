'use strict'
const SELECTOR_ALBUM_ELEMENT = '.albumElLink'
const albumsContainer = document.querySelector('#albumsContainer')
const photoContainer = document.querySelector('#photoContainer')
let albumsList = []

albumsContainer.addEventListener('click', onAlbumsContainerClick)

GalleryAPI.getAlbums()
  .then((albums) => {
    renderAlbums(albums)
    albumsList = albums
    showPhotos(albumsList[0])
  })
  .catch((e) => showError(e))

function onAlbumsContainerClick(e) {
  const target = e.target
  const albumEl = findAlbumEl(target)

  showPhotos(albumEl)
}

function renderAlbums(data) {
  albumsContainer.innerHTML = data.map(generateAlbumsHtml).join('')
}

function generateAlbumsHtml(value) {
  return `
    <a href="#" class="albumElLink" id="${value.id}">
      ${value.title}
    </a>
  `
}

function showError(error) {
  alert(error.message)
}

function findAlbumEl(el) {
  return el.closest(SELECTOR_ALBUM_ELEMENT)
}

function showPhotos(el) {
  GalleryAPI.getPhotos(el.id)
    .then((photos) => {
      renderPhotos(photos)
    })
    .catch((e) => showError(e))
}

function renderPhotos(data) {
  photoContainer.innerHTML = data.map(generatePhotosHtml).join('')
}

function generatePhotosHtml(value) {
  return `<img src="${value.thumbnailUrl}" alt="photo" class="photo">`
}