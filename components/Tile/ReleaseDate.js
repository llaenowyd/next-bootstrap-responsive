import React from 'react'
import PropTypes from 'prop-types'

import styles from '../../styles/Tile/Textplate.module.css'

const NBSP = '\u00A0'

const ReleaseDate = ({ releaseDate }) => (
  <div className={styles.releaseDate}>
    {releaseDate ? releaseDate.substr(0, 4) : NBSP}
  </div>
)

ReleaseDate.propTypes = {
  releaseDate: PropTypes.string,
}

export default ReleaseDate
