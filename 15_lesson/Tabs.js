class Tabs {
  static CLASS_ITEM_BTN = 'tabs-item-btn'
  static CLASS_ITEM_CONTENT = 'tabs-item-content'
  static CLASS_BTN_ACTIVE = 'btn-active'
  static CLASS_CONTENT_ACTIVE = 'content-active'
  static DEFAULT_INDEX = 0

  constructor(rootEl, options) {
    this.options = {
      defaultOpenIndex: Tabs.DEFAULT_INDEX, ...options
    }

    this.rootEl = rootEl
    this.navItems = Array.from(this.rootEl.querySelector('nav').children)
    this.contentItems = Array.from(this.rootEl.querySelector('div').children)

    this.bindStyles(this.navItems, Tabs.CLASS_ITEM_BTN)
    this.bindStyles(this.contentItems, Tabs.CLASS_ITEM_CONTENT)
    this.bindEvents()
    this.activeEl(this.options.defaultOpenIndex)
  }

  bindStyles(item, classItem) {
    item.forEach((navEl) => {
      navEl.classList.add(classItem)
    })
  }

  bindEvents() {
    this.rootEl.addEventListener('click', this.onRootElClick.bind(this))
  }

  onRootElClick(e) {
    const target = e.target
    const btnEl = this.findBtnEl(target)
    const btnElIndex = this.navItems.indexOf(btnEl)

    if (!btnEl) {
      return
    }

    const activeContentEl = this.findActiveContentEl(this.rootEl)
    const contentElIndex = this.contentItems.indexOf(activeContentEl)

    if(activeContentEl) {
      this.closeEl(contentElIndex)
    }

    this.activeEl(btnElIndex)
  }

  findBtnEl(el) {
    return el.closest('.' + Tabs.CLASS_ITEM_BTN)
  }

  findActiveContentEl(el) {
    return el.querySelector('.' + Tabs.CLASS_CONTENT_ACTIVE)
  }

  activeEl(index) {
    this.navItems[index].classList.add(Tabs.CLASS_BTN_ACTIVE)
    this.contentItems[index].classList.add(Tabs.CLASS_CONTENT_ACTIVE)
  }

  closeEl(index) {
    this.navItems[index].classList.remove(Tabs.CLASS_BTN_ACTIVE)
    this.contentItems[index].classList.remove(Tabs.CLASS_CONTENT_ACTIVE)
  }
}