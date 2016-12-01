'use strict'
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Navigator,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native'

import BtnCustom from 'react-native-button'

export default class DataNote extends Component {
  constructor(props){
    super(props)
  }

  render(){
    let note = this.props.note

    return(
      <View style={{
        flex: 1,
        alignItems: 'center',
        // backgroundColor: '#f5f5dc', justifyContent: 'center',
        // width: 350,
        height: 75,
        borderWidth: 1,
        alignSelf: 'stretch',
        borderColor: 'grey'}}>
        <Text style={{
          paddingTop: 15,
          fontWeight: "bold"
        }}>
          {note.title}
        </Text>
        <Text>
          {note.content}
        </Text>
      </View>
    )
  }
}
