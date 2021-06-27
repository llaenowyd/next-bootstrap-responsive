import React from 'react'
import PropTypes from 'prop-types'

import range from 'lodash.range'

import styles from '../../styles/Tile/Textplate.module.css'

const StarFull = () => <span className={styles.moon}>🌕</span>

const StarHalf = () => <span className={styles.moon}>🌗</span>

const StarEmpty = () => <span className={styles.moon}>🌑</span>

const Stars = ({ outOfTen }) => {
  const outOfFive = Math.round(outOfTen) / 2

  const numFull = Math.floor(outOfFive)
  const andHalf = numFull !== outOfFive

  const plan = {
    full: range(numFull),
    andHalf: andHalf ? [numFull] : [],
    empty: range(numFull + (andHalf ? 1 : 0), 5),
  }

  return (
    <>
      {[
        ...plan.full.map(i => <StarFull key={i} />),
        ...plan.andHalf.map(i => <StarHalf key={i} />),
        ...plan.empty.map(i => <StarEmpty key={i} />),
      ]}
    </>
  )
}
Stars.propTypes = {
  outOfTen: PropTypes.number.isRequired,
}

const Votes = ({ average, count }) => (
  <div className={styles.votes}>
    <div className={styles.votesAverage}>
      <Stars outOfTen={average} />
    </div>
    <div className={styles.votesCount}>{count} reviews</div>
  </div>
)

Votes.propTypes = {
  average: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
}

export default Votes
