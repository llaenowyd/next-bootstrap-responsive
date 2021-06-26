import React from 'react'
import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Header from '../components/Header'
import ResultsGrid from '../components/ResultsGrid'

import styles from '../styles/Home.module.css'

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Simple Movie Search App</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />
    </Head>
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Row>
        <ResultsGrid />
      </Row>
    </Container>
  </div>
)

export default Home
