import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
​
export default class AnatomyExample extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Title>Header</Title>
                </Header>

                <Content>
                    // Your main content goes here
                </Content>

                <Footer>
                    <FooterTab>
                        <Button transparent>
                            
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
