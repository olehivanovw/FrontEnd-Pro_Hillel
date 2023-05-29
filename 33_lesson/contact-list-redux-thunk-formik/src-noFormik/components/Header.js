import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveContact } from "../store/actions/contactAction";

export default function Header () {
  const contactEdit = useSelector(state => state.contact.contactEdit)
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [phone, setPhone] = useState('')

  function onInputNameChange(e) {
    setName(e.target.value)
  }

  function onInputSurnameChange(e) {
    setSurname(e.target.value)
  }

  function onInputPhoneChange(e) {
    setPhone(e.target.value)
  }

  function onSubmit(e) {
    e.preventDefault()

    const contactDate = { ...contactEdit, name, surname, phone }

    dispatch(saveContact(contactDate))

    clearInput()
  }

  function clearInput() {
    setName('')
    setSurname('')
    setPhone('')
  }

  useEffect(() => {
    if (contactEdit.name) {
      setName(contactEdit.name)
    }
  }, [contactEdit.name])

  useEffect(() => {
    if (contactEdit.surname) {
      setSurname(contactEdit.surname)
    }
  }, [contactEdit.surname])

  useEffect(() => {
    if (contactEdit.phone) {
      setPhone(contactEdit.phone)
    }
  }, [contactEdit.phone])
  
  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Enter name'
        id='inputName'
        value={name}
        onChange={onInputNameChange}
      />
      <input
        type='text'
        placeholder='Enter surname'
        id='inputSurname'
        value={surname}
        onChange={onInputSurnameChange}
      />
      <input
        type='text'
        placeholder='Enter phone'
        id='inputPhone'
        value={phone}
        onChange={onInputPhoneChange}
      />
      <button className='btn'>Save Contact</button>
    </form>
  )
}