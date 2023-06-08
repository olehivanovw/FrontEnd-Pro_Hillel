import { combineReducers } from "redux";
import tableReducer from "./tableReducer";
import waiterReducer from "./waitersReducer";
import dishReducer from "./dishReducer";

export const rootReducer = combineReducers({
  table: tableReducer,
  waiter: waiterReducer,
  dish: dishReducer,
})