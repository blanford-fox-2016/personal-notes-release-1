import React, { Component } from 'react'
import {
    ActivityIndicatorIOS,
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight
} from 'react-native'
import {
  Spinner
} from 'native-base';

var Dashboard = require('./Dashboard')
var api = require('../Utils/api')

var styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      padding: 30,
      marginTop: 65,
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#48BBEC'
    },
    title: {
      marginBottom: 20,
      fontSize: 25,
      textAlign: 'center',
      color: '#fff'
    },
    searchInput: {
      height: 50,
      padding: 4,
      fontSize: 23,
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 0,
      color: 'white'
    },
    buttonText: {
      fontSize: 18,
      color: '#111',
      alignSelf: 'center'
    },
    button: {
      height: 45,
      flexDirection: 'row',
      backgroundColor: 'white',
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 0,
      marginBottom: 10,
      marginTop: 10,
      alignSelf: 'stretch',
      justifyContent: 'center'
    }

})

class Main extends Component {
    constructor(props) {
      super(props)
      this.state = {
        username: '',
        error: false,
        isLoading: false
      }
    }
    handleChange(e){
      this.setState({
        username: e.nativeEvent.text
      })
    }
    handleSubmit(){
      this.setState({
        isLoading: true
      })
      api.getBio(this.state.username)
        .then((res) => {
          if(res.message === 'Not Found'){
            this.setState({
              error: 'User not found',
              isLoading: false
            })
          } else {
            this.props.navigator.push({
              title: res.name || "Select an Option",
              component: Dashboard,
              passProps: {
                userInfo: res
              }
            })
            this.setState({
              isLoading: false,
              error: false,
              username: ''
            })
          }
        })
    }
    render() {
        var showErr = (
          this.state.error ? <Text>{this.state.error}</Text> : <View></View>
          )
        var showLoading = (
          this.state.isLoading ? <Spinner inverse /> : <View></View>
          )
        return (
          <View style={styles.mainContainer}>
            <Text style={styles.title}>Search Github User</Text>
            <TextInput style={styles.searchInput} value={this.state.username} onChange={this.handleChange.bind(this)} />
            <TouchableHighlight
              style={styles.button}
              onPress={this.handleSubmit.bind(this)}
              underlayColor='white'>
              <Text style={styles.buttonText}>SEARCH</Text>
            </TouchableHighlight>
            {showErr}{showLoading}
          </View>
        )
    }
}

module.exports = Main
