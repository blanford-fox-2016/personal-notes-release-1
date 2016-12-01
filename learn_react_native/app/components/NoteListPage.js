'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator,
  ScrollView,
  TouchableHighlight,//kalau di android TouchableNativeFeedback
  TouchableOpacity
} from 'react-native';

import BtnCustom from 'react-native-button'
import DataNote from './DataNote'

export default class NoteListPage extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Navigator
      renderScene={this.renderScene.bind(this)}
      navigator={this.props.navigator}
      navigationBar={
        <Navigator.NavigationBar style={{
          backgroundColor: '#cd853f',
          alignItems: 'center'}}
        routeMapper={NavigationBarRouteMapper} />
      } />
    );
  }
  renderScene(route, navigator) {
    let NoteNodes = this.props.data.map(note => {
      return(
        <DataNote key={note.id} note={note} />
      )
    })
    return (
      <ScrollView style={{
        paddingTop: 80,
        backgroundColor: '#f5f5dc'
      }}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'
        }}>
          {NoteNodes}
        </View>
      </ScrollView>
    );
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return (
      <BtnCustom
      onPress={() => navigator.parentNavigator.pop()}
      style={{color: 'white', margin: 10, fontSize: 16}}>
        Back
      </BtnCustom>
    )
  },
  RightButton(route, navigator, index, navState) {
    return (
      <BtnCustom
      onPress={() => {
        navigator.parentNavigator.push({
          id: 'AddNotePage',
          name: 'Add New Note',
        })
      }}
      style={{color: 'white', margin: 10, fontSize: 16}}>
        Add Note
      </BtnCustom>
    )
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', margin: 10, fontSize: 16}}>
          Note List
        </Text>
      </TouchableOpacity>
    );
  }
};
