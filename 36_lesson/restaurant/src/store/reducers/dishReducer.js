import {
  ACTION_SET_LIST_DISH,
} from "../actions/dishAction";

const DEFAULT_LIST_DISH = []

const initialState = {
  listDish: DEFAULT_LIST_DISH
}

export default function dishReducer(state=initialState, { type, payload }) {
  switch (type) {
    case ACTION_SET_LIST_DISH: return { ...state, listDish: payload }
    default: return state
  }
}