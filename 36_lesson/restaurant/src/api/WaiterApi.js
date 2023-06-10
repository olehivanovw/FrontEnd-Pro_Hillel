export default class WaiterAPI {
  static URL = 'https://mock-api-5678.nw.r.appspot.com/waiters/'

  static request(url = '', method = '', body, errorMessage) {
    return fetch(WaiterAPI.URL + url, {
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

  static getWaiter() {
    return WaiterAPI.request('','GET','','Can not retrieve from server')
  }

  static getOneWaiter(id) {
    return WaiterAPI.request(id,'GET','','Can not retrieve from server')
  }

  static createWaiter(data) {
    return WaiterAPI.request('', 'POST', data, 'Can not create on server')
  }

  static deleteWaiter(id) {
    return WaiterAPI.request(id, 'DELETE', '', 'Can not delete on server')
  }

  static updateWaiter(id, changes) {
    return WaiterAPI.request(id, 'PUT', changes, 'Can not update on server')
  }
}