import { useDispatch } from "react-redux";
import { clearEdit, removeContact, statusContact } from "../../store/actions/contactAction";
import { useNavigate } from 'react-router-dom';

export default function ContactItem ({ contact }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function onEditBtnClick(e) {
    e.stopPropagation()
    dispatch(clearEdit())
    navigate(`${contact.id}/edit/`)
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