import {
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE
} from '../constant/ActionTypes'

import { AsyncStorage } from 'react-native';

// import {AuthToken} from '../helper/token'

const initialState = []

export default function notes (state = initialState, action) {
    switch (action.type) {
        case REGISTER_USER_SUCCESS:
            console.log("ini di reducer", action.user)
            AsyncStorage.setItem('myKey', action.user.token);
            // this.props.navigator.push({id: 'Notes'});
            // window.location = '/'
            return state

        case REGISTER_USER_FAILURE:
            // console.log("gagal")
            return state

        default:
            return state
    }
}