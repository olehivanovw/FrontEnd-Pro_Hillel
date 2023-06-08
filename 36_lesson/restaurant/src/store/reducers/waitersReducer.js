import {
  ACTION_SET_LIST_WAITER,
} from "../actions/waiterAction";

const DEFAULT_LIST_WAITER = []

const initialState = {
  listWaiter: DEFAULT_LIST_WAITER
}

export default function waiterReducer(state=initialState, { type, payload }) {
  switch (type) {
    case ACTION_SET_LIST_WAITER: return { ...state, listWaiter: payload }
    default: return state
  }
}