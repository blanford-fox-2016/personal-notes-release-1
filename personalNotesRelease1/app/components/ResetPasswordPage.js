import React, { Component } from 'react';
import {Container,Title ,Header, Content, InputGroup, Input, Icon, Button} from 'native-base'

export default class Register extends Component {


    gotoLogin() {
        this.props.navigator.pop();
    }

    gotoSuccessPage() {
        this.props.navigator.push({id:'SuccessPage'})
    }

    render() {
        const {navigator} = this.props.navigator
        return (

            <Container>

                <Header>
                    <Button
                        onPress={this.gotoLogin.bind(this)}
                        transparent>
                        Back
                    </Button>

                    <Title>Reset Password</Title>

                </Header>

                <Content>
                    <InputGroup borderType='rounded' >
                        <Icon name='ios-person' style={{color:'#2ecc71'}}/>
                        <Input placeholder='Type your username here'/>
                    </InputGroup>

                    <Button
                        onPress={this.gotoSuccessPage.bind(this)}
                        success
                        style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
                        Reset Password
                    </Button>
                </Content>
            </Container>
        );
    }
}

