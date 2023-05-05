export class StudentsAPI {
  static API = 'https://6391adecac688bbe4c4f165a.mockapi.io/api/students/'

  static request(url = '', method = '', body, errorMessage) {
    return fetch(StudentsAPI.API + url, {
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

  static getStudents() {
    return StudentsAPI.request('','GET','','Can not retrieve students from server')
  }

  static createStudents(data) {
    return StudentsAPI.request('', 'POST', data, 'Can not create students on server')
  }

  static deleteStudents(id) {
    return StudentsAPI.request(id, 'DELETE', '', 'Can not delete students on server')
  }

  static updateStudents(id, changes) {
    return StudentsAPI.request(id, 'PUT', changes, 'Can not update students on server')
  }
}