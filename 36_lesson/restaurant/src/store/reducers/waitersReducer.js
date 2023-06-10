import {
  ACTION_SET_LIST_WAITER,
  ACTION_REMOVE_WAITER,
  ACTION_CREATE_WAITER,
  ACTION_UPDATE_WAITER,
  ACTION_EDIT_WAITER,
  ACTION_CLEAR_EDIT_WAITER,
} from "../actions/waiterAction";

const DEFAULT_LIST_WAITER = []
const DEFAULT_LIST_WAITER_EDIT = { firstName: '', phone: '' }

const initialState = {
  listWaiter: DEFAULT_LIST_WAITER,
  listWaiterEdit: DEFAULT_LIST_WAITER_EDIT
}

export default function waiterReducer(state=initialState, { type, payload }) {
  switch (type) {
    case ACTION_SET_LIST_WAITER: return { ...state, listWaiter: payload }
    case ACTION_REMOVE_WAITER:
      const newList = state.listWaiter.filter(waiterItem => waiterItem.id !== payload)

      return { ...state, listWaiter: newList }
    case ACTION_CREATE_WAITER: return {
      ...state,
      listWaiter: [...state.listWaiter, { ...payload }]
    }
    case ACTION_UPDATE_WAITER:
      const updateList = state.listWaiter.map(waiterItem => waiterItem.id === payload.id ? payload : waiterItem)

      return { ...state, listWaiter: updateList }
    case ACTION_EDIT_WAITER: return { ...state, listWaiterEdit: payload }
    case ACTION_CLEAR_EDIT_WAITER: return { ...state, listWaiterEdit: DEFAULT_LIST_WAITER_EDIT }
    default: return state
  }
}