import { createAction } from '@reduxjs/toolkit'

export default Object.fromEntries(
  ['initializeSearch', 'setSearchEntry', 'setSearchQuery', 'setApiConfig'].map(
    actionType => [actionType, createAction(actionType)]
  )
)
