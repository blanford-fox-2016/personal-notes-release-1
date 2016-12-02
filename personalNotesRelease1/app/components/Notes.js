import React, { Component } from 'react';
import {AppRegistry, View, TouchableHighlight, Modal, AsyncStorage} from 'react-native'

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

export default class Notes extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            title: '',
            content: ''
        }
    }


    createNote(e) {
        e.preventDefault()
        let title = this.state.title.trim()
        let content = this.state.content.trim()
        if (!title || !content) {
            return
        }
        let User = {
            id:Auth.getUser().id,
            username: Auth.getUser().username
        }
        this.props.onSave(User, timeline)
        this.setState({
            timeline: ''
        })
    }

    render() {
        return (
            <Container>
                <Header>
                    <Button transparent>
                        <Icon name='ios-menu' />
                    </Button>

                    <Title>Notes</Title>

                    <Button
                        onPress={() => {
                        this.setState({modalVisible:true})
                    }}
                        transparent>
                        Create Note
                    </Button>
                </Header>

                <Content>
                    <ListNote />
                    <Modal
                        animationType={"slide"}
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {alert("Modal has been closed.")}}
                    >

                        <Container>
                            <Header>
                                <Title>Create Note</Title>

                                <Button
                                    onPress={() => {
                                        this.setState({modalVisible:false})
                                    }}
                                    transparent>
                                    Close
                                </Button>
                            </Header>

                            <Content>
                                <List>
                                    <ListItem>
                                        <InputGroup>
                                            <Input
                                                onChangeText={(title) => this.setState({title})}
                                                placeholder="Insert title" />
                                        </InputGroup>
                                    </ListItem>

                                    <ListItem>
                                        <Textarea
                                            onChangeText={(content) => this.setState({content})}
                                            style={{height: 100}}
                                            placeholder="Insert content"
                                        />
                                    </ListItem>
                                </List>


                                <Button
                                    onPress={this.createNote.bind(this)}
                                    success
                                    style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20, borderRadius: 0 }}>
                                    Save
                                </Button>
                            </Content>

                        </Container>

                    </Modal>

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
    () => Notes);