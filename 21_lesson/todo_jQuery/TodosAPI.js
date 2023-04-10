class TodosAPI {
  static API = 'https://64255d537ac292e3cffe899f.mockapi.io/api/todo'

  static request(url = '', method = '', body, errorMessage) {
    return fetch(TodosAPI.API + url, {
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

  static getList() {
    return TodosAPI.request('','GET','', 'Can not retrieve todo list from server')
  }

  static create(data) {
    return TodosAPI.request('', 'POST', data, 'Can not create todo on server')
  }

  static delete(id) {
    return TodosAPI.request(`/${id}`, 'DELETE', '', 'Can not delete todo on server')
  }

  static update(id, changes) {
    return TodosAPI.request(`/${id}`, 'PUT', changes, 'Can not update todo on server')
  }
}

