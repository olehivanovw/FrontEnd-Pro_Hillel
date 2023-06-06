import {
  ACTION_CONTACT_CREATE,
  ACTION_CONTACT_REMOVE,
  ACTION_CONTACT_EDIT,
  ACTION_CONTACT_UPDATE,
  ACTION_SET_LIST,
  ACTION_CONTACT_CLEAR_EDIT
} from "../actions/contactAction";

const DEFAULT_LIST = []
export const DEFAULT_CONTACT = { name: '', surname: '', phone: '' }

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
    case ACTION_CONTACT_CLEAR_EDIT: return { ...state, contactEdit: DEFAULT_CONTACT }
    default: return state
  }
}