const store = {
    debug: true,
    state: {
      message: 'Hello!',
      number:-10
    },
    setMessageAction (newValue) {
      // eslint-disable-next-line no-console
      if (this.debug) console.log('setMessageAction triggered with', newValue)
      this.state.number = newValue
    },
    clearMessageAction () {
      // eslint-disable-next-line no-console
      if (this.debug) console.log('clearMessageAction triggered')
      this.state.message = ''
    }
  }
  export default store;