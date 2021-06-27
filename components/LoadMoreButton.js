import React from 'react'
import PropTypes from 'prop-types'

import Button from 'react-bootstrap/Button'

import styles from '../styles/LoadMoreButton.module.css'

const LoadMoreButton = ({ loading, onClick }) => (
  <div className={styles.loadMoreButtonContainer}>
    <Button
      className={styles.loadMoreButton}
      variant="outline-primary"
      disabled={loading}
      onClick={loading ? null : onClick}
      size="sm"
    >
      {loading ? 'Loading…' : 'Load More'}
    </Button>
  </div>
)

LoadMoreButton.propTypes = {
  loading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default LoadMoreButton
