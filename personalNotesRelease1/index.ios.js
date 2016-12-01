/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Provider} from 'react-redux'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity
} from 'react-native';

import SplashPage from './app/components/SplashPage'
import Login from './app/components/Login'
import Register from './app/components/Register'
import Notes from './app/components/Notes'
import CreateNote from './app/components/CreateNote'
import Profile from './app/components/Profile'
import ResetPassword from './app/components/ResetPasswordPage'

import configureStore from './app/store'
const store = configureStore()

export default class personalNotesRelease1 extends Component {
    render() {
        return (
            <Provider store={store}>
                <Navigator
                    initialRoute={{id: 'SplashPage', name: 'Index'}}
                    renderScene={this.renderScene.bind(this)}
                    configureScene={(route) => {
                        if (route.sceneConfig) {
                            return route.sceneConfig;
                        }
                        return Navigator.SceneConfigs.FloatFromRight;
                    }}
                />
            </Provider>
        );
    }
    renderScene(route, navigator) {
        var routeId = route.id;

        switch (routeId) {
            case 'SplashPage':
                return (
                    <SplashPage
                        navigator={navigator} />
                );

            case 'Login':
                return (
                    <Login
                        navigator={navigator} />
                );

            case 'Register':
                return (
                    <Register
                        navigator={navigator} />
                );

            case 'Notes':
                return (
                    <Notes
                        navigator={navigator} />
                );

            case 'CreateNote':
                return (
                    <CreateNote
                        navigator={navigator} />
                );

            case 'Profile':
                return (
                    <Profile
                        navigator={navigator} />
                );

            case 'ResetPassword':
                return (
                    <ResetPassword
                        navigator={navigator} />
                );

            default:
            return this.noRoute(navigator);
        }

    }
    noRoute(navigator) {
        return (
            <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
              <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
                                onPress={() => navigator.pop()}>
                <Text style={{color: 'red', fontWeight: 'bold'}}>Back To Home</Text>
              </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});


AppRegistry.registerComponent('personalNotesRelease1', () => personalNotesRelease1);
