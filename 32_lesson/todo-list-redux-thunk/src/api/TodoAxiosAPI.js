import axios from 'axios'

export const axiosRequest = (method, url, data) => {
  return axios({
    method: method,
    url: 'https://64255d537ac292e3cffe899f.mockapi.io/api/todo/' + url,
    data: data
  })
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      if (err.response) {
        // Коли стан запросу виходить за рамки 2ХХ
        console.error(err.response.status)
      } else if (err.request) {
        // Коли відповідь не прийшла після надіслання запросу
        console.error(err.request)
      } else {
        // Помилка
        console.error(err.request)
      }
    })
}


export default class TodoAxiosAPI {
  static API = 'https://64255d537ac292e3cffe899f.mockapi.io/api/todo/'

  static req(url = '', method = '', data) {
    return axios({url: TodoAxiosAPI.API + url, method: method, data: data})
      .then((res) => {
        return res.data
      })
      .catch((err) => {
        if (err.response) {
          // Коли стан запросу виходить за рамки 2ХХ
          console.error(err.response.status)
        } else if (err.request) {
          // Коли відповідь не прийшла після надіслання запросу
          console.error(err.request)
        } else {
          // Помилка
          console.error(err.request)
        }
      })
  }

  // Ці два методи ститичні прибрані і викликаються функцієй вище під назвою "axiosRequest"
  // static getAxiosTodos() {
  //   return TodoAxiosAPI.req('', 'GET')
  // }

  // static createAxiosTodos(data) {
  //   return TodoAxiosAPI.req('', 'POST', data)
  // }

  static deleteAxiosTodos(id) {
    return TodoAxiosAPI.req(id, 'DELETE', '')
  }

  static updateAxiosTodos(id, changes) {
    return TodoAxiosAPI.req(id, 'PUT', changes)
  }
}