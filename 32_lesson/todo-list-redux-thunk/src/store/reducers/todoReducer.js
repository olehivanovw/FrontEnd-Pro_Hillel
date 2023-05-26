import {
  ACTION_TODO_CREATE,
  ACTION_TODO_REMOVE,
  ACTION_TODO_EDIT,
  ACTION_TODO_UPDATE,
  ACTION_SET_LIST
} from "../actions/todoAction";

const DEFAULT_LIST = []
const DEFAULT_TODO = {}

const initialState = {
  list: DEFAULT_LIST,
  todoEdit: DEFAULT_TODO
}

export default function todoReducer(state=initialState, { type, payload }) {
  switch (type) {
    case ACTION_SET_LIST: return { ...state, list: payload }
    case ACTION_TODO_CREATE: return {
      ...state,
      list: [...state.list, { ...payload, }]
    }
    case ACTION_TODO_REMOVE:
      const newList = state.list.filter(todoItem => todoItem.id !== payload)

      return { ...state, list: newList }
    case ACTION_TODO_EDIT: return { ...state, todoEdit: payload }
    case ACTION_TODO_UPDATE:
      const updateList = state.list.map(todoItem => todoItem.id === payload.id ? payload : todoItem)

      return { ...state, list: updateList }
    default: return state
  }
}