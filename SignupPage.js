'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

import But from 'react-native-button';
import SignupForm from './signup/SignupForm';

export default class SignupPage extends Component {
  render() {
    return (
      <Navigator
      renderScene={this.renderScene.bind(this)}
      navigator = {this.props.navigator}
      navigationBar={
        <Navigator.NavigationBar style={styles.navigationBar}
        routeMapper={NavigationBarRouteMapper} />
      } />
    );
  }
  renderScene(route, navigator) {
    return (
      <View style={styles.mainContent}>
        <SignupForm />
      </View>
    );
  }
  gotoNext() {
    this.props.navigator.push({
      id: 'MainPage',
      name: 'home',
    });
  }

  gotoLogin() {
    this.props.navigator.push({
      id: 'LoginPage',
      name: 'login'
    })
  }

  gotoSignup() {
    this.props.navigator.push({
      id: 'SignupPage',
      name: 'signup'
    })
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
      onPress={() => navigator.parentNavigator.pop()}>
        <Text style={styles.navigationTitle}>
          Back
        </Text>
      </TouchableOpacity>
    );
  },
  RightButton(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={styles.navigationTitle}>
          Login
        </Text>
      </TouchableOpacity>
    );
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
      <Text style={styles.navigationTitle}>
      Signup
      </Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: '#d35400',
    alignItems: 'center'
  },
  navigationTitle: {
    color: '#fff',
    margin: 10,
    fontSize: 16,
    fontWeight: 'bold'
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1'
  },
  buttonNavigation: {
    color: 'white',
    width: 150,
    height:30,
    paddingTop: 4,
    overflow:'hidden',
    borderRadius:6,
    backgroundColor: '#d35400',
    marginBottom: 20
  }
});
