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

import LoginForm from './LoginForm';

export default class LoginPage extends Component {
  render() {
    return (
      <Navigator style={styles._viewContainer}
      renderScene={this.renderScene.bind(this)}
      navigationBar={
        <Navigator.NavigationBar style={{backgroundColor: '#246dd5', alignItems: 'center'}}
        routeMapper={NavigationBarRouteMapper} />
      } />
    );
  }
  renderScene(route, navigator) {
    return (
      <View>
        <TouchableHighlight
        onPress={this.gotoNext.bind(this)}>
          <View style={styles._noteStyle}>
            <Text style={styles._titleText}>Welcome To Hactiv8 Notes </Text>
            <LoginForm style={{marginLeft: 30}} placeholder={"email coy"} />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
  gotoNext() {
    this.props.navigator.push({
      id: 'MainPage',
      name: 'home',
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
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{color: 'white', margin: 10, fontSize: 16}}>
      login
      </Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  _viewContainer: {
    backgroundColor: 'yellow'
  },
  _noteStyle: {
    margin: 0,
    marginTop: 110
  },
  _titleText: {
    fontSize: 50,
    textAlign: 'center',
    marginBottom: 40
  }
});
