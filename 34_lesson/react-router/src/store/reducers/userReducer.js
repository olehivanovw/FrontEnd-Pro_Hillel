import {
  ACTION_ALBUM_PHOTO,
  ACTION_SET_LIST,
  ACTION_USER_ALBUM,
  ACTION_ALBUM_ITEM
} from '../action/userAction'

const DEFAULT_LIST = []
const DEFAULT_ALBUM = []
const DEFAULT_PHOTO = []
const DEFAULT_ALBUM_ITEM = {}

const initialState = {
  list: DEFAULT_LIST,
  album: DEFAULT_ALBUM,
  photo: DEFAULT_PHOTO,
  albumsItem: DEFAULT_ALBUM_ITEM,
}

export default function userReducer(state=initialState, { type, payload }) {
  switch (type) {
    case ACTION_SET_LIST: return { ...state, list: payload }
    case ACTION_USER_ALBUM: return { ...state, album: payload}
    case ACTION_ALBUM_PHOTO: return { ...state, photo: payload}
    case ACTION_ALBUM_ITEM: return { ...state, albumsItem: payload}
    default: return state
  }
}