import React, { Component } from 'react';
var jwtDecode = require('jwt-decode');
// import { StyleSheet, View, Text, Image, TextInput, Button, Navigator,TouchableHighlight,
//     TouchableOpacity } from 'react-native';

import {Container, View, Content, InputGroup, Input, Icon, Text, Button, H1} from 'native-base'

import { AsyncStorage } from 'react-native';

export default class Register extends Component {

    componentDidMount() {
        AsyncStorage.getItem("myKey").then((value) => {
            this.setState({"myKey": value})
            console.log("ini di didmount: ", this.state.myKey)
        }).done()
    }

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: '',
            age: ''
        }
    }

    gotoNotes() {
        this.props.navigator.push({id: 'Notes'});
    }

    registerUser(e) {
        e.preventDefault()
        let TempUserId = Date.now().toString()
        let name = this.state.name.trim()
        let password = this.state.password.trim()
        let age = this.state.age.trim()
        if (!name || !password || !age) {
            return
        }

        this.props.onRegisterUser(TempUserId, name, password, age)
        this.setState({
            name: '',
            password: '',
            age: ''
        })
    }


    render() {
        const {navigator} = this.props.navigator
        // let token = jwt_decode(this.props.myKey)
        var decoded = jwt_decode(this.props.myKey);
        console.log(decoded);
        return (
            <Container>
                <Content>

                    <View style={{paddingTop:50, alignItems: 'center'}}>
                        <H1>My Personal Note</H1>
                    </View>

                    <View style={{marginTop: 20, marginBottom: 20 }}>
                        <InputGroup borderType='rounded' >
                            <Icon name='ios-person' style={{color:'#2ecc71'}}/>
                            <Input
                                placeholder='Type your username here'
                                onChangeText={(name) => this.setState({name})}
                            />
                        </InputGroup>
                    </View>

                    <View>
                        <InputGroup borderType='rounded' >
                            <Icon name='ios-lock' style={{color:'#2ecc71'}}/>
                            <Input
                                secureTextEntry
                                onChangeText={(password) => this.setState({password})}
                                placeholder='Type your password here'/>
                        </InputGroup>
                    </View>

                    <View style={{marginTop: 20}}>
                        <InputGroup borderType='rounded' >
                            <Input
                                onChangeText={(age) => this.setState({age})}
                                placeholder='Type your age here'/>
                        </InputGroup>
                    </View>

                    <Button
                        onPress={this.registerUser.bind(this)}
                        success
                        style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
                        Sign Up
                    </Button>
                </Content>
            </Container>
        );
    }
}

