import React, {Component} from 'react';
import {AsyncStorage, Alert, AlertIOS} from 'react-native';
import { Container, Header, Content, Title, Button, Icon, H1, Text, List, ListItem, InputGroup, Input, Tabs } from 'native-base';
const jwtDecode = require('jwt-decode');

export default class NewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_data: {},
      title: '',
      content: ''
    }
  }
  async _setAuthor() {
    // console.log(jwtDecode(await AsyncStorage.getItem('id_token')));
    // AlertIOS.alert(jwtDecode(await AsyncStorage.getItem('id_token')));
    var userdata = jwtDecode(await AsyncStorage.getItem('id_token'));
    this.setState({user_data: jwtDecode(await AsyncStorage.getItem('id_token'))});
  }
  componentWillMount() {
    this._setAuthor()
  }
  _Back() {
    this.props.navigator.pop();
  }
  _SaveNote() {
    if (this.state.title == '') {
      AlertIOS.alert('Title field required!')
    } else if (this.state.content == '') {
      AlertIOS.alert('Content field required!')
    } else {
      fetch('http://localhost:3000/api/note', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: this.state.title,
          content: this.state.content,
          author: this.state.user_data.username
        })
      })
      .then((response) => response.json())
      .then((responseData) => {
        AlertIOS.alert('Success', 'Your note has been saved!');
        this._clearForm();
        this.props.navigator.push({id: 'notelist'});
      })
      .done();
    }
  }
  _clearForm() {
    this.setState({
      title:'',
      content:''
    });
  }
  render() {
    return (
      <Container>
        <Header>
          <Button transparent onPress={this._Back.bind(this)}>
            <Icon name='ios-arrow-back' />
          </Button>
          <Title>
            Create New Note
          </Title>
          <Button transparent>
            <Icon name='ios-checkmark-circle' />
          </Button>
        </Header>
        <Content>
            <List>
              <ListItem>
                <InputGroup borderType='underline'>
                  <Input
                    value={this.state.title}
                    onChangeText={(text) => this.setState({title:text})}
                    placeholder='Note Title'/>
                </InputGroup>
              </ListItem>
              <ListItem>
                <InputGroup borderType='underline'>
                  <Input
                    value={this.state.content}
                    onChangeText={(text) => this.setState({content:text})}
                    style={{height:200}}
                    multiline={true}
                    numberOfLines={8}
                    placeholder='Write your notes here . . .'/>
                </InputGroup>
              </ListItem>
            </List>

            <Button onPress={this._SaveNote.bind(this)} style={{ alignSelf: 'stretch', margin: 20 }}>
              Save
            </Button>
        </Content>
      </Container>
    )
  }
}
