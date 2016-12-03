import {
    LOAD_NOTES,
    LOAD_NOTES_FAILURE,
    LOAD_NOTES_SUCCESS,
    ADD_NOTE,
    ADD_NOTE_SUCCESS,
    ADD_NOTE_FAILURE
} from '../constant/ActionTypes'

const initialState = []

export default function notes (state = initialState, action) {
    switch (action.type) {
        case LOAD_NOTES:
            return []

        case LOAD_NOTES_SUCCESS:
            return action.notes

        case LOAD_NOTES_FAILURE:
            return state

        case ADD_NOTE:
            console.log("masuk", action)
            return [
                {
                    TempNoteId: action.TempNoteId,
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
                // console.log("isi x object: ", x)
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

        case ADD_NOTE_FAILURE:
            return state

        default:
            return state
    }
}