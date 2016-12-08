import {combineReducers} from 'redux'
import notesReducers from './reducers.notes'
import usersReducers from './reducers.users'
import authenticateReducers from './reducers.authenticate'
import drawer from './drawer'

const rootReducer = combineReducers({
    notesReducers: notesReducers,
    authenticateReducers: authenticateReducers,
    usersReducers: usersReducers
})

export default rootReducer