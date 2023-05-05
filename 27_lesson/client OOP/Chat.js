class Chat {
  constructor(param) {
    this.param = param
  }

  #ws = new WebSocket('ws://localhost:8080')

  send (data) {
    return this.#ws.send(JSON.stringify(data))
  }

  onMessage () {
    return this.#ws.onmessage = (e) => {
      try {
        const data = JSON.parse(e.data)
        this.param.showMessage(data)
      } catch (error) {
        console.error(`Can not parse this data, error: ${error.message}`)
      }
    }
  }

  onOpen () {
    return this.#ws.onopen = () => { console.log('Connection was started') }
  }

  onClose () {
    return this.#ws.onclose = () => { console.log('Connection was stopped') }
  }

  onError () {
    return this.#ws.onerror = (error) => { console.log(`Connection was interrupted, ${error.message}`) }
  }
}