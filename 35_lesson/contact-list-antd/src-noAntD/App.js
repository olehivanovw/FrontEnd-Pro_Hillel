import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import ContactRoutes from "./routes/contacts/ContactRoutes";
import './App.css';

function App() {
  const active = ({ isActive }) => isActive ? "active" : ""

  return (
    <div className="App">
      <nav className='navigation'>
        <NavLink to='/' className={active}>Home</NavLink> | {' '}
        <NavLink to='/contact' className={active}>Contact List</NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact/*' element={<ContactRoutes />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
