import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TextInput, Button, Navigator } from 'react-native';

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
                    <Text style={styles.title}>Welcome to Hacktiv8 Notes</Text>
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
                        <Text>Your Password</Text>
                        <TextInput
                            secureTextEntry={true}
                            style={styles.textInput}
                            placeholder="Type here to translate!"
                            onChangeText={(password) => this.setState({password})}
                        />
                    </View>

                    <View style={{alignSelf: 'center'}}>
                        <Text>Retype your Password</Text>
                        <TextInput
                            secureTextEntry={true}
                            style={styles.textInput}
                            placeholder="Type here to translate!"
                            onChangeText={(confirmPassword) => this.setState({confirmPassword})}
                        />
                    </View>

                    <View style={styles.button}>
                        <Button onPress={this.gotoNotes.bind(this)}
                            color={'white'}
                            title="Register"
                            accessibilityLabel="Register Account"
                        />
                    </View>

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
        alignSelf: 'center'
    }
});
