import React from 'react'
import keymage from 'keymage'

/**
 * Extensible component to easily enable keybindings
 *
 * When using KeyboundComponent, the extending Component needs to have a `scope` prop (string)
 * and this.keybinds (array of objects).
 */
class KeyboundComponent extends React.Component {
  constructor(props) {
    super(props)

    this.unbinders = []
  }

  componentDidMount() {
    if (this.scope) {
      keymage.pushScope(this.scope)
    }

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
    // Restore previous scope, if set
    if (this.scope) {
      keymage.popScope()
    }
  }

  createKeybind(bind) {
    const unbinder = keymage(keymage.getScope(), bind.key, bind.action)
    this.unbinders.push(unbinder)
  }
}

export default KeyboundComponent