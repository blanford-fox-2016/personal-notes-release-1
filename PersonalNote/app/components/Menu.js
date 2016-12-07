import React, {Component} from 'react';
import { AsyncStorage, AlertIOS, Alert } from 'react-native';
import { Container, Header, Content, Title, Button, Icon, H1, Text, List, ListItem, Card, CardItem, Thumbnail, } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

var STORAGE_KEY = 'id_token';

export default class Menu extends Component {
  _NoteList() {
    this.props.navigator.push({id: 'notelist'})
  }
  _NewNote() {
    this.props.navigator.push({id: 'newnote'})
  }
  _UserProfile() {
    this.props.navigator.push({id: 'userprofile'})
  }
  async _userLogout() {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
      AlertIOS.alert("You've been logged out! Good Bye!");
      this.props.navigator.replace({'id':'auth'});
    } catch(error) {
      console.log('AsyncStorage' + error.message);
    }
  }
  render() {
    return (
      <Container>
        <Header>
          <Title>
            MyTamvanNote Menu
          </Title>
        </Header>
        <Content>
            <Card>
              <CardItem button onPress={this._NoteList.bind(this)}>
                <Icon name="ios-list-outline" style={{color:"#0A69FE"}}/>
                <Text>Note Lists</Text>
              </CardItem>
              <CardItem button onPress={this._NewNote.bind(this)}>
                <Icon name="ios-add-circle-outline" style={{color:"#0A69FE"}}/>
                <Text>Create New Note</Text>
              </CardItem>
              <CardItem button onPress={this._UserProfile.bind(this)}>
                <Icon name="ios-person-outline" style={{color:"#0A69FE"}}/>
                <Text>My Profile</Text>
              </CardItem>
              <CardItem button onPress={this._userLogout.bind(this)}>
                <Icon name="ios-log-out-outline" style={{color:"#0A69FE"}}/>
                <Text>Log Out</Text>
              </CardItem>
            </Card>
        </Content>
      </Container>
    )
  }
}
