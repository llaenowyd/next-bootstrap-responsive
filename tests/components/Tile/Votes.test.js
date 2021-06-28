import React from 'react'
import { mount } from 'enzyme'

import Votes from '../../../components/Tile/Votes'

describe('Title', () => {
  const count = 1234
  const render = average => mount(<Votes average={average} count={count} />)

  const textCodePoints = text => {
    // emojis are outside the 16-bit code plane supported by legacy js
    const result = []

    const it = text[Symbol.iterator]()

    while (!it.done && result.length < 5) {
      const ucChar = it.next().value
      result.push(ucChar.codePointAt(0))
    }

    return result
  }

  it('renders a half-moon', () => {
    const wrapper = render(1)

    expect(wrapper.text()).toContain(`${count} reviews`)
    expect(textCodePoints(wrapper.text())).toEqual(textCodePoints('🌗🌑🌑🌑🌑'))
  })

  it('renders empty moons', () => {
    const wrapper = render(0.4)

    expect(textCodePoints(wrapper.text())).toEqual(textCodePoints('🌑🌑🌑🌑🌑'))
  })

  it('renders full moons', () => {
    const wrapper = render(9.5)

    expect(textCodePoints(wrapper.text())).toEqual(textCodePoints('🌕🌕🌕🌕🌕'))
  })

  it('renders average moons', () => {
    const wrapper = render(5)

    expect(textCodePoints(wrapper.text())).toEqual(textCodePoints('🌕🌕🌗🌑🌑'))
  })
})
