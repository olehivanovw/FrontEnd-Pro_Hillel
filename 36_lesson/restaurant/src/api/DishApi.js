export default class DishAPI {
  static URL = 'https://mock-api-5678.nw.r.appspot.com/dishes/'

  static request(url = '', method = '', body, errorMessage) {
    return fetch(DishAPI.URL + url, {
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

  static getDish() {
    return DishAPI.request('','GET','','Can not retrieve from server')
  }

  static createDish(data) {
    return DishAPI.request('', 'POST', data, 'Can not create on server')
  }

  static deleteDish(id) {
    return DishAPI.request(id, 'DELETE', '', 'Can not delete on server')
  }

  static updateDish(id, changes) {
    return DishAPI.request(id, 'PUT', changes, 'Can not update on server')
  }
}