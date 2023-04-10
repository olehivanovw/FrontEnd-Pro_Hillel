class ContactsAPI {
  static API = 'https://64255d537ac292e3cffe899f.mockapi.io/api/contacts/'

  static request(url = '', method = '', body, errorMessage) {
    return fetch(ContactsAPI.API + url, {
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

  static getContacts() {
    return ContactsAPI.request('','GET','','Can not retrieve contacts from server')
  }

  static createContact(data) {
    return ContactsAPI.request('', 'POST', data, 'Can not create contact on server')
  }

  static updateContact(id, changes) {
    return ContactsAPI.request(id, 'PUT', changes, 'Can not update contact on server')
  }

  static deleteContact(id) {
    return ContactsAPI.request(id, 'DELETE', '', 'Can not delete contact on server')
  }
}