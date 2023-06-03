import { Route, Routes } from "react-router-dom";
import NotFound from "../NotFound";
import AlbumRoutes from "../albums/AlbumRoutes";

export default function UserRoutes () {
  return (
    <Routes>
      <Route path=':idUser/albums/*' element={<AlbumRoutes />}></Route>
      <Route path='/*' element={<NotFound />} />
    </Routes>
  );
}