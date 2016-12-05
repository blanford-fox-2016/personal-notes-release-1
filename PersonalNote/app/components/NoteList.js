import React, {Component} from 'react';
import { Container, Header, Content, Title, Button, Icon, H3, Text, List, ListItem, Card, CardItem, Thumbnail} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class NoteList extends Component {
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
            <Card>
              <CardItem>
                <H3>Note Title</H3>
                <Text>Note Lists</Text>
              </CardItem>
              <CardItem>
                <H3>Note Title</H3>
                <Text>Lorem ipsum dolor sit amet</Text>
              </CardItem>
              <CardItem>
                <H3>Note Title</H3>
                <Text>Lorem ipsum dolor sit amet</Text>
              </CardItem>
              <CardItem>
                <H3>Note Title</H3>
                <Text>Lorem ipsum dolor sit amet</Text>
              </CardItem>
            </Card>
        </Content>
      </Container>
    )
  }
}
