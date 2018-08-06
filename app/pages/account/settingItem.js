/**
 * Created by shaotingzhou on 2017/5/8.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
export default class SettingItem extends Component {
    render() {
        return (
            <TouchableOpacity  onPress={this.props.onPress}>
                <View style={styles.item}>
                    <Text style={{marginLeft: 10}}>{this.props.txt1}</Text>
                    <Image source={require('../../images/account/right-arrow.png')} style={styles.rightIcon} />
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        flexDirection:'row',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1,
        backgroundColor: 'white'
    },
    rightIcon: {
        width: 10,
        height: 10,
        position: 'absolute',
        right: 20
    }
});