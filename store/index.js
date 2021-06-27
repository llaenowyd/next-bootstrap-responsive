import { configureStore } from '@reduxjs/toolkit'

import reducer from './reducer'

export { default as actions } from './actions'
export { default as selectors } from './selectors'

export const makeStore = preloadedState =>
  configureStore({
    reducer,
    preloadedState,
  })
