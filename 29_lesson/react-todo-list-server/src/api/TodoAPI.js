export default class TodoAPI {
  static API = 'https://64255d537ac292e3cffe899f.mockapi.io/api/todo/'

  static request(url = '', method = '', body, errorMessage) {
    return fetch(TodoAPI.API + url, {
      method,
      body: body ? JSON.stringify(body) : undefined,
      headers: {
        'Content-type': 'application/json',
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }

        throw new Error(errorMessage)
      })
  }

  static getTodos() {
    return TodoAPI.request('','GET','','Can not retrieve from server')
  }

  static createTodos(data) {
    return TodoAPI.request('', 'POST', data, 'Can not create on server')
  }

  static deleteTodos(id) {
    return TodoAPI.request(id, 'DELETE', '', 'Can not delete on server')
  }

  static updateTodos(id, changes) {
    return TodoAPI.request(id, 'PUT', changes, 'Can not update on server')
  }
}