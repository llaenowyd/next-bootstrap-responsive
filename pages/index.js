import React from 'react'
import Head from 'next/head'

import Border from '../components/Border'
import Layout from '../components/Layout'
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
    <Border>
      <Layout>
        <Header />
        <ResultsGrid />
      </Layout>
    </Border>
  </div>
)

export default Home
