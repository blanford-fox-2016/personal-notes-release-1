import {combineReducers} from 'redux'

import notes from './notesReducer'
import users from './usersReducer'
import github from './githubApiReducer'

export default combineReducers({
  notes,
  users,
  github
})