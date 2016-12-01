import React, { Component } from 'react';
import { Container, Content, Tabs } from 'native-base';
// import { StyleSheet, View, Text, Image, TextInput, Button, Navigator,TouchableHighlight,
//     TouchableOpacity } from 'react-native';

import Register from './Register';
import Login from './Login';

export default class Auth extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    gotoNotes() {
        this.props.navigator.push({id: 'Notes'});
    }

    gotoRegister() {
        this.props.navigator.push({id: 'Register'});
    }

    gotoResetPassword() {
        this.props.navigator.push({id: 'ResetPassword'});
    }

    render() {
        var navigator = this.props.navigator;
        return (
            <Container>
                <Content>
                    <Tabs>
                        <Login tabLabel='Login' navigator={navigator} />
                        <Register tabLabel='Register' navigator={navigator} />
                    </Tabs>
                </Content>
            </Container>
        );
    }

}
