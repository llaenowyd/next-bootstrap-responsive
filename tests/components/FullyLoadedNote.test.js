import React from 'react'
import { shallow } from 'enzyme'

import FullyLoadedNote from '../../components/FullyLoadedNote'

/*
const FullyLoadedNote = ({ size, sizeAvailable }) => {
  return (
    <div className={styles.fullyLoadedNote}>
      {size} of {sizeAvailable} pages loaded (100%)
    </div>
  )
}
 */

describe('FullyLoadedNote', () => {
  const size = 20
  const sizeAvailable = 40
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <FullyLoadedNote size={size} sizeAvailable={sizeAvailable} />
    )
  })

  it('renders size and sizeAvailable', () => {
    expect(wrapper.text()).toContain(`${size} of ${sizeAvailable} pages loaded`)
  })
})
