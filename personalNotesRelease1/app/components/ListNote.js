import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as AppActions from '../actions'
import { Container, Content} from 'native-base';

import DataNotes from './DataNotes'

class ListNote extends Component {

    componentDidMount() {
        this.props.actions.getNotes()
    }

    render() {
        const {notesReducers, actions} = this.props
        // const notes = [
        //     {
        //         title: 'note 1',
        //         content: 'content 1',
        //         createdAt: '12:12 12/12/2012'
        //     },
        //     {
        //         title: 'note 2',
        //         content: 'content 2',
        //         createdAt: '12:12 12/12/2012'
        //     }
        // ]

        let ListNoteNodes = notesReducers.map(function (item) {
            console.log("ini item: ", item)
            return(
                <DataNotes key={item.id} notesReducers={item} {...actions}/>
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

ListNote.propTypes = {
    notesReducers: PropTypes.array.isRequired
}

function mapStateToProps(state) {
    return {
        notesReducers: state.notesReducers
    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(AppActions, dispatch)}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListNote)