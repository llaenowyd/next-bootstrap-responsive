import React from 'react'
import { shallow } from 'enzyme'

import SearchEntry from '../../components/SearchEntry'

import FormControl from 'react-bootstrap/FormControl'
import useMovieSearch from '../../hooks/useMovieSearch'

jest.mock('../../hooks/useMovieSearch')

describe('SearchEntry', () => {
  const searchEntryValue = 'search entry value'
  const setSearchEntry = jest.fn()
  let wrapper

  beforeEach(() => {
    jest.clearAllMocks()

    useMovieSearch.mockReturnValue({
      searchEntry: searchEntryValue,
      setSearchEntry: setSearchEntry,
    })

    wrapper = shallow(<SearchEntry />)
  })

  it('renders a FormControl', () => {
    const formControl = wrapper.find(FormControl)
    expect(formControl).toHaveLength(1)

    const formControlProps = formControl.props()

    expect(formControlProps.type).toEqual('text')
    expect(formControlProps.size).toEqual('sm')
    expect(formControlProps.value).toEqual(searchEntryValue)

    const onChange = formControlProps.onChange

    expect(setSearchEntry.mock.calls).toHaveLength(0)

    onChange({ target: { value: 'a different search' } })

    expect(setSearchEntry).toHaveBeenCalledWith('a different search')
  })
})
