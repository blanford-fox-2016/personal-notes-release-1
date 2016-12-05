
import React, { Component } from 'react';
import {StyleSheet} from 'react-native'
import { connect } from 'react-redux';
import { Content, Text, List, ListItem } from 'native-base';


class SideBar extends Component {

    render() {
        return (
            <Content style={styles.sidebar} >
                <List>
                    <ListItem >
                        <Text>Home</Text>
                    </ListItem>
                    <ListItem >
                        <Text>Blank Page</Text>
                    </ListItem>
                </List>
            </Content>
        );
    }
}

const styles = StyleSheet.create({
    sidebar: {
        flex: 1,
        padding: 10,
        paddingRight: 0,
        paddingTop: 30,
        backgroundColor: '#fff',
    },
});

export default SideBar;