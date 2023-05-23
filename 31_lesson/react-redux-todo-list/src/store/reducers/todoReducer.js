import { ACTION_TODO_CREATE, ACTION_TODO_REMOVE, ACTION_TODO_EDIT } from "../actions/todoAction";

const DEFAULT_TODO = {}

const initialState = {
  list: [
    { "title": "some text", "status": true, "done": false, "id": "1", },
    { "title": "some number", "status": true, "done": true, "id": "2", },
    { "title": "some email", "status": true, "done": true, "id": "3", }
  ],
  todoEdit: DEFAULT_TODO
}

export default function todoReducer(state=initialState, { type, payload }) {
  switch (type) {
    case ACTION_TODO_CREATE: return {
      ...state,
      list: [...state.list, { ...payload, "id": Math.random() }]
    }
    case ACTION_TODO_REMOVE:
      const newList = state.list.filter(todoItem => todoItem.id !== payload)

      return { ...state, list: newList }
    case ACTION_TODO_EDIT:
      const newItem = state.list.map(todoItem => todoItem.id === payload.id ? payload : todoItem)

      return { ...state, list: newItem, todoEdit: payload }
    default: return state
  }
}