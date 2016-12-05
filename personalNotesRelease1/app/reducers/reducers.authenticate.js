import {
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE
} from '../constant/ActionTypes'

import { AsyncStorage } from 'react-native';

// import {AuthToken} from '../helper/token'

const initialState = []

export default function notes (state = initialState, action) {
    switch (action.type) {
        case REGISTER_USER_SUCCESS:
            return action.user

        case REGISTER_USER_FAILURE:
            return state

        case LOGIN_USER_SUCCESS:
            return action.user

        case LOGIN_USER_FAILURE:
            return state

        default:
            return state
    }
}