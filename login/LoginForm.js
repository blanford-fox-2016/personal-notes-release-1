'use strict';

import React, { Component } from 'react'
import t from 'tcomb-form-native';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'

var Form = t.form.Form;


var User = t.struct({
  email: t.String,
  password: t.String
});

var options = {
  fields: {
    password: {
      password: true,
      secureTextEntry: true
    },
    passwordConfirmation: {
      password: true,
      secureTextEntry: true
    },
    email: {
      keyboardType:"email-address"
    }
  }
};

export default class LoginForm extends Component {
  onPress(){
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      console.log(value); // value here is an instance of Person
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Form
          ref="form"
          type={User}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}


var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: 300,
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#d35400',
    borderColor: '#e67e22',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});
