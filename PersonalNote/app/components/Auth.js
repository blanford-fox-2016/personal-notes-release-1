import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Modal, Image, Platform } from 'react-native';
import { Container, Header, Content, Title, Button, Icon, H1, Text, List, ListItem, InputGroup, Input, Tabs } from 'native-base';

export default class Auth extends Component {
  constructor(props) {
    super(props);
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
            <RegisterForm tabLabel="Register"/>
            <SignInForm tabLabel="SignIn" />
          </Tabs>
        </Content>
      </Container>
    )
  }
}

class RegisterForm extends Component {
  render() {
    return(
      <Content>
        <H1 style={{alignSelf: 'center', paddingTop: 7}}>Register</H1>
        <List>
          <ListItem>
            <InputGroup>
              <Icon name="ios-person" style={{ color: '#0A69FE' }} />
              <Input placeholder="Enter your full name" />
            </InputGroup>
          </ListItem>
          <ListItem>
            <InputGroup>
              <Icon name="ios-at-outline" style={{ color: '#0A69FE' }} />
              <Input placeholder="Enter your email" />
            </InputGroup>
          </ListItem>
          <ListItem>
            <InputGroup>
              <Icon name="ios-person" style={{ color: '#0A69FE' }} />
              <Input placeholder="Enter your username" />
            </InputGroup>
          </ListItem>
          <ListItem>
            <InputGroup>
              <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
              <Input placeholder="Enter your password" secureTextEntry/>
            </InputGroup>
          </ListItem>
          <ListItem>
            <InputGroup>
              <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
              <Input placeholder="Confirm your password" secureTextEntry/>
            </InputGroup>
          </ListItem>
        </List>

        <Button style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
          Sign Up
        </Button>
      </Content>
    )
  }
}

class SignInForm extends Component {
  render() {
    return(
      <Content>
        <H1 style={{alignSelf: 'center', paddingTop: 7}}>Sign In</H1>
        <List>
          <ListItem>
            <InputGroup>
              <Icon name="ios-person" style={{ color: '#0A69FE' }} />
              <Input placeholder="Enter your username" />
            </InputGroup>
          </ListItem>
          <ListItem>
            <InputGroup>
              <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
              <Input placeholder="Enter your password" secureTextEntry/>
            </InputGroup>
          </ListItem>
        </List>

        <Button style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
          Sign In
        </Button>
      </Content>
    )
  }
}
