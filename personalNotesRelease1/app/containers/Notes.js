import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Navigator,
    TouchableHighlight,
    TouchableOpacity,
    ScrollView,
    AppRegistry
} from 'react-native';

import ListNote from './ListNote'

export default class Notes extends Component {

    render() {
        return (
            <Navigator
                renderScene={this.renderScene.bind(this)}
                navigationBar={
                    <Navigator.NavigationBar style={{backgroundColor: '#246dd5', alignItems: 'center'}}
                                             routeMapper={NavigationBarRouteMapper} />
                } />
        );
    }
    renderScene(route, navigator) {
        return (
            <ScrollView style={{marginTop: 70}}>
                <ListNote />
            </ScrollView>
        );
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
        return null;
    },
    RightButton(route, navigator, index, navState) {
        return null;
    },
    Title(route, navigator, index, navState) {
        return (
            <View>
                <Text>Notes</Text>
            </View>
        )
    }
};