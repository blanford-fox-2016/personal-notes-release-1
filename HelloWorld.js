import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'

// export default HelloWorld = (props) => {
//   const person = props.data.map(datum => <Text> hello {datum} </Text>)
//   return person
// }

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props)
    this.state = {text: ''}
  }

  render() {
    // let nodes = this.props.data.map(item => {
    //   return(
    //       <Text key={item}> {item} </Text>
    //   )
    // })
    // let image = {
    //     uri : 'https://facebook.github.io/react/img/logo_og.png'
    // }
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
