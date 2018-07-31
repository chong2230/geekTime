/**
 * Created by shaotingzhou on 2017/5/2.
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
export default class AccountItem extends Component {
    render() {
        return (
            <TouchableOpacity  onPress={this.props.onPress}>
                <View style={{flexDirection:'row',alignItems:'center',marginTop:5,marginBottom:5,marginLeft:5}}>
                    <Image source={this.props.source} style={{width:30,height:30}} />
                    <Text>{this.props.txt1}</Text>
                    <Text style={{fontSize:11,color:'#CCCCCC'}}>{this.props.txt2}</Text>
                    <Text style={{fontSize:11,color:'#CCCCCC',position:'absolute',right:15}}>{this.props.count}</Text>
                    <Image source={require('../../images/account/大于号.png')} style={{width:10,height:10,position:'absolute',right:5}} />
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width:80,
        height:80,
        justifyContent:'center',
        alignItems:'center'
    }
});

