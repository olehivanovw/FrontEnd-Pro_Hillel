import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getServerTodos } from "../store/actions/todoAction";

export default function Todo () {
  const listInit = useSelector(state => state.todo.list)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getServerTodos())
  }, [dispatch])

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