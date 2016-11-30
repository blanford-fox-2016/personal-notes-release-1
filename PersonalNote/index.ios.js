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
  View,
  Navigator,
  ScrollView
} from 'react-native';
import Register from './app/components/Register'
import Login from './app/components/Login'
import SplashPage from './app/components/SplashPage'
import ListNote from './app/components/ListNote'

export default class PersonalNote extends Component {
  render() {
    return (
      <Navigator
          initialRoute={{id: 'SplashPage', name: 'Index'}}
          renderScene={this.renderScene.bind(this)}
          configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromRight;
          }} />
    );
  }
  renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'SplashPage') {
      return (
        <SplashPage navigator={navigator} />
      )
    }
    if (routeId === 'Register') {
      return (
        <Register navigator={navigator} />
      )
    }
    if (routeId === 'Login') {
      return (
        <Login navigator={navigator} />
      )
    }
    if (routeId === 'ListNote') {
      return (
        <ListNote navigator={navigator} />
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20
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

AppRegistry.registerComponent('PersonalNote', () => PersonalNote);
