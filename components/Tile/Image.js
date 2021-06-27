import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { selectors } from '../../store'

import styles from '../../styles/Tile/Image.module.css'

const TileImage = ({ posterPath }) => {
  const basePath = useSelector(selectors.imagesBaseUrl)
  const posterSize = useSelector(selectors.posterSize)

  const src =
    basePath && posterSize ? `${basePath}${posterSize}${posterPath}` : ''

  console.log('TileImage', src)

  return (
    <div className={styles.tileImageContainer}>
      {src ? <img className={styles.img} src={src} /> : null}
    </div>
  )
}

TileImage.propTypes = {
  posterPath: PropTypes.string.isRequired,
}

export default TileImage
