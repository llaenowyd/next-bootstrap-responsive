import React from 'react'
import PropTypes from 'prop-types'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default App
