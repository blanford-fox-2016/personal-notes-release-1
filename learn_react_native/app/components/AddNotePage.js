'use strict'

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Navigator,
  TouchableHighlight,//kalau di android TouchableNativeFeedback
  TouchableOpacity
} from 'react-native'
import BtnCustom from 'react-native-button'

export default class AddNotePage extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      content: ''
    }
    this.onChangeTitle = this.onChangeTitle.bind(this)
    this.onChangeContent = this.onChangeContent.bind(this)
  }

  render(){
    return(
      <Navigator
      renderScene={this.renderScene.bind(this)}
      navigator={this.props.navigator}
      navigationBar={
        <Navigator.NavigationBar style={{backgroundColor: '#cd853f', alignItems: 'center'}}
        routeMapper={NavigationBarRouteMapper} />
      } />
    )
  }

  onChangeTitle(title){
    this.setState({title})
  }

  onChangeContent(content){
    this.setState({content})
  }

  onAddPress(){
    let title = this.state.title.trim()
    let content = this.state.content.trim()

  }

  renderScene(route, navigator) {
    return(
      <ScrollView style={{
        paddingTop: 80,
        backgroundColor: '#f5f5dc'
      }}>
        <View style={{flex: 1, alignItems: 'center', backgroundColor: '#f5f5dc', justifyContent: 'center'}}>
          <Text style={{
            marginBottom: 30,
            textAlign: 'center'
          }}>
            Add New Note
          </Text>

          <TextInput
            style={{
              height: 40,
              width: 300,
              backgroundColor: 'cornsilk',
              borderColor: 'olive',
              borderWidth: 1,
              alignSelf: 'center',
              paddingLeft: 120
            }}
            placeholder="Add Title"
            onChangeText={this.onChangeTitle}
          />

          <TextInput
            style={{
              height: 100,
              width: 300,
              backgroundColor: 'cornsilk',
              borderColor: 'olive',
              borderWidth: 1,
              paddingTop: 10,
              marginTop: 20,
              marginBottom: 20,
              alignSelf: 'center',
              paddingLeft: 70
            }}
            placeholder="Add Note's Content"
            onChangeText={this.onChangeContent}
          />
          <View style={{
            flex: 1,
            flexDirection: 'row',
            alignSelf: 'center'
          }}>
            <BtnCustom
            onPress={this.onAddPress}
            style={{
              backgroundColor: '#cd853f',
              borderColor: 'grey',
              borderWidth: 1,
              color: '#f0fff0',
              width: 100,
              height: 50,
              marginRight: 25
            }}>
              Add New Note
            </BtnCustom>

            <BtnCustom
            onPress={() => navigator.parentNavigator.pop()}
            style={{
              backgroundColor: '#800000',
              borderColor: 'grey',
              borderWidth: 1,
              color: '#f0fff0',
              width: 80,
              height: 50,
              paddingTop: 10,
              marginLeft: 25
            }}>
              Cancel
            </BtnCustom>
          </View>
        </View>
      </ScrollView>
    )
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
    return null
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', margin: 10, fontSize: 16}}>
          Personal Note
        </Text>
      </TouchableOpacity>
    );
  }
};
