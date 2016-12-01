import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  TextInput,
  Button
} from 'react-native'

export default class ScreenForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      content: ''
    }
    this.onChangeTitle = this.onChangeTitle.bind(this)
    this.onChangeContent = this.onChangeContent.bind(this)
  }

  onChangeTitle(title){
    this.setState({title})
  }

  onChangeContent(content){
    this.setState({content})
  }

  onAddPress(){
    let title = this.state.title.trim()
    let content = this.state.content.trim()

  }

  render(){
    return(
      <View>
        <Text style={{
          marginBottom: 30,
          textAlign: 'center'
        }}>
          Add New Note
          {this.state.title}
        </Text>

        <TextInput
          style={{
            height: 40,
            width: 300,
            backgroundColor: 'cornsilk',
            borderColor: 'olive',
            borderWidth: 1
          }}
          placeholder="Add Title"
          onChangeText={this.onChangeTitle}
        />

        <TextInput
          style={{
            height: 100,
            width: 300,
            backgroundColor: 'cornsilk',
            borderColor: 'olive',
            borderWidth: 1,
            paddingTop: 5,
            marginTop: 20
          }}
          placeholder="Add Note's Content"
          onChangeText={this.onChangeContent}
        />

        <Button
          onPress={this.onAddPress}
          title="Add"
          color="#841584"
          accessibilityLabel="Add"
        />
        <Button
          onPress={this.onCancelPress}
          title="Cancel"
          color="#841584"
          accessibilityLabel="Cancel"
        />
      </View>
    )
  }
}
