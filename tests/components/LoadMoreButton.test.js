import React from 'react'
import { shallow } from 'enzyme'

import LoadMoreButton from '../../components/LoadMoreButton'
import Button from 'react-bootstrap/Button'

describe('LoadMoreButton', () => {
  const variant = 'outline-primary'
  const size = 'sm'
  const loadMoreText = 'Load More'
  const loadingText = 'Loading…'
  const onClick = jest.fn()

  it('renders a `Button`', () => {
    const wrapper = shallow(
      <LoadMoreButton loading={false} onClick={onClick} />
    )

    const button = wrapper.find(Button)
    expect(button).toHaveLength(1)

    const props = button.props()

    expect(props.variant).toEqual(variant)
    expect(props.disabled).toEqual(false)
    expect(props.onClick).toBe(onClick)
    expect(props.size).toEqual(size)
    expect(props.children).toEqual(loadMoreText)
  })

  it('renders a disabled `Button` when loading', () => {
    const wrapper = shallow(<LoadMoreButton loading={true} onClick={onClick} />)

    const button = wrapper.find(Button)
    expect(button).toHaveLength(1)

    const props = button.props()

    expect(props.variant).toEqual(variant)
    expect(props.disabled).toEqual(true)
    expect(props.onClick).toBeNull()
    expect(props.size).toEqual(size)
    expect(props.children).toEqual(loadingText)
  })
})
