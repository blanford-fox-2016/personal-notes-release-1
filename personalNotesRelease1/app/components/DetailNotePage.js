import React, { Component, PropTypes } from 'react';
import { Container, Content, Tabs } from 'native-base';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as AppActions from '../actions'

import DetailNote from './DetailNote';

class DetailNotePage extends Component {

    render() {
        const {actions, navigator, route} = this.props
        return (
            <DetailNote deleteNote={actions.deleteNote} onUpdateNote={actions.updateNote} navigator={navigator} route={route} />
        );
    }
}

DetailNotePage.propTypes = {
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
)(DetailNotePage)
