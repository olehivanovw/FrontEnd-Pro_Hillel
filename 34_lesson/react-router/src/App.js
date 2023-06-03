import { Route, Routes } from 'react-router-dom'
import './App.css';
import User from "./routes/UserGallery/User";
import Album from "./routes/UserGallery/Album";
import Photo from "./routes/UserGallery/Photo";
import NotFound from "./routes/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<User />}></Route>
        <Route path='/albums/:id' element={<Album />}></Route>
        <Route path='/photo/:id' element={<Photo />}></Route>
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
