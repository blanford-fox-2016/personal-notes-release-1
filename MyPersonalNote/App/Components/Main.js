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
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as githubApiActions from '../actions/githubApiActions' 

var Dashboard = require('./Dashboard')

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

      this.props.actions.getBio(this.state.username, this.props.navigator, Dashboard, this.props.actions)
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

// function mapStateToProps(state){
//   return { data: state.github }
// }

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(githubApiActions, dispatch)
  }
}

module.exports = connect(
  // mapStateToProps
  null,
  mapDispatchToProps
  )(Main)