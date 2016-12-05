/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import { AppRegistry } from 'react-native';
import Auth from './app/components/Auth';

 class PersonalNote extends Component {
    render() {
      return(
        <Auth />
      )
    }
 }

AppRegistry.registerComponent('PersonalNote', () => PersonalNote);
