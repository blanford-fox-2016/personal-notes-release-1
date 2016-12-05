import React, {Component} from 'react';
import { Container, Header, Content, Title, Button, Icon, H3, Text, List, ListItem, Card, CardItem, Thumbnail, Footer} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class NoteDetail extends Component {
  render(){
    return(
      <Container>
        <Content>
          <Header>
            <Button transparent>
              <Icon name='ios-arrow-back' />
            </Button>
            <Title>Note's Detail</Title>
            <Button transparent>
              <Icon name='ios-create' />
            </Button>
          </Header>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Text>Note Title</Text>
              <Text note>April 15, 2016</Text>
            </CardItem>

            <CardItem cardBody>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Text>
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
              <Button block success style={{borderRadius: 0}}>
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
