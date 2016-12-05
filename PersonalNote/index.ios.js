/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Auth from './app/components/Auth';
import Menu from './app/components/Menu';
import NoteList from './app/components/NoteList';
import NewNote from './app/components/NewNote';
import NoteDetail from './app/components/NoteDetail';

 class PersonalNote extends Component {
    render() {
      return(
        <NoteDetail />
      )
    }
 }

AppRegistry.registerComponent('PersonalNote', () => PersonalNote);
