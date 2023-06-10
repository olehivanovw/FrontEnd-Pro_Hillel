import { Route, Routes } from "react-router-dom";
import NotFound from "../NotFound";
import DishList from "./DishList";
import DishForm from "./DishForm";

export default function DishRoutes () {
  return (
    <Routes>
      <Route path='/' element={<DishList />}></Route>
      <Route path='/create' element={<DishForm />}></Route>
      <Route path='/:idDish/edit' element={<DishForm />}></Route>
      <Route path='/*' element={<NotFound />} />
    </Routes>
  );
}