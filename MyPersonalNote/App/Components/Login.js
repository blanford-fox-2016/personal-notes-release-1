import React, { Component } from 'react'
import {
    ActivityIndicatorIOS,
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight
} from 'react-native'

var SignUp = require('./SignUp')
var Main = require('./Main')

var styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      padding: 30,
      marginTop: 65,
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#5321AD'
    },
    title: {
      marginBottom: 20,
      fontSize: 25,
      textAlign: 'center',
      color: '#fff'
    },
    or: {
      marginTop: 5,
      marginBottom: 5,
      fontSize: 15,
      textAlign: 'center',
      color: 'white'
    },
    formInput: {
      height: 50,
      padding: 10,
      marginTop: 5,
      fontSize: 23,
      opacity: 0.3,
      color: 'black',
      backgroundColor: 'white',
      borderRadius: 0
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
      marginBottom: 0,
      marginTop: 5,
      alignSelf: 'stretch',
      justifyContent: 'center'
    }

})

class Login extends Component {
    constructor(props) {
      super(props)
      this.state = {
        username: '',
        password: '',
        error: false
      }
    }
    handleChangeUsername(e){
      this.setState({
        username: e.nativeEvent.text
      })
    }
    handleChangePassword(e){
      this.setState({
        password: e.nativeEvent.text
      })
    }
    handleSubmit(){
      if(this.state.username == '' && this.state.password == ''){
        this.setState({
          error: 'Username and password cannot be empty'
        })
      } else if (this.state.username == ''){
        this.setState({
          error: 'Username cannot be empty'
        })
      } else if (this.state.password == ''){
        this.setState({
          error: 'Password cannot be empty'
        })
      } else {
        this.props.navigator.push({
          title: "Github Notetaker",
          component: Main
        })
        this.setState({
          username: '',
          password: '',
          error: false
        })
      }
    }
    handleSignUp(){
      this.props.navigator.push({
        title: "Sign Up",
        component: SignUp
      })
    }
    render() {
      var showErr = (
        this.state.error ? <Text>{this.state.error}</Text> : <View></View>
        )
        return (
          <View style={styles.mainContainer}>
            <Text style={styles.title}>Login</Text>
            <TextInput style={styles.formInput} value={this.state.username} onChange={this.handleChangeUsername.bind(this)} placeholder="Enter username"/>
            <TextInput secureTextEntry={true} style={styles.formInput} value={this.state.password} onChange={this.handleChangePassword.bind(this)} placeholder="Enter password"/>
            {showErr}
            <TouchableHighlight
              style={styles.button}
              onPress={this.handleSubmit.bind(this)}
              underlayColor='white'>
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableHighlight>
            <Text style={styles.or}>or</Text>
            <TouchableHighlight
              style={styles.button}
              onPress={this.handleSignUp.bind(this)}
              underlayColor='white'>
              <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableHighlight>
          </View>
        )
    }
}

module.exports = Login
