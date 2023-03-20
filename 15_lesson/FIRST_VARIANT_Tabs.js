class Tabs {
  static CLASS_ITEM_BTN = 'tabs-item-btn'
  static CLASS_ITEM_CONTENT = 'tabs-item-content'
  static CLASS_BTN_ACTIVE = 'btn-active'
  static CLASS_CONTENT_ACTIVE = 'content-active'
  static DEFAULT_INDEX = 0

  constructor(rootEl) {
    this.rootEl = rootEl

    this.navItems = Array.from(this.rootEl.querySelector('nav').children)
    this.contentItems = Array.from(this.rootEl.querySelector('div').children)

    this.bindNavStyles()
    this.bindContentStyles()
    this.bindEvents()
    this.defaultActiveElement(Tabs.DEFAULT_INDEX)
  }

  bindNavStyles() {
    this.navItems.forEach((navEl) => {
      navEl.classList.add(Tabs.CLASS_ITEM_BTN)
    })
  }

  bindContentStyles() {
    this.contentItems.forEach((contentEl) => {
      contentEl.classList.add(Tabs.CLASS_ITEM_CONTENT)
    })
  }

  bindEvents() {
    this.rootEl.addEventListener('click', this.onRootElClick.bind(this))
  }

  onRootElClick(e) {
    const target = e.target
    const btnEl = this.findBtnEl(target)

    if (!btnEl) {
      return
    }

    const activeBtnEl = this.findActiveBtnEl()

    if (activeBtnEl) {
      this.closeBtnEl(activeBtnEl)
    }

    this.activeBtn(btnEl)

    const contentEl = this.indexOfBtnEl()
    const activeContentEl = this.findActiveContentEl()

    if (activeContentEl) {
      this.closeContentEl(activeContentEl)
    }

    this.activeContent(contentEl)

  }

  findBtnEl(el) {
    return el.closest('.' + Tabs.CLASS_ITEM_BTN)
  }

  findActiveBtnEl() {
    return this.rootEl.querySelector('.' + Tabs.CLASS_BTN_ACTIVE)
  }

  activeBtn(el) {
    el.classList.add(Tabs.CLASS_BTN_ACTIVE)
  }

  closeBtnEl(el) {
    el.classList.remove(Tabs.CLASS_BTN_ACTIVE)
  }

  indexOfBtnEl() {
    const active = this.rootEl.querySelector('.' + Tabs.CLASS_BTN_ACTIVE)
    return this.navItems.indexOf(active)
  }

  findActiveContentEl() {
    return this.rootEl.querySelector('.' + Tabs.CLASS_CONTENT_ACTIVE)
  }

  activeContent(index) {
    this.contentItems[index].classList.add(Tabs.CLASS_CONTENT_ACTIVE)
  }

  closeContentEl(el) {
    el.classList.remove(Tabs.CLASS_CONTENT_ACTIVE)
  }

  defaultActiveElement(index) {
    const navItem = this.navItems[index]
    const buttonElementByIndex = this.findBtnEl(navItem)

    this.activeBtn(buttonElementByIndex)
    this.activeContent(index)
  }
}