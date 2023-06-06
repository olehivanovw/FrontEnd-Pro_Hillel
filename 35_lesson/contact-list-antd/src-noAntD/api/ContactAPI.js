export default class ContactAPI {
  static API = 'https://64255d537ac292e3cffe899f.mockapi.io/api/contacts/'

  static request(url = '', method = '', body, errorMessage) {
    return fetch(ContactAPI.API + url, {
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

  static getContact() {
    return ContactAPI.request('','GET','','Can not retrieve from server')
  }

  static getOneContact(id) {
    return ContactAPI.request(id,'GET','','Can not retrieve from server')
  }

  static createContact(data) {
    return ContactAPI.request('', 'POST', data, 'Can not create on server')
  }

  static deleteContact(id) {
    return ContactAPI.request(id, 'DELETE', '', 'Can not delete on server')
  }

  static updateContact(id, changes) {
    return ContactAPI.request(id, 'PUT', changes, 'Can not update on server')
  }
}