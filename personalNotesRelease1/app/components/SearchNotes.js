import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Navigator,
    TouchableHighlight,
    TouchableOpacity,
    ScrollView,
    AppRegistry,
    TextInput
} from 'react-native';

import ListNote from './ListNote'

export default class Notes extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search: ''
        }
    }

    render() {
        return (
            <Navigator
                renderScene={this.renderScene.bind(this)}
                navigationBar={
                    <Navigator.NavigationBar
                        style={{backgroundColor: '#246dd5', alignItems: 'center'}}
                        routeMapper={NavigationBarRouteMapper} />
                } />
        );
    }
    renderScene(route, navigator) {
        return (
            <View>
                <View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Search Note"
                        onChangeText={(search) => this.setState({search})}
                    />

                </View>
                <View>
                    <ScrollView>
                        <ListNote />
                    </ScrollView>
                </View>
            </View>
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
                <Text>Search Notes</Text>
            </View>
        )
    }
};

const styles = StyleSheet.create({

    textInput: {
        backgroundColor: 'white',
        height: 30,
        width: 300,
        marginTop: 70
    }
});