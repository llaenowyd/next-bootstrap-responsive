import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Title from './Title'
import SearchEntry from './SearchEntry'

import styles from '../styles/Header.module.css'

const Header = () => (
  <Container className={styles.header}>
    <Row>
      <Title />
    </Row>
    <Row className={styles.searchEntryRow}>
      <Col xs={8}>
        <SearchEntry />
      </Col>
    </Row>
  </Container>
)

export default Header
