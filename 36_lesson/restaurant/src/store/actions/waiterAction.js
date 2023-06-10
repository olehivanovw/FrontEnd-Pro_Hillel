import WaiterAPI from "../../api/WaiterApi";

export const ACTION_SET_LIST_WAITER = 'ACTION_SET_LIST_WAITER'
export const ACTION_REMOVE_WAITER = 'ACTION_REMOVE_WAITER'
export const ACTION_CREATE_WAITER = 'ACTION_CREATE_WAITER'
export const ACTION_UPDATE_WAITER = 'ACTION_UPDATE_WAITER'
export const ACTION_EDIT_WAITER = 'ACTION_EDIT_WAITER'
export const ACTION_CLEAR_EDIT_WAITER = 'ACTION_CLEAR_EDIT_WAITER'

export function setList(list) {
  return { type: ACTION_SET_LIST_WAITER, payload: list }
}

export function remove(id) {
  return { type: ACTION_REMOVE_WAITER, payload: id }
}

export function create(waiter) {
  return { type: ACTION_CREATE_WAITER, payload: waiter }
}

export function update(waiter) {
  return { type: ACTION_UPDATE_WAITER, payload: waiter }
}

export function edit(waiter) {
  return { type: ACTION_EDIT_WAITER, payload: waiter }
}

export function clearEditWaiter() {
  return { type: ACTION_CLEAR_EDIT_WAITER }
}

export function saveWaiter(waiter) {
  return (dispatch) => {
    if (waiter.id) {
      WaiterAPI.updateWaiter(waiter.id, waiter)
        .then(() => {
          dispatch(update(waiter))
          dispatch(edit({}))
        })
    } else {
      WaiterAPI.createWaiter(waiter)
        .then((newWaiter) => {
          dispatch(create(newWaiter))
        })
    }
  }
}

export function getServerWaiters() {
  return (dispatch) => {
    WaiterAPI.getWaiter()
      .then((newList) => {
        dispatch(setList(newList))
      })
  }
}

export function getServerOneWaiter(id) {
  return (dispatch) => {
    WaiterAPI.getOneWaiter(id)
      .then((newWaiter) => {
        dispatch(edit(newWaiter))
      })
  }
}

export function removeWaiter(waiter) {
  return (dispatch) => {
    WaiterAPI.deleteWaiter(waiter.id)
      .then(() => {
        dispatch(remove(waiter.id))
      })
  }
}

