import React, { Component } from 'react';

import { Container, Content} from 'native-base';

import DataNotes from './DataNotes'

export default class ListNote extends Component {

    render() {

        const notes = [
            {
                title: 'note 1',
                content: 'content 1',
                createdAt: '12:12 12/12/2012'
            },
            {
                title: 'note 2',
                content: 'content 2',
                createdAt: '12:12 12/12/2012'
            }
        ]

        let ListNoteNodes = notes.map(function (item) {
            console.log("ini item: ", item)
            return(
                <DataNotes key={item.title} data={item} />
            )
        })

        return(
            <Container>
                <Content>
                    {ListNoteNodes}
                </Content>
            </Container>
        )
    }

}