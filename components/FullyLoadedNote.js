import React from 'react'
import PropTypes from 'prop-types'

import styles from '../styles/ResultsGrid.module.css'

const FullyLoadedNote = ({ size, sizeAvailable }) => {
  return (
    <div className={styles.fullyLoadedNote}>
      {size} of {sizeAvailable} pages loaded (100%)
    </div>
  )
}

FullyLoadedNote.propTypes = {
  size: PropTypes.number.isRequired,
  sizeAvailable: PropTypes.number.isRequired,
}

export default FullyLoadedNote
