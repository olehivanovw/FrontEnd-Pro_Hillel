class TodoListView {
  static SELECTOR_DELETE_BTN = '.listDeleteBtn'
  static SELECTOR_EDIT_BTN = '.listEditBtn'
  static SELECTOR_LIST_ITEM = '.listItem'

  constructor(param) {
    this.$list = this.init()
    this.param = param
  }

  init() {
    return $(`<ul id="todoList" class="list"></ul>`)
      .on('click', TodoListView.SELECTOR_DELETE_BTN, this.onDeleteBtnClick.bind(this))
      .on('click', TodoListView.SELECTOR_EDIT_BTN, this.onEditBtnClick.bind(this))
      .on('click', TodoListView.SELECTOR_LIST_ITEM, this.onTodoElBtnClick.bind(this))
  }

  onDeleteBtnClick(e) {
    e.stopPropagation()

    const target = e.target
    const listEl = this.findListEl(target)
    const id = this.getTodoElId(listEl)

    this.param.onDelete(id)
  }

  onEditBtnClick(e) {
    e.stopPropagation()

    const target = e.target
    const listEl = this.findListEl(target)
    const id = this.getTodoElId(listEl)

    this.param.onEdit(id)
  }

  onTodoElBtnClick(e) {
    const target = e.target
    const listEl = this.findListEl(target)
    const id = this.getTodoElId(listEl)

    this.param.onToggle(id)
  }

  findListEl(el) {
    return el.closest(TodoListView.SELECTOR_LIST_ITEM)
  }

  getTodoElId(el) {
    return el.dataset.id
  }

  appendTo($el) {
    $el.append(this.$list)
  }

  renderTodoList(list) {
    const html = list.map(this.generateDataHtml)

    this.$list.html(html)
  }

  renderData(data) {
    const html = this.generateDataHtml(data)

    this.$list.append(html)
  }

  changeTodo(id, data) {
    const oldTodoEl = this.$list.find(`[data-id="${id}"]`)
    const newTodoEl = this.generateDataHtml(data)

    oldTodoEl.replaceWith(newTodoEl)
  }

  generateDataHtml(value) {
    const done = value.done ? 'done' : ''

    return `
    <li class="listItem ${done}" data-id="${value.id}">
      <span>${value.title}</span>
      <button class="listEditBtn">Edit</button>
      <button class="listDeleteBtn">Delete</button>
    </li>
  `
  }

  removeTodo(id) {
    this.$list.find(`[data-id="${id}"]`).remove()
  }
}