import Header from "./components/Header";
import Todo from "./components/Todo";
import Footer from "./components/Footer";
import useTodo from "./hooks/useTodo";
import './App.css';

function App() {
  const { todoList, todoItemEdit, onTodoSubmit, onTodoEdit, onTodoDelete } = useTodo()

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
