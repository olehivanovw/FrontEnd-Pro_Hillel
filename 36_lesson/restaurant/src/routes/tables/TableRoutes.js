import { Route, Routes } from "react-router-dom";
import NotFound from "../NotFound";
import TableCard from "./TableCard";
import TableForm from "./TableForm";

export default function TableRoutes () {
  return (
    <Routes>
      <Route path='/' element={<TableCard />}></Route>
      <Route path='/create' element={<TableForm />}></Route>
      <Route path='/:idTable/edit' element={<TableForm />}></Route>
      <Route path='/*' element={<NotFound />} />
    </Routes>
  );
}