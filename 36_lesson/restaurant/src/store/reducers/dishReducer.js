import {
  ACTION_SET_LIST_DISH,
  ACTION_REMOVE_DISH,
  ACTION_CREATE_DISH,
  ACTION_UPDATE_DISH,
  ACTION_EDIT_DISH,
  ACTION_CLEAR_EDIT_DISH,
} from "../actions/dishAction";

const DEFAULT_LIST_DISH = []
const DEFAULT_LIST_DISH_EDIT = { name: '', description: '', price: '' }

const initialState = {
  listDish: DEFAULT_LIST_DISH,
  listDishEdit: DEFAULT_LIST_DISH_EDIT
}

export default function dishReducer(state=initialState, { type, payload }) {
  switch (type) {
    case ACTION_SET_LIST_DISH: return { ...state, listDish: payload }
    case ACTION_REMOVE_DISH:
      const newList = state.listDish.filter(dishItem => dishItem.id !== payload)

      return { ...state, listDish: newList }
    case ACTION_CREATE_DISH: return {
      ...state,
      listDish: [ ...state.listDish, { ...payload }]
    }
    case ACTION_UPDATE_DISH:
      const updateDish = state.listDish.map(dishItem => dishItem.id === payload.id ? payload : dishItem)

      return { ...state, listDish: updateDish }
    case ACTION_EDIT_DISH: return { ...state, listDishEdit: payload }
    case ACTION_CLEAR_EDIT_DISH: return { ...state, listDishEdit: DEFAULT_LIST_DISH_EDIT }
    default: return state
  }
}