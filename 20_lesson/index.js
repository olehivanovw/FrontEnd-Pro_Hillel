'use strict'
const SELECTOR_ALBUM_ELEMENT = '.albumEl'
const albumsContainer = document.querySelector('#albumsContainer')
const photoContainer = document.querySelector('#photoContainer')
let albumsList = []

albumsContainer.addEventListener('click', onAlbumsContainerClick)

GalleryAPI.getAlbums()
  .then((albums) => {
    renderAlbums(albums)
    albumsList = albums
  })
  .then(() => {
    GalleryAPI.getPhotos(albumsList[0].id)
      .then((photos) => {
        renderPhotos(photos)
      })
      .catch((e) => showError(e))
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
    <a href="#" class="albumEl" data-id="${value.id}">
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
  const id = getAlbumElId(el)

  GalleryAPI.getPhotos(id)
    .then((photos) => {
      renderPhotos(photos)
    })
    .catch((e) => showError(e))
}

function getAlbumElId(el) {
  return el.dataset.id
}

function renderPhotos(data) {
  photoContainer.innerHTML = data.map(generatePhotosHtml).join('')
}

function generatePhotosHtml(value) {
  return `<img src="${value.thumbnailUrl}" alt="photo" class="photo">`
}