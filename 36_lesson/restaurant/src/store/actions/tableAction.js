import TableAPI from "../../api/TableApi";

export const ACTION_SET_LIST_TABLE = 'ACTION_SET_LIST_TABLE'
export const ACTION_REMOVE_TABLE = 'ACTION_REMOVE_TABLE'
export const ACTION_CREATE_TABLE = 'ACTION_CREATE_TABLE'
export const ACTION_UPDATE_TABLE = 'ACTION_UPDATE_TABLE'
export const ACTION_EDIT_TABLE = 'ACTION_EDIT_TABLE'
export const ACTION_CLEAR_EDIT_TABLE = 'ACTION_CLEAR_EDIT_TABLE'

export function setList(list) {
  return { type: ACTION_SET_LIST_TABLE, payload: list }
}

export function remove(id) {
  return { type: ACTION_REMOVE_TABLE, payload: id }
}

export function create(table) {
  return { type: ACTION_CREATE_TABLE, payload: table }
}

export function update(table) {
  return { type: ACTION_UPDATE_TABLE, payload: table }
}

export function edit(table) {
  return { type: ACTION_EDIT_TABLE, payload: table }
}

export function clearEditTable() {
  return { type: ACTION_CLEAR_EDIT_TABLE }
}

export function saveTable(table) {
  return (dispatch) => {
    if (table.id) {
      TableAPI.updateTable(table.id, table)
        .then(() => {
          dispatch(update(table))
          dispatch(edit({}))
        })
    } else {
      TableAPI.createTable(table)
        .then((newTable) => {
          dispatch(create(newTable))
        })
    }
  }
}

export function getServerTables() {
  return (dispatch) => {
    TableAPI.getTable()
      .then((newList) => {
        dispatch(setList(newList))
      })
  }
}

export function getServerOneTable(id) {
  return (dispatch) => {
    TableAPI.getOneTable(id)
      .then((newTable) => {
        dispatch(edit(newTable))
      })
  }
}

export function removeTable (table) {
  return (dispatch) => {
    TableAPI.deleteTable(table.id)
      .then(() => {
        dispatch(remove(table.id))
      })
  }
}