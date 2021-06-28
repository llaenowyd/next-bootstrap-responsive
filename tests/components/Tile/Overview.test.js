import React from 'react'
import { shallow } from 'enzyme'

import Overview from '../../../components/Tile/Overview'

describe('Overview', () => {
  it('renders the supplied text', () => {
    const overviewText = 'over view text'
    const wrapper = shallow(<Overview overview={overviewText} />)
    expect(wrapper.text()).toContain(overviewText)
  })
})
