import React from 'react'
import PropTypes from 'prop-types'

import styles from '../../styles/Tile/Textplate.module.css'

const Overview = ({ overview }) => (
  <div className={styles.overview}>{overview}</div>
)

Overview.propTypes = {
  overview: PropTypes.string.isRequired,
}

export default Overview
