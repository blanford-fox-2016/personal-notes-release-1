import React, { Component } from 'react';
// import LoginList from './LoginList';
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native';
// import LoginList from './LoginList';

export default class NoteList extends Component {
  render() {
    let dummy = [
      {title: 'Note 1', description: 'this is description', date: '08:45 19/05/2016'},
      {title: 'Note 1', description: 'this is description', date: '08:45 19/05/2016'},
      {title: 'Note 1', description: 'this is description', date: '08:45 19/05/2016'},
      {title: 'Note 1', description: 'this is description', date: '08:45 19/05/2016'},
      {title: 'Note 1', description: 'this is description', date: '08:45 19/05/2016'},
      {title: 'Note 1', description: 'this is description', date: '08:45 19/05/2016'},
      {title: 'Note 1', description: 'this is description', date: '08:45 19/05/2016'},
      {title: 'Note 1', description: 'this is description', date: '08:45 19/05/2016'},
      {title: 'Note 1', description: 'this is description', date: '08:45 19/05/2016'},
      {title: 'Note 1', description: 'this is description', date: '08:45 19/05/2016'},
      {title: 'Note 1', description: 'this is description', date: '08:45 19/05/2016'},
      {title: 'Note 1', description: 'this is description', date: '08:45 19/05/2016'},
      {title: 'Note 1', description: 'this is description', date: '08:45 19/05/2016'},
      {title: 'Note 1', description: 'this is description', date: '08:45 19/05/2016'},
      {title: 'Note 1', description: 'this is description', date: '08:45 19/05/2016'},
      {title: 'Note 1', description: 'this is description', date: '08:45 19/05/2016'},
      {title: 'Note 1', description: 'this is description', date: '08:45 19/05/2016'}]
    let rendered = dummy.map(content => {
      return (
        <View style={styles._viewContainer}>
          <Text style={styles._header}>{content.title}</Text>
          <Text style={styles._body}>{content.description}</Text>
          <Text>{content.date}</Text>
        </View>
      )
    })
    return (
      <View style={styles._viewContainer}>
        {rendered}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  _viewContainer: {
    marginTop: 30,
    backgroundColor: '#fff'
  },
  _header: {
    fontSize:20,
  },
  _body: {
    fontSize: 10,
  },
  _noteList: {
    textAlign: 'left'
  },
  _titleText: {
    fontSize: 50,
    textAlign: 'center',
    marginBottom: 40
  }
});
