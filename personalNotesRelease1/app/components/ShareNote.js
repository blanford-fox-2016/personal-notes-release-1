import React, { Component, PropTypes } from 'react';
import {AppRegistry, View, TouchableHighlight, Modal, AsyncStorage, Alert} from 'react-native'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as AppActions from '../actions'
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Icon,
    Card,
    CardItem,
    Text,
    List,
    ListItem,
    InputGroup,
    Input,
    Picker,
    Textarea
} from 'native-base';

const Item = Picker.Item

import ListUser from './ListUser'

import decode from 'jwt-decode'

class ShareNote extends Component {

    constructor(props) {
        super(props)
        this.state = {
            NoteId: this.props.route.NoteId,
            TempNoteId: this.props.route.TempNoteId,
            token: this.props.route.token,
            selectedItem: undefined,
            toUser: 'select',
            results: {
                items: []
            }
        }
    }

    onValueChange (value) {
        this.setState({
            toUser : value
        });
    }


    shareNote(e) {
        console.log("state nodeid: ", this.state.NoteId)
        e.preventDefault()
        let NoteId = this.state.NoteId
        let TempNoteId = this.state.TempNoteId
        let token = this.state.token
        let userData = decode(this.state.token)
        let toUser = this.state.toUSer
        if (!toUser) {
            return
        }
        let User = {
            id: userData.id,
            name: 'temp'
        }
        this.props.onShareNote(TempNoteId, token, NoteId, toUser)
        this.props.navigator.pop()
    }



    render() {
        const {notesReducers, actions, navigator, showDetailNote, route} = this.props
        console.log("ini route di detail: ", route)
        return (
            <Container>
                <Header>
                    <Title>Edit {this.state.title}</Title>

                    <Button
                        onPress={() => {
                            navigator.pop()
                        }}
                        transparent>
                        Back
                    </Button>
                </Header>

                <Content>
                    <ListUser route={route} />
                </Content>

            </Container>
        );
    }
}

ShareNote.propTypes = {
    notesReducers: PropTypes.array.isRequired
}

function mapStateToProps(state) {
    return {
        notesReducers: state.notesReducers
    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(AppActions, dispatch)}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShareNote)