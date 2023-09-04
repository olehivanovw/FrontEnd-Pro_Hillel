export default class TableAPI {
  static URL = 'https://testapi-sywb.onrender.com/tables/'

  static request(url = '', method = '', body, errorMessage) {
    return fetch(TableAPI.URL + url, {
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

  static getTable() {
    return TableAPI.request('','GET','','Can not retrieve from server')
  }

  static getOneTable(id) {
    return TableAPI.request(id,'GET','','Can not retrieve from server')
  }

  static createTable(data) {
    return TableAPI.request('', 'POST', data, 'Can not create on server')
  }

  static deleteTable(id) {
    return TableAPI.request(id, 'DELETE', '', 'Can not delete on server')
  }

  static updateTable(id, changes) {
    return TableAPI.request(id, 'PUT', changes, 'Can not update on server')
  }
}