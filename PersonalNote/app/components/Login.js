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

export default class Login extends Component {
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
      <View style={{marginTop: 20}}>
        <HText />
        <FormLogin />
      </View>
    );
  }
}

class HText extends Component {
  render(){
    return(
      <Text style={styles.welcome}>
        Login to TamvanNote!
      </Text>
    )
  }
}

class FormLogin extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
     };
  }
  test() {
    console.log('Loggin Button Clicked');
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
        <Button
          onPress={this.test}
          title="Login"
          style={{
            color:'#007aff',
            borderWidth:1,
            borderColor:'#007aff'
          }}
          accessibilityLabel="Click this button to register"
        />
        <Button
          onPress={this.test}
          title="Forgot Password"
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
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
          onPress={() => navigator.parentNavigator.pop()}>
        <Text style={{color: 'white', margin: 10,}}>
          back
        </Text>
      </TouchableOpacity>
    );
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', margin: 10, fontSize: 16}}>
          Login
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
