import React, { Component } from 'react';

import {AppRegistry, TouchableHighlight, PropTypes,AsyncStorage} from 'react-native'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as AppActions from '../actions'


import {Content, Card, CardItem, Text, Button, View, Header, Modal, Container, Title } from 'native-base';

class DataNotes extends Component {

    gotoDetailNote() {
        this.props.navigator.push({
            id: 'DetailNotePage',
            NoteId: this.props.notesReducers.Note.id,
            TempNoteId: this.props.notesReducers.Note.TempNoteId,
            title: this.props.notesReducers.Note.title,
            content: this.props.notesReducers.Note.content,
            token: this.props.token
        });
        // console.log("masuk detail", this.props.navigator)
    }

    gotoShareNote() {
        let NodeId = this.props.notesReducers.Note.id
        let token = this.props.token
        this.props.actions.shareNote(NodeId, token)
        // console.log("masuk detail", this.props.navigator)
    }

    render() {
        const {notesReducers, actions, navigator, token} = this.props
        console.log("props di data notes: ", notesReducers)
        return(
            <Card
                style={{flex: 0}}>
                <CardItem style={{flex: 1, flexDirection: 'row'}}>
                    <Button
                        onPress={this.gotoDetailNote.bind(this)}
                        success
                    >
                        Detail
                    </Button>
                    <Button
                        onPress={this.gotoShareNote.bind(this)}
                        warning
                    >
                        Share
                    </Button>
                </CardItem>
                <CardItem>
                    <Text>{notesReducers.Note.title}</Text>
                    <Text note>{notesReducers.Note.updatedAt}</Text>
                </CardItem>

                <CardItem>
                    <Text>
                        {notesReducers.Note.content}
                    </Text>
                </CardItem>

            </Card>
        )
    }

}

// DataNotes.propTypes = {
//     notesReducers: PropTypes.array.isRequired
// }

// function mapStateToProps(state) {
//     return {
//         notesReducers: state.notesReducers,
//         token: state.token
//     }
// }

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(AppActions, dispatch)}
}

export default connect(
    null,
    mapDispatchToProps
)(DataNotes)