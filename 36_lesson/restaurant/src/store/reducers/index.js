import { combineReducers } from "redux";
import orderReducer from "./orderReducer";
import tableReducer from "./tableReducer";
import waiterReducer from "./waitersReducer";
import dishReducer from "./dishReducer";

export const rootReducer = combineReducers({
  order: orderReducer,
  table: tableReducer,
  waiter: waiterReducer,
  dish: dishReducer,
})