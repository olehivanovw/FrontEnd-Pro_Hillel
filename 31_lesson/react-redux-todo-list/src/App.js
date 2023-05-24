import Header from "./components/Header";
import Todo from "./components/Todo";
import Footer from "./components/Footer";
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {create, edit, remove, update} from "./store/actions/todoAction";

function App() {
  const listInit = useSelector(state => state.todo.list)
  const todoEdit = useSelector(state => state.todo.todoEdit)
  const dispatch = useDispatch()

  function onTodoSubmit(todo) {
    if (todo.id) {
      dispatch(update(todo))
      dispatch(edit({}))
    } else {
      dispatch(create(todo))
    }
  }

  function onTodoEdit(todo) {
    dispatch(edit(todo))
  }

  function onTodoDelete(id) {
    dispatch(remove(id))
  }

  return (
    <div className="App">
      <Header
        onTodoSubmit={onTodoSubmit}
        todoItemEdit={todoEdit}
      />
      <Todo
        todoInit={listInit}
        onTodoEdit={onTodoEdit}
        onTodoDelete={onTodoDelete}
      />
      <Footer />
    </div>
  );
}

export default App;
