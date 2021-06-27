import React from 'react'
import { useSelector } from 'react-redux'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'

import useMovieSearch from '../hooks/useMovieSearch'

import Tile from './Tile'
import LoadMoreButton from './LoadMoreButton'
import FullyLoadedNote from './FullyLoadedNote'

import styles from '../styles/ResultsGrid.module.css'

const StateMonitor = () => {
  const state = useSelector(state => state)

  React.useEffect(() => {
    console.log('StateMonitor', state)
  }, [state])

  return null
}

const ResultsGrid = () => {
  const {
    results,
    loadMore,
    loadingInitial,
    loadingMore,
    size,
    sizeAvailable,
    error,
  } = useMovieSearch()

  return (
    <Container className={styles.resultsGrid} fluid>
      <Row>
        {loadingInitial ? (
          <Col xs={12} className={styles.spinnerCol}>
            <Spinner animation="border" variant="primary" />
          </Col>
        ) : error ? (
          <Col xs={12} className={styles.errorCol}>
            {error.message}
          </Col>
        ) : (
          <>
            {results?.map(tileData => (
              <Col
                key={tileData.id}
                className={styles.cell}
                xs={12}
                sm={12}
                md={6}
                lg={4}
                xl={3}
              >
                <Tile data={tileData} />
              </Col>
            ))}
          </>
        )}
      </Row>
      {!loadingInitial && !error && results?.length > 0 && (
        <Row>
          <Col className={styles.bottomCell} xs={12}>
            {loadMore || loadingMore ? (
              <LoadMoreButton loading={loadingMore} onClick={loadMore} />
            ) : (
              <FullyLoadedNote size={size} sizeAvailable={sizeAvailable} />
            )}
          </Col>
        </Row>
      )}
      <StateMonitor />
    </Container>
  )
}

export default ResultsGrid
