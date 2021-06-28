import React from 'react'
import { shallow } from 'enzyme'

import Title from '../../../components/Tile/Title'

describe('Title', () => {
  it('renders the supplied text', () => {
    const title = 'title text'
    const wrapper = shallow(<Title title={title} />)
    expect(wrapper.text()).toContain(title)
  })
})
