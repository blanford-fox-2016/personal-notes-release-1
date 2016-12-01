'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Navigator,
  ScrollView,
  TouchableHighlight,//kalau di android TouchableNativeFeedback
  TouchableOpacity
} from 'react-native';

import BtnCustom from 'react-native-button'
import DataNote from './DataNote'

export default class RegisterPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      age: '',
      email: ''
    }
  }

  onChangeRegisterName(name){
    this.setState({name})
  }

  onChangeRegisterAge(age){
    this.setState({age})
  }

  onChangeRegisterEmail(email){
    this.setState({email})
  }

  onRegisterPress(){
    var name = this.state.name.trim().toLowerCase()
    var age = this.state.age.trim().toLowerCase()
    var email = this.state.email.trim().toLowerCase()

    if(!name && !age && email){
      return
    }else{
      this.setState({
        name: '',
        age: '',
        email: ''
      })
    }
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
    return (
      <ScrollView style={{
        paddingTop: 80,
        backgroundColor: '#f5f5dc'
      }}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'
        }}>
          <Text>{this.state.error}</Text>
          <Text style={{
            marginTop: 70,
            marginBottom: 30,
            textAlign: 'center',
            fontSize: 24
          }}>
            Personal Note
          </Text>

          {(this.state.error === 'NotFound') ? <Text>email & password is wrong</Text> : <Text></Text> }

          <TextInput
            style={{
              height: 40,
              width: 300,
              backgroundColor: 'cornsilk',
              borderColor: 'olive',
              borderWidth: 1,
              alignSelf: 'center'
            }}
            placeholder="Name"
            onChangeText={this.onChangeRegisterName.bind(this)}
          />

          <TextInput
            style={{
              height: 40,
              width: 300,
              backgroundColor: 'cornsilk',
              borderColor: 'olive',
              borderWidth: 1,
              alignSelf: 'center',
              marginTop: 30
            }}
            placeholder="Age"
            onChangeText={this.onChangeRegisterAge.bind(this)}
          />

          <TextInput
            style={{
              height: 40,
              width: 300,
              backgroundColor: 'cornsilk',
              borderColor: 'olive',
              borderWidth: 1,
              alignSelf: 'center',
              marginTop: 30
            }}
            placeholder="Email"
            onChangeText={this.onChangeRegisterEmail.bind(this)}
          />

          <BtnCustom
          onPress={this.onRegisterPress.bind(this)}
          style={{borderWidth: 1, borderColor: 'grey', backgroundColor: '#a52a2a', color: '#f0fff0', width: 200, marginBottom: 25,
          marginTop: 30}}>
            Register
          </BtnCustom>

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
    return null
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', margin: 10, fontSize: 16}}>
          Form Login
        </Text>
      </TouchableOpacity>
    );
  }
};
