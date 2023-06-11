import DishAPI from "../../api/DishApi";

export const ACTION_SET_LIST_DISH = 'ACTION_SET_LIST_DISH'
export const ACTION_REMOVE_DISH = 'ACTION_REMOVE_DISH'
export const ACTION_CREATE_DISH = 'ACTION_CREATE_DISH'
export const ACTION_UPDATE_DISH = 'ACTION_UPDATE_DISH'
export const ACTION_EDIT_DISH = 'ACTION_EDIT_DISH'
export const ACTION_CLEAR_EDIT_DISH = 'ACTION_CLEAR_EDIT_DISH'

export function setListDish(list) {
  return { type: ACTION_SET_LIST_DISH, payload: list }
}

export function remove(id) {
  return { type: ACTION_REMOVE_DISH, payload: id }
}

export function create(table) {
  return { type: ACTION_CREATE_DISH, payload: table }
}

export function update(table) {
  return { type: ACTION_UPDATE_DISH, payload: table }
}

export function edit(table) {
  return { type: ACTION_EDIT_DISH, payload: table }
}

export function clearEditDish() {
  return { type: ACTION_CLEAR_EDIT_DISH }
}

export function saveDish(dish) {
  return (dispatch) => {
    if (dish.id) {
      DishAPI.updateDish(dish.id, dish)
        .then(() => {
          dispatch(update(dish))
          dispatch(edit({}))
        })
    } else {
      DishAPI.createDish(dish)
        .then((newTable) => {
          dispatch(create(newTable))
        })
    }
  }
}

export function getServerDishes() {
  return (dispatch) => {
    DishAPI.getDish()
      .then((newList) => {
        dispatch(setListDish(newList))
      })
  }
}

export function getServerOneDish(id) {
  return (dispatch) => {
    DishAPI.getOneDish(id)
      .then((newDish) => {
        dispatch(edit(newDish))
      })
  }
}

export function removeDish(table) {
  return (dispatch) => {
    DishAPI.deleteDish(table.id)
      .then(() => {
        dispatch(remove(table.id))
      })
  }
}