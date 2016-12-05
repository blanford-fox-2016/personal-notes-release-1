import React, {Component} from 'react';
import { Container, Header, Content, Title, Button, Icon, H1, Text, List, ListItem, InputGroup, Input, Tabs } from 'native-base';

export default class EditNote extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Button transparent>
            <Icon name='ios-arrow-back' />
          </Button>
          <Title>
            Edit Note
          </Title>
          <Button transparent>
            <Icon name='ios-checkmark-circle' />
          </Button>
        </Header>
        <Content>
            <List>
              <ListItem>
                <InputGroup borderType='underline'>
                  <Input placeholder='Note Title'/>
                </InputGroup>
              </ListItem>
              <ListItem>
                <InputGroup borderType='underline'>
                  <Input style={{height:200}} multiline={true} numberOfLines={8} placeholder='Write your notes here . . .'/>
                </InputGroup>
              </ListItem>
            </List>

            <Button style={{ alignSelf: 'stretch', margin: 20 }}>
              Save
            </Button>
        </Content>
      </Container>
    )
  }
}
