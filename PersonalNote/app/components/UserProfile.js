import React, {Component} from 'react';
import {AlertIOS, Alert, AsyncStorage} from 'react-native';
import { Container, Header, Content, Title, Button, Icon, H3, Text, List, ListItem, Card, CardItem, Thumbnail, Footer} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

const jwtDecode = require('jwt-decode');

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state={
      user_data: {}
    }
  }
  async _setUserData() {
    var userdata = jwtDecode(await AsyncStorage.getItem('id_token'));
    this.setState({user_data: userdata});
  }
  componentWillMount() {
    this._setUserData()
  }
  showuser() {
    AlertIOS.alert(JSON.stringify(this.state.user_data))
  }
  _Back() {
    this.props.navigator.pop();
  }
  render(){
    return(
      <Container>
        <Content>
          <Header>
            <Button transparent onPress={this._Back.bind(this)}>
              <Icon name='ios-arrow-back' />
            </Button>
            <Title>My Profile</Title>
            <Button transparent>
              <Icon name='ios-create' />
            </Button>
          </Header>
          <Card style={{ flex: 0 }}>
            <CardItem cardBody>
              <Text style={{fontSize:18}}><Text style={{fontWeight:'bold', fontSize:18}}>Name:</Text> {this.state.user_data.name}</Text>
              <Text style={{fontSize:18}}><Text style={{fontWeight:'bold', fontSize:18}}>Username:</Text> {this.state.user_data.username}</Text>
              <Text style={{fontSize:18}}><Text style={{fontWeight:'bold', fontSize:18}}>Email:</Text> {this.state.user_data.email}</Text>
            </CardItem>
          </Card>
        </Content>

        <Footer>
          <Grid>
            <Col>
              <Button block danger style={{borderRadius: 0}}>
                <Icon name="ios-trash-outline"/>
                <Text>Delete</Text>
              </Button>
            </Col>
            <Col>
              <Button onPress={this.showuser.bind(this)} block success style={{borderRadius: 0}}>
                <Icon name="ios-create-outline"/>
                <Text>Edit</Text>
              </Button>
            </Col>
          </Grid>
        </Footer>
      </Container>
    )
  }
}
