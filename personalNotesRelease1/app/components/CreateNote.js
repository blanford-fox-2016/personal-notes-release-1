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
    Button
} from 'react-native';

import ListNote from './ListNote'

export default class Notes extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchStatus: false,
            search: ''
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
                <TextInput
                    style={styles.textInput}
                    placeholder="Title"
                    onChangeText={(email) => this.setState({email})}
                />

                <TextInput
                    style={styles.textInputContent}
                    placeholder="Content"
                    onChangeText={(email) => this.setState({email})}
                    multiline={true}
                />

                <View style={styles.button}>
                    <Button
                        onPress={()=>{}}
                        color={'white'}
                        title="Create Note"
                        accessibilityLabel="Create Note"
                    />
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
        return null
    },
    Title(route, navigator, index, navState) {
        return (
            <View>
                <Text>Create Note</Text>
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