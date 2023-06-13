import {
  ACTION_SET_LIST_ORDER,
  // ACTION_REMOVE_ORDER,
  ACTION_CREATE_ORDER,
  ACTION_UPDATE_ORDER,
  ACTION_EDIT_ORDER,
  ACTION_CLEAR_EDIT_ORDER
} from "../actions/orderAction";

const DEFAULT_LIST_ORDER = []
const DEFAULT_LIST_ORDER_EDIT = { waiterId: null, tableId: null, dishes: [] }

const initialState = {
  listOrder: DEFAULT_LIST_ORDER,
  listOrderEdit: DEFAULT_LIST_ORDER_EDIT
}

export default function orderReducer(state=initialState, { type, payload }) {
  switch (type) {
    case ACTION_SET_LIST_ORDER: return { ...state, listOrder: payload }

    case ACTION_CREATE_ORDER: return {
      ...state,
      listOrder: [ ...state.listOrder, { ...payload }]
    }
    case ACTION_UPDATE_ORDER:
      const updateOrder = state.listOrder.map(orderItem => orderItem.id === payload.id ? payload : orderItem)

      return { ...state, listOrder: updateOrder }
    case ACTION_EDIT_ORDER: return { ...state, listOrderEdit: payload }
    case ACTION_CLEAR_EDIT_ORDER: return { ...state, listOrderEdit: DEFAULT_LIST_ORDER_EDIT }
    default: return state
  }
}