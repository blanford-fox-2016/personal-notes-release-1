import {
    LOAD_USERS,
    LOAD_USERS_FAILURE,
    LOAD_USERS_SUCCESS
} from '../constant/ActionTypes'

import { AsyncStorage } from 'react-native';

// import {AuthToken} from '../helper/token'

const initialState = []

export default function notes (state = initialState, action) {
    switch (action.type) {
        case LOAD_USERS:
            return []

        case LOAD_USERS_SUCCESS:
            console.log("load user succes: ", action)
            return action.users

        case LOAD_USERS_FAILURE:
            return state

        default:
            return state
    }
}