import React, { Component, PropTypes } from 'react';
import { Container, Content, Tabs } from 'native-base';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as AppActions from '../actions'

import NotesPage from './NotesPage';

class MainPage extends Component {

    render() {
        const {actions, navigator} = this.props
        return (
            <NotesPage onCreateNote={actions.createNote}/>
        );
    }
}

MainPage.propTypes = {
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(AppActions, dispatch)}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage)
