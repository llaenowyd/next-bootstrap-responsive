import React from 'react'
import PropTypes from 'prop-types'

import Title from './Title'
import ReleaseDate from './ReleaseDate'
import Overview from './Overview'
import Votes from './Votes'

import styles from '../../styles/Tile/Textplate.module.css'

const Textplate = ({ data }) => {
  return (
    <div className={styles.textplate}>
      <Title title={data.title} />
      <ReleaseDate releaseDate={data.release_date} />
      <Overview overview={data.overview} />
      <Votes average={data.vote_average} count={data.vote_count} />
    </div>
  )
}

Textplate.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string,
    overview: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    vote_count: PropTypes.number.isRequired,
  }).isRequired,
}

export default Textplate
