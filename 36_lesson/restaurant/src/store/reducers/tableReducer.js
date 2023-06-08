import {
  ACTION_SET_LIST_TABLE,
} from "../actions/tableAction";

const DEFAULT_LIST_TABLE = []

const initialState = {
  listTable: DEFAULT_LIST_TABLE
}

export default function tableReducer(state=initialState, { type, payload }) {
  switch (type) {
    case ACTION_SET_LIST_TABLE: return { ...state, listTable: payload }
    default: return state
  }
}