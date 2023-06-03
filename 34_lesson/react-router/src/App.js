import { Route, Routes } from 'react-router-dom'
import './App.css';
import User from "./routes/users/User";
import NotFound from "./routes/NotFound";
import UserRoutes from "./routes/users/UserRoutes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<User />}></Route>
        <Route path='users/*' element={<UserRoutes />}></Route>
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
