import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {create, edit, update} from "../store/actions/todoAction";

export default function Header () {
  const todoEdit = useSelector(state => state.todo.todoEdit)
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')

  function onInputTitleChange(e) {
    setTitle(e.target.value)
  }

  function onSubmit(e) {
    e.preventDefault()

    const todoTitle = {
      ...todoEdit,
        "title": title,
        "status": true,
        "done": false,
    }

    if (todoTitle.id) {
      dispatch(update(todoTitle))
      dispatch(edit({}))
    } else {
      dispatch(create(todoTitle))
    }

    clearInput()
  }

  function clearInput() {
    setTitle('')
  }

  useEffect(() => {
    if (todoEdit.title) {
      setTitle(todoEdit.title)
    }
  }, [todoEdit.title])
  
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