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

export default class LoginPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      error: ''
    }
  }

  onChangeLoginEmail(email){
    this.setState({email})
  }

  onChangeLoginPassword(password){
    this.setState({password})
  }

  onLoginPress(){
    var email = this.state.email.trim().toLowerCase()
    var password = this.state.password.trim().toLowerCase()

    if(email === '' && password === ''){
      this.setState({error: "AllEmpty"})
    }else if(email === ''){
      this.setState({error: "Email"})
    }else if(password === ''){
      this.setState({error: "Password"})
    }else if(email !== "admin@admin.com" && password !== "admin"){
      this.setState({error: "NotFound"})
    }else if(email !== 'admin@admin.com' && password !== ""){
      this.setState({error: "EmailWrong"})
    }else if(email !== '' && password !== "admin"){
      this.setState({error: "PassWrong"})
    }else if(email === "admin@admin.com" && password === "admin"){
      this.props.navigator.push({
        id: 'NoteListPage',
        name: 'Note List',
      });
      this.setState({
        email: '',
        password: ''
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
          alignItems: 'center'
        }}
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
          {/* <Text>{this.state.error}</Text>*/}
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
            placeholder="Email"
            onChangeText={this.onChangeLoginEmail.bind(this)}
          />

          {(this.state.error === 'Email' || this.state.error === 'AllEmpty') ? <Text>Please Insert Email</Text> : (this.state.error === 'EmailWrong') ?
            <Text>Email is wrong</Text>
          : <Text></Text> }

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
            placeholder="Password"
            onChangeText={this.onChangeLoginPassword.bind(this)}
          />

          {(this.state.error === 'Password' || this.state.error === 'AllEmpty') ? <Text>Please Insert Password</Text> :
          (this.state.error === 'PassWrong') ? <Text>Password is wrong</Text> : <Text></Text>}
          <BtnCustom
          onPress={this.onLoginPress.bind(this)}
          style={{borderWidth: 1, borderColor: 'grey', backgroundColor: '#a52a2a', color: '#f0fff0', width: 200, marginBottom: 25,
          marginTop: 30}}>
            Login
          </BtnCustom>

          <BtnCustom
          style={{borderWidth: 1, borderColor: 'grey', backgroundColor: '#a52a2a', color: '#f0fff0', width: 200, marginBottom: 25}}>
            Forget Password
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
