import React from 'react'
import { shallow } from 'enzyme'

import Textplate from '../../../components/Tile/Textplate'

import Title from '../../../components/Tile/Title'
import ReleaseDate from '../../../components/Tile/ReleaseDate'
import Overview from '../../../components/Tile/Overview'
import Votes from '../../../components/Tile/Votes'

describe('Textplate', () => {
  const title = 'Midsommar'
  const releaseDate = 'release date'
  const overview = 'overview text'
  const average = 1234
  const count = 4321

  const data = {
    title,
    release_date: releaseDate,
    overview: overview,
    vote_average: average,
    vote_count: count,
  }

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Textplate data={data} />)
  })

  it('renders several Tile sub-components', () => {
    expect(wrapper.find('Title').props()).toEqual({ title })

    expect(wrapper.find('ReleaseDate').props()).toEqual({ releaseDate })

    expect(wrapper.find('Overview').props()).toEqual({ overview })

    expect(wrapper.find('Votes').props()).toEqual({ average, count })
  })
})
