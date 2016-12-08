import React, { Component, PropTypes } from 'react';
import { Container, Content, Tabs, View, Text } from 'native-base';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as AppActions from '../actions'

import ShareNote from './ShareNote';

class ShareNotePage extends Component {

    render() {
        const {actions, navigator, route} = this.props
        // console.log("props route: ", route)
        return (
            <ShareNote deleteNote={actions.deleteNote} onUpdateNote={actions.updateNote} navigator={navigator} route={route}/>
        );
    }
}

ShareNotePage.propTypes = {
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
)(ShareNotePage)
