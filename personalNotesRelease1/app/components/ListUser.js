import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {AsyncStorage} from 'react-native'
import {connect} from 'react-redux'
import * as AppActions from '../actions'
import { Container, Content, Picker} from 'native-base';

const Item = Picker.Item

import DataUsers from './DataUsers'

class ListUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            NoteId: this.props.route.NoteId,
            TempNoteId: this.props.route.TempNoteId,
            token: this.props.route.token,
            selectedItem: undefined,
            toUser: 'select',
            results: {
                items: []
            }
        }
    }

    onValueChange (value) {
        this.setState({
            toUser : value
        });
    }

    componentWillMount() {
        this._loadInitialState().done();
        // this.props.actions.getNotes()
    }


    _loadInitialState = async () => {
        try {
            var value = await AsyncStorage.getItem("myKey");
            if (value !== null){
                console.log("vallue: ", value)
                this.setState({token: value});
                this.props.actions.getUsers(value)
            } else {
                console.log("else")
            }
        } catch (error) {
            console.log("catch")

        }
    };

    render() {
        const {actions, navigator, token, usersReducers} = this.props
        console.log("ini props di list user: ", this.props)
        console.log("ini user di list user: ", usersReducers)

        let ListUserNodes = usersReducers.map(function (item) {
            return(
                <DataUsers usersReducers={item}/>
            )
        })

        console.log("list user node: ", ListUserNodes)

        return(
        <Picker
            iosHeader="Select one"
            mode="dropdown"
            selectedValue={this.state.toUser}
            onValueChange={this.onValueChange.bind(this)}>
            <Item label="Select User" value="select" />
            <Item label="Dogs" value="lala" />
            {ListUserNodes}
        </Picker>
        )
    }

}

ListUser.propTypes = {
    usersReducers: PropTypes.array.usersReducers,
}

function mapStateToProps(state) {
    return {
        usersReducers: state.usersReducers,
    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(AppActions, dispatch)}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListUser)