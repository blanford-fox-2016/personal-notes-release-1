import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight
} from 'react-native'

var api = require('../Utils/api')
var Profile = require('./Profile')
var Repositories = require('./Repositories')
var Notes = require('./Notes')

var styles = StyleSheet.create({
	container: {
		marginTop: 65,
		flex: 1
	},
	image: {
		height: 350
	},
	buttonText: {
		fontSize: 24,
		color: 'white',
		alignSelf: 'center'
	}
})

class Dashboard extends Component{
	constructor(props) {
		super(props);
	}
	makeBackground(btn){
		var obj = {
			flexDirection: 'row',
			alignSelf: 'stretch',
			justifyContent: 'center',
			flex: 1
		}
		if(btn === 0){
			obj.backgroundColor = '#F5B627'
		} else if (btn === 1){
			obj.backgroundColor = '#4AA33A'
		} else if (btn === 2) {
			obj.backgroundColor = '#257DF3'
		} else {
			obj.backgroundColor = '#E1294E'
		}

		return obj
	}
	goToProfile(){
		this.props.navigator.push({
			title: "User Profile",
			component: Profile,
			passProps: {
				userInfo: this.props.userInfo
			}
		})
	}
	goToRepos(){
		this.props.actions.getRepos(this.props.userInfo, this.props.navigator, Repositories)
	}
	goToNotes(){
		api.getNotes(this.props.userInfo.login)
		.then((res) => {
			res = res || {}
			this.props.navigator.push({
				component: Notes,
				title: 'Notes',
				passProps: {
					notes: res,
					userInfo: this.props.userInfo
				}
			})
		})
	}
	render(){
		return(
			<View style={styles.container}>
				<Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image} />
				<TouchableHighlight 
					style={this.makeBackground(0)}
					onPress={this.goToProfile.bind(this)}
					underlayColor='#88D4F5'>
					<Text style={styles.buttonText}>View Profile</Text>
				</TouchableHighlight>
				<TouchableHighlight 
					style={this.makeBackground(1)}
					onPress={this.goToRepos.bind(this)}
					underlayColor='#88D4F5'>
					<Text style={styles.buttonText}>View Repos</Text>
				</TouchableHighlight>
				<TouchableHighlight 
					style={this.makeBackground(2)}
					onPress={this.goToNotes.bind(this)}
					underlayColor='#88D4F5'>
					<Text style={styles.buttonText}>View Notes</Text>
				</TouchableHighlight>
				<TouchableHighlight 
					style={this.makeBackground(3)}
					onPress={this.goToNotes.bind(this)}
					underlayColor='#88D4F5'>
					<Text style={styles.buttonText}>Logout</Text>
				</TouchableHighlight>
			</View>
			)
	}
}

module.exports = Dashboard