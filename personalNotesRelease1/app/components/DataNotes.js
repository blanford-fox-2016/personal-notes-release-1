import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Navigator,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';

export default class ListNote extends Component {

    render() {


        const {data} = this.props
        return(
            <View style={{borderWidth: 1, marginBottom: 10}}>
                <Text style={{fontSize: 30, textAlign: 'center'}} >{data.title}</Text>
                <Text style={{fontSize: 20}} >{data.content}</Text>
                <Text style={{fontSize: 10}} >{data.createdAt}</Text>
            </View>
        )
    }

}