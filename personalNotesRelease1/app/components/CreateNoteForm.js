import React, { Component, PropTypes } from 'react';
import {AppRegistry, View, TouchableHighlight, Modal} from 'react-native'

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
export default class CreateNoteForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalVisible: this.props.data,
            title: '',
            content: ''
        }
    }


    createNote(e) {
        console.log("ini data: ", this.props.data)
        e.preventDefault()
        let TempNoteId = Date.now().toString()
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
        this.props.onCreateNote(User, TempNoteId, title, content)
        this.setState({
            title: '',
            content: '',
            modalVisible: false
        })
    }


    render() {

        return(
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
        )
    }
}

CreateNoteForm.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    onCreateNote: PropTypes.func.isRequired
}