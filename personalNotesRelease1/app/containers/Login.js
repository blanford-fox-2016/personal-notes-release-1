import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TextInput, Button } from 'react-native';

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
            <View>
                <View>
                    <Text style={styles.title}>Hacktiv8 Notes</Text>
                </View>

                <View style={{padding: 10}}>
                    <Text>Email</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Type here to translate!"
                        onChangeText={(email) => this.setState({email})}
                    />

                    <Text>Password</Text>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.textInput}
                        placeholder="Type here to translate!"
                        onChangeText={(password) => this.setState({password})}
                    />

                    <View style={styles.button}>
                        <Button
                            color={'white'}
                            title="Login"
                            accessibilityLabel="Login Account"
                        />
                    </View>

                    <View style={styles.button}>
                        <Button
                            color={'white'}
                            title="Forget Password"
                            accessibilityLabel="Forget Password Account"
                        />
                    </View>

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
        borderRadius: 10,
        marginTop: 20
    }
});
