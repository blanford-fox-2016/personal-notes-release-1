import React, { Component } from 'react';
// import { StyleSheet, View, Text, Image, TextInput, Button, Navigator,TouchableHighlight,
//     TouchableOpacity } from 'react-native';

import {Container, View, Content, InputGroup, Input, Icon, Text, Button, H1} from 'native-base'

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: ''
        }
    }

    loginUser(e) {
        e.preventDefault()
        let name = this.state.name.trim()
        let password = this.state.password.trim()
        if (!name) {
            return
        }

        this.props.onLoginUser(name, password, this.props.navigator)
        this.setState({
            name: '',
            password: ''
        })
    }

    gotoResetPassword() {
        this.props.navigator.push({id: 'ResetPassword'});
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
                                onChangeText={(name) => this.setState({name})}
                                placeholder='Type your name here'/>
                        </InputGroup>
                    </View>

                    <View>
                        <InputGroup borderType='rounded' >
                            <Icon name='ios-lock' style={{color:'#2ecc71'}}/>
                            <Input
                                onChangeText={(password) => this.setState({password})}
                                secureTextEntry
                                placeholder='Type your password here'/>
                        </InputGroup>
                    </View>

                    <Button
                        onPress={this.loginUser.bind(this)}
                        success
                        style={{ width:200, alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
                        Login
                    </Button>

                    <Button
                        onPress={this.gotoResetPassword.bind(this)}
                        info
                        style={{ width:200, alignSelf: 'center'}}>
                        Reset Password
                    </Button>
                </Content>
            </Container>
        );
    }

    renderScene(route, navigator) {
        return (
            <View style={{marginTop: 50}}>
                <View>

                </View>

                <View style={{padding: 10}}>
                    <View style={{alignSelf: 'center'}}>
                        <Text>Email</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Type here to translate!"
                            onChangeText={(email) => this.setState({email})}
                        />
                    </View>

                    <View style={{alignSelf: 'center'}}>
                        <Text>Password</Text>
                        <TextInput
                            secureTextEntry={true}
                            style={styles.textInput}
                            placeholder="Type here to translate!"
                            onChangeText={(password) => this.setState({password})}
                        />

                    </View>
                    <View style={styles.button}>
                        <Button
                            onPress={this.loginUser.bind(this)}
                            color={'white'}
                            title="Login"
                            accessibilityLabel="Login Account"
                        />
                    </View>

                    <View style={styles.button}>
                        <Button
                            onPress={this.gotoRegister.bind(this)}
                            color={'white'}
                            title="Register"
                            accessibilityLabel="Register Account"
                        />
                    </View>

                    <View style={styles.button}>
                        <Button
                            onPress={this.gotoResetPassword.bind(this)}
                            color={'white'}
                            title="Reset Password"
                            accessibilityLabel="Reset Password Account"
                        />
                    </View>
                </View>

            </View>
        );
    }
}

