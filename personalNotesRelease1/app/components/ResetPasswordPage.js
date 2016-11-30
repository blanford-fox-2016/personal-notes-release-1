import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TextInput, Button } from 'react-native';

export default class Register extends Component {

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={styles.title}>Reset password is success</Text>
                <Text style={styles.text}>New password has been sent to your email</Text>
                <Text style={styles.text}>please check your email. Thanks</Text>

                <View style={styles.button}>
                    <Button
                        onPress={this.gotoLogin.bind(this)}
                        color={'white'}
                        title="Back"
                        accessibilityLabel="Back to Login Account"
                    />
                </View>
            </View>
        );
    }

    gotoLogin() {
        this.props.navigator.pop();
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30
    },
    text: {
        fontSize: 15,
        textAlign: 'center'
    },
    button: {
        backgroundColor: 'green',
        width: 300,
        borderRadius: 10,
        marginTop: 20
    }
});
