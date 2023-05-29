import { useDispatch } from "react-redux";
import { edit, removeContact, statusContact } from "../store/actions/contactAction";

export default function ContactItem ({ contact }) {
  const dispatch = useDispatch()

  function onEditBtnClick(e) {
    e.stopPropagation()
    dispatch(edit(contact))
  }

  function onDeleteBtnClick(e) {
    e.stopPropagation()
    dispatch(removeContact(contact))
  }

  function onLiClick (e) {
    e.stopPropagation()
    dispatch(statusContact(contact))
  }

  return (
    <li className={`contactItem ${contact.done ? 'contactItem-done' : ''}`} onClick={onLiClick}>
      <span className='contactItem-text'>{contact.name}</span>
      <span className='contactItem-text'>{contact.surname}</span>
      <span className='contactItem-text'>{contact.phone}</span>
      <button className='btn' onClick={onEditBtnClick}>Edit</button>
      <button className='btn' onClick={onDeleteBtnClick}>Delete</button>
    </li>
  )
}