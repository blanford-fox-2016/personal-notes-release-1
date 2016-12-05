import React, {Component} from 'react';
import { Container, Header, Content, Title, Button, Icon, H3, Text, List, ListItem, Card, CardItem, Thumbnail, Footer} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class UserProfile extends Component {
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
              <Text style={{fontSize:18}}><Text style={{fontWeight:'bold', fontSize:18}}>Name:</Text> Septian Adhi Tama</Text>
              <Text style={{fontSize:18}}><Text style={{fontWeight:'bold', fontSize:18}}>Username:</Text> tamatamvan</Text>
              <Text style={{fontSize:18}}><Text style={{fontWeight:'bold', fontSize:18}}>Email:</Text> tama@tamatamvan.web.id</Text>
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
