/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import HelloWorld from './app/components/HelloWorld'
import ScreenForm from './app/components/ScreenForm'
import WelcomePage from './app/components/WelcomePage'
import NoteListPage from './app/components/NoteListPage'
import AddNotePage from './app/components/AddNotePage'
import seeder_data from './app/data/seeder_data'
import LoginPage from './app/components/LoginPage'
import RegisterPage from './app/components/RegisterPage'

export default class ReactTestKen extends Component {
  constructor(props){
    super(props)
    this.data = seeder_data.reverse()
  }
  render() {
    return (
      <Navigator
        initialRoute={{id: 'WelcomePage', name: 'Index'}}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight;
        }}
      />
    );
  }
  renderScene(route, navigator) {
    var routeId = route.id;
    switch (routeId) {
      case 'WelcomePage':
        return (
          <WelcomePage
            navigator={navigator} />
        )
        break;
      case 'NoteListPage':
        return (
          <NoteListPage
            data={this.data} navigator={navigator} />
        )
        break
      case 'AddNotePage':
        return(
          <AddNotePage
            navigator={navigator} />
        )
        break
      case 'LoginPage':
        return(
          <LoginPage
            navigator={navigator} />
        )
        break
      case 'RegisterPage':
        return(
          <RegisterPage
            navigator={navigator} />
        )
        break
      default:
        break
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5dc',
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
  big_red:{
    color: "red",
    fontWeight: 'bold',
    fontSize: 42
  }
});

AppRegistry.registerComponent('ReactTestKen', () => ReactTestKen);

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   Navigator,
//   TouchableOpacity
// } from 'react-native';
// import LoginPage from './app/components/LoginPage'
// import MainPage from './app/components/MainPage'
// import NoNavigatorPage from './app/components/NoNavigatorPage'
// import PersonPage from './app/components/PersonPage'
// import SplashPage from './app/components/SplashPage'
//
// export default class ReactTestKen extends Component {
//   render() {
//     return (
//       <Navigator
//           initialRoute={{id: 'SplashPage', name: 'Index'}}
//           renderScene={this.renderScene.bind(this)}
//           configureScene={(route) => {
//             if (route.sceneConfig) {
//               return route.sceneConfig;
//             }
//             return Navigator.SceneConfigs.FloatFromRight;
//           }} />
//     );
//   }
//   renderScene(route, navigator) {
//     var routeId = route.id;
//     if (routeId === 'SplashPage') {
//       return (
//         <SplashPage
//           navigator={navigator} />
//       );
//     }
//     if (routeId === 'LoginPage') {
//       return (
//         <LoginPage
//           navigator={navigator} />
//       );
//     }
//     if (routeId === 'MainPage') {
//       return (
//         <MainPage
//             navigator={navigator} />
//       );
//     }
//     if (routeId === 'PersonPage') {
//       return (
//         <PersonPage
//           navigator={navigator} />
//       );
//     }
//     if (routeId === 'NoNavigatorPage') {
//       return (
//         <NoNavigatorPage
//             navigator={navigator} />
//       );
//     }
//     return this.noRoute(navigator);
//
//   }
//   noRoute(navigator) {
//     return (
//       <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
//         <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
//             onPress={() => navigator.pop()}>
//           <Text style={{color: 'red', fontWeight: 'bold'}}>Back To Home</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
//
// AppRegistry.registerComponent('ReactTestKen', () => ReactTestKen);
