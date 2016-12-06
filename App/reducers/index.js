import {combineReducers} from 'redux'

import notes from './notesReducer'
import users from './usersReducer'

export default combineReducers({
  notes,
  users
})