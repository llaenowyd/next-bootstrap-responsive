import React from 'react'
import { shallow } from 'enzyme'

import Image from '../../../components/Tile/Image'

import { useSelector } from 'react-redux'
import { selectors } from '../../../store'

jest.mock('react-redux')

describe('Tile/Image', () => {
  const basePath = 'base path'
  const posterSize = 'poster size'

  const withDataSelectorMock = selector => {
    if (selector === selectors.imagesBaseUrl) return basePath
    else if (selector === selectors.posterSize) return posterSize
    else throw new Error('unexpected selector')
  }

  const noDataSelectorMock = selector => {
    if (
      selector === selectors.imagesBaseUrl ||
      selector === selectors.posterSize
    )
      return null
    else throw new Error('unexpected selector')
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders an img with src built from redux data', () => {
    const posterPath = 'poster path'

    useSelector.mockImplementation(withDataSelectorMock)

    const wrapper = shallow(<Image posterPath={posterPath} />)

    const imgProps = wrapper.find('img').props()

    expect(imgProps.src).toEqual(basePath + posterSize + posterPath)
  })

  it('renders no img if posterPath is not supplied', () => {
    useSelector.mockImplementation(withDataSelectorMock)

    const wrapper = shallow(<Image />)

    expect(wrapper.find('img')).toHaveLength(0)
  })

  it('renders no img if appConfig data unavailable', () => {
    const posterPath = 'poster path'

    useSelector.mockImplementation(noDataSelectorMock)

    const wrapper = shallow(<Image posterPath={posterPath} />)

    expect(wrapper.find('img')).toHaveLength(0)
  })
})
