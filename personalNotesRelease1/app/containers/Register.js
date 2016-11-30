import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TextInput, Button } from 'react-native';

export default class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    render() {
        return (
            <View>
                <View>
                    <Text style={styles.title}>Welcome to Hacktiv8 Notes</Text>
                </View>

                <View style={{padding: 10}}>
                    <Text>Email</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Type here to translate!"
                        onChangeText={(email) => this.setState({email})}
                    />

                    <Text>Your Password</Text>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.textInput}
                        placeholder="Type here to translate!"
                        onChangeText={(password) => this.setState({password})}
                    />

                    <Text>Retype your Password</Text>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.textInput}
                        placeholder="Type here to translate!"
                        onChangeText={(confirmPassword) => this.setState({confirmPassword})}
                    />

                    <Button
                        color={'green'}
                        title="Register"
                        accessibilityLabel="Register Account"
                    />

                    {/*<TouchableHighlight style={styles.button}>*/}
                        {/*<Text style={{textAlign: 'center'}}>Register</Text>*/}
                    {/*</TouchableHighlight>*/}
                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        textAlign: 'center'
    },

    textInput: {
        backgroundColor: 'white',
        height: 30,
        width: 300,
        marginBottom: 20
    },

    button: {
        backgroundColor: 'green',
        width: 300,
        borderRadius: 10
    }
});
