class ContactsAPI {
  static API = 'https://64255d537ac292e3cffe899f.mockapi.io/api/contacts/'

  static request(url = '', method = 'GET', body) {
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

        throw new Error('Can not perform server request')
      })
  }

  static getContacts() {
    return ContactsAPI.request().catch(() => {
      throw new Error('Can not retrieve contacts from server')
    })
  }

  static createContact(data) {
    return ContactsAPI.request('', 'POST', data).catch(() => {
      throw new Error('Can not create contact on server')
    })
  }

  static updateContact(id, changes) {
    return ContactsAPI.request(id, 'PUT', changes).catch(() => {
      throw new Error('Can not update contact on server')
    })
  }

  static deleteContact(id) {
    return ContactsAPI.request(id, 'DELETE').catch(() => {
      throw new Error('Can not delete contact on server')
    })
  }

  // static getContacts() {
  //   return fetch(ContactsAPI.API)
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json()
  //       }
  //
  //       throw new Error('Can not retrieve contacts from server')
  //     })
  // }
  //
  // static createContact(data) {
  //   return fetch(ContactsAPI.API, {
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //     headers: {
  //       'Content-type': 'application/json',
  //     }
  //   })
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json()
  //       }
  //
  //       throw new Error('Can not create contact on server')
  //     })
  // }
  //
  // static updateContact(id, changes) {
  //   return fetch(ContactsAPI.API + id, {
  //     method: 'PUT',
  //     body: JSON.stringify(changes),
  //     headers: {
  //       'Content-type': 'application/json',
  //     }
  //   }).
  //   then((res) => {
  //     if (res.ok) {
  //       return res.json()
  //     }
  //
  //     throw new Error('Can not update contact on server');
  //   })
  // }
  //
  // static deleteContact(id) {
  //   return fetch(ContactsAPI.API + id, {
  //     method: 'DELETE',
  //   })
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json()
  //       }
  //
  //       throw new Error('Can not delete contact on server')
  //     })
  // }
}