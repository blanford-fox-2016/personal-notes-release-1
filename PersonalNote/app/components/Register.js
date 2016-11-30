import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  Navigator,
  TouchableOpacity,
  TouchableHighlight,
  TextInput
} from 'react-native';
// import {Button} from 'react-bootstrap';

export default class Register extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navigator
      renderScene={this.renderScene.bind(this)}
      navigationBar={
        <Navigator.NavigationBar style={{backgroundColor: '#007aff', alignItems: 'center'}}
        routeMapper={NavigationBarRouteMapper} />
      } />
    );
  }

  renderScene(route, navigator) {
    return (
      <View style={{marginTop: 200}}>
        <WelcomeText />
        <FormRegister nextPage={this.gotoNext.bind(this)} />
      </View>
    );
  }

  gotoNext() {
    this.props.navigator.push({
      id: 'Login',
      name: 'Login',
    });
  }
}

class WelcomeText extends Component {
  render(){
    return(
      <Text style={styles.welcome}>
        Welcome to TamvanNote!
      </Text>
    )
  }
}

class FormRegister extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
     };
  }
  test() {
    console.log('Register Button Clicked');
  }
  render() {
    return (
      <View>
        <Text>Email : </Text>
        <TextInput
          style={{height: 30, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <Text>Password : </Text>
        <TextInput
          secureTextEntry={true} style={{height: 30, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Text>Confirm Password : </Text>
        <TextInput
          secureTextEntry={true} style={{height: 30, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(passwordConfirm) => this.setState({passwordConfirm})}
          value={this.state.passwordConfirm}
        />
        <Button
          onPress={this.props.nextPage}
          title="Register"
          style={{
            color:'#007aff',
            borderWidth:1,
            borderColor:'#007aff'
          }}
          accessibilityLabel="Click this button to register"
        />
      </View>
    );
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
        Register
        </Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
