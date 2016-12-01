import React, {Component, PropTypes} from 'react'
import {
    View
} from 'react-native';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import LaunchScreen from '../components/SplashPage'

class Notes extends Component {
    componentDidMount() {
        this.props.actions.loadNotes()
    }

    render() {
        return(
            <View>
                <LaunchScreen/>
            </View>
        )
    }
}

Notes.propTypes = {
    notesReducers: PropTypes.array.isRequired
}

function mapStateToProps(state) {
    return {
        notesReducers: state.notesReducers,
        // commentReducers: state.commentReducers
    }
}

function mapDispatchToProps(dispatch) {
    // return {actions: bindActionCreators(AppActions, dispatch)}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Notes)