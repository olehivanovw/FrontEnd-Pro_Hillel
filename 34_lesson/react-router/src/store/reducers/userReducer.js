import {
  ACTION_ALBUM_PHOTO,
  ACTION_SET_LIST,
  ACTION_USER_ALBUM,
} from '../action/userAction'

const DEFAULT_LIST = []
const DEFAULT_ALBUM = []
const DEFAULT_PHOTO = []

const initialState = {
  list: DEFAULT_LIST,
  album: DEFAULT_ALBUM,
  photo: DEFAULT_PHOTO,
}

export default function userReducer(state=initialState, { type, payload }) {
  switch (type) {
    case ACTION_SET_LIST: return { ...state, list: payload }
    case ACTION_USER_ALBUM: return { ...state, album: payload}
    case ACTION_ALBUM_PHOTO: return { ...state, photo: payload}
    default: return state
  }
}