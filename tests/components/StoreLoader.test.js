import React from 'react'
import { mount } from 'enzyme'

import { useDispatch } from 'react-redux'
import StoreLoader from '../../components/StoreLoader'

import { fetchApiConfig } from '../../requests/apiConfig'
import mockApiConfig from '../../mocks/api_config.json'

jest.mock('react-redux')
jest.mock('../../requests/apiConfig')

describe('StoreLoader', () => {
  const dispatch = jest.fn()

  beforeAll(() => {
    useDispatch.mockReturnValue(dispatch)
  })

  beforeEach(() => {
    dispatch.mockClear()
  })

  it('calls fetchApiConfig when mounted and dispatches the result', async () => {
    fetchApiConfig.mockResolvedValueOnce(mockApiConfig)

    const wrapper = mount(<StoreLoader />)
    await flushPromises()

    expect(fetchApiConfig.mock.calls).toEqual([[]])
    expect(dispatch.mock.calls).toEqual([
      [{ type: 'setApiConfig', payload: mockApiConfig }],
    ])
  })

  it('dispatches `initializeSearch` if `initialSearchQuery`', async () => {
    const initialSearchQuery = 'initial search query'
    const wrapper = mount(
      <StoreLoader initialSearchQuery={initialSearchQuery} />
    )
    await flushPromises()

    expect(
      dispatch.mock.calls.filter(call => call[0].type === 'initializeSearch')
    ).toEqual([[{ type: 'initializeSearch', payload: initialSearchQuery }]])
  })
})
