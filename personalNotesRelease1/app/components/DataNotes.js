import React, { Component } from 'react';

import {Content, Card, CardItem, Text } from 'native-base';

export default class ListNote extends Component {

    render() {


        const {notesReducers} = this.props
        return(
            <Card>
                <CardItem header>
                    <Text>{notesReducers.title}</Text>
                </CardItem>

                <CardItem>
                    <Text>
                        {notesReducers.content}
                    </Text>
                </CardItem>

                <CardItem footer>
                    <Text>
                        {notesReducers.updatedAt}
                    </Text>
                </CardItem>
            </Card>
        )
    }

}