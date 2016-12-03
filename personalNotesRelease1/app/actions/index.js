
import * as types from '../constant/ActionTypes'
import request from 'superagent'

const SERVER_URL_NOTES = 'http://localhost:3000/api/notes'
const SERVER_URL_USERS = 'http://localhost:3000/api/users'

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




export function registerUserFailure() {
    return {type: types.REGISTER_USER_FAILURE}
}

export function registerUserSuccess(user) {
    return {type: types.REGISTER_USER_SUCCESS, user}
}

export function registerUser(TempUserId, name, password, age) {
    return dispatch => {
        return request
            .post(`${SERVER_URL_USERS}`)
            .type('form')
            .send({
                TempUserId: TempUserId,
                name: name,
                password: password,
                age: age
            })
            .set('Accept', 'application/json')
            .end((err, res) => {
                if (err) {
                    console.error(err)
                    dispatch(registerUserFailure())
                }
                else {
                    dispatch(registerUserSuccess(res.body))
                }
            })
    }
}

export function addNote(User, TempNoteId, title, content) {
    return {type: types.ADD_NOTE, User, TempNoteId, title, content}
}

export function createNoteFailure() {
    return {type: types.ADD_NOTE_FAILURE}
}

export function createNoteSuccess(note) {
    return {type: types.ADD_NOTE_SUCCESS, note}
}

export function createNote(User, TempNoteId, title, content) {
    console.log("ini temp note: ", TempNoteId)
    return dispatch => {
        dispatch(addNote(User, TempNoteId, title, content))
        return request
            .post(`${SERVER_URL_NOTES}`)
            .type('form')
            .send({
                TempNoteId: TempNoteId,
                title: title,
                content: content,
                UserId: User.id
            })
            .set('Accept', 'application/json')
            .end((err, res) => {
                if (err) {
                    console.error(err)
                    dispatch(createNoteFailure())
                }
                else {
                    dispatch(createNoteSuccess(res.body))
                }
            })
    }
}