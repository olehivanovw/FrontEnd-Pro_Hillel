import ContactItem from "./ContactItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getServerContacts } from "../../store/actions/contactAction";
import { Link } from "react-router-dom";
import { selectContactList } from "../../selectors/selectContacts";

export default function ContactList () {
  const listInit = useSelector(selectContactList)
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
    <div>
      <Link to='/contact/create'><button>Add new contact</button></Link>
      <ul className='contactList'>
        {contactList}
      </ul>
    </div>

  )
}