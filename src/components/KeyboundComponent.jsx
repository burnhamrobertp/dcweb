import React from 'react'
import keymage from 'keymage'

class KeyboundComponent extends React.Component {
  constructor(props) {
    super(props)

    this.unbinders = []
  }

  componentDidMount() {
    this.keybinds.forEach(bind => {
      // Array of keys, or just one key
      if (Array.isArray(bind.key)) {
        bind.key.forEach(key => {
          this.createKeybind({ ...bind, key})
        })
      } else {
        this.createKeybind(bind)
      }
    })
  }

  componentWillUnmount() {
    this.unbinders.forEach(unbind => unbind())
  }

  createKeybind(bind) {
    this.unbinders.push(keymage(bind.key, bind.action))
  }
}

export default KeyboundComponent