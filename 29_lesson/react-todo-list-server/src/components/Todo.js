import TodoItem from "./TodoItem";

export default function Todo ({ todoInit, onTodoEdit, onTodoDelete }) {
  const todoList = todoInit.map(todo => (
    <TodoItem
      key={todo.id}
      todo={todo}
      onTodoEdit={onTodoEdit}
      onTodoDelete={onTodoDelete}
    />
  ))

  return (
    <ul className='todoList'>
      {todoList}
    </ul>
  )
}