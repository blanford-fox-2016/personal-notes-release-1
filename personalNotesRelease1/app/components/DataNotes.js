import React, { Component } from 'react';

import {Content, Card, CardItem, Text } from 'native-base';

export default class ListNote extends Component {

    gotoDetailNote() {
        this.props.navigator.push({
            id: 'DetailNotePage',
            TempNoteId: this.props.notesReducers.TempNoteId,
            title: this.props.notesReducers.title,
            content: this.props.notesReducers.content,
            token: this.props.token
        });
        // console.log("masuk detail", this.props.navigator)
    }

    render() {
        const {notesReducers, actions, navigator, token} = this.props
        console.log("props di data notes: ", this.props)
        return(
            <Card
                style={{flex: 0}}>
                <CardItem
                    onPress={this.gotoDetailNote.bind(this)}
                >
                    <Text>{notesReducers.title}</Text>
                    <Text note>{notesReducers.updatedAt}</Text>
                </CardItem>

                <CardItem
                    onPress={this.gotoDetailNote.bind(this)}
                    cardBody>
                    <Text>
                        {notesReducers.content}
                    </Text>
                </CardItem>
            </Card>
        )
    }

}