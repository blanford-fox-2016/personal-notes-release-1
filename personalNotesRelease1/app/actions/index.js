
import * as types from '../constant/ActionTypes'
import request from 'superagent'

import { AsyncStorage } from 'react-native';


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

export function getNotes(token) {

    console.log("ini token: ", token)
    return dispatch => {
        dispatch(loadNotes())
        return request
            .get(SERVER_URL_NOTES)
            .set('Accept', 'application/json')
            .set('personalNoteToken', token)
            .end((err, res) => {
                if (err) {
                    console.error(err)
                    dispatch(loadNotesFailure())
                }
                else {
                    // console.log(res.body)
                    dispatch(loadNotesSuccess(res.body))
                }
            })
    }
}


export function loginUserFailure() {
    return {type: types.LOGIN_USER_FAILURE}
}

export function loginUserSuccess(user) {
    return {type: types.LOGIN_USER_SUCCESS, user}
}

export function loginUser(name, password, navigator) {
    return dispatch => {
        return request
            .post(`${SERVER_URL_USERS}/login`)
            .type('form')
            .send({
                name: name
            })
            .set('Accept', 'application/json')
            .end((err, res) => {
                if (err) {
                    console.error(err)
                    dispatch(loginUserFailure())
                }
                else {
                    AsyncStorage.setItem('myKey', res.body.token);
                    navigator.replace({id: 'MainPage'})
                    dispatch(loginUserSuccess(res.body))
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

export function registerUser(TempUserId, name, password, age, navigator) {
    return dispatch => {
        console.log("masuk register user")
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
                    console.log("regis user: ", res.body)
                    AsyncStorage.setItem('myKey', res.body.token);
                    navigator.replace({id: 'MainPage'})
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

export function createNote(User, TempNoteId, title, content, token) {
    console.log("ini user di action: ", User)
    return dispatch => {
        console.log("masuk sini")
        dispatch(addNote(User, TempNoteId, title, content))
        return request
            .post(`${SERVER_URL_NOTES}`)
            .type('form')
            .set('personalNoteToken', token)
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

export function editNote(TempNoteId, title, content) {
    return {type: types.UPDATE_NOTE, TempNoteId, title, content}
}

export function updateNoteFailure() {
    return {type: types.UPDATE_NOTE_FAILURE}
}

export function updateNoteSuccess(note) {
    return {type: types.UPDATE_NOTE_SUCCESS, note}
}

export function updateNote(TempNoteId, title, content, token) {
    return dispatch => {
        dispatch(editNote(TempNoteId, title, content))
        return request
            .put(SERVER_URL_NOTES)
            .set('Accept', 'application/json')
            .set('personalNoteToken', token)
            .type('form')
            .send({
                TempNoteId: TempNoteId,
                title: title,
                content: content
            })
            .end((err, res) => {
                if(err){
                    console.error(err);
                    dispatch(updateNoteFailure())
                }else{
                    dispatch(updateNoteSuccess(res.body))
                }
            })
    }
}



export function deleteDataNote(TempNoteId){
    return {type: types.DELETE_NOTE, TempNoteId}
}


export function deleteNoteFailure(){
    return {type: types.DELETE_NOTE_FAILURE}
}

export function deleteNoteSuccess(note){
    return {type: types.DELETE_NOTE_SUCCESS, note}
}

export function deleteNote(TempNoteId, token){
    return dispatch => {
        dispatch(deleteDataNote(TempNoteId))
        return request
            .del(SERVER_URL_NOTES)
            .set('personalNoteToken', token)
            .send({
                TempNoteId: TempNoteId
            })
            .end((err, res) => {
                if(err){
                    console.error(err);
                    dispatch(deleteNoteFailure())
                }else{
                    dispatch(deleteNoteSuccess(res.body))
                }
            })
    }
}

export function getToken() {
    
}

export function setToken(token) {
    console.log("token di action: ", token)
    // return {type: types.SET_TOKEN, token}
}

// export function showDrawer() {
//     return {type: types.OPEN_DRAWER}
// }
//
// export function openDrawer() {
//     return dispatch => {
//         dispatch(showDrawer())
//     }
// }