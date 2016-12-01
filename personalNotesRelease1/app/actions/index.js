
import * as types from '../constant/ActionTypes'
import request from 'superagent'

const SERVER_URL_NOTES = 'http://localhost:3000/api/notes'

export function loadNotes() {
    return {type: types.LOAD_NOTES}
}

export function loadNotesSuccess(notes) {
    return {type: types.LOAD_NOTES_SUCCESS, notes: notes}
}

export function loadNotesFailure() {
    return {type: types.LOAD_NOTES_FAILURE}
}

export function getNotes() {
    return dispatch => {
        dispatch(loadNotes())
        return request
            .get(SERVER_URL_NOTES)
            .set('Accept', 'application/json')
            .end((err, res) => {
                if (err) {
                    console.error(err)
                    dispatch(loadNotesFailure())
                }
                else {
                    dispatch(loadNotesSuccess(res.body))
                }
            })
    }
}