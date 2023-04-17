class TodoFormView {
  constructor(param) {
    this.$form = this.init()
    this.$input = this.$form.find('input')
    this.param = param
  }

  init() {
    return $(`
      <form id="todoForm" class="form">
        <input id="id" type="hidden"/>
        <input id="title" class="formInput" type="text" placeholder="Enter message"/>
        <button id="msgButton" class="formBtn">Send</button>
      </form> 
    `)
      .on('submit', this.onFormSubmit.bind(this))
  }

  appendTo($el) {
    $el.append(this.$form)
  }

  onFormSubmit(e) {
    e.preventDefault()

    const data = this.getDataForm()

    if (!this.isValidData(data)) {
      this.showError(new Error('You must enter correct data'))
      return
    }

    this.param.onSubmit(data)
  }

  getDataForm() {
    const data = {}

    for (const input of this.$input) {
      data[input.id] = input.value;
    }

    return data
  }

  isValidData(data) {
    return data.title !== ''
  }

  setDataForm(data) {
    for (const input of this.$input) {
      input.value = data[input.id];
    }
  }

  clearForm() {
    for (const input of this.$input) {
      input.value = ''
    }
  }

  showError(error) {
    alert(error.message)
  }
}