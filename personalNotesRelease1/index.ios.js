/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Register from './app/containers/Register'
import Login from './app/containers/Login'
import ResetPasswordPage from './app/containers/ResetPasswordPage'

export default class personalNotesRelease1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ResetPasswordPage/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('personalNotesRelease1', () => personalNotesRelease1);
