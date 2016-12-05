import React, { Component, PropTypes } from 'react';
import { Container, Content, Tabs } from 'native-base';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as AppActions from '../actions'

import Register from './Register';
import Login from './Login';

class Auth extends Component {

    render() {
        const {actions, navigator} = this.props
        return (
            <Container>
                <Content>
                    <Tabs>
                        <Login onLoginUser={actions.loginUser} tabLabel='Login' navigator={navigator} />
                        <Register onRegisterUser={actions.registerUser} tabLabel='Register' navigator={navigator} />
                    </Tabs>
                </Content>
            </Container>
        );
    }
}

Auth.propTypes = {
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
)(Auth)
