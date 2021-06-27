import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import StoreLoader from '../components/StoreLoader'
import Header from '../components/Header'
import ResultsGrid from '../components/ResultsGrid'

import styles from '../styles/Search.module.css'

const Search = () => {
  const router = useRouter()

  return (
    <>
      <StoreLoader initialSearchQuery={router.query.searchEntry} />
      <Head>
        <title>Simple Movie Search App</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>
      <Container className={styles.container} fluid>
        <Row>
          <Col xs={12}>
            <Header />
          </Col>
        </Row>
        <Row className={styles.resultsGridRow}>
          <Col xs={12} className={styles.resultsGridCol}>
            <ResultsGrid />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Search
