import { useState } from "react";
import Header from "./components/Header";
import Todo from "./components/Todo";
import Footer from "./components/Footer";
import './App.css';

const todoInit = [
  { "title": "some text", "status": true, "done": false, "id": "1", },
  { "title": "some number", "status": true, "done": true, "id": "2", },
  { "title": "some email", "status": true, "done": true, "id": "3", }
]

function App() {
  const [todoList, setTodoList] = useState(todoInit)
  const [todoItemEdit, setTodoItemEdit] = useState({})

  function onTodoSubmit(todo) {
    if (todo.id) {
      const newItem = todoList.map(todoItem => todoItem.id === todo.id ? todo : todoItem)

      setTodoList(newItem)

      setTodoItemEdit({})
    } else {
      const todoFromInput = {
        ...todo,
        "id": Math.random()
      }

      setTodoList([...todoList, todoFromInput])
    }
  }

  function onTodoEdit(todo) {
    setTodoItemEdit(todo)
  }

  function onTodoDelete(id) {
    const newList = todoList.filter(todoItem => todoItem.id !== id)

    setTodoList(newList);
  }

  return (
    <div className="App">
      <Header
        onTodoSubmit={onTodoSubmit}
        todoItemEdit={todoItemEdit}
      />
      <Todo
        todoInit={todoList}
        onTodoEdit={onTodoEdit}
        onTodoDelete={onTodoDelete}
      />
      <Footer />
    </div>
  );
}

export default App;
