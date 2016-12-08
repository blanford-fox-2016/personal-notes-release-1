import {
    LOAD_NOTES,
    LOAD_NOTES_FAILURE,
    LOAD_NOTES_SUCCESS,
    ADD_NOTE,
    ADD_NOTE_SUCCESS,
    ADD_NOTE_FAILURE,
    UPDATE_NOTE,
    UPDATE_NOTE_SUCCESS,
    UPDATE_NOTE_FAILURE,
    DELETE_NOTE,
    DELETE_NOTE_SUCCESS,
    DELETE_NOTE_FAILURE,
    SET_TOKEN,
    GET_TOKEN,
    CLEAR_DATA,
    SHARE_NOTE_SUCCESS,
    SHARE_NOTE_FAILURE
} from '../constant/ActionTypes'

const initialState = []

export default function notes (state = initialState, action) {
    switch (action.type) {

        case CLEAR_DATA:
            return []

        case LOAD_NOTES:
            return []

        case LOAD_NOTES_SUCCESS:
            return action.notes

        case ADD_NOTE:
            console.log("masuk", action)
            return [
                {
                    Note: {
                        TempNoteId: action.TempNoteId,
                        title: 'temp',
                        content: 'temp',
                        fake: true
                    }
                },
                ...state
            ]

        case ADD_NOTE_SUCCESS:
            // console.log("state timeline: ", state)
            // console.log("init dari reducers: ", action.note)
            let idObjects = state.map(function (x) {
                console.log("isi x object: ", x)
                return x.Note.TempNoteId
            })

            // console.log("isi id object: ", idObjects)
            // console.log("isi action: ", action)

            // console.log("isi id action timeline id: ", action.note.Note.TempNoteId)

            let idObject = idObjects.indexOf(action.note.Note.TempNoteId)
            console.log("isi id object seletah: ", idObject)
            if (idObject > -1) {
                let newNoteFilter = state.filter((data) => {
                    // console.log("isi filter: ", data)
                    return data.Note.fake != true
                })
                // console.log("new timeline filter: ", newNoteFilter)
                return [action.note, ...newNoteFilter]
            }
            else {
                return state
            }

        case UPDATE_NOTE:
            console.log("isi state update note", state)
            console.log("isi action update note", action)
            // return state.map((note) => note.Note.TempNoteId === action.TempNoteId ? Object.assign({}, note, {title: action.title, content: action.content}) : note)
            return state.map((note) => {
                console.log("ini note: ", note)
                if(note.Note.TempNoteId === action.TempNoteId) {
                    return Object.assign({}, note, {Note:{TempNoteId: note.Note.TempNoteId, id: note.Note.id, createdAt: note.Note.createdAt, updatedAt: note.Note.updatedAt, title: action.title, content: action.content}})
                }
                else {
                    return note
                }
            })

        case UPDATE_NOTE_SUCCESS:
            console.log("note succes: ", state)
            return state

        case DELETE_NOTE:
            return state.filter((note) => note.TempNoteId !== action.TempNoteId)

        case DELETE_NOTE_SUCCESS:
            return state

        case SHARE_NOTE_SUCCESS:
            return s

        case LOAD_NOTES_FAILURE:
        case ADD_NOTE_FAILURE:
        case UPDATE_NOTE_FAILURE:
        case DELETE_NOTE_FAILURE:
        case SHARE_NOTE_FAILURE:
            return state

        default:
            return state
    }
}