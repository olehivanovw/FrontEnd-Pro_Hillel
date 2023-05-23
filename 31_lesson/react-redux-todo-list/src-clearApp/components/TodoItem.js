import {useDispatch} from "react-redux";
import {edit, remove} from "../store/actions/todoAction";

export default function TodoItem ({ todo }) {
  const dispatch = useDispatch()

  function onEditBtnClick() {
    dispatch(edit(todo))
  }

  function onDeleteBtnClick() {
    dispatch(remove(todo.id))
  }

  return (
    <li className='todoItem'>
      <span className='todoItem-text'>{todo.title}</span>
      <button className='btn' onClick={onEditBtnClick}>Edit</button>
      <button className='btn' onClick={onDeleteBtnClick}>Delete</button>
    </li>
  )
}