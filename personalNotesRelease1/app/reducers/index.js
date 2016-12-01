import {combineReducers} from 'redux'
import notesReducers from './reducers.notes'
import usersReducers from './reducers.users'

const rootReducer = combineReducers({
    notesReducers: notesReducers,
    usersReducers: usersReducers
})

export default rootReducer