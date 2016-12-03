import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as AppActions from '../actions'
import { Container, Content} from 'native-base';

import DataNotes from './DataNotes'

export default class ListNote extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {notesReducers, actions, navigator} = this.props

        let ListNoteNodes = notesReducers.map(function (item) {
            console.log(item)
            return(
                <DataNotes key={item.TempNoteId} notesReducers={item} {...actions} navigator={navigator} />
            )
        })

        return(
            <Container>
                <Content>
                    {ListNoteNodes}
                </Content>
            </Container>
        )
    }

}

ListNote.propTypes = {
    notesReducers: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}