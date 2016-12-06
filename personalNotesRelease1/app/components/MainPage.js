import React, { Component, PropTypes } from 'react';
import { Container, Content, Tabs } from 'native-base';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as AppActions from '../actions'
import { AsyncStorage } from 'react-native';
import NotesPage from './NotesPage';
import decode from 'jwt-decode'


class MainPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataUser: {},
            messages: []
        }
    }

    componentWillMount() {
        this._loadInitialState().done();
    }

    _loadInitialState = async () => {
        try {
            var value = await AsyncStorage.getItem("myKey");
            if (value !== null){
                console.log("vallue: ", value)
                this.setState({dataUser: decode(value)});
                this._appendMessage('Recovered selection from disk: ' + value);
            } else {
                console.log("else")
                this._appendMessage('Initialized with no selection on disk.');
            }
        } catch (error) {
            console.log("catch")
            this._appendMessage('AsyncStorage error: ' + error.message);
        }
    };

    _appendMessage = (message) => {
        this.setState({messages: this.state.messages.concat(message)});
    };

    render() {
        const {actions, navigator} = this.props
        console.log("ini props: ", this.props.actions)
        return (
            <NotesPage clearData={actions.clearData} dataUser={this.state.dataUser} openDrawer={actions.openDrawer} onCreateNote={actions.createNote} navigator={navigator}/>
        );
    }
}


MainPage.propTypes = {
    actions: PropTypes.object.isRequired
}


function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(AppActions, dispatch)}
}

export default connect(
    null,
    mapDispatchToProps
)(MainPage)
