import React, {Component} from 'react';
import { Container, Header, Content, Title, Button, Icon, H1, Text, List, ListItem, Card, CardItem, Thumbnail} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

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
  _LogOut() {
    this.props.navigator.pop()
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
              <CardItem button onPress={this._LogOut.bind(this)}>
                <Icon name="ios-log-out-outline" style={{color:"#0A69FE"}}/>
                <Text>Log Out</Text>
              </CardItem>
            </Card>
        </Content>
      </Container>
    )
  }
}
