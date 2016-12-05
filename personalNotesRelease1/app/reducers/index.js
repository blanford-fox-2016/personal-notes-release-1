import {combineReducers} from 'redux'
import notesReducers from './reducers.notes'
import authenticateReducers from './reducers.authenticate'
import drawer from './drawer'

const rootReducer = combineReducers({
    notesReducers: notesReducers,
    authenticateReducers: authenticateReducers,
    drawer: drawer
})

export default rootReducer