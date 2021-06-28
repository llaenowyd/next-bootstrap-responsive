import React from 'react'
import { shallow } from 'enzyme'

import Tile from '../../../components/Tile'

import Image from '../../../components/Tile/Image'
import Textplate from '../../../components/Tile/Textplate'

describe('Tile', () => {
  const posterPath = 'poster path'

  const data = {
    title: 'Midsommar',
    poster_path: posterPath,
    overview: 'Lorem ipsum',
    vote_average: 8,
    vote_count: 1234,
  }

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Tile data={data} />)
  })

  it('renders an Image and a Textplate', () => {
    const image = wrapper.find(Image)
    const textplate = wrapper.find(Textplate)

    const imageProps = image.props()
    const textplateProps = textplate.props()

    expect(imageProps).toEqual({ posterPath })
    expect(textplateProps).toEqual({ data })
  })
})
