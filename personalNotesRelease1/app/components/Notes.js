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

    // componentWillMount() {
    //     this.props.navigator.navigationBar = this.navBar()
    // }

    navBar(){
        return(
        <Navigator.NavigationBar style={{backgroundColor: '#246dd5'}}
                                 routeMapper={NavigationBarRouteMapper} />
        )
    }

    render() {
        return (
            <Navigator
                renderScene={this.renderScene.bind(this)}
                navigationBar={
                    <Navigator.NavigationBar
                        style={{backgroundColor: '#246dd5', alignItems: 'center'}}
                        routeMapper={NavigationBarRouteMapper}
                    />
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