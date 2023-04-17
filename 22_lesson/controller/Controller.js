class Controller {
  constructor($rootEl) {
    this.todoCollection = new Collection()
    this.todoFormView = new TodoFormView({onSubmit: this.saveData.bind(this)})
    this.todoListView = new TodoListView({
      onDelete: this.deleteEl.bind(this),
      onEdit: this.editEl.bind(this),
      onToggle: this.toggleDone.bind(this),
    })

    this.todoListView.appendTo($rootEl)
    this.todoFormView.appendTo($rootEl)

    this.todoCollection.fetch()
      .then(() => {
        this.todoListView.renderTodoList(this.todoCollection.getList())
      })
      .catch(e => showError(e))
  }

saveData(data) {
  if (data.id) {
    this.todoCollection.update(data.id, data)
      .then((newData) => {
        this.todoListView.changeTodo(data.id, newData)
        this.todoFormView.clearForm()
      })
      .catch(e => showError(e))
  } else {
    this.todoCollection.create(data)
      .then((data) => {
        this.todoListView.renderData(data)
        this.todoFormView.clearForm()
      })
      .catch(e => showError(e))
  }
}

deleteEl(id) {
  this.todoCollection.delete(id).catch(e => showError(e))

  this.todoListView.removeTodo(id)
}

editEl(id) {
  const todo = this.todoCollection.findItem(id)

  this.todoFormView.setDataForm(todo)
}

toggleDone(id) {
  const todo = this.todoCollection.findItem(id)

  todo.done = !todo.done

  this.todoCollection.update(id, todo).catch(e => this.showError(e))

  this.todoListView.changeTodo(id, todo)
}

showError(error) {
  alert(error.message)
}
}