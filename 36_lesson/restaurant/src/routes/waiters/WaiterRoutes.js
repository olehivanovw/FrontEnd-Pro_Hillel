import { Route, Routes } from "react-router-dom";
import NotFound from "../NotFound";
import WaiterCard from "../waiters/WaiterCard";
import WaiterForm from "../waiters/WaiterForm";

export default function WaiterRoutes () {
  return (
    <Routes>
      <Route path='/' element={<WaiterCard />}></Route>
      <Route path='/create' element={<WaiterForm />}></Route>
      <Route path='/:idWaiter/edit' element={<WaiterForm />}></Route>
      <Route path='/*' element={<NotFound />} />
    </Routes>
  );
}