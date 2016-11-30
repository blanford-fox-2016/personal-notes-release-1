import React, { Component } from 'react';
// import LoginList from './LoginList';
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native';
import NoteList from './NoteList';

export default class NotePage extends Component {
  componentWillMount() {
    var navigator = this.props.navigator;
    setTimeout(() => {
      navigator.replace({
        id: 'NotePage'
      });
    }, 1000)}

  render() {
    return (
      <View style={styles._viewContainer}>
        <ScrollView>
          <NoteList />
        </ScrollView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  _viewContainer: {
    backgroundColor: 'yellow',
    alignItems: 'center',
    height: 50,
    flex: 1,
    flexDirection: 'row',

  },
  _titleText: {
    fontSize: 50,
    textAlign: 'center',
    marginBottom: 40
  }
});
