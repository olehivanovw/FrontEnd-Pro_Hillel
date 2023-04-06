class GalleryAPI {
  static ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums'
  static PHOTO_URL = 'https://jsonplaceholder.typicode.com/photos?albumId='

  static getAlbums() {
    return fetch(GalleryAPI.ALBUMS_URL)
      .then((res) => {
        if (res.ok) {
          return res.json()
        }

        throw new Error('Can not retrieve albums from server')
      })
  }

  static getPhotos(id) {
    return fetch(GalleryAPI.PHOTO_URL + id)
      .then((res) => {
        if (res.ok) {
          return res.json()
        }

        throw new Error('Can not retrieve photos from server')
      })
  }
}