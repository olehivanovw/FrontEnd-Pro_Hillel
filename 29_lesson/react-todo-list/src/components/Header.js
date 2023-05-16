import { useState, useEffect } from "react";

export default function Header ({ onTodoSubmit, todoItemEdit }) {
  const [title, setTitle] = useState('')

  function onInputTitleChange(e) {
    setTitle(e.target.value)
  }

  function onSubmit(e) {
    e.preventDefault()

    const todoTitle = {
      ...todoItemEdit,
        "title": title,
        "status": true,
        "done": false,
    }

    onTodoSubmit(todoTitle)

    clearInput()
  }

  function clearInput() {
    setTitle('')
  }

  useEffect(() => {
    if (todoItemEdit.title) {
      setTitle(todoItemEdit.title)
    }
  }, [todoItemEdit.title])
  
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor='inputTitle' className='labelText'>Message:</label>
      <input
        type='text'
        placeholder='Enter some text'
        id='inputTitle'
        value={title}
        onChange={onInputTitleChange}
      />
    </form>
  )
}