import OrderApi from "../../api/OrderApi";

export const ACTION_SET_LIST_ORDER = 'ACTION_SET_LIST_ORDER'
export const ACTION_REMOVE_ORDER = 'ACTION_REMOVE_ORDER'
export const ACTION_CREATE_ORDER = 'ACTION_CREATE_ORDER'
export const ACTION_UPDATE_ORDER = 'ACTION_UPDATE_ORDER'
export const ACTION_EDIT_ORDER = 'ACTION_EDIT_ORDER'
export const ACTION_CLEAR_EDIT_ORDER = 'ACTION_CLEAR_EDIT_ORDER'

export function setListOrder(list) {
  return { type: ACTION_SET_LIST_ORDER, payload: list }
}

export function remove(id) {
  return { type: ACTION_REMOVE_ORDER, payload: id }
}

export function create(order) {
  return { type: ACTION_CREATE_ORDER, payload: order }
}

export function update(order) {
  return { type: ACTION_UPDATE_ORDER, payload: order }
}

export function edit(order) {
  return { type: ACTION_EDIT_ORDER, payload: order }
}

export function clearEditOrder() {
  return { type: ACTION_CLEAR_EDIT_ORDER }
}

// export function getServerOrders() {
//   return (dispatch) => {
//     OrderApi.getOrder()
//       .then((newList) => {
//         dispatch(setListOrder(newList))
//       })
//   }
// }

export function saveOrder(order) {
  return (dispatch) => {
    if (order.id) {
      OrderApi.updateOrder(order.id, order)
        .then(() => {
          dispatch(update(order))
          dispatch(edit({}))
        })
    } else {
      OrderApi.createOrder(order)
        .then((newOrder) => {
          dispatch(create(newOrder))
        })
    }
  }
}

export function getServerOneOrder(id) {
  return (dispatch) => {
    OrderApi.getOneOrder(id)
      .then((newOrder) => {
        dispatch(edit(newOrder))
      })
  }
}