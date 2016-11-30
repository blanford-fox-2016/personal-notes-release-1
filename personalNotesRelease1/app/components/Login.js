import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TextInput, Button, Navigator,TouchableHighlight,
    TouchableOpacity } from 'react-native';

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <Navigator
                renderScene={this.renderScene.bind(this)}
                navigationBar={
                    <Navigator.NavigationBar
                        routeMapper={NavigationBarRouteMapper}
                    />
                } />
        );
    }

    renderScene(route, navigator) {
        return (
            <View style={{marginTop: 50}}>
                <View>
                    <Text style={styles.title}>Hacktiv8 Notes</Text>
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
                            onPress={this.gotoNotes.bind(this)}
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

                    {/*<TouchableHighlight style={styles.button}>*/}
                    {/*<Text style={{textAlign: 'center'}}>Register</Text>*/}
                    {/*</TouchableHighlight>*/}
                </View>

            </View>
        );
    }

    gotoNotes() {
        this.props.navigator.push({
            id: 'Notes',
            name: 'Notes',
        });
    }

    gotoRegister() {
        this.props.navigator.push({
            id: 'Register',
            name: 'Register',
        });
    }

    gotoResetPassword() {
        this.props.navigator.push({
            id: 'ResetPassword',
            name: 'ResetPassword',
        });
    }
}

var NavigationBarRouteMapper = {
    LeftButton(route, navigator, index, navState) {
        return null;
    },
    RightButton(route, navigator, index, navState) {
        return null;
    },
    Title(route, navigator, index, navState) {
        return null
    }
};


const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        textAlign: 'center'
    },

    text: {
        alignSelf: 'center'
    },

    textInput: {
        backgroundColor: 'white',
        height: 30,
        width: 300,
        marginBottom: 20,
        borderWidth: 1,
        alignSelf: 'center'
    },

    button: {
        backgroundColor: 'green',
        width: 300,
        borderRadius: 10,
        marginTop: 20,
        alignSelf: 'center'
    }
});
