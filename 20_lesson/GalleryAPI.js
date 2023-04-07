class GalleryAPI {
  static API_URL = 'https://jsonplaceholder.typicode.com/'

  static request(params, id, errorMessage) {
    return fetch(GalleryAPI.API_URL + params + id)
    .then((res) => {
      if (res.ok) {
        return res.json()
      }

      throw new Error(errorMessage)
    })
  }

  static getAlbums() {
    return GalleryAPI.request('albums', '','Can not get albums from server')
  }

  static getPhotos(id) {
    return GalleryAPI.request('photos?albumId=', id, 'Can not get photos from server')
  }
}