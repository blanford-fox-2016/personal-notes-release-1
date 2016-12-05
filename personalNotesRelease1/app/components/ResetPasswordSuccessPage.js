import React, { Component } from 'react';
import {View, } from 'react-native';
import {Container,Title, Text,Header, Content, InputGroup, Input, Icon, Button} from 'native-base'

export default class ResetPasswordSuccessPage extends Component {


    gotoLogin() {
        this.props.navigator.replace({id: 'Auth'});
    }

    render() {
        const {navigator} = this.props.navigator
        return (

            <Container>

                <Header>

                </Header>

                <Content>
                    <Text
                        style={{paddingTop:50, textAlign: 'center'}}>
                        Password has been reset
                    </Text>
                    <Button
                        onPress={this.gotoLogin.bind(this)}
                        success
                        style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}
                    >
                        Back
                    </Button>
                </Content>
            </Container>
        );
    }
}

