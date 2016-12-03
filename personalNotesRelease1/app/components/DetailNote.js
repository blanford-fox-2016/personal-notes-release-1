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

import ListNote from './ListNote'

class DetailNote extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            TempNoteId: this.props.route.TempNoteId,
            title: this.props.route.title,
            content: this.props.route.content
        }
    }


    saveEditNote(e) {
        e.preventDefault()
        let TempNoteId = this.state.TempNoteId
        let title = this.state.title.trim()
        let content = this.state.content.trim()
        if (!title || !content) {
            return
        }
        let User = {
            // id:Auth.getUser().id,
            id: 225,
            // username: Auth.getUser().username
            name: 'temp'
        }
        this.props.onUpdateNote(TempNoteId, title, content)
        this.props.navigator.pop()
        this.setState({
            title: '',
            content: '',
        })
    }

    deleteNote() {
        Alert.alert(
            'Delete Note?',
            null,
            [
                {text: 'OK', onPress: () => {
                    this.props.deleteNote(this.state.TempNoteId)
                    this.props.navigator.pop()
                }},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
            ]
        )
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
                    <List>
                        <ListItem>
                            <InputGroup>
                                <Input
                                    value={this.state.title}
                                    onChangeText={(title) => this.setState({title})}
                                    placeholder="Insert title" />
                            </InputGroup>
                        </ListItem>

                        <ListItem>
                            <Textarea
                                value={this.state.content}
                                onChangeText={(content) => this.setState({content})}
                                style={{height: 100}}
                                placeholder="Insert content"
                            />
                        </ListItem>
                    </List>

                    <View
                        style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', marginTop: 20, marginBottom: 20, borderRadius: 0 }}
                    >
                        <Button
                            style={{margin: 10}}
                            onPress={this.saveEditNote.bind(this)}
                            success>
                            Save
                        </Button>

                        <Button
                            style={{margin: 10}}
                            onPress={this.deleteNote.bind(this)}
                            danger>
                            Delete
                        </Button>
                    </View>
                </Content>

            </Container>
        );
    }

    goToCreateNote() {
        // this.props.navigator.push({id: 'CreateNote'});
    }
}

AppRegistry.registerComponent(
    'Notes',
    () => NotesPage);

DetailNote.propTypes = {
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
)(DetailNote)