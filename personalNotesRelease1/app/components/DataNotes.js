import React, { Component } from 'react';

import {Content, Card, CardItem, Text } from 'native-base';

export default class ListNote extends Component {

    render() {


        const {data} = this.props
        return(
            <Card>
                <CardItem header>
                    <Text>{data.title}</Text>
                </CardItem>

                <CardItem>
                    <Text>
                        {data.content}
                    </Text>
                </CardItem>

                <CardItem footer>
                    <Text>
                        {data.createdAt}
                    </Text>
                </CardItem>
            </Card>
        )
    }

}