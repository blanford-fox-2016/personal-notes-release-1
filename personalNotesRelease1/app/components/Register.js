import React, { Component } from 'react';
// import { StyleSheet, View, Text, Image, TextInput, Button, Navigator,TouchableHighlight,
//     TouchableOpacity } from 'react-native';

import {Container, View, Content, InputGroup, Input, Icon, Text, Button, H1} from 'native-base'

export default class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            age: ''
        }
    }

    gotoNotes() {
        this.props.navigator.push({id: 'Notes'});
    }


    render() {
        const {navigator} = this.props.navigator
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
                                onChangeText={(username) => this.setState({username})}
                            />
                        </InputGroup>
                    </View>

                    <View>
                        <InputGroup borderType='rounded' >
                            <Icon name='ios-lock' style={{color:'#2ecc71'}}/>
                            <Input
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
                        onPress={this.gotoNotes.bind(this)}
                        success
                        style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
                        Sign Up
                    </Button>
                </Content>
            </Container>
        );
    }
}

