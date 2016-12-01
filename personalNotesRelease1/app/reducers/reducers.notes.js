import {
    LOAD_NOTES,
    LOAD_NOTES_FAILURE,
    LOAD_NOTES_SUCCESS
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

        default:
            return state
    }
}