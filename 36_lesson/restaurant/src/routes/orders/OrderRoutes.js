import { Route, Routes } from "react-router-dom";
import NotFound from "../NotFound";
import OrderList from "./OrderList";
import OrderForm from "./OrderForm";


export default function OrderRoutes () {
  return (
    <Routes>
      <Route path='/' element={<OrderList />}></Route>
      <Route path='/create' element={<OrderForm />}></Route>
      <Route path='/:idOrder/edit' element={<OrderForm />}></Route>
      {/*<Route path='/:idOrder/close' element={}></Route>*/}
      <Route path='/*' element={<NotFound />} />
    </Routes>
  );
}