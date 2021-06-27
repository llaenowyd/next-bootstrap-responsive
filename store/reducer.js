import { createReducer, current } from '@reduxjs/toolkit'

export default createReducer(
  {
    searchEntry: '',
    searchQuery: '',
    apiConfig: {},
  },
  {
    initializeSearch: (state, action) => {
      state.searchEntry = action.payload
      state.searchQuery = action.payload
    },
    setSearchEntry: (state, action) => {
      state.searchEntry = action.payload
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload
    },
    setApiConfig: (state, action) => {
      state.apiConfig = action.payload
    },
  }
)
