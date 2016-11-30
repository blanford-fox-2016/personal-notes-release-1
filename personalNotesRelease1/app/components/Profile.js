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
    TextInput,
    Button,
    Image
} from 'react-native';

import ListNote from './ListNote'

export default class Notes extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            birthDate: ''
        }
    }

    render() {
        return (
            <Navigator
                renderScene={this.renderScene.bind(this)}
                navigator={this.props.navigator}
                navigationBar={
                    <Navigator.NavigationBar
                        style={{backgroundColor: '#246dd5', alignItems: 'center'}}
                        routeMapper={NavigationBarRouteMapper} />
                } />
        );
    }
    renderScene(route, navigator) {
        console.log(this.state.searchStatus)
        return (
            <View style={{marginTop: 70, alignItems: 'center'}}>
                <Text>First Name</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="First Name"
                    onChangeText={(firstName) => this.setState({firstName})}
                />

                <Text>Last Name</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Last Name"
                    onChangeText={(lastName) => this.setState({lastName})}
                />

                <Text>Birth Date</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Last Name"
                    onChangeText={(birthDate) => this.setState({birthDate})}
                />

                <Image source={{uri: 'https://cdn.pixabay.com/photo/2016/10/31/18/25/yogurt-1786329__340.jpg'}} style={{width: 100, height: 100}} />


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
        return (
            <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
                              onPress={() => navigator.parentNavigator.pop()}>
                <Text style={{color: 'white', margin: 10,}}>
                    Back
                </Text>
            </TouchableOpacity>
        );
    },
    RightButton(route, navigator, index, navState) {
        return (
            <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
                              onPress={() => navigator.parentNavigator.pop()}>
                <Text style={{color: 'white', margin: 10,}}>
                    Save
                </Text>
            </TouchableOpacity>
        );
    },
    Title(route, navigator, index, navState) {
        return (
            <View>
                <Text>Profile</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({

    textInput: {
        backgroundColor: 'white',
        height: 30,
        width: 300,
        marginBottom: 20,
        borderWidth: 1,
        alignSelf: 'center'
    },
    textInputContent: {
        backgroundColor: 'white',
        height: 30,
        width: 300,
        marginBottom: 20,
        height: 100,
        borderWidth: 1,
        alignSelf: 'center'
    },
    button: {
        backgroundColor: 'green',
        width: 300,
        borderRadius: 10,
        marginTop: 20
    }
});