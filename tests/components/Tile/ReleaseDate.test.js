import React from 'react'
import { shallow } from 'enzyme'

import ReleaseDate from '../../../components/Tile/ReleaseDate'

describe('ReleaseDate', () => {
  const NBSP = '\u00A0'

  it('renders the year if releaseDate supplied', () => {
    const releaseDate = '2021-06-25'
    const wrapper = shallow(<ReleaseDate releaseDate={releaseDate} />)
    expect(wrapper.text()).toContain(releaseDate.substr(0, 4))
  })

  it('renders &nbsp; if releaseDate not supplied', () => {
    const wrapper = shallow(<ReleaseDate />)
    expect(wrapper.text()).toContain(NBSP)
  })
})
