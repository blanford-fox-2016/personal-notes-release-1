import React, {Component} from 'react';
import { Container, Header, Content, Title, Button, Icon, H1, Text, List, ListItem, Card, CardItem, Thumbnail} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Menu extends Component {
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
              <CardItem>
                <Icon name="ios-list-outline" style={{color:"#0A69FE"}}/>
                <Text>Note Lists</Text>
              </CardItem>
              <CardItem>
                <Icon name="ios-add-circle-outline" style={{color:"#0A69FE"}}/>
                <Text>Create New Note</Text>
              </CardItem>
              <CardItem>
                <Icon name="ios-person-outline" style={{color:"#0A69FE"}}/>
                <Text>My Profile</Text>
              </CardItem>
              <CardItem>
                <Icon name="ios-log-out-outline" style={{color:"#0A69FE"}}/>
                <Text>Log Out</Text>
              </CardItem>
            </Card>
        </Content>
      </Container>
    )
  }
}
