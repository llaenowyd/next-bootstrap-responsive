import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import { makeStore } from '../store'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'

const store = makeStore()

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default App
