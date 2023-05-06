class Chat {
  constructor(param) {
    this.ws = new WebSocket('ws://localhost:8080')
    this.param = param
    this.init()
  }

  init () {
    this.ws.onopen = () => { console.log('Connection was started') }

    this.ws.onclose = () => { console.log('Connection was stopped') }

    this.ws.onerror = (error) => { console.log(`Connection was interrupted, ${error.message}`) }
  }

  send (data) {
    this.ws.send(JSON.stringify(data))
  }

  onMessage () {
    this.ws.onmessage = (e) => {
      try {
        const data = JSON.parse(e.data)
        this.param.showMessage(data)
      } catch (error) {
        console.error(`Can not parse this data, error: ${error.message}`)
      }
    }
  }
}