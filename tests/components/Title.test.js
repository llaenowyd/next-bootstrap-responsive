import React from 'react'
import { shallow } from 'enzyme'

import Title from '../../components/Title'

describe('Title', () => {
  const titleText = 'Movie Search App'
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Title />)
  })

  it('renders the title text', () => {
    expect(wrapper.text()).toContain(titleText)
  })
})
