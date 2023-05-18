import { useEffect, useState } from "react";
import TodoAPI from "../api/TodoAPI";

export default function useTodo() {
  const [todoList, setTodoList] = useState([])
  const [todoItemEdit, setTodoItemEdit] = useState({})

  useEffect(() => {
    TodoAPI.getTodos()
      .then((newTodos) => {
        setTodoList(newTodos)
      })
      .catch(e => showError(e))
  }, [])

  function onTodoSubmit(todo) {
    if (todo.id) {
      TodoAPI.updateTodos(todo.id, todo)
        .then(() => {
          const newItem = todoList.map(todoItem => todoItem.id === todo.id ? todo : todoItem)

          setTodoList(newItem)

          setTodoItemEdit({})
        })
        .catch(e => showError(e))
    } else {
      TodoAPI.createTodos(todo)
        .then((todoWithId) => {
          setTodoList([...todoList, todoWithId])
        })
        .catch(e => showError(e))
    }
  }

  function onTodoEdit(todo) {
    setTodoItemEdit(todo)
  }

  function onTodoDelete(id) {
    TodoAPI.deleteTodos(id)
      .then(() => {
        const newList = todoList.filter(todoItem => todoItem.id !== id)

        setTodoList(newList)
      })
      .catch(e => showError(e))
  }

  function showError(error) {
    alert(error.message)
  }

  return { todoList, todoItemEdit, onTodoSubmit, onTodoEdit, onTodoDelete }
}