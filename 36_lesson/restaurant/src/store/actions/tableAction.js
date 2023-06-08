import TableAPI from "../../api/TableApi";

export const ACTION_SET_LIST_TABLE = 'ACTION_SET_LIST_TABLE'

export function setList(list) {
  return { type: ACTION_SET_LIST_TABLE, payload: list }
}

export function getServerTables() {
  return (dispatch) => {
    TableAPI.getTable()
      .then((newList) => {
        dispatch(setList(newList))
      })
  }
}