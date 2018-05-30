import React from 'react'
import keymage from 'keymage'

/**
 * Extensible component to easily enable keybindings
 *
 * When using KeyboundComponent, the extending Component needs to define this.scope (string)
 * and this.keybinds (array of objects). Optionally, it can also specify this._scope (string)
 * to be used as a "return scope" for when the KeyboundComponent is unmounted.
 */
class KeyboundComponent extends React.Component {
  constructor(props) {
    super(props)

    this.unbinders = []
  }

  componentDidMount() {
    if (this.scope) {
      this._scope = this._scope || keymage.getScope()
      keymage.setScope(this.scope)
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
    keymage.setScope(this._scope)
  }

  createKeybind(bind) {
    const unbinder = keymage(this.scope, bind.key, bind.action)
    this.unbinders.push(unbinder)
  }
}

export default KeyboundComponent