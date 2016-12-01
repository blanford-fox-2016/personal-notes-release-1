import {
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE
} from '../constant/ActionTypes'

const initialState = []

export default function notes (state = initialState, action) {
    switch (action.type) {
        case REGISTER_USER_SUCCESS:
            // Auth.authenticateUser(action.user)
            // window.location = '/'
            return state

        case REGISTER_USER_FAILURE:
            // console.log("gagal")
            return state

        default:
            return state
    }
}