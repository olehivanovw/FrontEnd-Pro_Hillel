export default class UserAPI {
  static API = 'https://jsonplaceholder.typicode.com/'

  static request(url = '', method = '', body, errorMessage) {
    return fetch(UserAPI.API + url, {
      method,
      body: body ? JSON.stringify(body) : undefined,
      headers: {
        'Content-type': 'application/json',
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }

        throw new Error(errorMessage)
      })
  }

  static getUsers() {
    return UserAPI.request('users','GET','','Can not retrieve from server')
  }

  static getAlbums(idUser) {
    return UserAPI.request(`albums?userId=${idUser}`,'GET','','Can not retrieve from server')
  }

  static getPhotos(idAlbum) {
    return UserAPI.request(`photos?albumId=${idAlbum}`,'GET','','Can not retrieve from server')
  }
}