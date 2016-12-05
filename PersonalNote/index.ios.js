/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';
import Auth from './app/components/Auth';
import Menu from './app/components/Menu';
import NoteList from './app/components/NoteList';
import NewNote from './app/components/NewNote';
import EditNote from './app/components/EditNote';
import NoteDetail from './app/components/NoteDetail';
import UserProfile from './app/components/UserProfile';

class PersonalNote extends Component {
  _renderScene(route, navigator) {
    switch (route.id) {
      case 'auth':
        return <Auth navigator={navigator} />;
      case 'menu':
        return <Menu navigator={navigator} />;
      case 'notelist':
        return <NoteList navigator={navigator} />;
      case 'newnote':
        return <NewNote navigator={navigator} />;
      case 'userprofile':
        return <UserProfile navigator={navigator} />;
      default:
        return <Menu navigator={navigator} />;
    }
  }
  render() {
    return (
      <Navigator
        initialRoute={{id: 'auth'}}
        renderScene={this._renderScene} />
    );
  }
}

AppRegistry.registerComponent('PersonalNote', () => PersonalNote);
