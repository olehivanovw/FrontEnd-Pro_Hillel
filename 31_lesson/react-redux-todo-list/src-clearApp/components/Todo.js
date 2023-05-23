import TodoItem from "./TodoItem";
import {useSelector} from "react-redux";

export default function Todo () {
  const listInit = useSelector(state => state.todo.list)

  const todoList = listInit.map(todo => (
    <TodoItem
      key={todo.id}
      todo={todo}
    />
  ))

  return (
    <ul className='todoList'>
      {todoList}
    </ul>
  )
}