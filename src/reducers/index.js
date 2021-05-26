import { combineReducers } from 'redux'
import { selectedUser } from './getUser'
import { isLoading } from './isLoading';
import { errorMsg } from './errorMsg';
import { petsToDisplay } from './getPets'

export const rootReducer = combineReducers({
  selectedUser,
  isLoading,
  errorMsg,
  petsToDisplay
})
