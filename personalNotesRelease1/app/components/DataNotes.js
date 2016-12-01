import React, { Component } from 'react';

import {Content, Card, CardItem, Text } from 'native-base';

export default class ListNote extends Component {

    render() {


        const {notesReducers} = this.props
        return(
            <Card style={{flex: 0}}>
                <CardItem>
                    <Text>{notesReducers.title}</Text>
                    <Text note>{notesReducers.updatedAt}</Text>
                </CardItem>

                <CardItem cardBody>
                    <Text>
                        {notesReducers.content}
                    </Text>
                </CardItem>
            </Card>
        )
    }

}