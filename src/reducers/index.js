import { combineReducers } from 'redux'
import { selectedUser } from './getUser'

export const rootReducer = combineReducers({
  selectedUser,
})
