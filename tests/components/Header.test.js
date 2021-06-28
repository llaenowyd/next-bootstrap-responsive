import React from 'react'
import { shallow } from 'enzyme'

import Header from '../../components/Header'
import Title from '../../components/Title'
import SearchEntry from '../../components/SearchEntry'

describe('Header', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  it('renders a Title', () => {
    expect(wrapper.find(Title)).toHaveLength(1)
  })

  it('renders a SearchEntry', () => {
    expect(wrapper.find(SearchEntry)).toHaveLength(1)
  })
})
