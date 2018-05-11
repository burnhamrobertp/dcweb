import React from 'react'
import { shallow } from 'enzyme'
import { MessageLog } from 'scenes/game/MessageLog'

describe('MessageLog Component', () => {

  it('renders string messages', () => {
    const messages = ['a message', 'some other message']
    const wrapper = shallow(<MessageLog messages={messages} />)

    expect(wrapper.contains(messages[0], messages[1])).toEqual(true)
  })
})