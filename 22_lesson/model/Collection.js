class Collection {
  static DEFAULT_TODO = {
    done: false,
  }

  #todoList = []

  fetch () {
    return TodoAPI.getList()
      .then((list) => {
        this.#todoList = list
      })
  }

  create (todo) {
    return TodoAPI.create({
      ...Collection.DEFAULT_TODO,
      ...todo,
    })
      .then((data) => {
        this.addListItem(data)

        return data
      })
  }

  update (id, data) {
    return TodoAPI.update(id, data)
      .then((newData) => {
        this.editListItem(id, newData)

        return newData
      })
  }

  delete(id) {
    this.deleteListItem(id)

    TodoAPI.delete(id)

    return Promise.resolve()
  }

  getList () {
    return this.#todoList
  }

  editListItem(id, data) {
    this.#todoList = this.#todoList.map(todoItem => todoItem.id === id ? data : todoItem)
  }

  addListItem(data) {
    this.#todoList.push(data)
  }

  deleteListItem(id) {
    this.#todoList = this.#todoList.filter(todoItem => todoItem.id !== id)
  }

  findItem(id) {
    return this.#todoList.find(data => data.id === id)
  }
}