class TodoAPI {
  static API = 'https://64255d537ac292e3cffe899f.mockapi.io/api/todo'

  static getList() {
    return fetch(TodoAPI.API)
      .then((res) => {
        if (res.ok) {
          return res.json()
        }

        throw new Error('Can not retrieve todo list from server')
      })
  }

  static create(data) {
    return fetch(TodoAPI.API, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }

        throw new Error('Can not create todo on server')
      })
  }

  static delete(id) {
    return fetch(TodoAPI.API + '/' + id, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }

        throw new Error('Can not delete todo on server')
      })
  }

  static update(id, status) {
    return fetch(TodoAPI.API + '/' + id, {
      method: 'PUT',
      body: JSON.stringify({
        done: status,
      }),
      headers: {
        'Content-type': 'application/json',
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }

        throw new Error('Can not update todo on server')
      })
  }
}

