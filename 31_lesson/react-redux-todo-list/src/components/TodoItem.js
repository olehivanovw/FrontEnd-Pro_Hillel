export default function TodoItem ({ todo, onTodoEdit, onTodoDelete }) {
  function onEditBtnClick() {
    onTodoEdit(todo)
  }

  function onDeleteBtnClick() {
    onTodoDelete(todo.id)
  }

  return (
    <li className='todoItem'>
      <span className='todoItem-text'>{todo.title}</span>
      <button className='btn' onClick={onEditBtnClick}>Edit</button>
      <button className='btn' onClick={onDeleteBtnClick}>Delete</button>
    </li>
  )
}