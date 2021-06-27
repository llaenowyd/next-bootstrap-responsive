import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import Textplate from './Textplate'

import styles from '../../styles/Tile/Tile.module.css'

const Tile = ({ data }) => {
  return (
    <div className={styles.tile}>
      <Image posterPath={data.poster_path} />
      <Textplate data={data} />
    </div>
  )
}

Tile.propTypes = {
  data: PropTypes.shape({
    poster_path: PropTypes.string,
  }).isRequired,
}

export default Tile
