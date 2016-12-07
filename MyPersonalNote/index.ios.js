import 'babel-polyfill'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './App/store'
import {
  AppRegistry,
  NavigatorIOS,
  StyleSheet
} from 'react-native'

var Login = require('./App/Components/Login')

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111'
  }
})

class MyPersonalNote extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigatorIOS
          style={styles.container}
          initialRoute = {{
            title: 'Login',
            component: Login
          }}
        />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('MyPersonalNote', () => MyPersonalNote);
