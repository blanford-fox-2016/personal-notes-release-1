import React, { Component } from 'react';
import {AppRegistry} from 'react-native'

import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, Card, CardItem, Text } from 'native-base';

import ListNote from './ListNote'

export default class Notes extends Component {

    // componentWillMount() {
    //     this.props.navigator.navigationBar = this.navBar()
    // }

    render() {
        return (
            <Container>
                <Header>
                    <Button transparent>
                        <Icon name='ios-menu' />
                    </Button>

                    <Title>Notes</Title>

                    <Button transparent>
                        Create Note
                    </Button>
                </Header>

                <Content>
                    <ListNote />
                </Content>

            </Container>
        );
    }

    renderScene(route, navigator) {
        // return (
        //     <ScrollView style={{marginTop: 70}}>
        //         <ListNote />
        //     </ScrollView>
        // );
    }

    gotoNext() {
        this.props.navigator.push({
            id: 'PersonPage',
            name: 'home',
        });
    }
}

AppRegistry.registerComponent(
    'Notes',
    () => Notes);

var NavigationBarRouteMapper = {
    LeftButton(route, navigator, index, navState) {
        return (
            <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
                              onPress={() => navigator.parentNavigator.push({id: 'Profile', name:'Profile'})}>
                <Text style={{color: 'white', margin: 10,}}>
                    Profile
                </Text>
            </TouchableOpacity>
        );
    },
    RightButton(route, navigator, index, navState) {

        return (
            <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
                              onPress={() => navigator.parentNavigator.push({id: 'CreateNote', name:'CreateNote'})}>
                <Text style={{color: 'white', margin: 10,}}>
                    Create Note
                </Text>
            </TouchableOpacity>
        );
    },
    Title(route, navigator, index, navState) {
        return (
            <View>
                <Text>Notes</Text>
            </View>
        );
    }
};