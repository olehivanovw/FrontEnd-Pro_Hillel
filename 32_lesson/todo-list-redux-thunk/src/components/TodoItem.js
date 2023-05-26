import { useDispatch } from "react-redux";
import { edit, removeTodo, statusTodo } from "../store/actions/todoAction";

export default function TodoItem ({ todo }) {
  const dispatch = useDispatch()

  function onEditBtnClick(e) {
    e.stopPropagation()
    dispatch(edit(todo))
  }

  function onDeleteBtnClick() {
    dispatch(removeTodo(todo))
  }

  function onLiClick (e) {
    e.stopPropagation()
    dispatch(statusTodo(todo))
  }

  return (
    <li className={`todoItem ${todo.done ? 'todoItem-done' : ''}`} onClick={onLiClick}>
      <span className='todoItem-text'>{todo.title}</span>
      <button className='btn' onClick={onEditBtnClick}>Edit</button>
      <button className='btn' onClick={onDeleteBtnClick}>Delete</button>
    </li>
  )
}