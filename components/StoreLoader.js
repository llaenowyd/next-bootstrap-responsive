import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { actions } from '../store'
import { mockFetchApiConfig } from '../requests/apiConfig'

const StoreLoader = ({ initialSearchQuery }) => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    ;(async () => {
      console.log('initialSearchQuery', initialSearchQuery)
      if (initialSearchQuery) {
        await dispatch(actions.initializeSearch(initialSearchQuery))
      }
      dispatch(actions.setApiConfig(await mockFetchApiConfig()))
    })()
  }, [initialSearchQuery])

  return null
}

StoreLoader.propTypes = {
  initialSearchQuery: PropTypes.string,
}

export default StoreLoader
