import React, { Component } from 'react'
import { Text, View, Image, TextInput } from 'react-native'

export default class HellowWorld extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: ''
    }
  }
  render(){
    console.log(`Hello World has been reloaded`);
    let nodes = this.props.data.map(data => {
      return(
        <Text key={data}>{data}</Text>
      )
    })

    let src = {
      uri: 'https://www.otomaniac.com/wp-content/uploads/2015/12/Harga-Mobil-Murah-Honda.jpg'
    }

    return(
      <View>
        <Text style={[this.props.style.welcome, this.props.style.big_red]}> Hello World </Text>

        <TextInput
          style={{height: 40, backgroundColor: 'aqua', borderColor: 'grey'}}
          placeholder="Type here"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text}
          {this.state.text.split(' ').map((word) => word && ' ').join(' ')}
        </Text>

        <View style={{alignItems: 'center'}}>
          {nodes}
        </View>

        <Image source={src} style={{width: 200, height: 200, justifyContent: 'center'}} />

        <View style={{flex: 1, flexDirection: 'row-reverse', paddingTop: 10, paddingBottom: 55}}>
          <View style={{width:50, height:50, backgroundColor: "red"}}></View>
          <View style={{width:50, height:50, backgroundColor: "yellow"}}></View>
          <View style={{width:50, height:50, backgroundColor: "green"}}></View>
        </View>
        <View>
          <View style={{width:50, height:50, backgroundColor: "red"}}></View>
          <View style={{width:100, height:100, backgroundColor: "yellow"}}></View>
          <View style={{width:150, height:150, backgroundColor: "green"}}></View>
        </View>
      </View>
    )
  }
}
