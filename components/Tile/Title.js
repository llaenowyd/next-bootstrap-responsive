import React from 'react'
import PropTypes from 'prop-types'

import styles from '../../styles/Tile/Textplate.module.css'

const Title = ({ title }) => <div className={styles.title}>{title}</div>

Title.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Title
