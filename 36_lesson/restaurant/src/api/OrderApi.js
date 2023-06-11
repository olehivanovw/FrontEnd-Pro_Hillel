export default class OrderApi {
  static URL = 'https://mock-api-5678.nw.r.appspot.com/orders/'

  static request(url = '', method = '', body, errorMessage) {
    return fetch(OrderApi.URL + url, {
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

  static getOrder() {
    return OrderApi.request('','GET','','Can not retrieve from server')
  }

  static getOneOrder(id) {
    return OrderApi.request(id,'GET','','Can not retrieve from server')
  }

  static createOrder(data) {
    return OrderApi.request('', 'POST', data, 'Can not create on server')
  }

  static deleteOrder(id) {
    return OrderApi.request(id, 'DELETE', '', 'Can not delete on server')
  }

  static updateOrder(id, changes) {
    return OrderApi.request(id, 'PUT', changes, 'Can not update on server')
  }
}