import UserAPI from "../../api/UserAPI";

export const ACTION_SET_LIST = 'ACTION_SET_LIST'
export const ACTION_USER_ALBUM = 'ACTION_USER_ALBUM'
export const ACTION_ALBUM_PHOTO = 'ACTION_ALBUM_PHOTO'

export function setList (list) {
  return { type: ACTION_SET_LIST, payload: list }
}

export function userAlbum (album) {
  return { type: ACTION_USER_ALBUM, payload: album }
}

export function albumPhoto (photo) {
  return { type: ACTION_ALBUM_PHOTO, payload: photo }
}

export function getServerUsers () {
  return (dispatch) => {
    UserAPI.getUsers()
      .then((newList) => {
        dispatch(setList(newList))
      })
  }
}

export function getUserAlbums (id) {
  return (dispatch) => {
    UserAPI.getAlbums(id)
      .then((newAlbums) => {
        dispatch(userAlbum(newAlbums))
      })
  }
}

export function getAlbumPhotos (id) {
  return (dispatch) => {
    UserAPI.getPhotos(id)
      .then((newPhotos) => {
        dispatch(albumPhoto(newPhotos))
      })
  }
}