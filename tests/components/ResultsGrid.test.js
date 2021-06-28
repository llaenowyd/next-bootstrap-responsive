import React from 'react'
import { shallow } from 'enzyme'

import ResultsGrid from '../../components/ResultsGrid'

import Spinner from 'react-bootstrap/Spinner'
import Tile from '../../components/Tile'
import LoadMoreButton from '../../components/LoadMoreButton'
import FullyLoadedNote from '../../components/FullyLoadedNote'
import useMovieSearch from '../../hooks/useMovieSearch'

jest.mock('../../hooks/useMovieSearch')

describe('ResultsGrid', () => {
  const results = [{ id: 1 }, { id: 2 }, { id: 3 }]
  const loadMore = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('displays nothing in the initial state', () => {
    useMovieSearch.mockReturnValue({
      results: [],
      loadMore,
      loadingInitial: false,
      loadingMore: false,
      size: 0,
      sizeAvailable: 0,
      error: null,
    })

    const wrapper = shallow(<ResultsGrid />)

    expect(wrapper.find(Tile)).toHaveLength(0)
    expect(wrapper.find(Spinner)).toHaveLength(0)
    expect(wrapper.find(LoadMoreButton)).toHaveLength(0)
    expect(wrapper.find(FullyLoadedNote)).toHaveLength(0)
  })

  it('displays a loading spinner when initially loading', () => {
    useMovieSearch.mockReturnValue({
      results: [],
      loadMore,
      loadingInitial: true,
      loadingMore: false,
      size: 0,
      sizeAvailable: 0,
      error: null,
    })

    const wrapper = shallow(<ResultsGrid />)

    expect(wrapper.find(Tile)).toHaveLength(0)
    expect(wrapper.find(Spinner)).toHaveLength(1)
    expect(wrapper.find(LoadMoreButton)).toHaveLength(0)
    expect(wrapper.find(FullyLoadedNote)).toHaveLength(0)
  })

  it('displays Tiles and a LoadMoreButton when partially loaded', () => {
    useMovieSearch.mockReturnValue({
      results,
      loadMore,
      loadingInitial: false,
      loadingMore: false,
      size: 1,
      sizeAvailable: 2,
      error: null,
    })

    const wrapper = shallow(<ResultsGrid />)

    expect(wrapper.find(Tile)).toHaveLength(results.length)
    expect(wrapper.find(Spinner)).toHaveLength(0)
    expect(wrapper.find(LoadMoreButton)).toHaveLength(1)
    expect(wrapper.find(FullyLoadedNote)).toHaveLength(0)
  })

  it('displays Tiles and a FullyLoadedNote when fully loaded', () => {
    const size = 2
    const sizeAvailable = 2

    useMovieSearch.mockReturnValue({
      results,
      loadMore: null,
      loadingInitial: false,
      loadingMore: false,
      size,
      sizeAvailable,
      error: null,
    })

    const wrapper = shallow(<ResultsGrid />)

    expect(wrapper.find(Tile)).toHaveLength(results.length)
    expect(wrapper.find(Spinner)).toHaveLength(0)
    expect(wrapper.find(LoadMoreButton)).toHaveLength(0)

    const fullyLoadedNote = wrapper.find(FullyLoadedNote)
    expect(fullyLoadedNote).toHaveLength(1)
    const fullyLoadedNoteProps = fullyLoadedNote.props()
    expect(fullyLoadedNoteProps.size).toEqual(size)
    expect(fullyLoadedNoteProps.sizeAvailable).toEqual(sizeAvailable)
  })
})
