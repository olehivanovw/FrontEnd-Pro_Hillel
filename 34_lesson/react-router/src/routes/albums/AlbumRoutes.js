import { Route, Routes } from "react-router-dom";
import Album from "./Album";
import NotFound from "../NotFound";
import Photo from "../photos/Photo";

export default function AlbumRoutes () {
  return (
    <Routes>
      <Route path='/' element={<Album />}></Route>
      <Route path=':idAlbum/photo' element={<Photo />}></Route>
      <Route path='/*' element={<NotFound />} />
    </Routes>
  );
}