import React, { Component, PropTypes } from 'react';
import {AppRegistry, View, TouchableHighlight, Modal, AsyncStorage} from 'react-native'
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

class NotesPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            title: '',
            content: '',
            token: ''
        }
    }


    createNote(e) {
        e.preventDefault()
        let TempNoteId = Date.now().toString()
        let title = this.state.title.trim()
        let content = this.state.content.trim()
        if (!title || !content) {
            return
        }
        let User = {
            id: this.props.dataUser.id,
            name: 'temp'
        }
        this.props.onCreateNote(User, TempNoteId, title, content, this.state.token)
        this.setState({
            title: '',
            content: '',
            modalVisible: false
        })
    }

    _appendMessage = (message) => {
        this.setState({messages: this.state.messages.concat(message)});
    };


    logoutUser = async () => {
        try {
            await AsyncStorage.removeItem("myKey");
            this.props.clearData()
            this.props.navigator.replace({id: 'Auth'})
        } catch (error) {
            console.log("err")
        }
    };

    componentDidMount() {
        this._loadInitialState().done();
        // this.props.actions.getNotes()
    }


    _loadInitialState = async () => {
        try {
            var value = await AsyncStorage.getItem("myKey");
            if (value !== null){
                console.log("vallue: ", value)
                this.setState({token: value});
                this.props.actions.getNotes(value)
            } else {
                console.log("else")
            }
        } catch (error) {
            console.log("catch")

        }
    };



    render() {
        const {notesReducers, actions, navigator, dataUser} = this.props
        // console.log("props di note page: ",  this.state.token)
        return (
            <Container>
                <Header>
                    <Button
                        onPress={this.logoutUser}
                        transparent>
                        Logout
                    </Button>

                    <Title>{dataUser.name}</Title>

                    <Button
                        onPress={() => {
                        this.setState({modalVisible:true})
                    }}
                        transparent>
                        Create Note
                    </Button>
                </Header>

                <Content>
                    <ListNote token={this.state.token} notesReducers={notesReducers} actions={actions} navigator={navigator} />
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
}

// AppRegistry.registerComponent(
//     'Notes',
//     () => NotesPage);

NotesPage.propTypes = {
    notesReducers: PropTypes.array.isRequired
}

function mapStateToProps(state) {
    return {
        notesReducers: state.notesReducers,
        token: state.token
    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(AppActions, dispatch)}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NotesPage)