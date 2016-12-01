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