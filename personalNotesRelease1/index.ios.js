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
    TouchableOpacity,
    AsyncStorage
} from 'react-native';
import decode from 'jwt-decode'

import {Drawer} from 'native-base'

import SplashPage from './app/components/SplashPage'
import Auth from './app/components/Auth'
import Register from './app/components/Register'
import MainPage from './app/components/MainPage'
import Profile from './app/components/Profile'
import ResetPassword from './app/components/ResetPasswordPage'
import SuccessPage from './app/components/ResetPasswordSuccessPage'
import DetailNotePage from './app/components/DetailNotePage'
import SideBar from './app/components/SideBar'

import configureStore from './app/store'
const store = configureStore()


export default class personalNotesRelease1 extends Component {

    componentDidUpdate() {
        // console.log("masuk did update")
        if (this.props.drawerState === 'opened') {
            this.openDrawer();
        }

        if (this.props.drawerState === 'closed') {
            this._drawer.close();
        }
    }

    openDrawer() {
        this._drawer.open();
    }

    closeDrawer() {
        if (this.props.drawerState === 'opened') {
            this.props.closeDrawer();
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            dataUser: {},
            messages: []
        }
    }

    componentDidMount() {
        this._loadInitialState().done();
    }

    _loadInitialState = async () => {
        try {
            var value = await AsyncStorage.getItem("myKey");
            if (value !== null){
                console.log("vallue: ", value)
                this.setState({dataUser: decode(value)});
                this._appendMessage('Recovered selection from disk: ' + value);
            } else {
                console.log("else")
                this._appendMessage('Initialized with no selection on disk.');
            }
        } catch (error) {
            console.log("catch")
            this._appendMessage('AsyncStorage error: ' + error.message);
        }
    };

    _appendMessage = (message) => {
        this.setState({messages: this.state.messages.concat(message)});
    };

    render() {
        return (
            <Provider store={store}>
                <Drawer
                    ref={(ref) => { this._drawer = ref; }}
                    type="overlay"
                    tweenDuration={150}
                    content={<SideBar />}
                    tapToClose
                    acceptPan={false}
                    onClose={() => this.closeDrawer()}
                    openDrawerOffset={0.2}
                    panCloseMask={0.2}
                    styles={{
                        drawer: {
                            shadowColor: '#000000',
                            shadowOpacity: 0.8,
                            shadowRadius: 3,
                        },
                    }}
                    tweenHandler={(ratio) => {  //eslint-disable-line
                        return {
                            drawer: { shadowRadius: ratio < 0.2 ? ratio * 5 * 5 : 5 },
                            main: {
                                opacity: (2 - ratio) / 2,
                            },
                        };
                    }}
                    negotiatePan
                >
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
                </Drawer>
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

            case 'Auth':
                console.log("data user di case: ", this.state.dataUser)
                if (this.state.dataUser.name) {
                    return (
                        <MainPage
                            navigator={navigator} />
                    );
                }
                else {
                    return (
                        <Auth
                            navigator={navigator} />
                    );
                }

            case 'Register':
                return (
                    <Register
                        navigator={navigator} />
                );

            case 'MainPage':
                return (
                    <MainPage
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

            case 'SuccessPage':
                return (
                    <SuccessPage
                        navigator={navigator} />
                );

            case 'DetailNotePage':
                return (
                    <DetailNotePage
                        navigator={navigator} route={route} />
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



AppRegistry.registerComponent('personalNotesRelease1', () => personalNotesRelease1);
