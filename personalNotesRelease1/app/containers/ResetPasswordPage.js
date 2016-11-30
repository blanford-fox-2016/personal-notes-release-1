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
                    <Text style={styles.title}>Reset password is success</Text>
                    <Text style={styles.text}>New password has been sent to your email</Text>
                    <Text style={styles.text}>please check your email. Thanks</Text>
                </View>

            </View>
        );
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
    }
});
