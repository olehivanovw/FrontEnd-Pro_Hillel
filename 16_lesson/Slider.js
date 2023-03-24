class Slider {
  static CLASS_CONTAINER = 'slider-container'
  static CLASS_ITEM = 'slide-item'
  static CLASS_ITEM_ACTIVE = 'slide-item-active'
  static DEFAULT_INDEX = 0

  constructor(rootEl, options) {
    this.options = {
      defaultOpenIndex: Slider.DEFAULT_INDEX, ...options
    }

    this.rootEl = rootEl
    this.sliderItems = Array.from(this.rootEl.children)

    this.bindStyles()
    this.bindEvents()
    this.defaultActiveEl(this.options.defaultOpenIndex)
  }

  bindStyles() {
    this.rootEl.classList.add(Slider.CLASS_CONTAINER)

    this.sliderItems.forEach((navEl) => {
      navEl.classList.add(Slider.CLASS_ITEM)
    })
  }

  bindEvents() {
    this.rootEl.addEventListener('click', this.onRootElClick.bind(this))
  }

  onRootElClick(e) {
    const target = e.target
    const slideEl = this.findEl(target)
    let indexEl = this.sliderItems.indexOf(target)
    const activeEl = this.findActiveEl(this.rootEl)

    if (!slideEl) {
      return
    }

    if(activeEl) {
      this.closePreviousEl(indexEl)
    }

    this.nextActiveEl(indexEl)
  }

  findEl(el) {
    return el.closest('.' + Slider.CLASS_ITEM)
  }

  findActiveEl(el) {
    return el.querySelector('.' + Slider.CLASS_ITEM_ACTIVE)
  }

  closePreviousEl(index) {
    this.sliderItems[index].classList.remove(Slider.CLASS_ITEM_ACTIVE)
  }

  nextActiveEl(index) {
    index++
    if (index >= this.sliderItems.length) {
      index = 0
    }
    this.sliderItems[index].classList.add(Slider.CLASS_ITEM_ACTIVE)
  }

  defaultActiveEl(index) {
    this.sliderItems[index].classList.add(Slider.CLASS_ITEM_ACTIVE)
  }
}