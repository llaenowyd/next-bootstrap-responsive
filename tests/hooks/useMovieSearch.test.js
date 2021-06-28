import React from 'react'
import { mount } from 'enzyme'

import useMovieSearch from '../../hooks/useMovieSearch'

import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { useSWRInfinite } from 'swr'
import debounce from 'lodash.debounce'

import { selectors } from '../../store'
import { fetchMovieSearch } from '../../requests/movieSearch'
import { getMovieSearchSwrKey } from '../../hooks/util'

jest.mock('next/router')
jest.mock('react-redux')
jest.mock('swr')
jest.mock('lodash.debounce')
jest.mock('../../requests/movieSearch')
jest.mock('../../hooks/util')

const Child = () => 'Child'

const Harness = () => {
  const hookResult = useMovieSearch()

  return <Child {...hookResult} />
}

describe('useMovieSearch', () => {
  const setSize = jest.fn()
  const dispatch = jest.fn()
  const debouncedSetSearchQuery = jest.fn()
  const router = {
    push: jest.fn(),
  }

  const searchEntryValue = 'search entry value'
  const searchQueryValue = 'search query value'
  const withDataSelectorMock = selector => {
    if (selector === selectors.searchEntry) return searchEntryValue
    else if (selector === selectors.searchQuery) return searchQueryValue
    else throw new Error('unexpected selector')
  }

  const defaultSwrResults = {
    data: [{ results: ['one', 'two', 'three'] }],
    error: null,
    size: 1,
    setSize,
  }

  beforeEach(() => {
    jest.clearAllMocks()

    useRouter.mockReturnValue(router)
    useDispatch.mockReturnValue(dispatch)
    debounce.mockReturnValue(debouncedSetSearchQuery)
  })

  it('calls useSelector for searchEntry and searchQuery', async () => {
    useSWRInfinite.mockReturnValue(defaultSwrResults)

    const wrapper = mount(<Harness />)
    await flushPromises()

    expect(useSelector.mock.calls).toHaveLength(2)
    expect(useSelector.mock.calls).toEqual([
      [selectors.searchEntry],
      [selectors.searchQuery],
    ])
  })

  it('returns a `setSearchEntry` that dispatches', async () => {
    useSWRInfinite.mockReturnValue(defaultSwrResults)

    const wrapper = mount(<Harness />)
    await flushPromises()

    const setSearchEntry = wrapper.find(Child).props().setSearchEntry

    const search = 'some search terms'
    setSearchEntry(search)

    expect(dispatch.mock.calls).toEqual([
      [{ type: 'setSearchEntry', payload: search }],
    ])
  })

  it('calls `debouncedSetSearchQuery` with `searchEntry`', async () => {
    useSWRInfinite.mockReturnValue(defaultSwrResults)

    useSelector.mockImplementation(withDataSelectorMock)

    const wrapper = mount(<Harness />)
    await flushPromises()

    expect(debouncedSetSearchQuery.mock.calls).toEqual([[searchEntryValue]])
  })

  it('returns results from response data', async () => {
    useSWRInfinite.mockReturnValue(defaultSwrResults)

    useSelector.mockImplementation(withDataSelectorMock)

    const wrapper = mount(<Harness />)
    await flushPromises()

    const results = wrapper.find(Child).props().results

    expect(results).toEqual(defaultSwrResults.data[0].results)
  })

  describe('debouncedSetSearchQuery', () => {
    it('dispatches setQuery', async () => {
      useSWRInfinite.mockReturnValue(defaultSwrResults)

      useSelector.mockImplementation(withDataSelectorMock)

      const wrapper = mount(<Harness />)
      await flushPromises()

      const debouncedSetSearchQuery = debounce.mock.calls[0][0]

      const newSearchQuery = 'a new search query'
      debouncedSetSearchQuery(newSearchQuery)

      expect(dispatch.mock.calls).toEqual([
        [{ type: 'setSearchQuery', payload: newSearchQuery }],
      ])
    })
  })
})
