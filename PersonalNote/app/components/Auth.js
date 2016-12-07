import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Modal, Image, Platform, AlertIOS, AsyncStorage } from 'react-native';
import { Container, Header, Content, Title, Button, Icon, H1, Text, List, ListItem, InputGroup, Input, Tabs } from 'native-base';

var STORAGE_KEY = 'id_token';

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      fullname: '',
      email: '',
      username: '',
      password: '',
      confirmpass: '',
      isLoading: false
    }
  }
  async _onValueChange(item, selectedValue) {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }
  // async _checkAuth() {
  //   // AlertIOS.alert(await AsyncStorage.getItem(STORAGE_KEY));
  //   try {
  //     // await AsyncStorage.getItem(STORAGE_KEY);
  //     // this.setState({authenticated: true});
  //     // this.props.navigator.replace({id: 'menu'})
  //     AlertIOS.alert('Token Now', await AsyncStorage.getItem(STORAGE_KEY));
  //   } catch(error) {
  //     console.log('AsyncStorage error: ' + error.message);
  //   }
  //   // if (await AsyncStorage.getItem(STORAGE_KEY)) {
  //   //   this.setState({authenticated: true});
  //   //   this.props.navigator.replace({id: 'menu'})
  //   // }
  // }
  // componentWillMount() {
  //   this._checkAuth();
  // }
  _clearForm() {
    this.setState({
      fullname:'',
      email:'',
      username:'',
      password: '',
      confirmpass: ''
    });
  }
  _onHandlePress() {
    this.props.navigator.replace({id: 'menu'})
  }
  _signUp() {
    var host = 'http://localhost:3000';
    if (this.state.password === this.state.confirmpass) {
      fetch(host + "/auth/register", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.state.fullname,
          email: this.state.email,
          username: this.state.username,
          password: this.state.password
        })
      })
      .then((response) => response.json())
      .then((responseData) => {
        // this._onValueChange(STORAGE_KEY, responseData.id_token),
        this._clearForm();
        AlertIOS.alert(
          "Registration Success, you can login now!"
        )
      })
      .done();
    } else {
      AlertIOS.alert("Make sure your password and password confirmation are the same!")
    }
  }
  _signIn() {
    var host = 'http://localhost:3000';
    if (this.state.username != '' && this.state.password != '') {
      fetch(host + "/auth/login", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      })
      .then((response) => response.json())
      .then((responseData) => {
        // this._onValueChange(STORAGE_KEY, responseData.id_token),
        AlertIOS.alert(
          "Login Success!" + JSON.stringify(responseData)
        )
        this._onValueChange(STORAGE_KEY, responseData.token)
        this._clearForm();
        this.props.navigator.replace({id: 'menu'});
      })
      .done();
    } else {
      AlertIOS.alert("All forms required!")
    }
  }
  render() {
    return (
      <Container>
        <Header>
          <Title>
            MyTamvan Notes
          </Title>
        </Header>
        <Content>
          <Tabs>
            <Content tabLabel='Sign In'>
              <H1 style={{alignSelf: 'center', paddingTop: 7}}>Sign In</H1>
              <List>
                <ListItem>
                  <InputGroup>
                    <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                    <Input
                      autoCapitalize="none"
                      value={this.state.username}
                      onChangeText={(text) => this.setState({username:text})}
                      placeholder="Enter your username" />
                  </InputGroup>
                </ListItem>
                <ListItem>
                  <InputGroup>
                    <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
                    <Input
                      value={this.state.password}
                      onChangeText={(text) => this.setState({password:text})}
                      placeholder="Enter your password" secureTextEntry/>
                  </InputGroup>
                </ListItem>
              </List>

              <Button block onPress={this._signIn.bind(this)} style={{margin: 20}}>
                Sign In
              </Button>
            </Content>

            <Content tabLabel='Register'>
              <H1 style={{alignSelf: 'center', paddingTop: 7}}>Register</H1>
              <List>
                <ListItem>
                  <InputGroup>
                    <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                    <Input
                      value={this.state.fullname}
                      onChangeText={(text) => this.setState({fullname:text})}
                      placeholder="Enter your full name" />
                  </InputGroup>
                </ListItem>
                <ListItem>
                  <InputGroup>
                    <Icon name="ios-at-outline" style={{ color: '#0A69FE' }} />
                    <Input
                      autoCapitalize="none"
                      value={this.state.email}
                      onChangeText={(text) => this.setState({email:text})}
                      placeholder="Enter your email" />
                  </InputGroup>
                </ListItem>
                <ListItem>
                  <InputGroup>
                    <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                    <Input
                      autoCapitalize="none"
                      value={this.state.username}
                      onChangeText={(text) => this.setState({username:text})}
                      placeholder="Enter your username" />
                  </InputGroup>
                </ListItem>
                <ListItem>
                  <InputGroup>
                    <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
                    <Input
                      value={this.state.password}
                      onChangeText={(text) => this.setState({password:text})}
                      placeholder="Enter your password" secureTextEntry/>
                  </InputGroup>
                </ListItem>
                <ListItem>
                  <InputGroup>
                    <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
                    <Input
                      value={this.state.confirmpass}
                      onChangeText={(text) => this.setState({confirmpass:text})}
                      placeholder="Confirm your password" secureTextEntry/>
                  </InputGroup>
                </ListItem>
              </List>

              <Button block onPress={this._signUp.bind(this)} style={{margin:20}}>
                Sign Up
              </Button>
            </Content>

          </Tabs>
        </Content>
      </Container>
    )
  }
}
