import {
  ACTION_CONTACT_CREATE,
  ACTION_CONTACT_REMOVE,
  ACTION_CONTACT_EDIT,
  ACTION_CONTACT_UPDATE,
  ACTION_SET_LIST
} from "../actions/contactAction";

const DEFAULT_LIST = []
const DEFAULT_CONTACT = {}

const initialState = {
  list: DEFAULT_LIST,
  contactEdit: DEFAULT_CONTACT
}

export default function contactReducer(state=initialState, { type, payload }) {
  switch (type) {
    case ACTION_SET_LIST: return { ...state, list: payload }
    case ACTION_CONTACT_CREATE: return {
      ...state,
      list: [...state.list, { ...payload, }]
    }
    case ACTION_CONTACT_REMOVE:
      const newList = state.list.filter(contactItem => contactItem.id !== payload)

      return { ...state, list: newList }
    case ACTION_CONTACT_EDIT: return { ...state, contactEdit: payload }
    case ACTION_CONTACT_UPDATE:
      const updateList = state.list.map(contactItem => contactItem.id === payload.id ? payload : contactItem)

      return { ...state, list: updateList }
    default: return state
  }
}