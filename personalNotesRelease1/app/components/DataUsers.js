import React, { Component } from 'react';

import { Picker} from 'native-base';

const Item = Picker.Item

export default class DataNotes extends Component {

    render() {
        const {usersReducers} = this.props
        console.log("props di data user: ", this.props.usersReducers)
        return(
            <Item />
        )
    }

}