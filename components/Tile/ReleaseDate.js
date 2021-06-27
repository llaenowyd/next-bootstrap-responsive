import React from 'react'
import PropTypes from 'prop-types'

import styles from '../../styles/Tile/Textplate.module.css'

const ReleaseDate = ({ releaseDate }) => (
  <div className={styles.releaseDate}>{releaseDate.substr(0, 4)}</div>
)

ReleaseDate.propTypes = {
  releaseDate: PropTypes.string.isRequired,
}

export default ReleaseDate
