import React, {Component} from 'react';
import { Container, Header, Content, Title, Button, Icon, H3, Text, List, ListItem, Card, CardItem, Thumbnail} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class NoteList extends Component {
  constructor(props){
    super(props);
    this.state = {
      results: {}
    }
  }
  _LoadNotes(){
    fetch('http://localhost:3000/api/note', {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({results: responseData});
    })
    .done()
  }
  componentDidMount() {
    this._LoadNotes();
  }
  _Back() {
    this.props.navigator.pop();
  }
  render() {
    return (
      <Container>
        <Header>
          <Button transparent onPress={this._Back.bind(this)}>
            <Icon name='ios-arrow-back' />
          </Button>
          <Title>
            Note Lists
          </Title>
          <Button transparent>
            <Icon name='ios-add-circle' />
          </Button>
        </Header>
        <Content>
          <Card dataArray={this.state.results} renderRow={(note) =>
              <CardItem>
                <H3>{note.title}</H3>
                <Text>{note.content}</Text>
              </CardItem>
            }/>
        </Content>
      </Container>
    )
  }
}
