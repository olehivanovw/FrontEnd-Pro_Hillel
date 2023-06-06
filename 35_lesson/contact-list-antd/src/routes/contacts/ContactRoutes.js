import { Route, Routes } from "react-router-dom";
import NotFound from "../NotFound";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";

export default function ContactRoutes () {
  return (
    <Routes>
      <Route path='/' element={<ContactList />}></Route>
      <Route path='/create' element={<ContactForm />}></Route>
      <Route path='/:idContact/edit' element={<ContactForm />}></Route>
      <Route path='/*' element={<NotFound />} />
    </Routes>
  );
}