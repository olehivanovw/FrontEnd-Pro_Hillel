import OrderApi from "../../api/OrderApi";
import TableAPI from "../../api/TableApi";
import WaiterAPI from "../../api/WaiterApi";
import DishAPI from "../../api/DishApi";
import { setListTable } from "./tableAction";
import { setListWaiter } from "./waiterAction";
import { setListOrder } from "./orderAction";
import { setListDish } from "./dishAction";

export default function getCommonOrders() {
  return (dispatch) => {
    Promise.all([
      OrderApi.getOrder(),
      WaiterAPI.getWaiter(),
      TableAPI.getTable(),
      DishAPI.getDish(),
    ])
      .then((res) => {
        dispatch(setListOrder(res[0]))
        dispatch(setListWaiter(res[1]))
        dispatch(setListTable(res[2]))
        dispatch(setListDish(res[3]))
      })
  }
}