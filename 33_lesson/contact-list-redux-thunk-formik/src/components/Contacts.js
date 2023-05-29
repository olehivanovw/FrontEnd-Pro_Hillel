import ContactItem from "./ContactItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getServerContacts } from "../store/actions/contactAction";

export default function Contacts () {
  const listInit = useSelector(state => state.contact.list)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getServerContacts())
  }, [dispatch])

  const contactList = listInit.map(contact => (
    <ContactItem
      key={contact.id}
      contact={contact}
    />
  ))

  return (
    <ul className='contactList'>
      {contactList}
    </ul>
  )
}