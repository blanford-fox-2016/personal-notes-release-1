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
    CLEAR_DATA
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
            // console.log("masuk", action)
            return [
                {
                    TempNoteId: action.Note.TempNoteId,
                    title: 'temp',
                    content: 'temp',
                    fake: true
                },
                ...state
            ]

        case ADD_NOTE_SUCCESS:
            console.log("state timeline: ", state)
            console.log("init dari reducers: ", action.note)
            let idObjects = state.map(function (x) {
                console.log("isi x object: ", x)
                return x.TempNoteId
            })

            console.log("isi id object: ", idObjects)

            console.log("isi id action timeline id: ", action.note.TempNoteId)

            let idObject = idObjects.indexOf(action.note.TempNoteId)
            console.log("isi id object seletah: ", idObject)
            if (idObject > -1) {
                let newNoteFilter = state.filter((data) => {

                    return data.fake != true
                })
                console.log("new timeline filter: ", newNoteFilter)
                return [action.note, ...newNoteFilter]
            }
            else {
                return state
            }

        case UPDATE_NOTE:
            return state.map((note) => note.TempNoteId === action.TempNoteId ? Object.assign({}, note, {title: action.title, content: action.content}) : note)

        case UPDATE_NOTE_SUCCESS:
            return state

        case DELETE_NOTE:
            return state.filter((note) => note.TempNoteId !== action.TempNoteId)

        case DELETE_NOTE_SUCCESS:
            return state

        case LOAD_NOTES_FAILURE:
        case ADD_NOTE_FAILURE:
        case UPDATE_NOTE_FAILURE:
        case DELETE_NOTE_FAILURE:
            return state

        default:
            return state
    }
}