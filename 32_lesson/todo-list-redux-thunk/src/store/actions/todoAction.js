// import TodoAPI from '../../api/TodoAPI'
import TodoAxiosAPI from '../../api/TodoAxiosAPI'
import {axiosRequest} from '../../api/TodoAxiosAPI'

export const ACTION_TODO_CREATE = 'ACTION_TODO_CREATE'
export const ACTION_TODO_REMOVE = 'ACTION_TODO_REMOVE'
export const ACTION_TODO_EDIT = 'ACTION_TODO_EDIT'
export const ACTION_TODO_UPDATE = 'ACTION_TODO_UPDATE'
export const ACTION_SET_LIST = 'ACTION_SET_LIST'

export function create(todo) {
  return {type: ACTION_TODO_CREATE, payload: todo}
}

export function remove(id) {
  return {type: ACTION_TODO_REMOVE, payload: id}
}

export function edit(todo) {
  return {type: ACTION_TODO_EDIT, payload: todo}
}

export function update(todo) {
  return {type: ACTION_TODO_UPDATE, payload: todo}
}

export function setList(list) {
  return {type: ACTION_SET_LIST, payload: list}
}

export function statusTodo(todo) {
  const newTodo = {...todo, done: !todo.done}

  return saveTodo(newTodo)
}

export function getServerTodos() {
  return (dispatch) => {
    axiosRequest('GET', '')
      .then((newList) => {
        dispatch(setList(newList))
      })

    // Якщо викликати "axios" іншим способом

    // TodoAxiosAPI.getAxiosTodos()
    //   .then((newList) => {
    //     dispatch(setList(newList))
    //   })

    // Просто на fetch варіант

    // TodoAPI.getTodos()
    //   .then((newList) => {
    //     dispatch(setList(newList))
    //   })
  }
}

export function saveTodo(todo) {
  return (dispatch) => {
    if (todo.id) {
      TodoAxiosAPI.updateAxiosTodos(todo.id, todo)
        .then(() => {
          dispatch(update(todo))
          dispatch(edit({}))
        })

      // Просто на fetch варіант

      // TodoAPI.updateTodos(todo.id, todo)
      //   .then(() => {
      //     dispatch(update(todo))
      //     dispatch(edit({}))
      //   })
    } else {
      axiosRequest('POST', '', todo)
        .then((newTodo) => {
          dispatch(create(newTodo))
        })

      // Якщо викликати "axios" іншим способом

      // TodoAxiosAPI.createAxiosTodos(todo)
      //   .then((newTodo) => {
      //     dispatch(create(newTodo))
      //   })

      // Просто на fetch варіант

      // TodoAPI.createTodos(todo)
      //   .then((newTodo) => {
      //     dispatch(create(newTodo))
      //   })
    }
  }
}

export function removeTodo(todo) {
  return (dispatch) => {
    TodoAxiosAPI.deleteAxiosTodos(todo.id)
      .then(() => {
        dispatch(remove(todo.id))
      })

    // Просто на fetch варіант

    // TodoAPI.deleteTodos(todo.id)
    //   .then(() => {
    //     dispatch(remove(todo.id))
    //   })
  }
}