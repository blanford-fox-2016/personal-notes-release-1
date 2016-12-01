import {combineReducers} from 'redux'
import notesReducers from './reducers.notes'

const rootReducer = combineReducers({
    notesReducers: notesReducers
})

export default rootReducer