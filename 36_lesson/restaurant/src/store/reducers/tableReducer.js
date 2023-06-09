import {
  ACTION_SET_LIST_TABLE,
  ACTION_REMOVE_TABLE,
  ACTION_CREATE_TABLE,
  ACTION_UPDATE_TABLE,
  ACTION_EDIT_TABLE,
  ACTION_CLEAR_EDIT_TABLE,
} from "../actions/tableAction";

const DEFAULT_LIST_TABLE = []
const DEFAULT_LIST_TABLE_EDIT = { number: '' }

const initialState = {
  listTable: DEFAULT_LIST_TABLE,
  listTableEdit: DEFAULT_LIST_TABLE_EDIT
}

export default function tableReducer(state=initialState, { type, payload }) {
  switch (type) {
    case ACTION_SET_LIST_TABLE: return { ...state, listTable: payload }
    case ACTION_REMOVE_TABLE:
      const newList = state.listTable.filter(tableItem => tableItem.id !== payload)

      return { ...state, listTable: newList }
    case ACTION_CREATE_TABLE: return {
      ...state,
      listTable: [...state.listTable, { ...payload }]
    }
    case ACTION_UPDATE_TABLE:
      const updateList = state.listTable.map(tableItem => tableItem.id === payload.id ? payload : tableItem)

      return { ...state, listTable: updateList }
    case ACTION_EDIT_TABLE: return { ...state, listTableEdit: payload }
    case ACTION_CLEAR_EDIT_TABLE: return { ...state, listTableEdit: DEFAULT_LIST_TABLE_EDIT}
    default: return state
  }
}